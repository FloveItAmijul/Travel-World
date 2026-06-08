import { useEffect, type CSSProperties } from "react";
import { useInView } from "react-intersection-observer";
import {
  ArrowRight,
  Bot,
  CalendarDays,
  MapPin,
  MessageCircle,
  Route,
  Sparkles,
  Star,
  UserRound,
  WandSparkles,
  Zap,
} from "lucide-react";

const imageModules = import.meta.glob("../assets/destinations/*.{jpg,jpeg,png,webp}", {
  eager: true,
  query: "?url",
  import: "default",
});

const imagesByName = Object.entries(imageModules).reduce<Record<string, string>>(
  (acc, [path, image]) => {
    const fileName = path.split("/").pop()?.split(".")[0] ?? "";
    const cleanName = fileName.replace(/^\d+[-_\s]*/, "").toLowerCase();
    acc[cleanName] = image as string;
    return acc;
  },
  {}
);

type AITravelAssistantProps = {
  onOpenAIChat: () => void;
};

const aiFeatures = [
  {
    title: "Personalized Planning",
    description: "Trips shaped around your budget, mood, days, and travel style.",
    icon: UserRound,
    accent: "gold",
  },
  {
    title: "Instant Itineraries",
    description: "Get day-wise routes, stays, food spots, and activities quickly.",
    icon: Route,
    accent: "ice",
  },
  {
    title: "Smart Refinement",
    description: "Ask follow-ups and upgrade your trip from simple to premium.",
    icon: MessageCircle,
    accent: "gold",
  },
];

const previewSteps = [
  {
    title: "Choose Preferences",
    description: "Destination, days, budget, travelers, and trip mood.",
    icon: CalendarDays,
    accent: "gold",
  },
  {
    title: "Generate Plan",
    description: "AI creates a clean itinerary with stay and activity ideas.",
    icon: Sparkles,
    accent: "ice",
  },
  {
    title: "Refine by Chat",
    description: "Make it romantic, luxury, budget-friendly, or adventurous.",
    icon: Bot,
    accent: "gold",
  },
];

export function AITravelAssistant({ onOpenAIChat }: AITravelAssistantProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.16,
  });

  useEffect(() => {
    Object.values(imagesByName).forEach((src) => {
      if (!src) return;

      const image = new Image();
      image.src = src;

      if ("decode" in image) {
        image.decode().catch(() => {
          // Safe to ignore decode failure.
        });
      }
    });
  }, []);

  return (
    <section
      id="ai-travel-assistant"
      ref={ref}
      className={`premium-reveal-section relative overflow-hidden bg-[var(--color-bg)] px-4 py-14 text-[var(--color-text)] sm:px-5 sm:py-16 md:px-6 md:py-18 lg:px-8 lg:py-22 xl:py-24 ${
        inView ? "is-visible" : ""
      }`}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[image:var(--gradient-bg)]" />
        <div className="absolute left-[4%] top-16 size-[18rem] rounded-full bg-[color:var(--color-primary)]/7 blur-3xl md:left-[8%] md:top-20 md:size-[22rem] xl:left-[10%] xl:size-[24rem]" />
        <div className="absolute right-[2%] bottom-8 size-[20rem] rounded-full bg-[color:var(--color-secondary)]/7 blur-3xl md:right-[6%] md:size-[24rem] xl:right-[8%] xl:bottom-10 xl:size-[28rem]" />
        <div className="absolute left-1/2 top-0 h-px w-[min(620px,75vw)] -translate-x-1/2 bg-gradient-to-r from-transparent via-[var(--color-primary)]/55 to-transparent" />
        <div className="absolute right-[8%] top-16 hidden h-20 w-[340px] bg-[linear-gradient(135deg,transparent,rgba(243,201,121,0.2),rgba(224,247,255,0.12),transparent)] opacity-70 [clip-path:polygon(0_100%,18%_30%,30%_80%,44%_16%,58%_78%,72%_24%,100%_100%)] md:block xl:top-20 xl:h-24 xl:w-[420px]" />
      </div>

      <div className="relative mx-auto grid w-[min(100%,1220px)] gap-7 md:grid-cols-[0.42fr_0.58fr] md:items-center md:gap-6 lg:gap-8 xl:gap-12">
        <div className="premium-reveal-heading min-w-0">
          <div className="mb-3 inline-flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.26em] text-[var(--color-primary)] sm:text-[10px] sm:tracking-[0.32em] md:mb-4 md:text-[9px] lg:text-[10px] xl:text-xs">
            <span className="grid size-8 place-items-center rounded-full border border-[color:var(--color-primary)]/25 bg-[color:rgba(243,201,121,0.1)] text-[var(--color-primary)] shadow-[var(--shadow-primary)] md:size-8 xl:size-9">
              <Sparkles size={15} />
            </span>
            AI Powered Travel
          </div>

          <h2 className="text-[clamp(2.25rem,10vw,4.3rem)] font-semibold leading-[0.92] tracking-[-0.065em] text-[var(--color-text)] md:text-[clamp(2.4rem,5vw,3.8rem)] lg:text-[clamp(3rem,5vw,4.5rem)] xl:text-[clamp(3.4rem,5vw,5rem)]">
            Plan Smarter
            <span className="block bg-[image:var(--gradient-primary)] bg-clip-text text-transparent">
              Travel Better
            </span>
          </h2>

          <div className="mt-4 h-px w-20 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-secondary)] to-transparent md:w-24 xl:mt-6 xl:w-28" />

          <p className="mt-4 max-w-xl text-xs leading-6 text-[var(--color-text-soft)] sm:text-sm sm:leading-7 md:max-w-sm md:text-xs md:leading-6 lg:max-w-md lg:text-sm lg:leading-7 xl:mt-5 xl:max-w-xl xl:text-base xl:leading-8">
            Open your personal AI planner, choose quick trip preferences, or type
            your own request to create a clean itinerary with stays, food,
            activities, and travel tips.
          </p>

          <div className="mt-5 grid gap-3 md:mt-5 md:gap-3 xl:mt-7 xl:gap-4">
            {aiFeatures.map((feature, index) => {
              const Icon = feature.icon;
              const isIce = feature.accent === "ice";

              return (
                <div
                  key={feature.title}
                  style={{ "--reveal-delay": `${index * 80 + 160}ms` } as CSSProperties}
                  className="premium-reveal-card flex gap-3"
                >
                  <div
                    className={`grid size-9 shrink-0 place-items-center rounded-full border bg-[var(--color-surface)] sm:size-10 md:size-9 lg:size-10 xl:size-12 ${
                      isIce
                        ? "border-[color:var(--color-secondary)]/25 text-[var(--color-secondary)] shadow-[var(--shadow-secondary)]"
                        : "border-[color:var(--color-primary)]/25 text-[var(--color-primary)] shadow-[var(--shadow-primary)]"
                    }`}
                  >
                    <Icon size={17} className="md:size-[17px] lg:size-[19px] xl:size-[21px]" />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold text-[var(--color-text)] md:text-xs lg:text-sm xl:text-base">
                      {feature.title}
                    </h3>
                    <p className="mt-1 max-w-md text-[10px] leading-4 text-[var(--color-text-muted)] sm:text-xs sm:leading-5 md:text-[10px] md:leading-4 lg:text-xs lg:leading-5 xl:text-sm xl:leading-6">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            type="button"
            onClick={onOpenAIChat}
            className="group mt-6 inline-flex items-center gap-2 rounded-xl bg-[image:var(--gradient-primary)] px-4 py-3 text-xs font-semibold text-[#140d04] shadow-[var(--shadow-primary)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_90px_var(--color-primary-glow)] md:mt-6 md:px-4 md:py-3 md:text-xs lg:px-5 lg:py-3.5 xl:mt-8 xl:rounded-2xl xl:px-6 xl:py-4 xl:text-sm"
          >
            <WandSparkles size={16} />
            Start AI Planner
            <ArrowRight size={16} className="transition group-hover:translate-x-1" />
          </button>

          <div className="mt-5 flex items-center gap-3 md:mt-5 xl:mt-7">
            
           
              <div className="flex items-center gap-1 text-[var(--color-primary)]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={12} className="fill-current md:size-[12px] xl:size-[14px]" />
                ))}
              </div>
              <p className="mt-0.5 text-[10px] text-[var(--color-text-muted)] md:text-[10px] xl:text-sm">
                Trusted by 3K+
              </p>
            </div>
          </div>
  

        <div
          className="premium-reveal-card min-w-0"
          style={{ "--reveal-delay": "220ms" } as CSSProperties}
        >
          <div className="relative mx-auto overflow-hidden rounded-[1.45rem] border border-[color:var(--color-primary)]/18 bg-[var(--color-glass)] p-3.5 shadow-[var(--shadow-card)] backdrop-blur-2xl sm:rounded-[1.7rem] sm:p-4 md:rounded-[1.5rem] md:p-4 lg:rounded-[1.8rem] lg:p-5 xl:rounded-[2.2rem] xl:p-6">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_36%,rgba(243,201,121,0.05))]" />
              <div className="absolute right-4 top-6 h-12 w-44 bg-[linear-gradient(135deg,transparent,rgba(243,201,121,0.24),rgba(224,247,255,0.12),transparent)] opacity-80 [clip-path:polygon(0_100%,20%_30%,34%_75%,50%_16%,66%_72%,82%_30%,100%_100%)] sm:w-56 md:right-4 md:top-6 md:h-12 md:w-52 xl:right-6 xl:top-8 xl:h-16 xl:w-64" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-between gap-3 border-b border-[color:var(--color-border-soft)] pb-3 md:pb-3 xl:gap-4 xl:pb-4">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="relative grid size-10 shrink-0 place-items-center rounded-full border border-[color:var(--color-primary)]/25 bg-[color:rgba(243,201,121,0.1)] text-[var(--color-primary)] shadow-[var(--shadow-primary)] sm:size-12 md:size-10 lg:size-12 xl:size-14">
                    <span className="absolute inset-[-7px] rounded-full bg-[color:var(--color-primary)]/8 blur-md" />
                    <Sparkles className="relative" size={19} />
                  </div>

                  <div className="min-w-0">
                    <h3 className="truncate text-base font-semibold text-[var(--color-text)] md:text-sm lg:text-base xl:text-xl">
                      AI Planner Preview
                    </h3>
                    <p className="mt-1 line-clamp-1 text-xs text-[var(--color-text-muted)] md:text-[10px] lg:text-xs xl:text-sm">
                      A premium chat experience for smart trip planning.
                    </p>
                  </div>
                </div>

                <div className="hidden items-center gap-2 rounded-full border border-[color:var(--color-success)]/20 bg-[color:rgba(110,231,183,0.1)] px-3 py-1.5 text-xs text-[var(--color-success)] sm:flex md:px-2.5 md:py-1 md:text-[10px] lg:px-3 lg:py-1.5 xl:text-xs">
                  <span className="size-1.5 rounded-full bg-[var(--color-success)] shadow-[0_0_12px_rgba(110,231,183,0.9)]" />
                  Online
                </div>
              </div>

              <div className="mt-4 space-y-3 md:mt-4 md:space-y-3 xl:mt-5 xl:space-y-4">
                <div className="flex gap-3">
                  <div className="grid size-9 shrink-0 place-items-center rounded-full border border-[color:var(--color-primary)]/20 bg-[color:rgba(243,201,121,0.08)] text-[var(--color-primary)] md:size-8 lg:size-9 xl:size-10">
                    <Sparkles size={16} />
                  </div>

                  <div className="max-w-[80%] rounded-2xl rounded-tl-md border border-[color:var(--color-border)] bg-[var(--color-surface)] px-3 py-2.5 text-[11px] leading-5 text-[var(--color-text-soft)] md:text-[10px] md:leading-5 lg:text-xs xl:rounded-3xl xl:px-4 xl:py-3 xl:text-sm xl:leading-6">
                    Hello! Choose preferences or type your trip idea. I’ll create
                    a clean travel plan for you.
                  </div>
                </div>

                <div className="ml-auto max-w-[74%] rounded-2xl rounded-tr-md border border-[color:var(--color-primary)]/24 bg-[color:rgba(243,201,121,0.12)] px-3 py-2.5 text-[11px] leading-5 text-[var(--color-primary-soft)] md:text-[10px] md:leading-5 lg:text-xs xl:rounded-3xl xl:px-4 xl:py-3 xl:text-sm xl:leading-6">
                  Plan a 5-day Bali trip for a couple.
                </div>
              </div>

              <div className="mt-4 grid gap-2.5 md:mt-4 md:gap-2.5 xl:mt-5 xl:gap-3">
                {previewSteps.map((step) => {
                  const Icon = step.icon;
                  const isIce = step.accent === "ice";

                  return (
                    <div
                      key={step.title}
                      className="flex items-center gap-3 rounded-2xl border border-[color:var(--color-border)] bg-[var(--color-surface)] p-2.5 transition hover:border-[color:var(--color-primary)]/35 hover:bg-[var(--color-surface-strong)] md:gap-2.5 md:p-2.5 lg:p-3"
                    >
                      <div
                        className={`grid size-9 shrink-0 place-items-center rounded-xl md:size-9 xl:size-10 ${
                          isIce
                            ? "bg-[color:rgba(224,247,255,0.1)] text-[var(--color-secondary)]"
                            : "bg-[color:rgba(243,201,121,0.11)] text-[var(--color-primary)]"
                        }`}
                      >
                        <Icon size={17} className="xl:size-[18px]" />
                      </div>

                      <div className="min-w-0">
                        <h4 className="truncate text-xs font-semibold text-[var(--color-text)] md:text-xs lg:text-sm xl:text-base">
                          {step.title}
                        </h4>
                        <p className="mt-1 line-clamp-1 text-[10px] leading-4 text-[var(--color-text-muted)] md:text-[9px] lg:text-[10px] xl:text-sm">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              

              <div className="mt-3 rounded-xl border border-[color:var(--color-border)] bg-black/18 p-3 md:mt-3 md:p-2.5 xl:mt-4 xl:rounded-2xl xl:p-3">
                <div className="flex items-center gap-2 text-[10px] text-[var(--color-text-muted)] md:text-[9px] lg:text-[10px] xl:text-xs">
                  <MapPin size={14} className="shrink-0 text-[var(--color-primary)] xl:size-[15px]" />
                  <span className="line-clamp-1">
                    Example: “Plan a honeymoon in Kashmir for 6 days.”
                  </span>
                </div>
              </div>

              <Zap
                className="pointer-events-none absolute bottom-5 right-5 text-[var(--color-primary)]/10"
                size={70}
                strokeWidth={1}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}