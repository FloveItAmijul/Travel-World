import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import {
  ArrowRight,
  Bot,
  CalendarDays,
  MapPin,
  MessageCircle,
  Send,
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

const aiFeatures = [
  {
    title: "Personalized",
    description: "Trip plans based on your style.",
    icon: UserRound,
  },
  {
    title: "Instant Ideas",
    description: "Hotels, routes, food, and activities.",
    icon: Zap,
  },
  {
    title: "Live Help",
    description: "Refine your plan in real time.",
    icon: MessageCircle,
  },
];

const tripPicks = [
  {
    title: "Beach Stay",
    subtitle: "Sea-view",
    image: imagesByName.goa || imagesByName.andaman,
  },
  {
    title: "Sunset",
    subtitle: "Cruise",
    image: imagesByName.digha || imagesByName.goa,
  },
  {
    title: "Luxury",
    subtitle: "Resort",
    image: imagesByName.andaman || imagesByName.kashmir,
  },
];

export function AITravelAssistant() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.18,
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
      className={`premium-reveal-section relative overflow-hidden bg-[#02040a] px-3 py-12 text-white sm:px-5 sm:py-14 lg:px-8 lg:py-20 ${
        inView ? "is-visible" : ""
      }`}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_32%,rgba(14,165,233,0.16),transparent_30%),radial-gradient(circle_at_78%_44%,rgba(124,58,237,0.16),transparent_34%),linear-gradient(180deg,#02040a_0%,#040817_50%,#02040a_100%)]" />
        <div className="absolute bottom-0 left-0 h-[220px] w-full bg-[radial-gradient(circle_at_18%_100%,rgba(56,189,248,0.13),transparent_32%),radial-gradient(circle_at_80%_100%,rgba(168,85,247,0.12),transparent_34%)]" />
      </div>

      <div className="relative mx-auto grid w-[min(100%,1220px)] grid-cols-[0.42fr_0.58fr] items-center gap-3 sm:gap-5 lg:gap-10">
        <div className="premium-reveal-heading min-w-0">
          <div className="mb-3 inline-flex items-center gap-2 text-[8px] font-semibold uppercase tracking-[0.24em] text-cyan-200 sm:text-[10px] sm:tracking-[0.32em] lg:mb-5 lg:text-xs">
            <span className="grid size-7 place-items-center rounded-full bg-cyan-300/10 text-cyan-200 shadow-[0_0_28px_rgba(125,211,252,0.22)] sm:size-8 lg:size-9">
              <Sparkles size={14} />
            </span>
            Smart Planning
          </div>

          <h2 className="text-[clamp(1.55rem,7vw,4.8rem)] font-semibold leading-[0.92] tracking-[-0.065em] text-white">
            Chat with AI
            <span className="block bg-gradient-to-r from-violet-300 via-cyan-200 to-sky-300 bg-clip-text text-transparent">
              Assistant
            </span>
          </h2>

          <div className="mt-3 h-px w-16 bg-gradient-to-r from-violet-300 via-cyan-300 to-transparent sm:mt-4 sm:w-20 lg:mt-6 lg:w-28" />

          <p className="mt-3 max-w-xl text-[11px] leading-5 text-white/66 sm:text-sm sm:leading-6 lg:mt-5 lg:text-base lg:leading-8">
            Plan smarter with an AI companion that creates personalized journeys,
            recommends experiences, and helps you finalize trips faster.
          </p>

          <div className="mt-4 grid gap-2 sm:mt-5 sm:gap-3 lg:mt-7 lg:gap-4">
            {aiFeatures.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  style={{ "--reveal-delay": `${index * 80 + 160}ms` } as React.CSSProperties}
                  className="premium-reveal-card flex gap-2 sm:gap-3"
                >
                  <div className="grid size-8 shrink-0 place-items-center rounded-full border border-cyan-300/25 bg-cyan-300/10 text-cyan-200 shadow-[0_0_28px_rgba(125,211,252,0.12)] sm:size-10 lg:size-12">
                    <Icon size={16} className="sm:size-[18px] lg:size-[21px]" />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-[11px] font-semibold text-white sm:text-sm lg:text-base">
                      {feature.title}
                    </h3>
                    <p className="mt-0.5 max-w-md text-[9px] leading-4 text-white/56 sm:text-xs sm:leading-5 lg:text-sm lg:leading-6">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-4 flex flex-wrap gap-2 sm:mt-6 lg:mt-8">
            <button
              type="button"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 via-blue-500 to-violet-600 px-3 py-2 text-[10px] font-semibold text-white shadow-[0_18px_55px_rgba(56,189,248,0.18)] transition duration-300 hover:-translate-y-1 sm:px-4 sm:py-3 sm:text-xs lg:rounded-2xl lg:px-6 lg:py-4 lg:text-sm"
            >
              <WandSparkles size={14} />
              Start
              <ArrowRight size={14} className="transition group-hover:translate-x-1" />
            </button>
          </div>

          <div className="mt-4 hidden items-center gap-3 sm:flex lg:mt-7">
            <div className="flex -space-x-3">
              {[imagesByName.andaman, imagesByName.goa, imagesByName.kashmir].map((image, index) => (
                <div
                  key={index}
                  className="size-8 overflow-hidden rounded-full border-2 border-[#02040a] bg-white/10 lg:size-10"
                >
                  {image ? (
                    <img src={image} alt="" className="h-full w-full object-cover" />
                  ) : null}
                </div>
              ))}
            </div>

            <div>
              <div className="flex items-center gap-1 text-yellow-400">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={12} className="fill-current lg:size-[14px]" />
                ))}
              </div>
              <p className="mt-0.5 text-[10px] text-white/50 lg:text-sm">
                Trusted by 50K+
              </p>
            </div>
          </div>
        </div>

        <div
          className="premium-reveal-card min-w-0"
          style={{ "--reveal-delay": "220ms" } as React.CSSProperties}
        >
          <div className="ai-dashboard-shell relative mx-auto overflow-hidden rounded-2xl border border-white/12 bg-[#050b16]/82 p-2 shadow-[0_28px_95px_rgba(0,0,0,0.62)] backdrop-blur-2xl sm:p-3 lg:rounded-[2rem] lg:p-5">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(125,211,252,0.12),transparent_28%,transparent_72%,rgba(167,139,250,0.13))]" />

            <div className="relative z-10 grid gap-3 lg:grid-cols-[1fr_245px] xl:grid-cols-[1fr_275px]">
              <div className="min-w-0">
                <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-3">
                  <div className="flex min-w-0 items-center gap-2 sm:gap-3">
                    <div className="ai-bot-orb relative grid size-9 shrink-0 place-items-center rounded-full border border-cyan-300/25 bg-cyan-300/10 text-cyan-100 shadow-[0_0_35px_rgba(125,211,252,0.2)] sm:size-11 lg:size-13">
                      <Sparkles size={17} className="sm:size-[20px] lg:size-[24px]" />
                    </div>

                    <div className="min-w-0">
                      <h3 className="truncate text-xs font-semibold text-white sm:text-sm lg:text-lg">
                        AI Travel Assistant
                      </h3>
                      <p className="mt-0.5 flex items-center gap-1.5 text-[9px] text-white/55 sm:text-xs lg:text-sm">
                        <span className="size-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
                        Online
                      </p>
                    </div>
                  </div>

                  <div className="hidden items-center gap-2 md:flex">
                    <MiniCircle icon={<CalendarDays size={14} />} />
                    <MiniCircle icon={<Sparkles size={14} />} />
                  </div>
                </div>

                <div className="mt-3 space-y-3 lg:mt-4">
                  <div className="ml-auto max-w-[86%] rounded-2xl rounded-tr-md border border-cyan-300/20 bg-blue-600/24 px-3 py-2 text-[10px] leading-4 text-white shadow-[0_18px_60px_rgba(37,99,235,0.12)] sm:text-xs sm:leading-5 lg:px-5 lg:py-3.5 lg:text-sm lg:leading-6">
                    Plan a romantic 4-day trip to Goa with sunsets and sea-view stays.
                    <div className="mt-1 text-right text-[8px] text-white/45 sm:text-[10px]">
                      10:30 AM ✓
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <div className="hidden size-8 shrink-0 place-items-center rounded-full border border-violet-300/25 bg-violet-300/10 text-violet-200 sm:grid">
                      <Sparkles size={15} />
                    </div>

                    <div className="max-w-[88%] rounded-2xl rounded-tl-md border border-white/10 bg-white/[0.075] px-3 py-2 text-[10px] leading-4 text-white/88 sm:text-xs sm:leading-5 lg:px-5 lg:py-3.5 lg:text-sm lg:leading-6">
                      Perfect! I created a compact plan with romantic stays, beach experiences,
                      and relaxed day-by-day ideas.
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/18 p-2.5 lg:p-3">
                    <p className="mb-2 text-[9px] font-semibold text-white/74 sm:text-xs">
                      Top picks
                    </p>

                    <div className="grid grid-cols-3 gap-2">
                      {tripPicks.map((item) => (
                        <div
                          key={item.title}
                          className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.045] lg:rounded-2xl"
                        >
                          {item.image ? (
                            <img
                              src={item.image}
                              alt={item.title}
                              className="h-12 w-full object-cover sm:h-14 lg:h-20"
                              loading="eager"
                              decoding="async"
                              draggable={false}
                            />
                          ) : (
                            <div className="h-12 bg-white/5" />
                          )}

                          <div className="p-2">
                            <h4 className="truncate text-[9px] font-semibold text-white sm:text-[11px] lg:text-sm">
                              {item.title}
                            </h4>
                            <p className="mt-0.5 truncate text-[8px] text-white/50 sm:text-[10px] lg:text-xs">
                              {item.subtitle}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.055] p-2.5 sm:flex sm:items-center sm:gap-3">
                    {imagesByName.goa ? (
                      <img
                        src={imagesByName.goa}
                        alt="Suggested itinerary"
                        className="hidden h-20 w-24 rounded-xl object-cover sm:block lg:h-24 lg:w-28"
                        loading="eager"
                        decoding="async"
                        draggable={false}
                      />
                    ) : null}

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="truncate text-[10px] font-semibold text-white sm:text-xs lg:text-base">
                          Goa · 4 Days Itinerary
                        </h4>

                        <button
                          type="button"
                          className="hidden rounded-full bg-violet-300/12 px-3 py-1.5 text-[10px] font-medium text-violet-100 lg:block"
                        >
                          View Plan
                        </button>
                      </div>

                      <div className="mt-2 grid gap-1 text-[9px] text-white/64 sm:text-[10px] lg:text-sm">
                        <ItineraryRow day="Day 1" text="Arrival · Sunset Dinner" />
                        <ItineraryRow day="Day 2" text="North Goa · Cafes" />
                        <ItineraryRow day="Day 3" text="South Goa · Cruise" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-3">
                  <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/22 p-1.5 lg:rounded-2xl">
                    <input
                      aria-label="Ask AI travel assistant"
                      placeholder="Ask anything..."
                      className="min-w-0 flex-1 bg-transparent px-2 text-[10px] text-white outline-none placeholder:text-white/38 sm:text-xs lg:text-sm"
                    />

                    <button
                      type="button"
                      className="grid size-8 shrink-0 place-items-center rounded-full bg-gradient-to-r from-sky-500 to-violet-600 text-white shadow-[0_12px_35px_rgba(125,211,252,0.2)] transition hover:scale-105 sm:size-9 lg:size-11"
                      aria-label="Send message"
                    >
                      <Send size={14} />
                    </button>
                  </div>
                </div>
              </div>

              <aside className="hidden border-l border-white/10 pl-4 lg:block">
                <TripSummary />
                <PlanIncludes />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TripSummary() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.045] p-4">
      <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-white">
        <CalendarDays size={17} className="text-cyan-200" />
        Trip Summary
      </div>

      <div className="space-y-2.5">
        <SummaryRow icon={<MapPin size={15} />} label="Destination" value="Goa, India" />
        <SummaryRow icon={<CalendarDays size={15} />} label="Duration" value="3 Nights / 4 Days" />
        <SummaryRow icon={<Sparkles size={15} />} label="Style" value="Romantic" />
      </div>
    </div>
  );
}

function PlanIncludes() {
  return (
    <div className="mt-3 rounded-3xl border border-white/10 bg-white/[0.045] p-4">
      <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-white">
        <Bot size={17} className="text-violet-200" />
        Plan Includes
      </div>

      <div className="grid grid-cols-3 gap-2 text-center text-[11px] text-white/58">
        <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-2.5">
          Stay
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-2.5">
          Food
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-2.5">
          Cruise
        </div>
      </div>

      <button
        type="button"
        className="mt-3 w-full rounded-2xl bg-gradient-to-r from-sky-500 to-violet-600 px-4 py-2.5 text-xs font-semibold text-white shadow-[0_18px_60px_rgba(125,211,252,0.16)] transition hover:scale-[1.02]"
      >
        Customize
      </button>
    </div>
  );
}

function SummaryRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex gap-2 border-b border-white/10 pb-2 last:border-b-0 last:pb-0">
      <span className="mt-0.5 text-white/40">{icon}</span>
      <div>
        <p className="text-[10px] text-white/42">{label}</p>
        <p className="mt-0.5 text-xs font-medium text-white/88">{value}</p>
      </div>
    </div>
  );
}

function MiniCircle({ icon }: { icon: React.ReactNode }) {
  return (
    <button
      type="button"
      className="grid size-9 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/55 transition hover:border-cyan-300/35 hover:bg-cyan-300/10 hover:text-white"
    >
      {icon}
    </button>
  );
}

function ItineraryRow({ day, text }: { day: string; text: string }) {
  return (
    <div className="grid grid-cols-[42px_1fr] gap-2 lg:grid-cols-[52px_1fr]">
      <span className="font-medium text-white/86">{day}</span>
      <span className="truncate">{text}</span>
    </div>
  );
}