import { useInView } from "react-intersection-observer";
import {
  BriefcaseBusiness,
  CalendarDays,
  Check,
  Diamond,
  Handshake,
  Heart,
  Headphones,
  Lock,
  MapPin,
  Plane,
  ShieldCheck,
  Sparkles,
  Star,
  TicketCheck,
  UsersRound,
  Wallet,
} from "lucide-react";

const reasons = [

  {
    title: "Trusted Global Partners",
    description: "Premium hotels, airlines, and local experts you can rely on.",
    icon: Handshake,
    accent: "violet",
  },
  {
    title: "Seamless Planning",
    description: "From idea to return, we handle every travel detail smoothly.",
    icon: BriefcaseBusiness,
    accent: "cyan",
  },
  {
    title: "24 / 7 Travel Support",
    description: "Help before, during, and after your journey whenever needed.",
    icon: Headphones,
    accent: "violet",
  },
  {
    title: "Low Cost Packages",
    description: "Smartly planned trips with premium value at better prices.",
    icon: Wallet,
    accent: "cyan",
  },
  {
    title: "Good Memories",
    description: "Meaningful experiences crafted to stay with you forever.",
    icon: Sparkles,
    accent: "violet",
  },
  {
    title: "Visa Assistance",
    description: "Guidance and support for smoother visa documentation.",
    icon: TicketCheck,
    accent: "cyan",
  },

];

const stats = [
  {
    value: "50K+",
    label: "Happy Travelers",
    icon: UsersRound,
    accent: "cyan",
  },
  {
    value: "98%",
    label: "Satisfaction Rate",
    icon: Star,
    accent: "violet",
  },
  {
    value: "120+",
    label: "Destinations",
    icon: MapPin,
    accent: "cyan",
  },
  {
    value: "24/7",
    label: "Support",
    icon: Headphones,
    accent: "violet",
  },
];

const promiseItems = [
  {
    title: "Secure Booking",
    description: "Your data is protected",
    icon: Lock,
    accent: "cyan",
  },
  {
    title: "Best Price Guarantee",
    description: "Premium value always",
    icon: Diamond,
    accent: "cyan",
  },
  {
    title: "Flexible Plans",
    description: "Itineraries that adapt",
    icon: CalendarDays,
    accent: "cyan",
  },
  {
    title: "Travel with Purpose",
    description: "Support local communities",
    icon: Heart,
    accent: "violet",
  },
];

export function WhyChooseUs() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.18,
  });

  return (
    <section
      id="why-choose-us"
      ref={ref}
      className={`premium-reveal-section relative overflow-hidden bg-[#02040a] px-3 py-14 text-white sm:px-5 sm:py-18 lg:px-8 lg:py-28 ${
        inView ? "is-visible" : ""
      }`}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#02040a_0%,#040817_48%,#02040a_100%)]" />
        <div className="absolute right-0 top-0 h-[360px] w-[520px] rounded-full bg-cyan-300/[0.055] blur-3xl lg:h-[520px] lg:w-[760px]" />
        <div className="absolute right-[14%] top-6 hidden h-[360px] w-[660px] rounded-full border border-cyan-300/12 lg:block" />
        <div className="absolute right-[3%] top-20 hidden h-[260px] w-[520px] rounded-full border border-violet-300/12 lg:block" />

        <div className="why-globe absolute left-1/2 top-6 h-[210px] w-[420px] -translate-x-1/2 opacity-55 sm:left-auto sm:right-[-80px] sm:top-0 sm:h-[260px] sm:w-[560px] sm:translate-x-0 sm:opacity-70 lg:-right-16 lg:h-[360px] lg:w-[720px] lg:opacity-90">
        <div className="absolute inset-0 rounded-b-full bg-[radial-gradient(circle_at_46%_42%,rgba(125,211,252,0.24),rgba(30,64,175,0.12)_34%,rgba(2,4,10,0)_66%)]" />

        <div className="absolute left-10 top-0 h-[190px] w-[360px] rounded-b-full border-b border-cyan-300/22 bg-[radial-gradient(circle_at_52%_20%,rgba(255,255,255,0.12),transparent_9%),radial-gradient(circle_at_50%_38%,rgba(125,211,252,0.18),transparent_35%),linear-gradient(180deg,rgba(30,64,175,0.14),rgba(2,4,10,0.02))] sm:left-12 sm:h-[240px] sm:w-[480px] lg:left-16 lg:h-[330px] lg:w-[620px]" />

        <Plane
            className="absolute right-16 top-20 rotate-[-8deg] text-white/58 drop-shadow-[0_0_24px_rgba(125,211,252,0.5)] sm:right-20 sm:top-24 sm:text-white/64 lg:right-20 lg:top-28 lg:text-white/70"
            size={105}
            strokeWidth={1.1}
        />

        <div className="absolute left-16 top-30 h-px w-[310px] rotate-[-5deg] bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent sm:left-20 sm:top-36 sm:w-[430px] lg:left-28 lg:top-44 lg:w-[520px]" />
        </div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_24%,rgba(125,211,252,0.08),transparent_30%),radial-gradient(circle_at_70%_80%,rgba(167,139,250,0.08),transparent_34%)]" />
      </div>

      <div className="relative mx-auto w-[min(100%,1280px)]">
        <div className="premium-reveal-heading max-w-3xl">
          <div className="mb-3 flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.28em] text-cyan-200 sm:mb-4 sm:text-xs sm:tracking-[0.36em] lg:mb-5">
            Why Choose Us
            <span className="h-px w-16 bg-gradient-to-r from-cyan-300 via-cyan-300/50 to-transparent sm:w-24 lg:w-28" />
          </div>

          <h2 className="text-[clamp(2.4rem,8vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.065em] text-white">
            Why Choose Us
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/66 sm:text-base sm:leading-8 lg:mt-6 lg:text-lg">
            We combine deep expertise, trusted partnerships, affordable planning,
            and personalized care to craft extraordinary journeys you’ll never forget.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-[1fr_92px] gap-3 sm:mt-10 sm:grid-cols-[1fr_170px] sm:gap-4 lg:mt-12 xl:grid-cols-[1fr_290px] xl:gap-5">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              const isViolet = reason.accent === "violet";

              return (
                <article
                  key={reason.title}
                  style={{ "--reveal-delay": `${index * 70}ms` } as React.CSSProperties}
                  className={`premium-reveal-card group relative min-h-[126px] overflow-hidden rounded-[1.1rem] border bg-white/[0.035] p-3 shadow-[0_18px_55px_rgba(0,0,0,0.34)] transition duration-500 hover:-translate-y-1 sm:min-h-[150px] sm:rounded-[1.3rem] sm:p-4 lg:min-h-[170px] lg:rounded-[1.45rem] lg:p-5 ${
                    isViolet
                      ? "border-violet-300/22 hover:border-violet-300/55 hover:shadow-[0_24px_80px_rgba(167,139,250,0.14)]"
                      : "border-cyan-300/20 hover:border-cyan-300/55 hover:shadow-[0_24px_80px_rgba(125,211,252,0.14)]"
                  }`}
                >
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.07),transparent_36%,rgba(125,211,252,0.035))]" />

                  <div
                    className={`absolute -right-10 -top-10 size-24 rounded-full blur-2xl transition duration-500 group-hover:opacity-100 ${
                      isViolet ? "bg-violet-400/14" : "bg-cyan-300/14"
                    }`}
                  />

                  <div className="relative flex items-start gap-2.5 sm:gap-3 lg:gap-4">
                    <div
                      className={`grid size-9 shrink-0 place-items-center rounded-full border bg-white/[0.045] sm:size-11 lg:size-13 ${
                        isViolet
                          ? "border-violet-300/28 text-violet-200 shadow-[0_0_35px_rgba(167,139,250,0.13)]"
                          : "border-cyan-300/28 text-cyan-200 shadow-[0_0_35px_rgba(125,211,252,0.13)]"
                      }`}
                    >
                      <Icon size={17} strokeWidth={1.55} className="sm:size-[21px] lg:size-[25px]" />
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-[11px] font-semibold leading-tight tracking-[-0.035em] text-white sm:text-sm lg:text-lg">
                        {reason.title}
                      </h3>

                      <p className="mt-1.5 text-[9px] leading-4 text-white/58 sm:mt-2 sm:text-xs sm:leading-5 lg:mt-3 lg:text-sm lg:leading-6">
                        {reason.description}
                      </p>

                      <div
                        className={`mt-2 h-px w-7 sm:mt-3 sm:w-9 lg:mt-4 lg:w-10 ${
                          isViolet ? "bg-violet-300" : "bg-cyan-300"
                        }`}
                      />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <aside
            style={{ "--reveal-delay": "260ms" } as React.CSSProperties}
            className="premium-reveal-card rounded-[1.1rem] border border-white/12 bg-white/[0.035] p-3 shadow-[0_22px_70px_rgba(0,0,0,0.38)] sm:rounded-[1.5rem] sm:p-4 xl:rounded-[1.8rem] xl:p-6"
          >
            <div className="space-y-3 sm:space-y-4 xl:space-y-6">
              {stats.map((stat) => {
                const Icon = stat.icon;
                const isViolet = stat.accent === "violet";

                return (
                  <div
                    key={stat.label}
                    className="grid gap-2 border-b border-white/10 pb-3 last:border-b-0 last:pb-0 sm:flex sm:gap-3 sm:pb-4 xl:gap-5 xl:pb-6"
                  >
                    <div
                      className={`grid size-9 shrink-0 place-items-center rounded-full border bg-white/[0.045] sm:size-12 xl:size-16 ${
                        isViolet
                          ? "border-violet-300/25 text-violet-200"
                          : "border-cyan-300/25 text-cyan-200"
                      }`}
                    >
                      <Icon size={17} strokeWidth={1.55} className="sm:size-[22px] xl:size-[28px]" />
                    </div>

                    <div>
                      <p
                        className={`text-base font-semibold tracking-[0.02em] sm:text-2xl xl:text-4xl ${
                          isViolet ? "text-violet-200" : "text-cyan-200"
                        }`}
                      >
                        {stat.value}
                      </p>
                      <p className="mt-0.5 text-[9px] leading-4 text-white/62 sm:text-xs xl:mt-2 xl:text-sm">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </aside>
        </div>

        <div
          style={{ "--reveal-delay": "420ms" } as React.CSSProperties}
          className="premium-reveal-card mt-5 overflow-hidden rounded-[1.2rem] border border-cyan-300/24 bg-white/[0.035] shadow-[0_0_55px_rgba(125,211,252,0.08)] sm:mt-6 lg:mt-8 lg:rounded-[1.6rem]"
        >
          <div className="grid grid-cols-[1.4fr_repeat(4,1fr)]">
            <div className="flex items-center gap-2 border-r border-white/10 p-3 sm:gap-4 sm:p-4 lg:gap-5 lg:p-6">
              <div className="grid size-10 shrink-0 place-items-center rounded-xl border border-cyan-300/25 bg-cyan-300/10 text-cyan-200 sm:size-12 lg:size-16 lg:rounded-2xl">
                <ShieldCheck size={20} className="sm:size-[25px] lg:size-[32px]" />
              </div>

              <div className="min-w-0">
                <h3 className="text-[11px] font-semibold text-white sm:text-sm lg:text-lg">
                  Your Journey, Our Promise
                </h3>
                <p className="mt-1 text-[8px] leading-3 text-white/58 sm:text-[11px] sm:leading-5 lg:mt-2 lg:text-sm lg:leading-6">
                  Premium quality and unforgettable memories.
                </p>
              </div>
            </div>

            {promiseItems.map((item) => {
              const Icon = item.icon;
              const isViolet = item.accent === "violet";

              return (
                <div
                  key={item.title}
                  className="flex items-center gap-2 border-r border-white/10 p-3 last:border-r-0 sm:gap-3 sm:p-4 lg:gap-4 lg:p-6"
                >
                  <Icon
                    size={16}
                    className={isViolet ? "shrink-0 text-violet-300 sm:size-[22px] lg:size-[26px]" : "shrink-0 text-cyan-300 sm:size-[22px] lg:size-[26px]"}
                    strokeWidth={1.6}
                  />
                  <div className="min-w-0">
                    <h4 className="truncate text-[9px] font-semibold text-white sm:text-xs lg:text-sm">
                      {item.title}
                    </h4>
                    <p className="mt-0.5 hidden text-[8px] leading-3 text-white/52 sm:block lg:text-xs lg:leading-5">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="pointer-events-none absolute -left-5 -top-5 hidden size-3 rounded-full bg-cyan-300 shadow-[0_0_32px_rgba(125,211,252,1)] lg:block" />
        <Check
          className="pointer-events-none absolute bottom-12 left-12 hidden text-cyan-200/20 lg:block"
          size={90}
          strokeWidth={0.7}
        />
      </div>
    </section>
  );
}