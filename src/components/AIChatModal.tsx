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

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ??
  (import.meta.env.PROD ? "" : "http://localhost:8787");

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
  customOption?: {
    label: string;
    placeholder: string;
    suffix?: string;
    inputMode?: "text" | "numeric";
  };
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
    subtitle: "Choose a popular destination or type your own.",
    options: ["Goa", "Kashmir", "Andaman", "Dubai", "Thailand", "Maldives"],
    customOption: {
      label: "Custom Destination",
      placeholder: "Type any destination...",
      inputMode: "text",
    },
  },
  {
    key: "tripType",
    title: "Who is traveling?",
    subtitle: "Pick your travel style.",
    options: [
      "Couple",
      "Family",
      "Friends",
      "Solo",
      "Honeymoon",
      "Group",
      "Business",
    ],
  },
  {
    key: "duration",
    title: "How long is the trip?",
    subtitle: "Choose your ideal duration or enter custom days.",
    options: ["3 Days", "5 Days", "7 Days", "10 Days", "14 Days"],
    customOption: {
      label: "Custom Days",
      placeholder: "Enter number of days...",
      suffix: "Days",
      inputMode: "numeric",
    },
  },
  {
    key: "budget",
    title: "Choose your budget",
    subtitle: "Select your comfort level or enter your budget.",
    options: ["Budget", "Standard", "Premium", "Luxury"],
    customOption: {
      label: "Custom Budget",
      placeholder: "Example: ₹50,000 or $1,200",
      inputMode: "text",
    },
  },
  {
    key: "mood",
    title: "Choose your mood",
    subtitle: "Select the experience you want.",
    options: [
      "Relaxing",
      "Adventure",
      "Romantic",
      "Food",
      "Nature",
      "Luxury",
      "Mixed Experience",
    ],
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
        "Hello! I’m your AI travel planner.\nTell me your destination, days, budget, and travel mood — I’ll create a clean trip plan for you.",
    },
  ]);

  const [selectedOptions, setSelectedOptions] =
    useState<SelectedOptions>(initialOptions);
  const [editingKey, setEditingKey] = useState<OptionKey | null>("destination");
  const [isOptionBuilderVisible, setIsOptionBuilderVisible] = useState(true);
  const [input, setInput] = useState("");
  const [customInput, setCustomInput] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isOnline, setIsOnline] = useState<boolean | null>(null);

  const chatEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const customInputRef = useRef<HTMLInputElement | null>(null);

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
    setCustomInput("");
  }, [editingKey]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [messages, isSending, errorMessage]);

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
    setCustomInput("");
  }

  function selectCustomOption(key: OptionKey, value: string, suffix?: string) {
    const cleanValue = value.trim();

    if (!cleanValue) return;

    const finalValue =
      suffix && !cleanValue.toLowerCase().includes(suffix.toLowerCase())
        ? `${cleanValue} ${suffix}`
        : cleanValue;

    selectOption(key, finalValue);
  }

  function handleCustomSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!currentGroup?.customOption) return;

    selectCustomOption(
      currentGroup.key,
      customInput,
      currentGroup.customOption.suffix
    );
  }

  function editOption(key: OptionKey) {
    setIsOptionBuilderVisible(true);
    setEditingKey(key);
    setCustomInput("");
  }

  function clearOptions() {
    setSelectedOptions(initialOptions);
    setEditingKey("destination");
    setIsOptionBuilderVisible(true);
    setCustomInput("");
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

      const contentType = response.headers.get("content-type") ?? "";

      if (!contentType.includes("application/json")) {
        const text = await response.text();

        console.error("AI API returned non-JSON response:", {
          requestUrl: `${API_BASE_URL}/api/travel-chat`,
          responseUrl: response.url,
          status: response.status,
          statusText: response.statusText,
          contentType,
          bodyPreview: text.slice(0, 500),
        });

        throw new Error(
          `AI API returned HTML instead of JSON. Status: ${response.status}. Check browser console.`
        );
      }

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
            "I could not connect to the AI planner right now. Please check the API URL, Vercel environment variables, and server logs.",
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
          "Hello! I’m your AI travel planner.\nTell me your destination, days, budget, and travel mood — I’ll create a clean trip plan for you.",
      },
    ]);

    setSelectedOptions(initialOptions);
    setEditingKey("destination");
    setIsOptionBuilderVisible(true);
    setInput("");
    setCustomInput("");
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
            className="fixed inset-0 z-[90] bg-black/72 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-label="AI Travel Planner"
            className="fixed bottom-0 right-0 top-0 z-[100] w-full overflow-hidden border-l border-[color:var(--color-primary)]/25 bg-[color:rgba(2,4,10,0.98)] shadow-[0_0_180px_rgba(0,0,0,0.96)] backdrop-blur-2xl sm:w-[min(820px,74vw)] lg:w-[min(920px,58vw)] xl:w-[min(980px,54vw)]"
            initial={{ x: "100%", opacity: 0.5 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0.5 }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 26,
              mass: 0.82,
            }}
          >
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 bg-[image:var(--gradient-bg)]" />
              <div className="absolute left-0 top-0 h-[220px] w-full bg-[radial-gradient(circle_at_70%_8%,rgba(243,201,121,0.22),transparent_24%),radial-gradient(circle_at_84%_14%,rgba(224,247,255,0.12),transparent_28%)]" />
              <div className="absolute right-24 top-8 h-28 w-72 rounded-[100%] bg-[linear-gradient(135deg,rgba(243,201,121,0.2),rgba(224,247,255,0.1),transparent)] blur-2xl" />
              <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[var(--color-primary)]/70 to-transparent" />
              <div className="absolute bottom-0 right-0 h-44 w-full bg-[radial-gradient(circle_at_85%_100%,rgba(243,201,121,0.1),transparent_30%)]" />
            </div>

            <div className="relative z-10 grid h-full grid-rows-[auto_1fr_auto]">
              <header className="border-b border-[color:var(--color-border-soft)] px-4 py-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="relative grid size-12 shrink-0 place-items-center rounded-full border border-[color:var(--color-primary)]/30 bg-[color:rgba(243,201,121,0.1)] text-[var(--color-primary)] shadow-[var(--shadow-primary)] sm:size-14">
                      <span className="absolute inset-[-10px] rounded-full bg-[color:var(--color-primary)]/10 blur-lg" />
                      <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_32%_18%,rgba(255,255,255,0.32),transparent_34%)]" />
                      <Sparkles className="relative" size={24} />
                    </div>

                    <div className="min-w-0">
                      <h2 className="truncate text-xl font-semibold tracking-[-0.04em] text-white sm:text-2xl lg:text-3xl">
                        AI Travel Planner
                      </h2>

                      <div className="mt-1 flex items-center gap-2 text-xs font-medium text-white/70 sm:text-sm">
                        <span
                          className={`size-2 rounded-full ${
                            isOnline
                              ? "bg-[var(--color-success)] shadow-[0_0_16px_rgba(110,231,183,0.9)]"
                              : isOnline === null
                                ? "bg-[var(--color-warning)]"
                                : "bg-[var(--color-error)]"
                          }`}
                        />
                        {isOnline === null
                          ? "Checking server"
                          : isOnline
                            ? "Online"
                            : "Offline"}
                      </div>
                    </div>
                  </div>

                  <div className="flex shrink-0 items-center gap-2">
                    <button
                      type="button"
                      onClick={resetChat}
                      className="grid size-10 place-items-center rounded-xl border border-[color:var(--color-border)] bg-[var(--color-surface)] text-white/70 transition hover:border-[color:var(--color-primary)]/45 hover:bg-[color:rgba(243,201,121,0.1)] hover:text-white sm:size-12 sm:rounded-2xl"
                      aria-label="Reset chat"
                    >
                      <RefreshCcw size={18} />
                    </button>

                    <button
                      type="button"
                      onClick={onClose}
                      className="grid size-10 place-items-center rounded-xl border border-[color:var(--color-border)] bg-[var(--color-surface)] text-white/70 transition hover:border-[color:var(--color-primary)]/45 hover:bg-[color:rgba(243,201,121,0.1)] hover:text-white sm:size-12 sm:rounded-2xl"
                      aria-label="Close AI planner"
                    >
                      <X size={22} />
                    </button>
                  </div>
                </div>
              </header>

              <div className="overflow-y-auto px-4 py-5 [scrollbar-width:none] sm:px-6 lg:px-8 lg:py-6 [&::-webkit-scrollbar]:hidden">
                <div className="grid gap-5">
                  {isOptionBuilderVisible && (
                    <motion.div
                      initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      exit={{ opacity: 0, y: -12, filter: "blur(8px)" }}
                      className="overflow-hidden rounded-[1.5rem] border border-[color:var(--color-primary)]/18 bg-[color:rgba(255,255,255,0.045)] shadow-[var(--shadow-card)] backdrop-blur-xl"
                    >
                      <div className="border-b border-[color:var(--color-border-soft)] bg-white/[0.025] p-4">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <h3 className="text-base font-semibold text-white sm:text-lg">
                              Build your trip in seconds
                            </h3>
                            <p className="mt-1 text-xs leading-5 text-white/58 sm:text-sm">
                              Pick quick options or type custom details for your
                              travel plan.
                            </p>
                          </div>

                          {selectedCount > 0 && (
                            <button
                              type="button"
                              onClick={clearOptions}
                              className="shrink-0 rounded-full border border-white/12 px-3 py-1.5 text-xs text-white/60 transition hover:border-[color:var(--color-primary)]/35 hover:text-white"
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
                                  className="inline-flex max-w-full items-center gap-2 rounded-full border border-[color:var(--color-primary)]/24 bg-[color:rgba(243,201,121,0.1)] px-3 py-1.5 text-xs font-medium text-white transition hover:border-[color:var(--color-primary)]/50"
                                >
                                  <Check
                                    size={13}
                                    className="shrink-0 text-[var(--color-primary)]"
                                  />
                                  <span className="truncate">{value}</span>
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
                            initial={{ opacity: 0, y: 14, filter: "blur(8px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            exit={{ opacity: 0, y: -12, filter: "blur(8px)" }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                            className="p-4"
                          >
                            <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[var(--color-primary)]/80">
                              Step{" "}
                              {optionGroups.findIndex(
                                (group) => group.key === currentGroup.key
                              ) + 1}
                            </p>

                            <h4 className="mt-2 text-lg font-semibold tracking-[-0.03em] text-white sm:text-xl">
                              {currentGroup.title}
                            </h4>

                            <p className="mt-1 text-sm text-white/58">
                              {currentGroup.subtitle}
                            </p>

                            <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
                              {currentGroup.options.map((option) => {
                                const isSelected =
                                  selectedOptions[currentGroup.key] === option;

                                return (
                                  <button
                                    key={option}
                                    type="button"
                                    onClick={() =>
                                      selectOption(currentGroup.key, option)
                                    }
                                    className={`group relative min-h-[46px] overflow-hidden rounded-2xl border px-3 py-3 text-left text-xs font-medium transition sm:px-4 sm:text-sm ${
                                      isSelected
                                        ? "border-[color:var(--color-primary)]/55 bg-[color:rgba(243,201,121,0.16)] text-white shadow-[var(--shadow-primary)]"
                                        : "border-white/10 bg-white/[0.04] text-white/72 hover:border-[color:var(--color-primary)]/35 hover:bg-[color:rgba(243,201,121,0.08)] hover:text-white"
                                    }`}
                                  >
                                    <span className="relative z-10 flex items-center justify-between gap-2">
                                      <span className="line-clamp-1">{option}</span>
                                      {isSelected && (
                                        <Check
                                          size={15}
                                          className="shrink-0 text-[var(--color-primary)]"
                                        />
                                      )}
                                    </span>
                                    <span className="absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/10 to-transparent transition duration-700 group-hover:translate-x-[120%]" />
                                  </button>
                                );
                              })}
                            </div>

                            {currentGroup.customOption && (
                              <form
                                onSubmit={handleCustomSubmit}
                                className="mt-4 rounded-2xl border border-[color:var(--color-primary)]/20 bg-[color:rgba(243,201,121,0.055)] p-3 sm:p-4"
                              >
                                <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
                                  <div>
                                    <p className="text-xs font-semibold text-[var(--color-primary)]">
                                      {currentGroup.customOption.label}
                                    </p>
                                    <p className="mt-1 text-[11px] leading-4 text-white/45">
                                      Use this if your choice is not listed above.
                                    </p>
                                  </div>
                                </div>

                                <div className="mt-3 grid gap-2 sm:grid-cols-[1fr_auto]">
                                  <input
                                    ref={customInputRef}
                                    value={customInput}
                                    onChange={(event) =>
                                      setCustomInput(event.target.value)
                                    }
                                    inputMode={
                                      currentGroup.customOption.inputMode ===
                                      "numeric"
                                        ? "numeric"
                                        : "text"
                                    }
                                    placeholder={
                                      currentGroup.customOption.placeholder
                                    }
                                    className="min-w-0 rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none placeholder:text-white/36 focus:border-[color:var(--color-primary)]/45"
                                  />

                                  <button
                                    type="submit"
                                    disabled={!customInput.trim()}
                                    className="rounded-xl bg-[image:var(--gradient-primary)] px-5 py-3 text-sm font-semibold text-[#140d04] shadow-[var(--shadow-primary)] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-45 sm:min-w-[92px]"
                                  >
                                    Add
                                  </button>
                                </div>
                              </form>
                            )}
                          </motion.div>
                        ) : (
                          <motion.div
                            key="ready"
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -12 }}
                            className="p-4"
                          >
                            <div className="rounded-2xl border border-[color:var(--color-success)]/20 bg-[color:rgba(110,231,183,0.1)] p-4">
                              <p className="text-sm font-semibold text-[var(--color-success)]">
                                Your preferences are ready.
                              </p>
                              <p className="mt-1 text-sm text-white/62">
                                Generate a clean itinerary or type anything else
                                below.
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
                          className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-[image:var(--gradient-primary)] px-5 py-3 text-sm font-semibold text-[#140d04] shadow-[var(--shadow-primary)] transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-45"
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

                  <div className="space-y-5">
                    {messages.map((message) => (
                      <ChatBubble
                        key={message.id}
                        message={message}
                        onSuggestionClick={sendMessage}
                      />
                    ))}

                    {isSending && (
                      <div className="flex gap-3">
                        <BotIcon />

                        <div className="rounded-3xl rounded-tl-md border border-white/10 bg-white/[0.055] px-5 py-4 text-sm text-white/80">
                          <span className="inline-flex items-center gap-2">
                            <Loader2
                              size={16}
                              className="animate-spin text-[var(--color-primary)]"
                            />
                            Creating your travel plan...
                          </span>
                        </div>
                      </div>
                    )}

                    {errorMessage && (
                      <div className="rounded-2xl border border-[color:var(--color-error)]/25 bg-red-500/10 px-4 py-3 text-sm leading-6 text-[var(--color-error)]">
                        <div className="flex gap-2">
                          <AlertCircle size={17} className="mt-1 shrink-0" />
                          <span>{errorMessage}</span>
                        </div>
                      </div>
                    )}

                    <div ref={chatEndRef} />
                  </div>
                </div>
              </div>

              <footer className="border-t border-[color:var(--color-border-soft)] bg-[color:rgba(5,9,20,0.96)] px-4 py-4 sm:px-6 lg:px-8">
                <form
                  onSubmit={handleSubmit}
                  className="relative flex items-center gap-2 overflow-hidden rounded-[1.4rem] border border-[color:var(--color-primary)]/22 bg-[color:rgba(243,201,121,0.06)] p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_20px_80px_rgba(0,0,0,0.28)] sm:gap-3 sm:rounded-[1.7rem]"
                >
                  <div className="grid size-10 shrink-0 place-items-center rounded-full text-[var(--color-primary)] sm:size-11">
                    <Sparkles size={19} />
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
                    className="min-w-0 flex-1 bg-transparent px-1 text-sm font-medium text-white outline-none placeholder:text-white/38 disabled:cursor-not-allowed disabled:opacity-60"
                  />

                  <button
                    type="submit"
                    disabled={isSending || !input.trim() || isOnline === false}
                    className="grid size-11 shrink-0 place-items-center rounded-full bg-[image:var(--gradient-primary)] text-[#140d04] shadow-[var(--shadow-primary)] transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50 sm:size-12"
                    aria-label="Send message"
                  >
                    {isSending ? (
                      <Loader2 size={18} className="animate-spin" />
                    ) : (
                      <Send size={19} />
                    )}
                  </button>
                </form>

                <p className="mt-3 text-center text-xs text-white/38">
                  AI suggestions may vary. Please verify details before booking.
                </p>
              </footer>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

function BotIcon() {
  return (
    <div className="grid size-10 shrink-0 place-items-center rounded-full border border-[color:var(--color-primary)]/25 bg-[color:rgba(243,201,121,0.1)] text-[var(--color-primary)] shadow-[var(--shadow-primary)] sm:size-11">
      <Sparkles size={18} />
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
      <div className="ml-auto max-w-[86%] sm:max-w-[78%]">
        <div className="rounded-3xl rounded-tr-md border border-[color:var(--color-primary)]/26 bg-[color:rgba(243,201,121,0.14)] px-4 py-3 text-sm font-medium leading-7 text-white shadow-[var(--shadow-primary)] sm:px-5 sm:py-4">
          {message.text}
        </div>
        <p className="mt-1.5 text-right text-xs text-white/40">You</p>
      </div>
    );
  }

  return (
    <div className="flex gap-3">
      <BotIcon />

      <div className="max-w-[86%] sm:max-w-[82%]">
        <div className="whitespace-pre-line rounded-3xl rounded-tl-md border border-white/10 bg-white/[0.06] px-4 py-3 text-sm font-medium leading-7 text-white shadow-[0_18px_60px_rgba(0,0,0,0.22)] sm:px-5 sm:py-4">
          {message.text}
        </div>

        {message.followUpQuestion && (
          <div className="mt-3 rounded-2xl border border-[color:var(--color-secondary)]/20 bg-[color:rgba(224,247,255,0.08)] px-4 py-3 text-sm font-medium leading-6 text-white">
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
                className="rounded-full border border-[color:var(--color-primary)]/22 bg-[color:rgba(243,201,121,0.08)] px-4 py-2 text-xs font-semibold text-white transition hover:border-[color:var(--color-primary)]/48 hover:bg-[color:rgba(243,201,121,0.14)]"
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