import { ArrowRight, Globe2, MapPin, Plane, Sparkles } from "lucide-react";
import worldImage from "../assets/world.jpeg";

const stats = [
  {
    value: "120+",
    label: "Destinations",
    icon: MapPin,
  },
  {
    value: "50K+",
    label: "Travelers",
    icon: Globe2,
  },
  {
    value: "24/7",
    label: "Support",
    icon: Sparkles,
  },
];

export function GlobalJourney() {
  return (
    <section
      id="global-journey"
      className="relative overflow-hidden bg-[#02040a] px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="gold-sparkle-layer" aria-hidden="true">
        {Array.from({ length: 34 }).map((_, index) => (
          <span
            key={index}
            className="gold-sparkle"
            style={
              {
                "--x": `${Math.random() * 100}%`,
                "--y": `${Math.random() * 100}%`,
                "--delay": `${Math.random() * 7}s`,
                "--duration": `${5 + Math.random() * 7}s`,
                "--size": `${2 + Math.random() * 4}px`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#02040a_0%,#070713_48%,#02040a_100%)]" />
        <div className="absolute right-0 top-1/2 size-[620px] -translate-y-1/2 rounded-full bg-amber-300/[0.08] blur-3xl" />
        <div className="absolute left-0 bottom-0 size-[420px] rounded-full bg-cyan-300/[0.04] blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_48%,rgba(250,204,21,0.16),transparent_32%),radial-gradient(circle_at_20%_30%,rgba(125,211,252,0.06),transparent_28%)]" />
      </div>

      <div className="relative mx-auto grid w-[min(100%,1280px)] items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="max-w-2xl">
          <div className="mb-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.38em] text-amber-200">
            <span className="grid size-9 place-items-center rounded-full border border-amber-300/25 bg-amber-300/10 text-amber-200 shadow-[0_0_35px_rgba(251,191,36,0.2)]">
              <Sparkles size={17} />
            </span>
            Global Travel Network
          </div>

          <h2 className="text-[clamp(3rem,8vw,5.4rem)] font-semibold leading-[0.95] tracking-[-0.065em] text-white">
            Journeys Beyond
            <span className="block bg-gradient-to-r from-amber-200 via-yellow-100 to-cyan-200 bg-clip-text text-transparent">
              Borders
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-white/66 sm:text-lg">
            Explore the world with carefully designed journeys, trusted global
            partners, seamless planning, and premium experiences tailored around you.
          </p>

          <div className="mt-9 grid max-w-xl grid-cols-3 gap-3 sm:gap-4">
            {stats.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl"
                >
                  <Icon className="text-amber-200" size={22} />
                  <p className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
                    {item.value}
                  </p>
                  <p className="mt-1 text-xs text-white/50 sm:text-sm">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>

          <button
            type="button"
            className="group mt-9 inline-flex items-center gap-4 rounded-full border border-amber-300/35 bg-amber-300/10 px-6 py-4 text-sm font-semibold text-white shadow-[0_20px_70px_rgba(251,191,36,0.12)] transition duration-300 hover:-translate-y-1 hover:border-amber-200/70 hover:bg-amber-300/15"
          >
            Explore Global Trips
            <span className="grid size-9 place-items-center rounded-full bg-white text-[#02040a] transition group-hover:translate-x-1">
              <ArrowRight size={18} />
            </span>
          </button>
        </div>

        <div className="relative min-h-[340px] sm:min-h-[460px] lg:min-h-[560px]">
          <div className="absolute inset-0 rounded-full bg-amber-300/10 blur-3xl" />

          <img
            src={worldImage}
            alt="Glowing golden world map"
            className="global-world-image absolute inset-0 h-full w-full object-contain object-right"
            draggable={false}
          />

          <div className="absolute right-[18%] top-[48%] hidden h-px w-[360px] rotate-[-8deg] bg-gradient-to-r from-transparent via-amber-200/70 to-transparent sm:block" />

          <Plane
            className="absolute right-[12%] top-[38%] hidden rotate-[-12deg] text-white/70 drop-shadow-[0_0_28px_rgba(251,191,36,0.55)] lg:block"
            size={120}
            strokeWidth={1.1}
          />
        </div>
      </div>
    </section>
  );
}