import { useEffect } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  ConciergeBell,
  Crown,
  Globe2,
  Handshake,
  Plane,
  Sailboat,
  ShieldCheck,
  Sparkles,
  Target,
  Trophy,
  UserRound,
} from "lucide-react";
import { Link } from "react-router";
import { updateSeo } from "../utils/seo";


const stats = [
  {
    title: "100+",
    description: "Global Experiences",
    icon: Globe2,
  },
  {
    title: "Luxury",
    description: "Service Excellence",
    icon: Crown,
  },
  {
    title: "Trusted",
    description: "Travel Partner",
    icon: ShieldCheck,
  },
];

const serviceItems = [
  {
    title: "Curated Holiday Packages",
    icon: BriefcaseBusiness,
  },
  {
    title: "Flight Bookings",
    icon: Plane,
  },
  {
    title: "Boutique Accommodations",
    icon: ConciergeBell,
  },
  {
    title: "International Visa Assistance",
    icon: Globe2,
  },
  {
    title: "Exclusive Cruise Bookings",
    icon: Sailboat,
  },
];

const values = [
  {
    title: "Ethical Standards",
    description: "Integrity in every interaction",
    icon: ShieldCheck,
  },
  {
    title: "Global Partnerships",
    description: "Strong relationships, better journeys",
    icon: Handshake,
  },
  {
    title: "Personalized Concierge",
    description: "Tailored to your lifestyle",
    icon: UserRound,
  },
  {
    title: "Seamless Execution",
    description: "Precision at every milestone",
    icon: Trophy,
  },
];

export function AboutUsPage() {

  useEffect(() => {
    updateSeo({
      title: "About Us | DIA FESTIVO",
      description:
        "Learn about DIA FESTIVO Leisure Pvt. Ltd., a premium travel company creating refined global journeys, curated holidays, luxury stays, flight bookings, visa assistance, cruise bookings, and personalized travel experiences.",
      canonicalPath: "/about-us",
    });
  }, []);
  
  return (
    <main className="min-h-screen overflow-hidden bg-black text-[var(--color-text)]">
      <section className="relative overflow-hidden px-3 py-4 sm:px-5 sm:py-5 md:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,#020711_0%,#03040a_46%,#000_100%)]" />
          <div className="absolute left-0 top-0 h-[360px] w-full bg-[radial-gradient(circle_at_18%_14%,rgba(224,247,255,0.08),transparent_28%),radial-gradient(circle_at_74%_10%,rgba(243,201,121,0.16),transparent_32%)] sm:h-[430px]" />
          <div className="absolute -left-[22rem] -top-[14rem] size-[44rem] rounded-full border border-[color:var(--color-primary)]/10 sm:size-[52rem]" />
          <div className="absolute -right-[18rem] -top-[15rem] size-[40rem] rounded-full border border-[color:var(--color-primary)]/12 sm:size-[46rem]" />
          <div className="absolute bottom-0 left-0 h-80 w-full bg-[radial-gradient(circle_at_20%_100%,rgba(243,201,121,0.12),transparent_34%)]" />
          <div className="absolute right-0 bottom-0 h-80 w-[620px] bg-[radial-gradient(circle_at_100%_100%,rgba(224,247,255,0.08),transparent_40%)]" />
        </div>

        <div className="relative z-10 mx-auto w-[min(100%,1380px)]">
          <header className="flex items-center justify-between gap-3">
            <Link
              to="/"
              className="group inline-flex items-center gap-2.5 rounded-full border border-[color:var(--color-primary)]/20 bg-[color:rgba(243,201,121,0.06)] px-3 py-2 text-[var(--color-text)] backdrop-blur-xl transition hover:border-[color:var(--color-primary)]/45 hover:bg-[color:rgba(243,201,121,0.1)] sm:gap-3"
            >
              <span className="grid size-8 place-items-center rounded-full border border-[color:var(--color-primary)]/25 text-[var(--color-primary)]">
                <ArrowLeft size={16} className="transition group-hover:-translate-x-1" />
              </span>

              <span className="hidden text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-primary-soft)] sm:inline md:text-xs md:tracking-[0.22em]">
                Back to Website
              </span>
            </Link>

            <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-primary)]/20 bg-[color:rgba(243,201,121,0.06)] px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-[var(--color-primary)] backdrop-blur-xl sm:px-4 sm:text-xs sm:tracking-[0.24em]">
              <Sparkles size={13} className="sm:size-[14px]" />
              About Dia Festivo
            </div>
          </header>

          <HeroSection />

          <section className="grid gap-4 pb-8 md:grid-cols-2 md:gap-5 xl:grid-cols-[0.36fr_0.4fr_0.24fr] xl:gap-6">
            <BackgroundCard />

            <div className="grid gap-4 md:gap-5">
              <PremiumServicesCard />
              <CelebrationsCard />
            </div>

            <div className="grid gap-4 md:col-span-2 md:grid-cols-2 md:gap-5 xl:col-span-1 xl:grid-cols-1">
              <VisionCard />
              <ValuesCard />
            </div>
          </section>

          <FinalCta />

          <footer className="border-t border-[color:var(--color-border-soft)] py-6 text-center sm:py-7">
            <div className="mx-auto flex max-w-2xl items-center justify-center gap-4">
              <span className="hidden h-px flex-1 bg-gradient-to-r from-transparent to-[var(--color-primary)]/55 sm:block" />
              <Sparkles size={15} className="text-[var(--color-primary)]" />
              <span className="hidden h-px flex-1 bg-gradient-to-r from-[var(--color-primary)]/55 to-transparent sm:block" />
            </div>

            <p className="mt-4 text-[9px] font-semibold uppercase tracking-[0.32em] text-[var(--color-primary)]/80 sm:text-[10px] sm:tracking-[0.42em]">
              Dia Festivo Leisure Pvt Ltd
            </p>
            <p className="mt-2 text-[9px] uppercase tracking-[0.22em] text-[var(--color-text-muted)] sm:text-[10px] sm:tracking-[0.32em]">
              Refined journeys. Timeless memories.
            </p>
          </footer>
        </div>
      </section>
    </main>
  );
}

function HeroSection() {
  return (
    <section className="relative py-10 text-center sm:py-12 lg:py-14">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto mb-4 grid size-12 place-items-center rounded-full border border-[color:var(--color-primary)]/26 bg-[color:rgba(243,201,121,0.08)] text-[var(--color-primary)] shadow-[var(--shadow-primary)] sm:size-14">
          <Target size={25} strokeWidth={1.45} className="sm:size-[28px]" />
        </div>

        <h1 className="text-[clamp(3rem,13vw,7.2rem)] font-semibold leading-[0.86] tracking-[-0.08em] text-[var(--color-text)]">
          About{" "}
          <span className="bg-[image:var(--gradient-primary)] bg-clip-text text-transparent">
            Us
          </span>
        </h1>

        <div className="mx-auto mt-5 flex max-w-lg items-center justify-center gap-4">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[var(--color-primary)]/70" />
          <Sparkles size={16} className="text-[var(--color-primary)]" />
          <span className="h-px flex-1 bg-gradient-to-r from-[var(--color-primary)]/70 to-transparent" />
        </div>

        <p className="mx-auto mt-5 max-w-3xl text-xs leading-6 text-[var(--color-text-soft)] sm:text-base sm:leading-8">
          Crafting refined global journeys with precision, care, ethical
          standards, and premium hospitality.
        </p>

        <div className="mx-auto mt-7 grid max-w-3xl grid-cols-3 gap-2 sm:mt-8 sm:gap-3">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.title}
                className="rounded-[1rem] border border-[color:var(--color-primary)]/22 bg-[var(--color-surface)] p-3 shadow-[var(--shadow-card)] backdrop-blur-xl sm:rounded-2xl sm:p-4"
              >
                <div className="mx-auto mb-2 grid size-9 place-items-center rounded-xl border border-[color:var(--color-primary)]/20 bg-[color:rgba(243,201,121,0.07)] text-[var(--color-primary)] sm:mb-3 sm:size-10">
                  <Icon size={20} strokeWidth={1.5} className="sm:size-[22px]" />
                </div>
                <h3 className="text-base font-semibold text-[var(--color-primary-soft)] sm:text-2xl">
                  {stat.title}
                </h3>
                <p className="mt-1 text-[9px] leading-4 text-[var(--color-text-muted)] sm:text-xs">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function BackgroundCard() {
  return (
    <article className="relative overflow-hidden rounded-[1.25rem] border border-[color:var(--color-primary)]/22 bg-[var(--color-surface)] p-4 shadow-[var(--shadow-card)] backdrop-blur-xl sm:rounded-[1.6rem] sm:p-5 xl:min-h-[560px]">
      <CardGlow />

      <div className="relative">
        <CardHeading title="Our Background" />

        <p className="mt-5 text-xs leading-6 text-[var(--color-text-soft)] sm:mt-6 sm:text-sm sm:leading-7">
          <strong className="text-[var(--color-text)]">
            Dia Festivo Leisure Pvt. Ltd.
          </strong>{" "}
          redefines modern travel management through highly curated global
          experiences. We understand that time is your most valuable asset,
          whether you are traveling for critical business or a well-deserved
          escape. By balancing cost-effectiveness with uncompromised ethical
          standards, we design seamless journeys that reflect your personal
          lifestyle and preferences.
        </p>

        <p className="mt-5 text-xs leading-6 text-[var(--color-text-soft)] sm:mt-7 sm:text-sm sm:leading-7">
          Built on a foundation of independent thinking and progressive strategy,{" "}
          <strong className="text-[var(--color-text)]">
            Dia Festivo Leisure
          </strong>{" "}
          bridges the gap between logistical perfection and authentic
          exploration. Our professional team leverages global partnerships and
          decades of insight to give you a distinct edge in international travel.
          We are committed to excellence, making sure every milestone of your
          journey is executed flawlessly.
        </p>

        <div className="pointer-events-none absolute -bottom-12 -right-12 text-[var(--color-primary)]/10">
          <Target size={130} strokeWidth={0.8} className="sm:size-[180px]" />
        </div>
      </div>
    </article>
  );
}

function PremiumServicesCard() {
  return (
    <article className="relative overflow-hidden rounded-[1.25rem] border border-[color:var(--color-primary)]/22 bg-[var(--color-surface)] p-4 shadow-[var(--shadow-card)] backdrop-blur-xl sm:rounded-[1.6rem] sm:p-5">
      <CardGlow />

      <div className="relative">
        <CardHeading title="Our Premium Services" />

        <p className="mt-5 text-xs leading-6 text-[var(--color-text-soft)] sm:mt-6 sm:text-sm sm:leading-7">
          Discover curated travel experiences with{" "}
          <strong className="text-[var(--color-text)]">
            Dia Festivo Leisure Pvt Ltd.
          </strong>{" "}
          We craft unforgettable holiday packages, handle flight bookings for
          your dream destinations, and arrange luxury boutique accommodations.
          To ensure a completely seamless journey, our specialists also provide
          comprehensive{" "}
          <strong className="text-[var(--color-text)]">
            international visa assistance
          </strong>{" "}
          and exclusive{" "}
          <strong className="text-[var(--color-text)]">cruise bookings</strong>.
          We work directly with global partners to secure the most value-packed,
          hassle-free deals for your leisure travel.
        </p>

        <div className="mt-5 grid grid-cols-2 gap-2 border-t border-[color:var(--color-border-soft)] pt-5 sm:grid-cols-5 sm:gap-3">
          {serviceItems.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="rounded-xl border border-[color:var(--color-border-soft)] bg-black/12 p-2 text-center sm:border-0 sm:bg-transparent sm:p-0">
                <div className="mx-auto grid size-10 place-items-center rounded-xl border border-[color:var(--color-primary)]/18 bg-[color:rgba(243,201,121,0.07)] text-[var(--color-primary)] sm:size-11">
                  <Icon size={20} strokeWidth={1.45} className="sm:size-[22px]" />
                </div>
                <p className="mt-2 text-[9px] leading-4 text-[var(--color-text-muted)] sm:text-[10px]">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </article>
  );
}

function CelebrationsCard() {
  return (
    <article className="relative overflow-hidden rounded-[1.25rem] border border-[color:var(--color-primary)]/22 bg-[var(--color-surface)] p-4 shadow-[var(--shadow-card)] backdrop-blur-xl sm:rounded-[1.6rem] sm:p-5">
      <CardGlow />

      <div className="relative">
        <CardHeading title="Seamless Celebrations Guaranteed" />

        <p className="mt-5 text-xs leading-6 text-[var(--color-text-soft)] sm:mt-6 sm:text-sm sm:leading-7">
          Our dedication to your satisfaction means we are here for you at every
          step of your journey. From the first inquiry to your happy return, we
          are committed to making your holiday a smooth and joyful celebration.
          Have questions about our services or need assistance? Contact our
          experts anytime. We look forward to creating your perfect getaway and
          being your preferred travel partner for years to come.
        </p>
      </div>
    </article>
  );
}

function VisionCard() {
  return (
    <article className="relative overflow-hidden rounded-[1.25rem] border border-[color:var(--color-primary)]/22 bg-[var(--color-surface)] p-4 shadow-[var(--shadow-card)] backdrop-blur-xl sm:rounded-[1.6rem] sm:p-5">
      <CardGlow />

      <div className="relative">
        <CardHeading title="Our Vision" />

        <h3 className="mt-4 text-xl font-semibold leading-tight tracking-[-0.05em] text-[var(--color-primary-soft)] sm:text-2xl">
          To Set the Global Standard in Elite Travel
        </h3>

        <p className="mt-4 text-xs leading-6 text-[var(--color-text-soft)] sm:mt-5 sm:text-sm sm:leading-7">
          Our vision is to grow into the world’s most prestigious travel
          authority, celebrated for elevating everyday journeys into
          extraordinary milestones. We strive to lead the premium hospitality
          market through bespoke elite benefits, flawless concierge assistance,
          and curated membership tiers. We envision a sophisticated future where
          every itinerary is effortlessly executed and exquisitely tailored to
          the global citizen.
        </p>
      </div>
    </article>
  );
}

function ValuesCard() {
  return (
    <article className="relative overflow-hidden rounded-[1.25rem] border border-[color:var(--color-primary)]/22 bg-[var(--color-surface)] p-4 shadow-[var(--shadow-card)] backdrop-blur-xl sm:rounded-[1.6rem] sm:p-5">
      <CardGlow />

      <div className="relative">
        <CardHeading title="Our Core Values" />

        <div className="mt-5 grid gap-2">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <div
                key={value.title}
                className="group flex items-center gap-3 rounded-xl border border-[color:var(--color-border-soft)] bg-black/16 p-3 transition hover:border-[color:var(--color-primary)]/35 hover:bg-[color:rgba(243,201,121,0.06)]"
              >
                <div className="grid size-10 shrink-0 place-items-center rounded-xl border border-[color:var(--color-primary)]/18 bg-[color:rgba(243,201,121,0.07)] text-[var(--color-primary)]">
                  <Icon size={19} className="sm:size-[20px]" />
                </div>

                <div className="min-w-0 flex-1">
                  <h4 className="text-xs font-semibold text-[var(--color-primary-soft)] sm:text-sm">
                    {value.title}
                  </h4>
                  <p className="mt-0.5 text-[10px] text-[var(--color-text-muted)] sm:text-xs">
                    {value.description}
                  </p>
                </div>

                <ArrowRight
                  size={15}
                  className="shrink-0 text-[var(--color-primary)] transition group-hover:translate-x-1"
                />
              </div>
            );
          })}
        </div>
      </div>
    </article>
  );
}

function FinalCta() {
  return (
    <section className="relative mb-8 overflow-hidden rounded-[1.35rem] border border-[color:var(--color-primary)]/24 bg-[var(--color-glass)] p-4 shadow-[var(--shadow-card)] backdrop-blur-2xl sm:rounded-[1.8rem] sm:p-6 lg:p-7">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-24 -top-24 size-72 rounded-full bg-[color:var(--color-primary)]/10 blur-3xl" />
        <div className="absolute left-0 bottom-0 h-full w-1/3 bg-[radial-gradient(circle_at_0%_100%,rgba(243,201,121,0.13),transparent_42%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.065),transparent_42%,rgba(243,201,121,0.05))]" />
      </div>

      <div className="relative grid items-center gap-5 md:grid-cols-[auto_1fr] lg:grid-cols-[auto_1fr_auto]">
        <div className="hidden h-24 w-36 overflow-hidden rounded-2xl border border-[color:var(--color-primary)]/18 bg-[color:rgba(243,201,121,0.07)] text-[var(--color-primary)] sm:grid sm:place-items-center lg:h-28 lg:w-44">
          <Plane size={58} strokeWidth={1.1} className="lg:size-[72px]" />
        </div>

        <div>
          <h2 className="text-[clamp(1.55rem,7vw,3rem)] font-semibold tracking-[-0.06em] text-[var(--color-primary-soft)]">
            Let us create your next extraordinary journey.
          </h2>

          <div className="mt-3 flex max-w-lg items-center gap-3">
            <span className="h-px flex-1 bg-gradient-to-r from-[var(--color-primary)]/60 to-transparent" />
            <Sparkles size={15} className="text-[var(--color-primary)]" />
          </div>

          <p className="mt-3 text-xs leading-6 text-[var(--color-text-muted)] sm:text-sm sm:leading-7">
            Bespoke experiences. Flawless execution. Unforgettable memories.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 md:col-span-2 lg:col-span-1 lg:grid-cols-1 xl:grid-cols-2">
          <Link
            to="/#contact"
            className="inline-flex items-center justify-center gap-3 rounded-xl bg-[image:var(--gradient-primary)] px-6 py-3 text-xs font-semibold text-[#140d04] shadow-[var(--shadow-primary)] transition hover:-translate-y-0.5 sm:px-7 sm:py-4 sm:text-sm"
          >
            Contact Us
            <ArrowRight size={17} />
          </Link>

          <Link
            to="/#services"
            className="inline-flex items-center justify-center gap-3 rounded-xl border border-[color:var(--color-primary)]/35 bg-[color:rgba(243,201,121,0.06)] px-6 py-3 text-xs font-semibold text-[var(--color-primary)] transition hover:border-[color:var(--color-primary)]/60 hover:bg-[color:rgba(243,201,121,0.1)] sm:px-7 sm:py-4 sm:text-sm"
          >
            Explore Services
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function CardHeading({ title }: { title: string }) {
  return (
    <div>
      <h2 className="text-xl font-semibold tracking-[-0.045em] text-[var(--color-primary-soft)] sm:text-2xl">
        {title}
      </h2>
      <div className="mt-3 h-px w-16 bg-gradient-to-r from-[var(--color-primary)] to-transparent sm:w-20" />
    </div>
  );
}

function CardGlow() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.055),transparent_38%,rgba(243,201,121,0.035))]" />
      <div className="absolute -right-16 -top-16 size-44 rounded-full bg-[color:var(--color-primary)]/6 blur-3xl" />
    </div>
  );
}