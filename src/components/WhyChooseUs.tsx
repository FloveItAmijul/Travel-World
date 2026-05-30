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
    accent: "gold",
  },
  {
    title: "Seamless Planning",
    description: "From idea to return, we handle every travel detail smoothly.",
    icon: BriefcaseBusiness,
    accent: "ice",
  },
  {
    title: "24 / 7 Travel Support",
    description: "Help before, during, and after your journey whenever needed.",
    icon: Headphones,
    accent: "gold",
  },
  {
    title: "Low Cost Packages",
    description: "Smartly planned trips with premium value at better prices.",
    icon: Wallet,
    accent: "ice",
  },
  {
    title: "Good Memories",
    description: "Meaningful experiences crafted to stay with you forever.",
    icon: Sparkles,
    accent: "gold",
  },
  {
    title: "Visa Assistance",
    description: "Guidance and support for smoother visa documentation.",
    icon: TicketCheck,
    accent: "ice",
  },
];

const stats = [
  {
    value: "3K+",
    label: "Happy Travelers",
    icon: UsersRound,
    accent: "gold",
  },
  {
    value: "94%",
    label: "Satisfaction Rate",
    icon: Star,
    accent: "ice",
  },
  {
    value: "120+",
    label: "Destinations",
    icon: MapPin,
    accent: "gold",
  },
  {
    value: "24/7",
    label: "Support",
    icon: Headphones,
    accent: "ice",
  },
];

const promiseItems = [
  {
    title: "Secure Booking",
    description: "Your data is protected",
    icon: Lock,
    accent: "ice",
  },
  {
    title: "Best Price Guarantee",
    description: "Premium value always",
    icon: Diamond,
    accent: "gold",
  },
  {
    title: "Flexible Plans",
    description: "Itineraries that adapt",
    icon: CalendarDays,
    accent: "ice",
  },
  {
    title: "Travel with Purpose",
    description: "Support local communities",
    icon: Heart,
    accent: "gold",
  },
];

export function WhyChooseUs() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.16,
  });

  return (
    <section
      id="why-choose-us"
      ref={ref}
      className={`premium-reveal-section theme-section-bg relative overflow-hidden px-4 py-14 text-[var(--color-text)] sm:px-5 sm:py-16 md:px-6 md:py-[4.5rem] lg:px-8 lg:py-22 xl:py-28 ${
        inView ? "is-visible" : ""
      }`}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-[300px] w-[420px] rounded-full bg-[color:var(--color-primary)]/6 blur-3xl md:h-[360px] md:w-[560px] xl:h-[520px] xl:w-[760px]" />

        <div className="absolute right-[10%] top-5 hidden h-[260px] w-[430px] rounded-full border border-[color:var(--color-primary)]/10 md:block lg:h-[310px] lg:w-[560px] xl:right-[14%] xl:h-[360px] xl:w-[660px]" />
        <div className="absolute right-[2%] top-16 hidden h-[190px] w-[350px] rounded-full border border-[color:var(--color-secondary)]/10 md:block lg:h-[230px] lg:w-[450px] xl:right-[3%] xl:top-20 xl:h-[260px] xl:w-[520px]" />

        <div className="why-globe absolute left-1/2 top-6 h-[170px] w-[330px] -translate-x-1/2 opacity-40 sm:left-auto sm:right-[-90px] sm:top-0 sm:h-[220px] sm:w-[460px] sm:translate-x-0 sm:opacity-55 md:right-[-120px] md:h-[245px] md:w-[500px] md:opacity-62 lg:right-[-105px] lg:h-[290px] lg:w-[600px] xl:-right-16 xl:h-[360px] xl:w-[720px] xl:opacity-90">
          <div className="absolute inset-0 rounded-b-full bg-[radial-gradient(circle_at_46%_42%,rgba(243,201,121,0.2),rgba(224,247,255,0.09)_34%,rgba(2,4,10,0)_66%)]" />

          <div className="absolute left-8 top-0 h-[150px] w-[285px] rounded-b-full border-b border-[color:var(--color-primary)]/22 bg-[radial-gradient(circle_at_52%_20%,rgba(255,255,255,0.12),transparent_9%),radial-gradient(circle_at_50%_38%,rgba(243,201,121,0.13),transparent_35%),linear-gradient(180deg,rgba(184,135,52,0.12),rgba(2,4,10,0.02))] sm:left-10 sm:h-[195px] sm:w-[380px] md:left-12 md:h-[215px] md:w-[430px] lg:h-[260px] lg:w-[520px] xl:left-16 xl:h-[330px] xl:w-[620px]" />

          <Plane
            className="absolute right-14 top-14 rotate-[-8deg] text-white/48 drop-shadow-[0_0_24px_var(--color-primary-glow)] sm:right-18 sm:top-18 sm:text-white/58 md:right-16 md:top-20 lg:right-18 lg:top-24 xl:right-20 xl:top-28 xl:text-white/70"
            size={76}
            strokeWidth={1.1}
          />

          <div className="absolute left-14 top-[6.2rem] h-px w-[240px] rotate-[-5deg] bg-gradient-to-r from-transparent via-[var(--color-primary)]/42 to-transparent sm:left-18 sm:top-[7.6rem] sm:w-[340px] md:left-20 md:top-[8.3rem] md:w-[380px] lg:left-24 lg:top-[10rem] lg:w-[460px] xl:left-28 xl:top-44 xl:w-[520px]" />
        </div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_24%,rgba(243,201,121,0.075),transparent_30%),radial-gradient(circle_at_70%_80%,rgba(224,247,255,0.055),transparent_34%)]" />
      </div>

      <div className="relative mx-auto w-[min(100%,1280px)]">
        <div className="premium-reveal-heading max-w-3xl">
          <div className="mb-3 flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.28em] text-[var(--color-primary)] sm:text-xs sm:tracking-[0.36em] md:mb-4 md:text-[10px] xl:mb-5 xl:text-xs">
            Why Choose Us
            <span className="h-px w-14 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-primary)]/50 to-transparent sm:w-20 md:w-24 xl:w-28" />
          </div>

          <h2 className="text-[clamp(2.25rem,8vw,3.7rem)] font-semibold leading-[0.95] tracking-[-0.065em] text-[var(--color-text)] md:text-[clamp(2.7rem,5.5vw,4.4rem)] xl:text-[clamp(3.2rem,7vw,5.5rem)]">
            Why Choose Us
          </h2>

          <p className="mt-4 max-w-2xl text-xs leading-6 text-[var(--color-text-soft)] sm:text-sm sm:leading-7 md:max-w-xl md:text-sm md:leading-7 lg:max-w-2xl lg:text-base lg:leading-8 xl:mt-6 xl:text-lg">
            We combine deep expertise, trusted partnerships, affordable planning,
            and personalized care to craft extraordinary journeys you’ll never forget.
          </p>
        </div>

        <div className="mt-8 grid gap-3 sm:mt-10 sm:gap-4 md:mt-11 md:grid-cols-[1fr_190px] md:gap-4 lg:grid-cols-[1fr_230px] xl:mt-12 xl:grid-cols-[1fr_290px] xl:gap-5">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 md:gap-3 lg:gap-4">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              const isIce = reason.accent === "ice";

              return (
                <article
                  key={reason.title}
                  style={{ "--reveal-delay": `${index * 70}ms` } as React.CSSProperties}
                  className={`premium-reveal-card group relative min-h-[132px] overflow-hidden rounded-[1.1rem] border bg-[var(--color-surface)] p-3 shadow-[0_18px_55px_rgba(0,0,0,0.34)] transition duration-500 hover:-translate-y-1 hover:bg-[var(--color-surface-strong)] sm:min-h-[150px] sm:rounded-[1.25rem] sm:p-4 md:min-h-[142px] md:rounded-[1.2rem] md:p-3 lg:min-h-[158px] lg:rounded-[1.35rem] lg:p-4 xl:min-h-[170px] xl:rounded-[1.45rem] xl:p-5 ${
                    isIce
                      ? "border-[color:var(--color-secondary)]/20 hover:border-[color:var(--color-secondary)]/50 hover:shadow-[var(--shadow-secondary)]"
                      : "border-[color:var(--color-primary)]/22 hover:border-[color:var(--color-primary)]/55 hover:shadow-[var(--shadow-primary)]"
                  }`}
                >
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.07),transparent_36%,rgba(243,201,121,0.035))]" />

                  <div
                    className={`absolute -right-10 -top-10 size-24 rounded-full blur-2xl transition duration-500 group-hover:opacity-100 ${
                      isIce
                        ? "bg-[color:var(--color-secondary)]/12"
                        : "bg-[color:var(--color-primary)]/14"
                    }`}
                  />

                  <div className="relative flex items-start gap-2.5 sm:gap-3 md:gap-2.5 lg:gap-3 xl:gap-4">
                    <div
                      className={`grid size-9 shrink-0 place-items-center rounded-full border bg-white/[0.045] sm:size-11 md:size-9 lg:size-10 xl:size-13 ${
                        isIce
                          ? "border-[color:var(--color-secondary)]/28 text-[var(--color-secondary)] shadow-[var(--shadow-secondary)]"
                          : "border-[color:var(--color-primary)]/28 text-[var(--color-primary-soft)] shadow-[var(--shadow-primary)]"
                      }`}
                    >
                      <Icon
                        size={17}
                        strokeWidth={1.55}
                        className="sm:size-[21px] md:size-[17px] lg:size-[20px] xl:size-[25px]"
                      />
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-[11px] font-semibold leading-tight tracking-[-0.035em] text-[var(--color-text)] sm:text-sm md:text-xs lg:text-sm xl:text-lg">
                        {reason.title}
                      </h3>

                      <p className="mt-1.5 text-[9px] leading-4 text-[var(--color-text-muted)] sm:mt-2 sm:text-xs sm:leading-5 md:text-[9px] md:leading-4 lg:text-xs lg:leading-5 xl:mt-3 xl:text-sm xl:leading-6">
                        {reason.description}
                      </p>

                      <div
                        className={`mt-2 h-px w-7 sm:mt-3 sm:w-9 md:mt-2 md:w-7 lg:w-9 xl:mt-4 xl:w-10 ${
                          isIce ? "bg-[var(--color-secondary)]" : "bg-[var(--color-primary)]"
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
            className="premium-reveal-card rounded-[1.1rem] border border-[color:var(--color-border)] bg-[var(--color-surface)] p-3 shadow-[0_22px_70px_rgba(0,0,0,0.38)] backdrop-blur-xl sm:rounded-[1.35rem] sm:p-4 md:rounded-[1.25rem] md:p-3 lg:p-4 xl:rounded-[1.8rem] xl:p-6"
          >
            <div className="grid grid-cols-2 gap-3 md:grid-cols-1 md:gap-0 md:space-y-3 xl:space-y-6">
              {stats.map((stat) => {
                const Icon = stat.icon;
                const isIce = stat.accent === "ice";

                return (
                  <div
                    key={stat.label}
                    className="grid gap-2 border-[color:var(--color-border-soft)] pb-0 md:border-b md:pb-3 md:last:border-b-0 md:last:pb-0 lg:flex lg:gap-3 lg:pb-4 xl:gap-5 xl:pb-6"
                  >
                    <div
                      className={`grid size-9 shrink-0 place-items-center rounded-full border bg-white/[0.045] sm:size-11 md:size-9 lg:size-11 xl:size-16 ${
                        isIce
                          ? "border-[color:var(--color-secondary)]/25 text-[var(--color-secondary)]"
                          : "border-[color:var(--color-primary)]/25 text-[var(--color-primary)]"
                      }`}
                    >
                      <Icon
                        size={17}
                        strokeWidth={1.55}
                        className="sm:size-[20px] md:size-[17px] lg:size-[21px] xl:size-[28px]"
                      />
                    </div>

                    <div className="min-w-0">
                      <p
                        className={`text-base font-semibold tracking-[0.02em] sm:text-xl md:text-lg lg:text-2xl xl:text-4xl ${
                          isIce ? "text-[var(--color-secondary)]" : "text-[var(--color-primary)]"
                        }`}
                      >
                        {stat.value}
                      </p>
                      <p className="mt-0.5 text-[9px] leading-4 text-[var(--color-text-soft)] sm:text-xs md:text-[10px] lg:text-xs xl:mt-2 xl:text-sm">
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
          className="premium-reveal-card mt-5 overflow-hidden rounded-[1.2rem] border border-[color:var(--color-primary)]/24 bg-[var(--color-surface)] shadow-[var(--shadow-primary)] backdrop-blur-xl sm:mt-6 md:mt-7 lg:mt-8 lg:rounded-[1.4rem] xl:rounded-[1.6rem]"
        >
          <div className="grid grid-cols-2 sm:grid-cols-[1.25fr_repeat(4,1fr)]">
            <div className="col-span-2 flex items-center gap-2 border-b border-[color:var(--color-border-soft)] p-3 sm:col-span-1 sm:border-b-0 sm:border-r sm:p-4 lg:gap-4 lg:p-5 xl:gap-5 xl:p-6">
              <div className="grid size-10 shrink-0 place-items-center rounded-xl border border-[color:var(--color-primary)]/25 bg-[color:rgba(243,201,121,0.1)] text-[var(--color-primary)] sm:size-11 lg:size-13 xl:size-16 xl:rounded-2xl">
                <ShieldCheck size={20} className="lg:size-[26px] xl:size-[32px]" />
              </div>

              <div className="min-w-0">
                <h3 className="text-sm font-semibold text-[var(--color-text)] sm:text-xs md:text-[11px] lg:text-sm xl:text-lg">
                  Your Journey, Our Promise
                </h3>
                <p className="mt-1 text-[10px] leading-4 text-[var(--color-text-muted)] sm:text-[9px] sm:leading-4 lg:text-xs lg:leading-5 xl:mt-2 xl:text-sm xl:leading-6">
                  Premium quality and unforgettable memories.
                </p>
              </div>
            </div>

            {promiseItems.map((item) => {
              const Icon = item.icon;
              const isIce = item.accent === "ice";

              return (
                <div
                  key={item.title}
                  className="flex items-center gap-2 border-r border-t border-[color:var(--color-border-soft)] p-3 last:border-r-0 sm:border-t-0 sm:p-4 lg:gap-3 lg:p-5 xl:gap-4 xl:p-6"
                >
                  <Icon
                    size={16}
                    className={
                      isIce
                        ? "shrink-0 text-[var(--color-secondary)] lg:size-[22px] xl:size-[26px]"
                        : "shrink-0 text-[var(--color-primary)] lg:size-[22px] xl:size-[26px]"
                    }
                    strokeWidth={1.6}
                  />
                  <div className="min-w-0">
                    <h4 className="truncate text-[10px] font-semibold text-[var(--color-text)] sm:text-[9px] md:text-[8px] lg:text-xs xl:text-sm">
                      {item.title}
                    </h4>
                    <p className="mt-0.5 hidden text-[8px] leading-3 text-[var(--color-text-muted)] sm:block lg:text-[10px] xl:text-xs xl:leading-5">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="pointer-events-none absolute -left-5 -top-5 hidden size-3 rounded-full bg-[var(--color-primary)] shadow-[0_0_32px_var(--color-primary-glow)] xl:block" />
        <Check
          className="pointer-events-none absolute bottom-12 left-12 hidden text-[var(--color-primary)]/20 xl:block"
          size={90}
          strokeWidth={0.7}
        />
      </div>
    </section>
  );
}