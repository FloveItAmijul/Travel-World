import { useInView } from "react-intersection-observer";

import {
  BadgeCheck,
  Bot,
  Building2,
  Heart,
  Map,
  Plane,
  Sparkles,
  UsersRound,
} from "lucide-react";

const services = [
  {
    title: "Outings & Activities",
    items: ["Day Out", "Dineout", "Summer Camp", "Event", "Clubbing"],
    icon: Map,
    image: "andaman",
    featured: true,
    accent: "gold",
  },
  {
    title: "Travel & Leisure",
    items: ["Hotels", "Cruise", "Spa", "Golf", "Luxury Holidays"],
    icon: Building2,
    image: "hotel",
    accent: "gold",
  },
  {
    title: "Flight & Visa Assistance",
    items: [
      "Domestic Flights",
      "International Flights",
      "Visa Support",
      "Travel Documents",
      "Airport Help",
    ],
    icon: Plane,
    image: "flight",
    accent: "ice",
  },
  {
    title: "Honeymoon Packages",
    items: [
      "Romantic Stays",
      "Couple Experiences",
      "Candlelight Dinner",
      "Private Transfers",
      "Custom Itinerary",
    ],
    icon: Heart,
    image: "honeymoon",
    accent: "gold",
  },
  {
    title: "Fitness & Dance Classes",
    items: ["Yoga", "Zumba", "Dance", "Aerobic", "Gym"],
    icon: UsersRound,
    image: "group",
    accent: "ice",
  },
  {
    title: "AI Trip Planning",
    items: [
      "Smart Itinerary",
      "Destination Ideas",
      "Budget Planning",
      "Hotel Suggestions",
      "Instant Travel Help",
    ],
    icon: Bot,
    image: "ai",
    accent: "gold",
  },
];

export function Services() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.16,
  });

  return (
    <section
      id="services"
      ref={ref}
      className={`premium-reveal-section theme-section-bg relative overflow-hidden px-4 py-14 text-[var(--color-text)] sm:px-5 sm:py-16 md:px-6 md:py-18 lg:px-8 lg:py-22 xl:py-28 ${
        inView ? "is-visible" : ""
      }`}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-10 h-px w-[min(520px,78vw)] -translate-x-1/2 bg-gradient-to-r from-transparent via-[var(--color-primary)]/60 to-transparent md:top-14 xl:top-16" />
        <div className="absolute left-1/2 top-10 size-1.5 -translate-x-1/2 rounded-full bg-[var(--color-primary)] shadow-[0_0_28px_var(--color-primary-glow)] md:top-14 xl:top-16" />

        <div className="absolute left-[5%] top-20 size-44 rounded-full border border-[color:var(--color-primary)]/8 md:size-60 xl:left-[8%] xl:top-28 xl:size-72" />
        <div className="absolute right-[4%] top-28 size-52 rounded-full border border-[color:var(--color-secondary)]/8 md:size-64 xl:right-[8%] xl:top-32 xl:size-80" />
        <div className="absolute left-1/2 top-20 size-[360px] -translate-x-1/2 rounded-full bg-[color:var(--color-primary)]/5 blur-3xl md:size-[460px] xl:size-[620px]" />
        <div className="absolute bottom-0 right-0 size-[320px] rounded-full bg-[color:var(--color-secondary)]/6 blur-3xl md:size-[420px] xl:size-[520px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(243,201,121,0.08),transparent_28%),radial-gradient(circle_at_80%_30%,rgba(224,247,255,0.06),transparent_30%)]" />
      </div>

      <div className="relative mx-auto w-[min(100%,1180px)]">
        <div className="premium-reveal-heading mx-auto max-w-3xl text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[var(--color-primary)] sm:text-xs sm:tracking-[0.42em]">
            What We Offer
          </p>

          <h2 className="mt-4 text-[clamp(2.25rem,8vw,3.7rem)] font-semibold leading-[0.95] tracking-[-0.06em] text-[var(--color-text)] md:mt-5 md:text-[clamp(2.7rem,5.4vw,4.1rem)] xl:text-[clamp(2.8rem,8vw,4.3rem)]">
            Signature Travel Services
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-xs leading-6 text-[var(--color-text-soft)] sm:text-sm sm:leading-7 md:mt-5 md:text-sm md:leading-7 xl:mt-6 xl:text-base xl:leading-8">
            From custom experiences to premium stays, we design every detail of
            your journey with care.
          </p>
        </div>

        <div className="mt-9 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-4 md:mt-12 md:grid-cols-3 md:gap-4 lg:gap-5 xl:mt-14">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isIce = service.accent === "ice";

            return (
              <article
                key={service.title}
                style={
                  { "--reveal-delay": `${index * 80}ms` } as React.CSSProperties
                }
                className={`premium-reveal-card group relative min-h-[188px] overflow-hidden rounded-[1.15rem] border bg-[var(--color-surface)] p-3.5 shadow-[0_18px_55px_rgba(0,0,0,0.3)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:bg-[var(--color-surface-strong)] sm:min-h-[218px] sm:rounded-[1.35rem] sm:p-4 md:min-h-[235px] md:rounded-[1.55rem] md:p-5 lg:min-h-[255px] xl:min-h-[270px] xl:rounded-[1.8rem] xl:p-7 ${
                  service.featured
                    ? "border-[color:var(--color-primary)]/45 shadow-[var(--shadow-primary)]"
                    : isIce
                      ? "border-[color:var(--color-secondary)]/18 hover:border-[color:var(--color-secondary)]/42 hover:shadow-[var(--shadow-secondary)]"
                      : "border-[color:var(--color-border)] hover:border-[color:var(--color-primary)]/35 hover:shadow-[var(--shadow-primary)]"
                }`}
              >
                <div className={`service-card-bg service-bg-${service.image}`} />

                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)]/94 via-[var(--color-bg)]/66 to-[var(--color-bg)]/36" />

                <div
                  className={`absolute inset-0 opacity-75 transition group-hover:opacity-100 ${
                    isIce
                      ? "bg-[radial-gradient(circle_at_18%_20%,rgba(224,247,255,0.12),transparent_28%)]"
                      : "bg-[radial-gradient(circle_at_18%_20%,rgba(243,201,121,0.13),transparent_28%)]"
                  }`}
                />

                {service.featured && (
                  <div className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full border border-[color:var(--color-primary)]/25 bg-[color:rgba(243,201,121,0.12)] px-2 py-1 text-[8px] font-medium text-[var(--color-primary-soft)] backdrop-blur-xl sm:right-4 sm:top-4 sm:text-[10px] xl:right-5 xl:top-5 xl:px-3 xl:text-[11px]">
                    <BadgeCheck size={11} className="sm:size-[12px] xl:size-[13px]" />
                    <span className="hidden sm:inline">Most Popular</span>
                    <span className="sm:hidden">Popular</span>
                  </div>
                )}

                <div className="relative z-10 flex min-h-[160px] flex-col sm:min-h-[186px] md:min-h-[195px] lg:min-h-[212px] xl:min-h-[216px]">
                  <div
                    className={`grid size-11 place-items-center rounded-full border bg-white/[0.055] backdrop-blur-xl sm:size-13 md:size-14 xl:size-16 ${
                      isIce
                        ? "border-[color:var(--color-secondary)]/25 text-[var(--color-secondary)] shadow-[var(--shadow-secondary)]"
                        : "border-[color:var(--color-primary)]/28 text-[var(--color-primary-soft)] shadow-[var(--shadow-primary)]"
                    }`}
                  >
                    <Icon
                      size={20}
                      strokeWidth={1.7}
                      className="sm:size-[23px] md:size-[25px] xl:size-[28px]"
                    />
                  </div>

                  <div className="mt-auto">
                    <h3 className="text-[15px] font-semibold leading-tight tracking-[-0.045em] text-[var(--color-text)] sm:text-lg md:text-xl xl:text-2xl">
                      {service.title}
                    </h3>

                    <div
                      className={`mt-3 h-px w-8 sm:w-9 xl:mt-4 xl:w-10 ${
                        isIce
                          ? "bg-[var(--color-secondary)]"
                          : "bg-[var(--color-primary)]"
                      }`}
                    />

                    <ul className="mt-3 grid grid-cols-1 gap-1.5 text-[10px] leading-4 text-[var(--color-text-soft)] sm:grid-cols-2 sm:text-xs sm:leading-5 md:text-xs md:leading-5 lg:text-sm lg:leading-6 xl:mt-4 xl:text-sm xl:leading-6">
                      {service.items.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span
                            className={`mt-1.5 size-1.5 shrink-0 rounded-full ${
                              isIce
                                ? "bg-[var(--color-secondary)]"
                                : "bg-[var(--color-primary)]"
                            }`}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="theme-card mx-auto mt-7 flex max-w-2xl items-center justify-center gap-3 rounded-2xl px-4 py-4 text-center text-xs leading-6 text-[var(--color-text-soft)] sm:mt-8 sm:rounded-full sm:text-sm md:mt-9 xl:mt-10">
          <span className="grid size-9 shrink-0 place-items-center rounded-full border border-[color:var(--color-primary)]/25 bg-[color:rgba(243,201,121,0.1)] text-[var(--color-primary)] sm:size-10">
            <Sparkles size={17} className="sm:size-[18px]" />
          </span>

          <p>
            Every service is designed to{" "}
            <span className="text-[var(--color-primary)]">
              exceed expectations
            </span>{" "}
            and elevate your journey.
          </p>
        </div>
      </div>
    </section>
  );
}