import { useEffect } from "react";
import {
  ArrowLeft,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  Car,
  Crown,
  Globe2,
  Headphones,
  Mail,
  Phone,
  Sparkles,
  Star,
  TicketCheck,
} from "lucide-react";
import { Link } from "react-router";
import { updateSeo } from "../utils/seo";

const membershipPlans = [
  {
    name: "Bronze",
    subtitle: "An Off Season Membership Card",
    amount: "₹6,75,000",
    tone: "bronze",
    description: "Ideal for travelers who prefer peaceful off-season holidays.",
  },
  {
    name: "Silver",
    subtitle: "A Mid Season Membership Card",
    amount: "₹8,75,000",
    tone: "silver",
    description: "Perfect for flexible travelers who enjoy balanced seasonal access.",
  },
  {
    name: "Gold",
    subtitle: "A Peak Season Membership Card",
    amount: "₹12,75,000",
    tone: "gold",
    description: "Designed for premium access during peak holiday seasons.",
  },
];

const benefits = [
  {
    title: "Annual Vacations",
    description:
      "Enjoy 6 nights and 7 days of global lodging every year. Stay in premium 4-star properties with complimentary daily breakfast.",
    icon: CalendarDays,
  },
  {
    title: "Complimentary Transfers",
    description:
      "Benefit from free arrival and departure shuttles. This covers transfers between local transit hubs and your resort within city limits.",
    icon: Car,
  },
  {
    title: "Travel Assistance",
    description:
      "Access personalized sightseeing planning and custom travel support. Save money with exclusive seasonal discounts on local tours.",
    icon: Globe2,
  },
  {
    title: "Exclusive Events",
    description:
      "Receive complimentary entry passes to official member-only events. These invitations apply strictly to gatherings hosted directly by us.",
    icon: TicketCheck,
  },
];

const valueCards = [
  {
    value: "100+",
    label: "Global Stays",
    description: "Curated destinations across the world.",
    icon: Globe2,
  },
  {
    value: "4★",
    label: "Premium Properties",
    description: "Handpicked 4-star experiences.",
    icon: Building2,
  },
  {
    value: "24/7",
    label: "Concierge Support",
    description: "Personalized assistance anytime, anywhere.",
    icon: Headphones,
  },
  {
    value: "Exclusive",
    label: "Member Privileges",
    description: "Events, benefits, and offers for members.",
    icon: Crown,
  },
];

const steps = [
  {
    title: "Choose Membership",
    description: "Select Bronze, Silver, or Gold based on your travel season.",
  },
  {
    title: "Speak With Advisor",
    description: "Our team explains plan details, availability, and terms.",
  },
  {
    title: "Confirm Membership",
    description: "Complete your joining process securely with official support.",
  },
  {
    title: "Start Traveling",
    description: "Enjoy yearly vacations, benefits, and travel assistance.",
  },
];

export function MembershipPage() {

    useEffect(() => {
    updateSeo({
      title: "Premium Travel Membership | DIA FESTIVO",
      description:
        "Explore DIA FESTIVO premium travel membership plans with annual vacations, 4-star stays, complimentary transfers, exclusive member events, and personalized travel assistance.",
      canonicalPath: "/membership",
    });
  }, []);


  return (
    <main className="min-h-screen overflow-hidden bg-black text-[var(--color-text)]">
      <section className="relative overflow-hidden px-4 pb-10 pt-4 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#02040a_0%,#000_42%,#02040a_100%)]" />
          <div className="absolute left-0 top-0 h-[520px] w-full bg-[radial-gradient(circle_at_75%_10%,rgba(243,201,121,0.18),transparent_34%),radial-gradient(circle_at_20%_18%,rgba(224,247,255,0.06),transparent_28%)]" />
          <div className="absolute -left-40 top-[38%] size-[620px] rounded-full border border-[color:var(--color-primary)]/12" />
          <div className="absolute -right-40 top-20 size-[680px] rounded-full border border-[color:var(--color-primary)]/10" />
          <div className="absolute bottom-0 left-0 h-72 w-full bg-[radial-gradient(circle_at_20%_100%,rgba(243,201,121,0.13),transparent_30%)]" />
        </div>

        <div className="relative mx-auto w-[min(100%,1380px)]">
          <header className="flex items-center justify-between gap-4">
            <Link
              to="/"
              className="group inline-flex items-center gap-3 text-[var(--color-text)]"
            >
              <span className="grid size-10 place-items-center rounded-full border border-[color:var(--color-primary)]/25 bg-[color:rgba(243,201,121,0.1)] text-[var(--color-primary)]">
                <ArrowLeft
                  size={18}
                  className="transition group-hover:-translate-x-1"
                />
              </span>

              <span>
                <strong className="block text-lg tracking-[0.28em] text-[var(--color-primary-soft)]">
                  TRAVELUXE
                </strong>
                <small className="mt-1 hidden text-[8px] uppercase tracking-[0.32em] text-[var(--color-text-muted)] sm:block">
                  Membership Experience
                </small>
              </span>
            </Link>
          </header>

          <HeroSection />

          <PlansSection />

          <BenefitsSection />

          <WhyMembershipSection />

          <HowItWorksSection />

          <FinalCtaSection />
        </div>
      </section>
    </main>
  );
}

function HeroSection() {
  return (
    <section className="relative grid min-h-[620px] items-center gap-10 py-16 lg:grid-cols-[0.58fr_0.42fr] lg:py-20">
      <div className="relative z-10 max-w-3xl">
        <div className="mb-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.42em] text-[var(--color-primary)]">
          <Sparkles size={16} />
          Exclusive Holiday Ownership
        </div>

        <h1 className="text-[clamp(4rem,10vw,8rem)] font-semibold leading-[0.82] tracking-[-0.085em] text-[var(--color-text)]">
          Travel
          <span className="block bg-[image:var(--gradient-primary)] bg-clip-text text-transparent">
            Membership
          </span>
        </h1>

        <div className="mt-6 h-px w-36 bg-gradient-to-r from-[var(--color-primary)] to-transparent" />

        <p className="mt-6 max-w-xl text-sm font-semibold uppercase leading-7 tracking-[0.28em] text-[var(--color-primary)] sm:text-base">
          Premium travel privileges for 25 years.
        </p>

        <p className="mt-5 max-w-xl text-sm leading-7 text-[var(--color-text-soft)] sm:text-base sm:leading-8">
          For 25 years, DIA FESTIVO LEISURE PVT LTD has been crafting
          memorable journeys with annual vacations, premium stays, travel
          assistance, and exclusive membership benefits.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#join"
            className="inline-flex items-center justify-center gap-3 rounded-xl bg-[image:var(--gradient-primary)] px-7 py-4 text-sm font-semibold text-[#140d04] shadow-[var(--shadow-primary)] transition hover:-translate-y-0.5"
          >
            <Crown size={18} />
            Contact to Join
          </a>

          <a
            href="#benefits"
            className="inline-flex items-center justify-center gap-3 rounded-xl border border-[color:var(--color-primary)]/35 bg-[color:rgba(243,201,121,0.06)] px-7 py-4 text-sm font-semibold text-[var(--color-primary)] transition hover:border-[color:var(--color-primary)]/60 hover:bg-[color:rgba(243,201,121,0.1)]"
          >
            <Mail size={18} />
            Request Details
          </a>
        </div>
      </div>

      <div className="relative z-10">
        <div className="relative mx-auto grid aspect-square w-[min(420px,84vw)] place-items-center rounded-full border border-[color:var(--color-primary)]/20 bg-[color:rgba(243,201,121,0.04)] shadow-[var(--shadow-primary)]">
          <div className="absolute inset-8 rounded-full border border-[color:var(--color-primary)]/20" />
          <div className="absolute inset-16 rounded-full border border-[color:var(--color-primary)]/18" />

          <div className="text-center">
            <div className="mx-auto mb-5 flex items-center justify-center gap-3 text-[var(--color-primary)]">
              <span className="h-24 w-px rotate-[20deg] bg-gradient-to-b from-transparent via-[var(--color-primary)]/70 to-transparent" />
              <Crown size={74} strokeWidth={1.2} />
              <span className="h-24 w-px rotate-[-20deg] bg-gradient-to-b from-transparent via-[var(--color-primary)]/70 to-transparent" />
            </div>

            <p className="text-[clamp(4rem,9vw,6.5rem)] font-semibold leading-none tracking-[-0.06em] text-[var(--color-primary-soft)]">
              25
            </p>

            <p className="mt-2 text-2xl font-serif text-[var(--color-primary)]">
              Years
            </p>

            <p className="mx-auto mt-3 max-w-[230px] text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-text-soft)]">
              Of hospitality excellence
            </p>

            <div className="mt-5 flex justify-center gap-1 text-[var(--color-primary)]">
              {Array.from({ length: 3 }).map((_, index) => (
                <Star key={index} size={18} className="fill-current" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PlansSection() {
  return (
    <section className="border-t border-[color:var(--color-border-soft)] py-16">
      <SectionHeading
        eyebrow="Choose Your Membership"
        title="Three Tiers. Endless Experiences."
      />

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {membershipPlans.map((plan) => (
          <PlanCard key={plan.name} plan={plan} />
        ))}
      </div>
    </section>
  );
}

function PlanCard({
  plan,
}: {
  plan: {
    name: string;
    subtitle: string;
    amount: string;
    tone: string;
    description: string;
  };
}) {
  const isBronze = plan.tone === "bronze";
  const isSilver = plan.tone === "silver";

  return (
    <article
      className={`relative overflow-hidden rounded-[1.8rem] border bg-black p-6 shadow-[0_35px_110px_rgba(0,0,0,0.58)] transition duration-500 hover:-translate-y-2 ${
        isSilver
          ? "border-slate-200/45"
          : isBronze
            ? "border-orange-300/38"
            : "border-[color:var(--color-primary)]/45"
      }`}
    >
      <div className="pointer-events-none absolute inset-0">
        <div
          className={`absolute inset-0 ${
            isSilver
              ? "bg-[radial-gradient(circle_at_50%_0%,rgba(226,232,240,0.15),transparent_34%)]"
              : isBronze
                ? "bg-[radial-gradient(circle_at_50%_0%,rgba(205,127,50,0.17),transparent_34%)]"
                : "bg-[radial-gradient(circle_at_50%_0%,rgba(243,201,121,0.18),transparent_34%)]"
          }`}
        />
        <div className="absolute inset-4 rounded-[1.45rem] border border-white/10" />
      </div>

      <div className="relative text-center">
        <div
          className={`mx-auto grid size-20 place-items-center rounded-full border bg-black/40 ${
            isSilver
              ? "border-slate-200/35 text-slate-100"
              : isBronze
                ? "border-orange-300/35 text-orange-200"
                : "border-[color:var(--color-primary)]/40 text-[var(--color-primary)]"
          }`}
        >
          <Crown size={36} strokeWidth={1.4} />
        </div>

        <h3
          className={`mt-6 text-4xl font-semibold uppercase tracking-[0.16em] ${
            isSilver
              ? "text-slate-100"
              : isBronze
                ? "text-orange-200"
                : "text-[var(--color-primary-soft)]"
          }`}
        >
          {plan.name}
        </h3>

        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.42em] text-white/50">
          Membership
        </p>

        <div className="mx-auto my-6 h-px w-48 bg-gradient-to-r from-transparent via-white/22 to-transparent" />

        <p className="mx-auto min-h-[48px] max-w-xs text-sm leading-6 text-[var(--color-text-soft)]">
          {plan.subtitle}
        </p>

        <p className="mt-5 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-text-muted)]">
          Base Amount
        </p>

        <p
          className={`mt-2 text-4xl font-serif ${
            isSilver
              ? "text-slate-100"
              : isBronze
                ? "text-orange-200"
                : "text-[var(--color-primary)]"
          }`}
        >
          {plan.amount}
        </p>

        <p className="mt-5 text-sm leading-6 text-[var(--color-text-muted)]">
          {plan.description}
        </p>
      </div>
    </article>
  );
}

function BenefitsSection() {
  return (
    <section id="benefits" className="border-t border-[color:var(--color-border-soft)] py-16">
      <SectionHeading eyebrow="Premium Privileges" title="Membership Benefits" />

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {benefits.map((benefit) => {
          const Icon = benefit.icon;

          return (
            <article
              key={benefit.title}
              className="rounded-[1.6rem] border border-[color:var(--color-border)] bg-[var(--color-surface)] p-6 text-center shadow-[var(--shadow-card)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-[color:var(--color-primary)]/40"
            >
              <div className="mx-auto grid size-18 place-items-center rounded-full border border-[color:var(--color-primary)]/28 bg-[color:rgba(243,201,121,0.08)] text-[var(--color-primary)]">
                <Icon size={30} strokeWidth={1.5} />
              </div>

              <h3 className="mt-5 text-lg font-semibold text-[var(--color-primary-soft)]">
                {benefit.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-[var(--color-text-muted)]">
                {benefit.description}
              </p>
            </article>
          );
        })}
      </div>

      <p className="mt-7 text-center text-sm italic text-[var(--color-text-muted)]">
        * Terms and conditions apply.
      </p>
    </section>
  );
}

function WhyMembershipSection() {
  return (
    <section className="border-t border-[color:var(--color-border-soft)] py-16">
      <SectionHeading
        eyebrow="Why Membership Matters"
        title="More Than a Vacation. It’s a Lifestyle."
      />

      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {valueCards.map((card) => {
          const Icon = card.icon;

          return (
            <article
              key={card.label}
              className="rounded-[1.4rem] border border-[color:var(--color-primary)]/18 bg-[color:rgba(243,201,121,0.045)] p-5 shadow-[var(--shadow-card)] backdrop-blur-xl"
            >
              <div className="flex items-start gap-4">
                <div className="grid size-14 shrink-0 place-items-center rounded-full border border-[color:var(--color-primary)]/26 bg-black/30 text-[var(--color-primary)]">
                  <Icon size={27} strokeWidth={1.5} />
                </div>

                <div>
                  <p className="text-3xl font-semibold text-[var(--color-primary)]">
                    {card.value}
                  </p>
                  <h3 className="mt-1 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-primary-soft)]">
                    {card.label}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--color-text-muted)]">
                    {card.description}
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function HowItWorksSection() {
  return (
    <section className="border-t border-[color:var(--color-border-soft)] py-16">
      <SectionHeading eyebrow="Simple Process" title="How Membership Works" />

      <div className="mt-10 grid gap-5 md:grid-cols-4">
        {steps.map((step, index) => (
          <article key={step.title} className="relative">
            <div className="absolute left-10 right-[-20px] top-6 hidden h-px bg-gradient-to-r from-[var(--color-primary)]/50 to-transparent md:block" />

            <span className="relative z-10 grid size-12 place-items-center rounded-full border border-[color:var(--color-primary)]/35 bg-black text-sm font-semibold text-[var(--color-primary)]">
              {index + 1}
            </span>

            <h3 className="mt-5 text-lg font-semibold text-[var(--color-text)]">
              {step.title}
            </h3>

            <p className="mt-2 text-sm leading-6 text-[var(--color-text-muted)]">
              {step.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function FinalCtaSection() {
  return (
    <section
      id="join"
      className="relative overflow-hidden rounded-[2rem] border border-[color:var(--color-primary)]/25 bg-[var(--color-glass)] p-5 shadow-[var(--shadow-card)] backdrop-blur-2xl sm:p-7 lg:p-8"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-20 -top-20 size-72 rounded-full bg-[color:var(--color-primary)]/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.07),transparent_36%,rgba(243,201,121,0.06))]" />
      </div>

      <div className="relative grid items-center gap-6 lg:grid-cols-[auto_1fr_auto]">
        <div className="grid size-24 place-items-center rounded-full border border-[color:var(--color-primary)]/30 bg-[color:rgba(243,201,121,0.08)] text-[var(--color-primary)] shadow-[var(--shadow-primary)]">
          <Crown size={48} strokeWidth={1.3} />
        </div>

        <div>
          <h2 className="text-[clamp(2rem,5vw,3.4rem)] font-semibold tracking-[-0.06em] text-[var(--color-text)]">
            Your Next Journey Awaits
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-7 text-[var(--color-text-muted)]">
            Explore the world with unparalleled comfort, exclusive privileges,
            and trusted hospitality support.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          <a
            href="tel:+919876543210"
            className="inline-flex items-center justify-center gap-3 rounded-xl bg-[image:var(--gradient-primary)] px-7 py-4 text-sm font-semibold text-[#140d04] shadow-[var(--shadow-primary)] transition hover:-translate-y-0.5"
          >
            <Phone size={18} />
            Contact to Join
          </a>

          <a
            href="mailto:hello@traveluxe.com"
            className="inline-flex items-center justify-center gap-3 rounded-xl border border-[color:var(--color-primary)]/35 bg-[color:rgba(243,201,121,0.06)] px-7 py-4 text-sm font-semibold text-[var(--color-primary)] transition hover:border-[color:var(--color-primary)]/60 hover:bg-[color:rgba(243,201,121,0.1)]"
          >
            <BriefcaseBusiness size={18} />
            Speak with Advisor
          </a>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <div className="mb-4 flex items-center justify-center gap-4 text-xs font-semibold uppercase tracking-[0.36em] text-[var(--color-primary)]">
        <span className="hidden h-px w-24 bg-gradient-to-r from-transparent to-[var(--color-primary)]/70 sm:block" />
        {eyebrow}
        <span className="hidden h-px w-24 bg-gradient-to-r from-[var(--color-primary)]/70 to-transparent sm:block" />
      </div>

      <h2 className="text-[clamp(2.2rem,6vw,4.4rem)] font-semibold leading-[0.95] tracking-[-0.065em] text-[var(--color-text)]">
        {title}
      </h2>
    </div>
  );
}