import { useEffect, useRef, type ReactNode } from "react";
import { Link, useParams } from "react-router";
import {
  ArrowLeft,
  ArrowRight,
  Camera,
  ChevronLeft,
  ChevronRight,
  Compass,
  Hotel,
  MapPin,
  Martini,
  Music,
  Sailboat,
  ShieldCheck,
  Sparkles,
  Utensils,
  Waves,
} from "lucide-react";
import { getDestinationBySlug } from "../data/destinations";
import { updateSeo } from "../utils/seo";

type DestinationDetailPageProps = {
  onOpenAIChat: () => void;
};

const experiences = [
  {
    title: "Sunset Cruise",
    description: "Sail into golden hues on the sea.",
    icon: Sailboat,
  },
  {
    title: "Beach Clubs",
    description: "Chic vibes, music, and cocktails.",
    icon: Martini,
  },
  {
    title: "Water Sports",
    description: "Thrills on waves and beyond.",
    icon: Waves,
  },
  {
    title: "Local Cuisine",
    description: "Flavors that tell a local story.",
    icon: Utensils,
  },
  {
    title: "Nightlife",
    description: "Premium evenings and live music.",
    icon: Music,
  },
  {
    title: "Heritage Walk",
    description: "Stories around every corner.",
    icon: Compass,
  },
];

export function DestinationDetailPage({
  onOpenAIChat,
}: DestinationDetailPageProps) {
  const { slug } = useParams();
  const destination = getDestinationBySlug(slug);

  useEffect(() => {
    if (!destination) {
      updateSeo({
        title: "Destination Not Found | Traveluxe",
        description:
          "This destination is not available yet. Explore premium travel experiences with Traveluxe.",
      });
      return;
    }

    updateSeo({
      title: `${destination.name}, ${destination.country} Travel Guide | Traveluxe`,
      description: `${destination.description} Explore stays, places, selfie spots, itinerary ideas, and premium travel planning.`,
    });
  }, [destination]);

  if (!destination) {
    return (
      <main className="grid min-h-screen place-items-center bg-[var(--color-bg)] px-4 text-[var(--color-text)]">
        <div className="max-w-xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-primary)]">
            Destination Not Found
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em]">
            This destination is not available yet.
          </h1>

          <Link
            to="/"
            className="mt-8 inline-flex rounded-full border border-[color:var(--color-primary)]/25 bg-[color:rgba(243,201,121,0.1)] px-6 py-3 text-sm text-[var(--color-primary)] transition hover:border-[color:var(--color-primary)]/60"
          >
            ← Back to Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[var(--color-bg)] text-[var(--color-text)]">
      <section className="relative overflow-hidden px-4 py-4 sm:px-5 md:px-6 lg:px-8">
        <img
          src={destination.heroImage}
          alt={`${destination.name}, ${destination.country}`}
          className="absolute inset-x-0 top-0 h-[330px] w-full object-cover sm:h-[360px] md:h-[380px] lg:h-[420px] xl:h-[48vh]"
          loading="eager"
          decoding="async"
        />

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,4,10,0.28)_0%,rgba(2,4,10,0.52)_28%,var(--color-bg)_44%,var(--color-bg)_100%)] md:bg-[linear-gradient(180deg,rgba(2,4,10,0.24)_0%,rgba(2,4,10,0.48)_30%,var(--color-bg)_48%,var(--color-bg)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_16%,rgba(243,201,121,0.18),transparent_28%),radial-gradient(circle_at_84%_10%,rgba(224,247,255,0.12),transparent_28%)]" />

        <div className="relative z-10 mx-auto w-[min(100%,1500px)]">
          <header className="flex items-center justify-between gap-4">
            <Link
              to="/"
              className="group inline-flex items-center gap-2.5 text-[var(--color-text)] md:gap-3"
            >
              <span className="grid size-9 place-items-center rounded-full border border-[color:var(--color-primary)]/25 bg-[color:rgba(243,201,121,0.1)] text-[var(--color-primary)] md:size-10">
                <ArrowLeft
                  size={17}
                  className="transition group-hover:-translate-x-1 md:size-[18px]"
                />
              </span>

              <span>
                <strong className="block text-sm tracking-[0.28em] text-[var(--color-primary-soft)] md:text-base lg:text-lg lg:tracking-[0.35em]">
                  TRAVELUXE
                </strong>
                <small className="mt-1 hidden text-[8px] uppercase tracking-[0.28em] text-[var(--color-text-muted)] sm:block lg:tracking-[0.32em]">
                  Destination Experience
                </small>
              </span>
            </Link>
          </header>

          <div className="grid content-start gap-6 pt-8 md:grid-cols-[0.86fr_1.14fr] md:gap-6 md:pt-10 lg:gap-8 lg:pt-12">
            <div className="max-w-4xl">
              <p className="flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.28em] text-[var(--color-primary)] md:text-[10px] md:tracking-[0.34em]">
                <span className="h-px w-10 bg-gradient-to-r from-transparent to-[var(--color-primary)]/80 md:w-14" />
                Incredible {destination.country}
              </p>

              <h1 className="mt-4 text-[clamp(3rem,15vw,5.3rem)] font-semibold leading-[0.82] tracking-[-0.08em] text-[var(--color-text)] md:text-[clamp(3.5rem,7vw,6.2rem)] lg:text-[clamp(4.5rem,8vw,8rem)] xl:text-[clamp(4.8rem,12vw,9.5rem)]">
                {destination.name}, {destination.country}
              </h1>

              <h2 className="mt-4 text-[clamp(1.15rem,5vw,1.6rem)] font-medium tracking-[-0.04em] text-[var(--color-primary)] md:text-[clamp(1.15rem,2.5vw,1.75rem)] lg:text-[clamp(1.35rem,3vw,2.35rem)]">
                Where Luxury Meets Experience
              </h2>

              <p className="mt-4 max-w-2xl text-xs leading-6 text-[var(--color-text-soft)] sm:text-sm sm:leading-7 md:max-w-xl md:text-xs md:leading-6 lg:text-sm lg:leading-7 xl:text-base">
                {destination.description}
              </p>
            </div>

            <div className="relative self-end md:pt-16 lg:pt-20 xl:pt-24">
              <div className="ml-auto w-full max-w-[540px] overflow-hidden rounded-[1.45rem] border border-[color:var(--color-primary)]/22 bg-[var(--color-glass)] p-4 shadow-[var(--shadow-card)] backdrop-blur-2xl md:max-w-[430px] md:rounded-[1.5rem] md:p-4 lg:max-w-[500px] lg:rounded-[1.8rem] lg:p-5 xl:max-w-[540px] xl:rounded-[2rem]">
                <div className="pointer-events-none absolute inset-0">
                  <div className="absolute -right-20 -top-20 size-52 rounded-full bg-[color:var(--color-primary)]/12 blur-3xl md:size-56 xl:size-60" />
                  <div className="absolute -bottom-20 left-10 size-44 rounded-full bg-[color:var(--color-secondary)]/8 blur-3xl md:size-48 xl:size-52" />
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_42%,rgba(243,201,121,0.06))]" />
                </div>

                <div className="relative">
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[color:var(--color-primary)]/22 bg-[color:rgba(243,201,121,0.09)] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)] md:text-[10px] xl:px-4 xl:py-2 xl:text-xs">
                    <Sparkles size={14} />
                    Personalize This Trip
                  </div>

                  <h3 className="text-xl font-semibold leading-tight tracking-[-0.055em] text-[var(--color-text)] md:text-xl lg:text-2xl xl:text-3xl">
                    Create your perfect {destination.name} escape
                  </h3>

                  <p className="mt-3 text-xs leading-5 text-[var(--color-text-muted)] md:text-xs md:leading-5 lg:text-sm lg:leading-6">
                    Get a custom itinerary with hotels, places, food experiences,
                    photo spots, and budget-friendly options.
                  </p>

                  <button
                    type="button"
                    onClick={onOpenAIChat}
                    className="group mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[image:var(--gradient-primary)] px-5 py-3 text-xs font-semibold text-[#140d04] shadow-[var(--shadow-primary)] transition hover:-translate-y-0.5 sm:w-auto lg:text-sm"
                  >
                    <Sparkles size={16} />
                    Plan with AI
                    <ArrowRight
                      size={15}
                      className="transition group-hover:translate-x-1"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-7 grid gap-6 pb-5 md:mt-8 md:gap-6 lg:gap-7">
            <section className="grid gap-5 md:grid-cols-[0.55fr_0.45fr]">
              <div className="grid gap-5 md:grid-cols-[0.3fr_0.7fr] lg:grid-cols-[0.28fr_0.72fr]">
                <SectionIntro
                  eyebrow="Where You'll Stay"
                  title="Stay in places that define luxury"
                  description="Curated luxury stays with breathtaking views, world-class service, and unforgettable experiences."
                  linkText="View all stays"
                />

                <ManualCardRail>
                  {({ scrollRef, scrollCards }) => (
                    <>
                      <RailControls
                        onPrevious={() => scrollCards("left")}
                        onNext={() => scrollCards("right")}
                      />

                      <div
                        ref={scrollRef}
                        className="destination-manual-slider flex gap-3 overflow-x-auto scroll-smooth pb-2"
                      >
                        {destination.stays.map((stay, index) => (
                          <DestinationCard
                            key={stay.title}
                            image={stay.image}
                            label={
                              index === 0
                                ? "Signature"
                                : index === 1
                                  ? "Premium"
                                  : "Boutique"
                            }
                            title={stay.title}
                            description={stay.description}
                            meta={stay.type}
                            wide
                          />
                        ))}
                      </div>
                    </>
                  )}
                </ManualCardRail>
              </div>

              <ManualSection
                eyebrow="Places To Explore"
                action="View all places"
                icon={<MapPin size={16} />}
              >
                {destination.places.map((place) => (
                  <DestinationCard
                    key={place.title}
                    image={place.image}
                    label="Explore"
                    title={place.title}
                    description={place.description}
                    meta={destination.name}
                  />
                ))}
              </ManualSection>
            </section>

            <section className="grid gap-5 md:grid-cols-[0.5fr_0.5fr]">
              <ManualSection
                eyebrow="Where You'll Capture Memories"
                icon={<Camera size={16} />}
              >
                {destination.selfieSpots.map((spot) => (
                  <DestinationCard
                    key={spot.title}
                    image={spot.image}
                    label="Photo Spot"
                    title={spot.title}
                    description={spot.description}
                    meta="Perfect for clicks"
                  />
                ))}
              </ManualSection>

              <section className="rounded-[1.25rem] border border-[color:var(--color-primary)]/18 bg-[var(--color-surface)] p-4 shadow-[var(--shadow-card)] backdrop-blur-xl md:rounded-[1.35rem] md:p-4 lg:rounded-[1.5rem] lg:p-5 xl:rounded-[1.6rem]">
                <SectionTitle eyebrow="Signature Experiences" />

                <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-6 md:grid-cols-3 md:gap-3 lg:grid-cols-6 lg:gap-4">
                  {experiences.map((experience) => {
                    const Icon = experience.icon;

                    return (
                      <div key={experience.title} className="text-center">
                        <div className="mx-auto grid size-10 place-items-center rounded-xl border border-[color:var(--color-primary)]/18 bg-[color:rgba(243,201,121,0.08)] text-[var(--color-primary)] md:size-10 lg:size-12 lg:rounded-2xl">
                          <Icon size={20} className="lg:size-[23px]" />
                        </div>

                        <h4 className="mt-2 text-[10px] font-semibold text-[var(--color-text)] md:text-[10px] lg:mt-3 lg:text-sm">
                          {experience.title}
                        </h4>

                        <p className="mt-1 hidden text-[9px] leading-4 text-[var(--color-text-muted)] sm:block md:hidden lg:block lg:text-xs lg:leading-5">
                          {experience.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </section>
            </section>

            <section className="grid gap-5 md:grid-cols-[1fr_220px] lg:grid-cols-[1fr_240px] xl:grid-cols-[1fr_260px]">
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--color-primary)] md:tracking-[0.28em]">
                    Suggested Itinerary
                  </p>
                  <span className="h-px flex-1 bg-gradient-to-r from-[var(--color-primary)]/65 to-transparent" />
                </div>

                <div className="relative">
                  <div className="absolute left-0 right-0 top-4 hidden h-px bg-gradient-to-r from-[var(--color-primary)]/70 via-[var(--color-primary)]/25 to-transparent md:block" />

                  <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-5 md:gap-3">
                    {destination.itinerary.slice(0, 5).map((item, index) => (
                      <article key={item.day} className="relative">
                        <span className="relative z-10 grid size-9 place-items-center rounded-full border border-[color:var(--color-primary)]/35 bg-[var(--color-bg-soft)] text-xs font-bold text-[var(--color-primary)]">
                          {index + 1}
                        </span>

                        <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--color-primary)] md:mt-4 md:text-[10px] lg:text-xs">
                          {item.day}
                        </p>

                        <h3 className="mt-2 text-xs font-semibold text-[var(--color-secondary)] md:text-[11px] lg:text-sm">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-[10px] leading-4 text-[var(--color-text-muted)] md:text-[9px] lg:text-xs lg:leading-5">
                          {item.description}
                        </p>
                      </article>
                    ))}
                  </div>
                </div>
              </div>

              <div className="rounded-[1.2rem] border border-[color:var(--color-primary)]/20 bg-[var(--color-surface)] p-4 shadow-[var(--shadow-card)] backdrop-blur-xl md:p-4 lg:rounded-[1.3rem] lg:p-5">
                <p className="flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] md:text-xs lg:text-sm">
                  <Sparkles size={18} />
                  This is just a sample
                </p>

                <p className="mt-3 text-xs leading-6 text-[var(--color-text-muted)] md:text-[10px] md:leading-5 lg:text-sm lg:leading-6">
                  Every itinerary is crafted just for you based on your budget,
                  travel style, hotel preference, and dates.
                </p>
              </div>
            </section>

            <footer className="overflow-hidden rounded-[1.4rem] border border-[color:var(--color-primary)]/20 bg-[var(--color-glass)] p-4 shadow-[var(--shadow-card)] backdrop-blur-2xl md:rounded-[1.6rem] lg:rounded-[2rem]">
              <div className="grid items-center gap-4 md:grid-cols-[1fr_0.9fr]">
                <div>
                  <h3 className="text-[clamp(1.5rem,7vw,2.3rem)] font-semibold tracking-[-0.055em] text-[var(--color-text)] md:text-[clamp(1.5rem,3vw,2.2rem)] xl:text-[clamp(1.6rem,4vw,2.8rem)]">
                    Your {destination.name} Escape Awaits
                  </h3>

                  <p className="mt-1 text-xs text-[var(--color-text-muted)] lg:text-sm">
                    Let our travel experts craft a journey that’s uniquely yours.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-3 md:gap-2 lg:gap-3">
                  <FooterMiniCard
                    icon={<Hotel size={18} />}
                    title="Handpicked Stays"
                    text="Curated comfort"
                  />
                  <FooterMiniCard
                    icon={<MapPin size={18} />}
                    title="Smart Route"
                    text="Easy travel flow"
                  />
                  <FooterMiniCard
                    icon={<ShieldCheck size={18} />}
                    title="Assisted Trip"
                    text="Reliable support"
                  />
                </div>
              </div>
            </footer>
          </div>
        </div>
      </section>
    </main>
  );
}

function ManualCardRail({
  children,
}: {
  children: (props: {
    scrollRef: React.RefObject<HTMLDivElement | null>;
    scrollCards: (direction: "left" | "right") => void;
  }) => ReactNode;
}) {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  function scrollCards(direction: "left" | "right") {
    const element = scrollRef.current;
    if (!element) return;

    const amount = Math.min(element.clientWidth * 0.86, 720);

    element.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  }

  return <div className="min-w-0">{children({ scrollRef, scrollCards })}</div>;
}

function ManualSection({
  eyebrow,
  action,
  icon,
  children,
}: {
  eyebrow: string;
  action?: string;
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <ManualCardRail>
      {({ scrollRef, scrollCards }) => (
        <div className="min-w-0">
          <div className="mb-4 flex items-center justify-between gap-3">
            <SectionTitle eyebrow={eyebrow} icon={icon} />

            <div className="flex items-center gap-2">
              {action && (
                <button className="hidden text-xs font-semibold text-[var(--color-primary)] transition hover:text-[var(--color-primary-soft)] sm:block">
                  {action} →
                </button>
              )}

              <RailControls
                onPrevious={() => scrollCards("left")}
                onNext={() => scrollCards("right")}
              />
            </div>
          </div>

          <div
            ref={scrollRef}
            className="destination-manual-slider flex gap-3 overflow-x-auto scroll-smooth pb-2"
          >
            {children}
          </div>
        </div>
      )}
    </ManualCardRail>
  );
}

function RailControls({
  onPrevious,
  onNext,
}: {
  onPrevious: () => void;
  onNext: () => void;
}) {
  return (
    <div className="flex items-center gap-2">
      <ScrollButton direction="left" onClick={onPrevious} />
      <ScrollButton direction="right" onClick={onNext} />
    </div>
  );
}

function ScrollButton({
  direction,
  onClick,
}: {
  direction: "left" | "right";
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === "left" ? "Scroll left" : "Scroll right"}
      className="grid size-8 place-items-center rounded-full border border-[color:var(--color-primary)]/24 bg-[color:rgba(243,201,121,0.08)] text-[var(--color-primary)] shadow-[0_14px_50px_rgba(0,0,0,0.28)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-[color:var(--color-primary)]/55 hover:bg-[color:rgba(243,201,121,0.13)] md:size-9"
    >
      {direction === "left" ? (
        <ChevronLeft size={17} />
      ) : (
        <ChevronRight size={17} />
      )}
    </button>
  );
}

function SectionIntro({
  eyebrow,
  title,
  description,
  linkText,
}: {
  eyebrow: string;
  title: string;
  description: string;
  linkText: string;
}) {
  return (
    <div>
      <SectionTitle eyebrow={eyebrow} />

      <h2 className="max-w-xs text-[clamp(1.35rem,6vw,2rem)] font-semibold leading-[0.98] tracking-[-0.06em] text-[var(--color-text)] md:text-[clamp(1.15rem,2.4vw,1.65rem)] lg:text-[clamp(1.4rem,3vw,2.1rem)] xl:text-[clamp(1.55rem,4vw,2.35rem)]">
        {title}
      </h2>

      <div className="mt-3 h-px w-14 bg-[var(--color-primary)] md:mt-4 md:w-16" />

      <p className="mt-3 max-w-sm text-xs leading-5 text-[var(--color-text-muted)] md:text-[10px] md:leading-5 lg:text-xs lg:leading-6 xl:text-sm">
        {description}
      </p>

      <button className="mt-3 text-xs font-semibold text-[var(--color-primary)] transition hover:text-[var(--color-primary-soft)] lg:text-sm">
        {linkText} →
      </button>
    </div>
  );
}

function SectionTitle({
  eyebrow,
  icon,
}: {
  eyebrow: string;
  icon?: ReactNode;
}) {
  return (
    <div className="flex items-center gap-2 md:gap-3">
      {icon && (
        <span className="grid size-7 place-items-center rounded-lg border border-[color:var(--color-primary)]/20 bg-[color:rgba(243,201,121,0.08)] text-[var(--color-primary)] md:size-8 md:rounded-xl">
          {icon}
        </span>
      )}

      <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)] md:text-[10px] md:tracking-[0.26em] lg:tracking-[0.28em]">
        {eyebrow}
      </p>

      <span className="hidden h-px w-10 bg-gradient-to-r from-[var(--color-primary)] to-transparent sm:block md:w-12 lg:w-14" />
    </div>
  );
}

function DestinationCard({
  image,
  label,
  title,
  description,
  meta,
  wide = false,
}: {
  image: string;
  label: string;
  title: string;
  description: string;
  meta: string;
  wide?: boolean;
}) {
  return (
    <article
      className={`group shrink-0 overflow-hidden rounded-xl border border-[color:var(--color-border)] bg-[var(--color-surface)] shadow-[0_18px_60px_rgba(0,0,0,0.3)] backdrop-blur-xl transition hover:border-[color:var(--color-primary)]/40 ${
        wide
          ? "w-[235px] sm:w-[275px] md:w-[220px] lg:w-[270px] xl:w-[320px]"
          : "w-[205px] sm:w-[235px] md:w-[190px] lg:w-[220px] xl:w-[255px]"
      }`}
    >
      <div
        className={
          wide
            ? "relative h-36 overflow-hidden sm:h-40 md:h-32 lg:h-36 xl:h-38"
            : "relative h-32 overflow-hidden md:h-28 lg:h-32"
        }
      >
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/76 via-black/14 to-transparent" />

        <span className="absolute left-3 top-3 rounded-full bg-black/35 px-2.5 py-1 text-[8px] font-semibold uppercase tracking-[0.16em] text-white/82 backdrop-blur-xl md:text-[8px] lg:text-[9px]">
          {label}
        </span>
      </div>

      <div className="p-3">
        <h3 className="truncate text-sm font-semibold tracking-[-0.04em] text-[var(--color-text)] lg:text-base">
          {title}
        </h3>

        <p className="mt-1 line-clamp-2 text-[10px] leading-4 text-[var(--color-text-muted)] lg:text-xs lg:leading-5">
          {description}
        </p>

        <div className="mt-3 flex items-center gap-1.5 text-[10px] text-[var(--color-text-faint)] lg:text-[11px]">
          <MapPin size={12} className="text-[var(--color-primary)]" />
          {meta}
        </div>
      </div>
    </article>
  );
}

function FooterMiniCard({
  icon,
  title,
  text,
}: {
  icon: ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-xl border border-[color:var(--color-primary)]/16 bg-[color:rgba(243,201,121,0.07)] p-3 md:p-2.5 lg:rounded-2xl lg:p-3">
      <div className="mb-2 text-[var(--color-primary)]">{icon}</div>
      <h4 className="text-xs font-semibold text-[var(--color-text)] lg:text-sm">
        {title}
      </h4>
      <p className="mt-1 text-[10px] text-[var(--color-text-muted)] lg:text-xs">
        {text}
      </p>
    </div>
  );
}