import {
  ArrowRight,
  Car,
  Headphones,
  Palmtree,
  Sparkles,
  Trophy,
} from "lucide-react";
import { useNavigate } from "react-router";
import { useInView } from "react-intersection-observer";

const benefits = [
  {
    title: "Annual Vacations",
    description: "Curated luxury escapes every year.",
    icon: Palmtree,
  },
  {
    title: "Complimentary Transfers",
    description: "Seamless airport and destination transfers.",
    icon: Car,
  },
  {
    title: "Travel Assistance",
    description: "24/7 concierge support wherever you go.",
    icon: Headphones,
  },
  {
    title: "Exclusive Events",
    description: "Invitations to elite gatherings and experiences.",
    icon: Trophy,
  },
];

const plans = [
  {
    name: "Bronze",
    subtitle: "Off Season Membership Card",
    amount: "₹6,75,000",
    tone: "bronze",
  },
  {
    name: "Silver",
    subtitle: "Mid Season Membership Card",
    amount: "₹8,75,000",
    tone: "silver",
    featured: true,
  },
  {
    name: "Gold",
    subtitle: "Peak Season Membership Card",
    amount: "₹12,75,000",
    tone: "gold",
  },
];

export function MembershipPreview() {
  const navigate = useNavigate();

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.16,
  });

  return (
    <section
      id="membership"
      ref={ref}
      className={`premium-reveal-section relative overflow-hidden bg-black px-3 py-16 text-[var(--color-text)] sm:px-5 sm:py-20 md:px-6 lg:px-8 lg:py-24 xl:py-28 ${
        inView ? "is-visible" : ""
      }`}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_85%,rgba(243,201,121,0.13),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(243,201,121,0.08),transparent_30%),linear-gradient(180deg,#02040a_0%,#000_48%,#02040a_100%)]" />

        <div className="absolute -left-40 bottom-[-150px] size-[560px] rounded-full border border-[color:var(--color-primary)]/18" />
        <div className="absolute -left-24 bottom-[-90px] size-[410px] rounded-full border border-[color:var(--color-primary)]/16" />
        <div className="absolute -left-4 bottom-10 h-px w-[380px] rotate-[-17deg] bg-gradient-to-r from-[var(--color-primary)]/70 to-transparent" />

        <div className="absolute -right-32 -top-36 size-[520px] rounded-full border border-[color:var(--color-primary)]/14" />
        <div className="absolute right-0 top-0 h-px w-[360px] rotate-[-16deg] bg-gradient-to-l from-[var(--color-primary)]/50 to-transparent" />

        <div className="absolute left-0 bottom-0 h-64 w-96 bg-[radial-gradient(circle_at_18%_100%,rgba(243,201,121,0.22),transparent_36%)] blur-2xl" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--color-primary)]/50 to-transparent" />
      </div>

      <div className="relative mx-auto grid w-[min(100%,1380px)] gap-10 lg:grid-cols-[0.37fr_0.63fr] lg:items-center xl:gap-16">
        <div className="premium-reveal-heading">
          <div className="mb-4 inline-flex items-center gap-2.5 text-[9px] font-semibold uppercase tracking-[0.36em] text-[var(--color-primary)] sm:mb-5 sm:text-xs sm:tracking-[0.52em]">
            <Sparkles size={14} className="sm:size-[15px]" />
            Membership Preview
          </div>

          <h2 className="max-w-2xl text-[clamp(2.35rem,10vw,5.4rem)] font-semibold leading-[0.92] tracking-[-0.075em] text-[var(--color-text)]">
            Discover
            <span className="block bg-[image:var(--gradient-primary)] bg-clip-text text-transparent">
              Membership Benefits
            </span>
          </h2>

          <div className="mt-5 flex max-w-sm items-center gap-3 sm:mt-6">
            <span className="h-px flex-1 bg-gradient-to-r from-[var(--color-primary)] to-transparent" />
            <Sparkles size={14} className="text-[var(--color-primary)]" />
          </div>

          <p className="mt-5 max-w-lg text-xs leading-6 text-[var(--color-text-soft)] sm:mt-6 sm:text-base sm:leading-8">
            Curated for discerning travelers, our memberships unlock a world of
            privileged experiences, seamless services, and unforgettable journeys.
          </p>

          <div className="mt-7 grid gap-4 sm:mt-8 sm:gap-5">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  style={
                    {
                      "--reveal-delay": `${index * 80 + 120}ms`,
                    } as React.CSSProperties
                  }
                  className="premium-reveal-card flex items-start gap-3 border-b border-[color:var(--color-primary)]/14 pb-4 last:border-b-0 sm:gap-4 sm:pb-5"
                >
                  <div className="grid size-11 shrink-0 place-items-center rounded-full border border-[color:var(--color-primary)]/35 bg-black/40 text-[var(--color-primary)] shadow-[0_0_34px_rgba(243,201,121,0.12)] sm:size-13">
                    <Icon size={21} strokeWidth={1.55} className="sm:size-[24px]" />
                  </div>

                  <div>
                    <h3 className="text-base font-semibold tracking-[-0.035em] text-[var(--color-primary-soft)] sm:text-xl">
                      {benefit.title}
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-[var(--color-text-muted)] sm:text-sm sm:leading-6">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => navigate("/membership")}
            className="group mt-8 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[image:var(--gradient-primary)] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-[#140d04] shadow-[0_22px_80px_rgba(243,201,121,0.26)] transition duration-300 hover:-translate-y-1 sm:mt-9 sm:w-auto sm:min-w-[300px] sm:gap-5 sm:px-7 sm:py-4 sm:text-sm sm:tracking-[0.18em]"
          >
            Explore Membership
            <ArrowRight
              size={18}
              className="transition group-hover:translate-x-1 sm:size-[22px]"
            />
          </button>
        </div>

        <div
          style={{ "--reveal-delay": "180ms" } as React.CSSProperties}
          className="premium-reveal-card"
        >
          <div className="grid grid-cols-3 items-center gap-2 sm:gap-4 lg:gap-4 xl:gap-6">
            {plans.map((plan, index) => (
              <MembershipCard key={plan.name} plan={plan} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MembershipCard({
  plan,
  index,
}: {
  plan: {
    name: string;
    subtitle: string;
    amount: string;
    tone: string;
    featured?: boolean;
  };
  index: number;
}) {
  //const isGold = plan.tone === "gold";
  const isSilver = plan.tone === "silver";
  const isBronze = plan.tone === "bronze";

  const topBadgeClass = isSilver
    ? "border-slate-100/60 bg-gradient-to-b from-slate-100 via-slate-300 to-slate-500 text-[#10141c]"
    : isBronze
      ? "border-orange-200/55 bg-gradient-to-b from-orange-200 via-amber-400 to-amber-700 text-[#1a1108]"
      : "border-yellow-100/60 bg-gradient-to-b from-yellow-100 via-amber-300 to-yellow-600 text-[#1a1205]";

  return (
    <article
      style={{ "--reveal-delay": `${index * 100 + 260}ms` } as React.CSSProperties}
      className={`premium-reveal-card group relative mx-auto w-full overflow-hidden rounded-[1rem] bg-black shadow-[0_26px_80px_rgba(0,0,0,0.56)] transition duration-500 hover:-translate-y-1 sm:max-w-[310px] sm:rounded-[1.35rem] md:rounded-[1.55rem] lg:rounded-[1.75rem] lg:hover:-translate-y-2 ${
        plan.featured
          ? "min-h-[265px] border-2 border-slate-200/58 sm:min-h-[360px] md:-translate-y-4 md:group-hover:-translate-y-5 lg:min-h-[430px] lg:-translate-y-8 lg:group-hover:-translate-y-10 xl:min-h-[450px]"
          : "min-h-[235px] border border-[color:var(--color-primary)]/42 sm:min-h-[320px] lg:min-h-[390px]"
      } ${
        isBronze
          ? "membership-card-bronze"
          : isSilver
            ? "membership-card-silver"
            : "membership-card-gold"
      }`}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-2 rounded-[0.75rem] border border-white/12 sm:inset-3 sm:rounded-[1.05rem] lg:rounded-[1.4rem]" />
        <div className="absolute inset-3 rounded-[0.6rem] border border-white/8 sm:inset-5 sm:rounded-[1.1rem]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.12),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.045),transparent_38%,rgba(255,255,255,0.025))]" />

        <div
          className={`absolute inset-x-6 bottom-0 h-px sm:inset-x-10 ${
            isSilver
              ? "bg-gradient-to-r from-transparent via-slate-200/80 to-transparent"
              : "bg-gradient-to-r from-transparent via-[var(--color-primary)]/85 to-transparent"
          }`}
        />

        <div
          className={`absolute -bottom-6 left-1/2 h-10 w-[76%] -translate-x-1/2 rounded-full blur-xl ${
            isSilver
              ? "bg-slate-200/25"
              : isBronze
                ? "bg-orange-400/22"
                : "bg-[color:var(--color-primary)]/26"
          }`}
        />
      </div>

      <div
        className={`absolute left-1/2 top-0 z-20 flex h-9 w-12 -translate-x-1/2 items-center justify-center rounded-b-xl border-x border-b shadow-[0_16px_36px_rgba(0,0,0,0.28)] sm:h-12 sm:w-16 sm:rounded-b-[1rem] lg:h-14 lg:w-20 lg:rounded-b-[1.1rem] ${topBadgeClass}`}
      >
        <Sparkles
          size={15}
          strokeWidth={2.4}
          className="drop-shadow-[0_2px_8px_rgba(0,0,0,0.18)] sm:size-[18px] lg:size-[20px]"
        />
      </div>

      <div className="relative z-10 flex min-h-[inherit] flex-col items-center px-2.5 pb-4 pt-12 text-center sm:px-4 sm:pb-6 sm:pt-16 lg:px-6 lg:pb-7 lg:pt-20">
        <div>
          <p className="text-[2.65rem] font-semibold leading-none tracking-[-0.08em] text-white drop-shadow-[0_10px_34px_rgba(255,255,255,0.12)] sm:text-[3.7rem] lg:text-[4.8rem]">
            25
          </p>
          <p className="mt-0.5 text-sm font-serif text-white/82 sm:text-xl lg:mt-1 lg:text-2xl">
            Years
          </p>
        </div>

        <div className="mt-3 flex w-16 items-center justify-center gap-2 sm:mt-5 sm:w-28 sm:gap-3 lg:w-32">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[var(--color-primary)]/60" />
          <Sparkles
            size={9}
            className={isSilver ? "text-slate-200" : "text-[var(--color-primary)]"}
          />
          <span className="h-px flex-1 bg-gradient-to-r from-[var(--color-primary)]/60 to-transparent" />
        </div>

        <div className="mt-4 sm:mt-6 lg:mt-7">
          <h3
            className={`text-sm font-semibold uppercase tracking-[0.12em] sm:text-2xl sm:tracking-[0.16em] lg:text-3xl lg:tracking-[0.18em] ${
              isSilver
                ? "text-slate-100"
                : isBronze
                  ? "text-orange-200"
                  : "text-[var(--color-primary-soft)]"
            }`}
          >
            {plan.name}
          </h3>

          <p className="mt-1 text-[7px] font-semibold uppercase tracking-[0.2em] text-white/58 sm:mt-2 sm:text-[9px] sm:tracking-[0.32em] lg:text-[11px] lg:tracking-[0.42em]">
            Membership
          </p>
        </div>

        <div className="mt-4 flex w-20 items-center justify-center gap-2 sm:mt-6 sm:w-32 sm:gap-3 lg:mt-7 lg:w-36">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-white/22" />
          <Sparkles
            size={8}
            className={isSilver ? "text-slate-200" : "text-[var(--color-primary)]"}
          />
          <span className="h-px flex-1 bg-gradient-to-r from-white/22 to-transparent" />
        </div>

        <p className="mt-3 max-w-[90px] text-[9px] leading-4 text-white/68 sm:mt-5 sm:max-w-[150px] sm:text-xs sm:leading-5 lg:mt-6 lg:max-w-[170px] lg:text-sm lg:leading-6">
          {plan.subtitle}
        </p>

        <div className="mt-auto w-full pt-4 sm:pt-6 lg:pt-7">
          <div className="mx-auto mb-3 h-px w-[78%] bg-gradient-to-r from-transparent via-white/20 to-transparent sm:mb-5 lg:mb-6" />

          <p
            className={`text-base font-serif tracking-[0.02em] sm:text-2xl lg:text-3xl lg:tracking-[0.03em] ${
              isSilver
                ? "text-slate-100"
                : isBronze
                  ? "text-orange-200"
                  : "text-[var(--color-primary-soft)]"
            }`}
          >
            {plan.amount.replace("₹", "Rs ")}
          </p>
        </div>
      </div>
    </article>
  );
}