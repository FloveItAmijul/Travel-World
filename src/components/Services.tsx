
import { useInView } from "react-intersection-observer";

import {
  ArrowRight,
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
    title: "Tailor-Made Trips",
    description: "Personalized itineraries crafted around your passions, pace, and preferences.",
    icon: Map,
    image: "andaman",
    featured: true,
    accent: "cyan",
  },
  {
    title: "Luxury Hotel Booking",
    description: "Handpicked luxury stays that blend comfort, style, and exclusive experiences.",
    icon: Building2,
    image: "hotel",
    accent: "blue",
  },
  {
    title: "Flight & Visa Assistance",
    description: "Seamless travel arrangements and visa support for a stress-free journey.",
    icon: Plane,
    image: "flight",
    accent: "cyan",
  },
  {
    title: "Honeymoon Packages",
    description: "Romantic getaways designed to create timeless memories together.",
    icon: Heart,
    image: "honeymoon",
    accent: "violet",
  },
  {
    title: "Group Tours",
    description: "Curated group experiences that bring people together through unforgettable journeys.",
    icon: UsersRound,
    image: "group",
    accent: "blue",
  },
  {
    title: "AI Trip Planning",
    description: "Smart recommendations and real-time planning tailored just for you.",
    icon: Bot,
    image: "ai",
    accent: "violet",
  },
];

export function Services() {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.18,
  });

  return (
    <section
    id="services"
    ref={ref}
    className={`premium-reveal-section relative overflow-hidden bg-[#02040a] px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-8 lg:py-28 ${
      inView ? "is-visible" : ""
    }`}
  >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-16 h-px w-[520px] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent" />
        <div className="absolute left-[8%] top-28 size-72 rounded-full border border-cyan-200/10" />
        <div className="absolute right-[8%] top-32 size-80 rounded-full border border-violet-300/10" />
        <div className="absolute left-1/2 top-20 size-[620px] -translate-x-1/2 rounded-full bg-cyan-300/[0.035] blur-3xl" />
        <div className="absolute bottom-0 right-0 size-[520px] rounded-full bg-violet-500/[0.06] blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(125,211,252,0.08),transparent_28%),radial-gradient(circle_at_80%_30%,rgba(167,139,250,0.07),transparent_30%)]" />
      </div>

      <div className="relative mx-auto w-[min(100%,1180px)]">
        <div className="premium-reveal-heading mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.42em] text-cyan-200">
            What We Offer
          </p>

          <h2 className="mt-5 text-[clamp(2.6rem,8vw,4.3rem)] font-semibold leading-[0.95] tracking-[-0.06em] text-white">
            Signature Travel Services
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/58 sm:text-base sm:leading-8">
            From custom itineraries to premium stays, we design every detail of your
            journey with care.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <article
                  key={service.title}
                  style={{ "--reveal-delay": `${index * 90}ms` } as React.CSSProperties}
                  className={`premium-reveal-card group relative min-h-[270px] overflow-hidden rounded-[1.8rem] border bg-white/[0.045] p-7 shadow-[0_24px_90px_rgba(0,0,0,0.38)] backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:bg-white/[0.07] ${
                  service.featured
                    ? "border-cyan-200/45 shadow-[0_24px_110px_rgba(125,211,252,0.16)]"
                    : "border-white/12 hover:border-cyan-200/30"
                }`}
              >
                <div className={`service-card-bg service-bg-${service.image}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#02040a]/90 via-[#02040a]/62 to-[#02040a]/36" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(125,211,252,0.12),transparent_28%)] opacity-70 transition group-hover:opacity-100" />

                {service.featured && (
                  <div className="absolute right-5 top-5 inline-flex items-center gap-1.5 rounded-full border border-cyan-200/25 bg-cyan-200/10 px-3 py-1 text-[11px] font-medium text-cyan-100 backdrop-blur-xl">
                    <BadgeCheck size={13} />
                    Most Popular
                  </div>
                )}

                <div className="relative z-10 flex min-h-[216px] flex-col">
                  <div
                    className={`grid size-16 place-items-center rounded-full border bg-white/[0.055] backdrop-blur-xl ${
                      service.accent === "violet"
                        ? "border-violet-300/25 text-violet-200 shadow-[0_0_40px_rgba(167,139,250,0.12)]"
                        : "border-cyan-300/25 text-cyan-200 shadow-[0_0_40px_rgba(125,211,252,0.12)]"
                    }`}
                  >
                    <Icon size={28} strokeWidth={1.7} />
                  </div>

                  <div className="mt-auto">
                    <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white">
                      {service.title}
                    </h3>

                    <div
                      className={`mt-4 h-px w-10 ${
                        service.accent === "violet"
                          ? "bg-violet-300"
                          : "bg-cyan-300"
                      }`}
                    />

                    <p className="mt-4 max-w-sm text-sm leading-7 text-white/64">
                      {service.description}
                    </p>
                  </div>

                  <button
                    type="button"
                    aria-label={`Explore ${service.title}`}
                    className="absolute bottom-0 right-0 grid size-11 place-items-center rounded-full border border-white/12 bg-white/[0.045] text-white/80 transition duration-300 group-hover:border-cyan-200/40 group-hover:bg-cyan-200/10 group-hover:text-white"
                  >
                    <ArrowRight size={18} />
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mx-auto mt-10 flex max-w-2xl items-center justify-center gap-4 rounded-full border border-white/10 bg-white/[0.035] px-5 py-4 text-center text-sm text-white/58 backdrop-blur-xl">
          <span className="grid size-10 shrink-0 place-items-center rounded-full border border-cyan-200/20 bg-cyan-200/10 text-cyan-200">
            <Sparkles size={18} />
          </span>
          <p>
            Every service is designed to{" "}
            <span className="text-cyan-200">exceed expectations</span> and elevate
            your journey.
          </p>
        </div>
      </div>
    </section>
  );
}