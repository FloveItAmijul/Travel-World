import { AnimatePresence, motion } from "framer-motion";
import {
  AlertCircle,
  ArrowRight,
  Check,
  Loader2,
  RefreshCcw,
  Send,
  Sparkles,
  X,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState, type FormEvent } from "react";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "";

type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  text: string;
  followUpQuestion?: string;
  suggestions?: string[];
};

type AIChatModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

type SelectedOptions = {
  destination: string;
  tripType: string;
  duration: string;
  budget: string;
  mood: string;
};

type OptionKey = keyof SelectedOptions;

type OptionGroup = {
  key: OptionKey;
  title: string;
  subtitle: string;
  options: string[];
};

const initialOptions: SelectedOptions = {
  destination: "",
  tripType: "",
  duration: "",
  budget: "",
  mood: "",
};

const optionGroups: OptionGroup[] = [
  {
    key: "destination",
    title: "Where do you want to go?",
    subtitle: "Choose a destination.",
    options: ["Goa", "Kashmir", "Andaman", "Dubai", "Bali", "Thailand"],
  },
  {
    key: "tripType",
    title: "Who is traveling?",
    subtitle: "Pick your travel style.",
    options: ["Couple", "Family", "Friends", "Solo", "Honeymoon"],
  },
  {
    key: "duration",
    title: "How long is the trip?",
    subtitle: "Choose duration.",
    options: ["3 Days", "5 Days", "7 Days", "10 Days"],
  },
  {
    key: "budget",
    title: "Choose your budget",
    subtitle: "Select comfort level.",
    options: ["Budget", "Standard", "Premium", "Luxury"],
  },
  {
    key: "mood",
    title: "Choose your mood",
    subtitle: "Select experience type.",
    options: ["Relaxing", "Adventure", "Romantic", "Food", "Nature"],
  },
];

function createMessageId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

export function AIChatModal({ isOpen, onClose }: AIChatModalProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "assistant",
      text:
        "Hello! I’m your AI travel planner.\nHow can I help you plan your perfect trip today? ✈️",
    },
  ]);

  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>(initialOptions);
  const [editingKey, setEditingKey] = useState<OptionKey | null>("destination");
  const [isOptionBuilderVisible, setIsOptionBuilderVisible] = useState(true);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isOnline, setIsOnline] = useState<boolean | null>(null);

  const chatEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const selectedCount = useMemo(() => {
    return Object.values(selectedOptions).filter(Boolean).length;
  }, [selectedOptions]);

  const currentGroup = useMemo(() => {
    if (editingKey) {
      return optionGroups.find((group) => group.key === editingKey) ?? null;
    }

    return optionGroups.find((group) => !selectedOptions[group.key]) ?? null;
  }, [editingKey, selectedOptions]);

  const canGenerate = selectedCount >= 2;

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => {
      inputRef.current?.focus();
    }, 350);

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    checkServerStatus();

    const statusInterval = window.setInterval(checkServerStatus, 15000);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.clearTimeout(focusTimer);
      window.clearInterval(statusInterval);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [messages, isSending]);

  async function checkServerStatus() {
    try {
      const response = await fetch(`${API_BASE_URL}/api/health`);
      setIsOnline(response.ok);
    } catch {
      setIsOnline(false);
    }
  }

  function selectOption(key: OptionKey, value: string) {
    setSelectedOptions((current) => ({
      ...current,
      [key]: value,
    }));

    const currentIndex = optionGroups.findIndex((group) => group.key === key);
    const nextGroup = optionGroups[currentIndex + 1];

    setEditingKey(nextGroup?.key ?? null);
  }

  function editOption(key: OptionKey) {
    setIsOptionBuilderVisible(true);
    setEditingKey(key);
  }

  function clearOptions() {
    setSelectedOptions(initialOptions);
    setEditingKey("destination");
    setIsOptionBuilderVisible(true);
  }

  function buildPromptFromOptions() {
    return `
Create a premium but clean travel plan.

Preferences:
Destination: ${selectedOptions.destination || "Suggest best destination"}
Travelers: ${selectedOptions.tripType || "Flexible"}
Duration: ${selectedOptions.duration || "Suggest ideal duration"}
Budget: ${selectedOptions.budget || "Standard"}
Mood: ${selectedOptions.mood || "Balanced"}

Use this format:
Trip Overview:
- ...

Day-wise Plan:
- Day 1:
- Day 2:
- Day 3:

Stay Suggestions:
- ...

Food & Activities:
- ...

Travel Tips:
- ...

Follow-up Question:
- ...

Keep it short, clean, and easy to read.
`.trim();
  }

  async function sendMessage(messageText?: string) {
    const message = (messageText ?? input).trim();

    if (!message || isSending) return;

    setMessages((current) => [
      ...current,
      {
        id: createMessageId(),
        role: "user",
        text: message,
      },
    ]);

    setInput("");
    setErrorMessage("");
    setIsSending(true);
    setIsOptionBuilderVisible(false);

    try {
      const response = await fetch(`${API_BASE_URL}/api/travel-chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "AI planner failed to respond.");
      }

      setIsOnline(true);

      setMessages((current) => [
        ...current,
        {
          id: createMessageId(),
          role: "assistant",
          text:
            data?.reply ||
            "I can help you plan your trip. Please share your destination, dates, budget, and travel style.",
          followUpQuestion: data?.followUpQuestion,
          suggestions: Array.isArray(data?.suggestions) ? data.suggestions : [],
        },
      ]);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "AI planner is temporarily unavailable.";

      setIsOnline(false);
      setErrorMessage(message);

      setMessages((current) => [
        ...current,
        {
          id: createMessageId(),
          role: "assistant",
          text:
            "I could not connect to the AI planner right now. Please make sure the AI server is running and try again.",
        },
      ]);
    } finally {
      setIsSending(false);
    }
  }

  function generateTripPlan() {
    if (!canGenerate) return;
    sendMessage(buildPromptFromOptions());
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    sendMessage();
  }

  function resetChat() {
    setMessages([
      {
        id: "welcome",
        role: "assistant",
        text:
          "Hello! I’m your AI travel planner.\nHow can I help you plan your perfect trip today? ✈️",
      },
    ]);

    setSelectedOptions(initialOptions);
    setEditingKey("destination");
    setIsOptionBuilderVisible(true);
    setInput("");
    setErrorMessage("");
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.button
            type="button"
            aria-label="Close AI planner overlay"
            onClick={onClose}
            className="fixed inset-0 z-[90] bg-black/70 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-label="AI Travel Planner"
            className="fixed inset-0 z-[100] overflow-hidden border-[color:var(--color-primary)]/25 bg-[color:rgba(2,4,10,0.98)] shadow-[0_0_180px_rgba(0,0,0,0.96)] backdrop-blur-2xl md:bottom-0 md:left-auto md:right-0 md:top-0 md:w-[min(760px,72vw)] md:border-l lg:w-[min(850px,64vw)] xl:w-[min(980px,58vw)]"
            initial={{ x: "100%", opacity: 0.4 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0.4 }}
            transition={{
              type: "spring",
              stiffness: 145,
              damping: 25,
              mass: 0.85,
            }}
          >
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 bg-[image:var(--gradient-bg)]" />
              <div className="absolute left-0 top-0 h-[160px] w-full bg-[radial-gradient(circle_at_70%_8%,rgba(243,201,121,0.24),transparent_24%),radial-gradient(circle_at_84%_14%,rgba(224,247,255,0.12),transparent_28%)] md:h-[180px] xl:h-[190px]" />
              <div className="absolute right-10 top-6 h-24 w-56 rounded-[100%] bg-[linear-gradient(135deg,rgba(243,201,121,0.22),rgba(224,247,255,0.1),transparent)] blur-2xl md:right-16 md:w-64 xl:right-24 xl:top-8 xl:h-28 xl:w-72" />
              <div className="absolute right-14 top-14 h-12 w-52 bg-[linear-gradient(135deg,transparent,rgba(243,201,121,0.28),rgba(224,247,255,0.14),transparent)] opacity-80 [clip-path:polygon(0_100%,18%_30%,30%_80%,44%_16%,58%_78%,72%_24%,100%_100%)] md:right-20 md:w-60 xl:right-28 xl:top-16 xl:h-16 xl:w-72" />
              <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[var(--color-primary)]/70 to-transparent" />
              <div className="absolute bottom-0 right-0 h-36 w-full bg-[radial-gradient(circle_at_85%_100%,rgba(243,201,121,0.1),transparent_28%)] xl:h-40" />
            </div>

            <div className="relative z-10 grid h-full grid-rows-[auto_1fr_auto]">
              <div className="border-b border-[color:var(--color-border-soft)] px-4 py-4 sm:px-5 md:px-6 md:py-4 lg:px-7 xl:px-8 xl:py-5">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex min-w-0 items-center gap-3 md:gap-4">
                    <div className="relative grid size-11 shrink-0 place-items-center rounded-full border border-[color:var(--color-primary)]/30 bg-[color:rgba(243,201,121,0.1)] text-[var(--color-primary)] shadow-[var(--shadow-primary)] md:size-12 xl:size-14">
                      <span className="absolute inset-[-8px] rounded-full bg-[color:var(--color-primary)]/10 blur-lg md:inset-[-10px]" />
                      <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_32%_18%,rgba(255,255,255,0.35),transparent_34%)]" />
                      <Sparkles className="relative" size={22} />
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-2 md:gap-3">
                        <h2 className="truncate text-xl font-semibold tracking-tight text-[var(--color-text)] md:text-2xl xl:text-3xl">
                          AI Travel Planner
                        </h2>
                        <Sparkles size={16} className="shrink-0 text-[var(--color-primary)] md:size-[18px]" />
                      </div>

                      <div className="mt-1.5 flex items-center gap-2 text-xs text-[var(--color-success)] md:mt-2 md:text-sm">
                        <span
                          className={`size-2 rounded-full ${
                            isOnline
                              ? "bg-[var(--color-success)] shadow-[0_0_16px_rgba(110,231,183,0.9)]"
                              : "bg-[var(--color-error)]"
                          }`}
                        />
                        {isOnline === null ? "Checking" : isOnline ? "Online" : "Offline"}
                      </div>
                    </div>
                  </div>

                  <div className="flex shrink-0 items-center gap-2 md:gap-3">
                    <button
                      type="button"
                      onClick={resetChat}
                      className="grid size-10 place-items-center rounded-xl border border-[color:var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-muted)] transition hover:border-[color:var(--color-primary)]/40 hover:bg-[color:rgba(243,201,121,0.1)] hover:text-[var(--color-text)] md:size-11 md:rounded-2xl xl:size-12"
                      aria-label="Reset chat"
                    >
                      <RefreshCcw size={18} />
                    </button>

                    <button
                      type="button"
                      onClick={onClose}
                      className="grid size-10 place-items-center rounded-xl border border-[color:var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-muted)] transition hover:border-[color:var(--color-primary)]/45 hover:bg-[color:rgba(243,201,121,0.1)] hover:text-[var(--color-text)] md:size-11 md:rounded-2xl xl:size-12"
                      aria-label="Close AI planner"
                    >
                      <X size={22} />
                    </button>
                  </div>
                </div>
              </div>

              <div className="overflow-y-auto px-4 py-4 [scrollbar-width:none] sm:px-5 md:px-6 md:py-5 lg:px-7 xl:px-8 xl:py-7 [&::-webkit-scrollbar]:hidden">
                <div className="grid gap-5 md:gap-6">
                  {isOptionBuilderVisible && (
                    <motion.div
                      initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      exit={{ opacity: 0, y: -12, filter: "blur(8px)" }}
                      className="overflow-hidden rounded-[1.35rem] border border-[color:var(--color-primary)]/18 bg-[var(--color-surface)] shadow-[var(--shadow-card)] md:rounded-[1.55rem] xl:rounded-[1.8rem]"
                    >
                      <div className="border-b border-[color:var(--color-border-soft)] bg-white/[0.025] p-4">
                        <div className="flex items-center justify-between gap-3">
                          <div className="min-w-0">
                            <h3 className="text-sm font-semibold text-[var(--color-text)] md:text-base">
                              Build your trip in seconds
                            </h3>
                            <p className="mt-1 text-xs text-[var(--color-text-muted)]">
                              Pick options step by step, then generate your plan.
                            </p>
                          </div>

                          {selectedCount > 0 && (
                            <button
                              type="button"
                              onClick={clearOptions}
                              className="shrink-0 rounded-full border border-[color:var(--color-border)] px-3 py-1.5 text-xs text-[var(--color-text-muted)] transition hover:border-[color:var(--color-primary)]/35 hover:text-[var(--color-text)]"
                            >
                              Clear
                            </button>
                          )}
                        </div>

                        {selectedCount > 0 && (
                          <div className="mt-4 flex flex-wrap gap-2">
                            {optionGroups.map((group) => {
                              const value = selectedOptions[group.key];
                              if (!value) return null;

                              return (
                                <button
                                  key={group.key}
                                  type="button"
                                  onClick={() => editOption(group.key)}
                                  className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-primary)]/22 bg-[color:rgba(243,201,121,0.1)] px-3 py-1.5 text-xs text-[var(--color-primary-soft)] transition hover:border-[color:var(--color-primary)]/45"
                                >
                                  <Check size={13} />
                                  {value}
                                </button>
                              );
                            })}
                          </div>
                        )}
                      </div>

                      <AnimatePresence mode="wait">
                        {currentGroup ? (
                          <motion.div
                            key={currentGroup.key}
                            initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            exit={{ opacity: 0, y: -12, filter: "blur(8px)" }}
                            transition={{ duration: 0.28, ease: "easeOut" }}
                            className="p-4"
                          >
                            <div className="mb-4">
                              <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-[var(--color-primary)]/70 md:text-[10px]">
                                Step{" "}
                                {optionGroups.findIndex(
                                  (group) => group.key === currentGroup.key
                                ) + 1}
                              </p>
                              <h4 className="mt-2 text-base font-semibold text-[var(--color-text)] md:text-lg">
                                {currentGroup.title}
                              </h4>
                              <p className="mt-1 text-xs text-[var(--color-text-muted)] md:text-sm">
                                {currentGroup.subtitle}
                              </p>
                            </div>

                            <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
                              {currentGroup.options.map((option) => {
                                const isSelected =
                                  selectedOptions[currentGroup.key] === option;

                                return (
                                  <button
                                    key={option}
                                    type="button"
                                    onClick={() => selectOption(currentGroup.key, option)}
                                    className={`group relative overflow-hidden rounded-xl border px-3 py-2.5 text-left text-xs transition md:rounded-2xl md:px-4 md:py-3 md:text-sm ${
                                      isSelected
                                        ? "border-[color:var(--color-primary)]/45 bg-[color:rgba(243,201,121,0.14)] text-[var(--color-text)] shadow-[var(--shadow-primary)]"
                                        : "border-[color:var(--color-border)] bg-[var(--color-surface-soft)] text-[var(--color-text-soft)] hover:border-[color:var(--color-primary)]/35 hover:bg-[color:rgba(243,201,121,0.09)] hover:text-[var(--color-text)]"
                                    }`}
                                  >
                                    <span className="relative z-10 flex items-center justify-between gap-2">
                                      {option}
                                      {isSelected && <Check size={15} />}
                                    </span>
                                    <span className="absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/10 to-transparent transition duration-700 group-hover:translate-x-[120%]" />
                                  </button>
                                );
                              })}
                            </div>
                          </motion.div>
                        ) : (
                          <motion.div
                            key="ready"
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -12 }}
                            className="p-4"
                          >
                            <div className="rounded-2xl border border-[color:var(--color-success)]/18 bg-[color:rgba(110,231,183,0.1)] p-4">
                              <p className="text-sm font-semibold text-[var(--color-success)]">
                                Your preferences are ready.
                              </p>
                              <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                                Generate a clean itinerary or type anything else below.
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <div className="border-t border-[color:var(--color-border-soft)] p-4">
                        <button
                          type="button"
                          onClick={generateTripPlan}
                          disabled={!canGenerate || isSending || isOnline === false}
                          className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[image:var(--gradient-primary)] px-5 py-3 text-xs font-semibold text-[#140d04] shadow-[var(--shadow-primary)] transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-45 md:rounded-2xl md:text-sm"
                        >
                          Generate Trip Plan
                          <ArrowRight
                            size={16}
                            className="transition group-hover:translate-x-1"
                          />
                        </button>
                      </div>
                    </motion.div>
                  )}

                  <div className="space-y-5 md:space-y-6">
                    {messages.map((message) => (
                      <ChatBubble
                        key={message.id}
                        message={message}
                        onSuggestionClick={sendMessage}
                      />
                    ))}

                    {isSending && (
                      <div className="flex gap-3 md:gap-4">
                        <BotIcon />

                        <div className="rounded-2xl rounded-tl-md border border-[color:var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-xs text-[var(--color-text-soft)] md:rounded-3xl md:px-5 md:py-4 md:text-sm">
                          <span className="inline-flex items-center gap-2">
                            <Loader2 size={16} className="animate-spin text-[var(--color-primary)]" />
                            Creating your travel plan...
                          </span>
                        </div>
                      </div>
                    )}

                    {errorMessage && (
                      <div className="flex items-center gap-2 rounded-2xl border border-[color:var(--color-error)]/25 bg-red-500/10 px-4 py-3 text-xs text-[var(--color-error)] md:text-sm">
                        <AlertCircle size={17} />
                        {errorMessage}
                      </div>
                    )}

                    <div ref={chatEndRef} />
                  </div>
                </div>
              </div>

              <div className="border-t border-[color:var(--color-border-soft)] bg-[var(--color-bg-soft)]/94 px-4 py-4 sm:px-5 md:px-6 lg:px-7 xl:px-8 xl:py-5">
                <form
                  onSubmit={handleSubmit}
                  className="relative flex items-center gap-2 overflow-hidden rounded-[1.35rem] border border-[color:var(--color-primary)]/20 bg-[color:rgba(243,201,121,0.06)] p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_20px_80px_rgba(0,0,0,0.28)] md:gap-3 md:rounded-[1.7rem]"
                >
                  <div className="grid size-9 shrink-0 place-items-center rounded-full text-[var(--color-primary)] md:size-11">
                    <Sparkles size={18} className="md:size-5" />
                  </div>

                  <input
                    ref={inputRef}
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                    disabled={isSending || isOnline === false}
                    aria-label="Type your travel request"
                    placeholder={
                      isOnline === false
                        ? "AI server is offline..."
                        : "Type your travel request..."
                    }
                    className="min-w-0 flex-1 bg-transparent px-1 text-xs text-[var(--color-text)] outline-none placeholder:text-[var(--color-text-faint)] disabled:cursor-not-allowed disabled:opacity-60 md:text-sm"
                  />

                  <button
                    type="submit"
                    disabled={isSending || !input.trim() || isOnline === false}
                    className="grid size-10 shrink-0 place-items-center rounded-full bg-[image:var(--gradient-primary)] text-[#140d04] shadow-[var(--shadow-primary)] transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50 md:size-12"
                    aria-label="Send message"
                  >
                    {isSending ? (
                      <Loader2 size={18} className="animate-spin" />
                    ) : (
                      <Send size={18} />
                    )}
                  </button>
                </form>

                <p className="mt-2 text-center text-[10px] text-[var(--color-text-faint)] md:mt-3 md:text-xs">
                  AI suggestions may vary. Please verify details before booking.
                </p>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

function BotIcon() {
  return (
    <div className="grid size-9 shrink-0 place-items-center rounded-full border border-[color:var(--color-primary)]/24 bg-[color:rgba(243,201,121,0.09)] text-[var(--color-primary)] shadow-[var(--shadow-primary)] md:size-11">
      <Sparkles size={17} />
    </div>
  );
}

function ChatBubble({
  message,
  onSuggestionClick,
}: {
  message: ChatMessage;
  onSuggestionClick: (suggestion: string) => void;
}) {
  const isUser = message.role === "user";

  if (isUser) {
    return (
      <div className="ml-auto max-w-[86%] md:max-w-[82%]">
        <div className="rounded-2xl rounded-tr-md border border-[color:var(--color-primary)]/24 bg-[color:rgba(243,201,121,0.13)] px-4 py-3 text-xs leading-6 text-[var(--color-primary-soft)] shadow-[var(--shadow-primary)] md:rounded-3xl md:px-5 md:py-4 md:text-sm md:leading-7">
          {message.text}
        </div>
        <p className="mt-1.5 text-right text-[10px] text-[var(--color-text-faint)] md:mt-2 md:text-xs">
          You
        </p>
      </div>
    );
  }

  return (
    <div className="flex gap-3 md:gap-4">
      <BotIcon />

      <div className="max-w-[86%] md:max-w-[82%]">
        <div className="whitespace-pre-line rounded-2xl rounded-tl-md border border-[color:var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-xs leading-6 text-[var(--color-text-soft)] shadow-[0_18px_60px_rgba(0,0,0,0.2)] md:rounded-3xl md:px-5 md:py-4 md:text-sm md:leading-7">
          {message.text}
        </div>

        {message.followUpQuestion && (
          <div className="mt-3 rounded-2xl border border-[color:var(--color-secondary)]/18 bg-[color:rgba(224,247,255,0.08)] px-4 py-3 text-xs text-[var(--color-secondary)] md:text-sm">
            {message.followUpQuestion}
          </div>
        )}

        {message.suggestions && message.suggestions.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {message.suggestions.map((suggestion) => (
              <button
                key={suggestion}
                type="button"
                onClick={() => onSuggestionClick(suggestion)}
                className="rounded-full border border-[color:var(--color-primary)]/18 bg-[color:rgba(243,201,121,0.07)] px-3 py-1.5 text-[10px] text-[var(--color-primary-soft)] transition hover:border-[color:var(--color-primary)]/42 hover:bg-[color:rgba(243,201,121,0.12)] hover:text-[var(--color-text)] md:px-4 md:py-2 md:text-xs"
              >
                {suggestion}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}