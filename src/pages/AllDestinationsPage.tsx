import { useMemo, useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  Clock3,
  Crown,
  Headphones,
  Heart,
  MapPin,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import { useNavigate } from "react-router";
import { destinationDetails } from "../data/destinations";

type AllDestinationsPageProps = {
  onOpenAIChat: () => void;
};

const filters = [
  "All Destinations",
  "India",
  "International",
  "Beach",
  "Mountains",
  "Adventure",
  "Family",
  "Honeymoon",
];

const sortOptions = ["Popular", "Rating High", "Shortest Trip", "Longest Trip"];

const destinationMeta: Record<
  string,
  {
    tag: string;
    category: string[];
    description: string;
    popularity: number;
  }
> = {
  andaman: {
    tag: "Popular",
    category: ["India", "Beach", "Honeymoon", "Family", "Adventure"],
    popularity: 5,
    description:
      "Pristine beaches, crystal clear waters, and unforgettable island experiences.",
  },
  dubai: {
    tag: "Popular",
    category: ["International", "Family", "Adventure", "Honeymoon"],
    popularity: 4,
    description:
      "Luxury, adventure, shopping, and iconic landmarks in one extraordinary city.",
  },
  kashmir: {
    tag: "Popular",
    category: ["India", "Mountains", "Honeymoon", "Family"],
    popularity: 3,
    description:
      "Heaven on earth with breathtaking valleys, snow peaks, and serene lakes.",
  },
  goa: {
    tag: "Trending",
    category: ["India", "Beach", "Adventure", "Honeymoon", "Family"],
    popularity: 2,
    description:
      "Golden beaches, vibrant nightlife, heritage streets, and coastal luxury.",
  },
  digha: {
    tag: "Weekend",
    category: ["India", "Beach", "Family"],
    popularity: 1,
    description:
      "A peaceful seaside escape with sunrise views, family moments, and coastal comfort.",
  },
};

const trustItems = [
  {
    title: "Best Price Guarantee",
    description: "We offer the best plans with no hidden fees",
    icon: ShieldCheck,
  },
  {
    title: "Luxury Experiences",
    description: "Handpicked premium stays and exclusive moments",
    icon: Crown,
  },
  {
    title: "24/7 Support",
    description: "Always here before, during, and after your trip",
    icon: Headphones,
  },
  {
    title: "Safe & Secure",
    description: "Your safety is our top priority",
    icon: ShieldCheck,
  },
];

export function AllDestinationsPage({ onOpenAIChat }: AllDestinationsPageProps) {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("All Destinations");
  const [sortBy, setSortBy] = useState("Popular");

  const visibleDestinations = useMemo(() => {
    const filtered = destinationDetails.filter((destination) => {
      if (activeFilter === "All Destinations") return true;

      const meta = destinationMeta[destination.slug];
      return meta?.category.includes(activeFilter);
    });

    return [...filtered].sort((a, b) => {
      const metaA = destinationMeta[a.slug];
      const metaB = destinationMeta[b.slug];

      if (sortBy === "Rating High") {
        return Number(b.rating) - Number(a.rating);
      }

      if (sortBy === "Shortest Trip") {
        return getTripDays(a.duration) - getTripDays(b.duration);
      }

      if (sortBy === "Longest Trip") {
        return getTripDays(b.duration) - getTripDays(a.duration);
      }

      return (metaB?.popularity ?? 0) - (metaA?.popularity ?? 0);
    });
  }, [activeFilter, sortBy]);

  return (
    <main className="min-h-screen overflow-hidden bg-[var(--color-bg)] text-[var(--color-text)]">
      <section className="relative">
        <div className="relative min-h-[300px] overflow-hidden px-4 py-14 text-center sm:min-h-[340px] sm:px-6 sm:py-16 md:min-h-[330px] md:px-6 md:py-16 lg:min-h-[360px] lg:px-8 lg:py-18 xl:min-h-[410px] xl:py-24">
          <img
            src={destinationDetails.find((item) => item.slug === "kashmir")?.heroImage}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover opacity-45"
          />

          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,4,10,0.72)_0%,rgba(2,4,10,0.64)_46%,var(--color-bg)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_4%,rgba(243,201,121,0.16),transparent_34%)]" />
          <div className="absolute bottom-0 left-1/2 h-px w-[min(960px,86vw)] -translate-x-1/2 bg-gradient-to-r from-transparent via-[var(--color-primary)]/55 to-transparent" />

          <div className="relative mx-auto max-w-4xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[var(--color-primary)] sm:text-xs sm:tracking-[0.42em] md:text-[10px] lg:text-xs">
              Explore The World
            </p>

            <h1 className="mt-4 text-[clamp(2.65rem,12vw,4.8rem)] font-semibold leading-[0.88] tracking-[-0.075em] md:text-[clamp(3rem,7vw,5rem)] xl:mt-5 xl:text-[clamp(4rem,8vw,7rem)]">
              All{" "}
              <span className="bg-[image:var(--gradient-primary)] bg-clip-text text-transparent">
                Destinations
              </span>
            </h1>

            <div className="mx-auto mt-4 flex max-w-xs items-center justify-center gap-3 sm:max-w-sm sm:gap-4 xl:mt-5">
              <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[var(--color-primary)]/70" />
              <Sparkles size={15} className="text-[var(--color-primary)] xl:size-4" />
              <span className="h-px flex-1 bg-gradient-to-r from-[var(--color-primary)]/70 to-transparent" />
            </div>

            <p className="mx-auto mt-5 max-w-2xl text-xs leading-6 text-[var(--color-text-soft)] sm:text-sm sm:leading-7 md:max-w-xl md:text-sm md:leading-7 xl:mt-6 xl:text-base xl:leading-8">
              Discover handpicked destinations crafted for luxury, comfort, and
              unforgettable experiences. Your perfect journey starts here.
            </p>
          </div>
        </div>

        <div className="relative px-4 pb-10 sm:px-5 md:px-6 md:pb-12 lg:px-8 xl:pb-14">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[image:var(--gradient-bg)]" />
            <div className="absolute -left-20 top-20 size-[320px] rounded-full bg-[color:var(--color-primary)]/7 blur-3xl md:size-[380px] xl:size-[420px]" />
            <div className="absolute -right-20 top-40 size-[360px] rounded-full bg-[color:var(--color-secondary)]/6 blur-3xl md:size-[440px] xl:size-[520px]" />
          </div>

          <div className="relative mx-auto w-[min(100%,1280px)]">
            <div className="flex flex-col gap-4 pt-6 md:flex-row md:items-start md:justify-between md:gap-4 md:pt-7 xl:pt-8">
              <div className="flex flex-wrap gap-2 md:max-w-[calc(100%-220px)]">
                {filters.map((filter) => {
                  const isActive = activeFilter === filter;

                  return (
                    <button
                      key={filter}
                      type="button"
                      onClick={() => setActiveFilter(filter)}
                      className={`rounded-full border px-3.5 py-2 text-[10px] font-semibold transition sm:px-4 sm:py-2.5 sm:text-xs md:px-3 md:py-2 md:text-[10px] lg:px-4 lg:text-xs xl:px-5 ${
                        isActive
                          ? "border-[color:var(--color-primary)]/45 bg-[image:var(--gradient-primary)] text-[#140d04] shadow-[var(--shadow-primary)]"
                          : "border-[color:var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-soft)] hover:border-[color:var(--color-primary)]/40 hover:bg-[color:rgba(243,201,121,0.08)] hover:text-[var(--color-text)]"
                      }`}
                    >
                      {filter}
                    </button>
                  );
                })}
              </div>

              <div className="relative w-full sm:w-[220px] md:w-[190px] lg:w-[210px] xl:w-[220px]">
                <select
                  value={sortBy}
                  onChange={(event) => setSortBy(event.target.value)}
                  className="w-full appearance-none rounded-full border border-[color:var(--color-border)] bg-[var(--color-surface)] px-4 py-2.5 pr-10 text-xs font-semibold text-[var(--color-text-soft)] outline-none backdrop-blur-xl transition hover:border-[color:var(--color-primary)]/40 focus:border-[color:var(--color-primary)]/55 md:px-4 md:py-2.5 md:text-[10px] lg:text-xs xl:px-5 xl:py-3 xl:text-sm"
                >
                  {sortOptions.map((option) => (
                    <option key={option} value={option} className="bg-[#050914] text-white">
                      Sort By: {option}
                    </option>
                  ))}
                </select>

                <ChevronDown
                  size={16}
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[var(--color-primary)]"
                />
              </div>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2 md:mt-6 md:grid-cols-3 md:gap-4 xl:gap-5">
              {visibleDestinations.map((destination) => {
                const meta = destinationMeta[destination.slug];

                return (
                  <article
                    key={destination.slug}
                    className="group overflow-hidden rounded-[1.2rem] border border-[color:var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-card)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-[color:var(--color-primary)]/45 sm:rounded-[1.35rem] md:rounded-[1.25rem] xl:rounded-[1.5rem]"
                  >
                    <div className="relative h-52 overflow-hidden sm:h-56 md:h-44 lg:h-52 xl:h-64">
                      <img
                        src={destination.heroImage}
                        alt={`${destination.name}, ${destination.country}`}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                        loading="lazy"
                        decoding="async"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-black/16 to-transparent" />

                      <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-md bg-[var(--color-primary-soft)] px-2.5 py-1.5 text-[10px] font-semibold text-[#140d04] md:left-3 md:top-3 md:text-[9px] lg:text-[10px] xl:left-4 xl:top-4 xl:px-3 xl:text-xs">
                        <Star size={12} className="fill-current xl:size-[13px]" />
                        {meta?.tag ?? "Popular"}
                      </span>

                      <button
                        type="button"
                        aria-label={`Save ${destination.name}`}
                        className="absolute right-3 top-3 grid size-9 place-items-center rounded-full border border-white/16 bg-black/35 text-white backdrop-blur-xl transition hover:border-[color:var(--color-primary)]/45 hover:text-[var(--color-primary)] xl:right-4 xl:top-4 xl:size-10"
                      >
                        <Heart size={17} />
                      </button>
                    </div>

                    <div className="p-4 md:p-4 xl:p-5">
                      <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0">
                          <h2 className="truncate text-2xl font-semibold tracking-[-0.055em] text-[var(--color-text)] md:text-2xl lg:text-[1.65rem] xl:text-3xl">
                            {destination.name}
                          </h2>

                          <p className="mt-2 flex items-center gap-1.5 text-xs text-[var(--color-text-muted)] xl:text-sm">
                            <MapPin size={13} className="shrink-0 text-[var(--color-primary)] xl:size-[14px]" />
                            {destination.country}
                          </p>
                        </div>

                        <div className="flex shrink-0 items-center gap-1.5 text-xs font-semibold text-[var(--color-primary)] xl:text-sm">
                          <Star size={14} className="fill-current xl:size-[15px]" />
                          {destination.rating}
                        </div>
                      </div>

                      <p className="mt-3 min-h-[54px] text-xs leading-6 text-[var(--color-text-soft)] md:min-h-[60px] md:text-[11px] md:leading-5 lg:text-xs lg:leading-6 xl:mt-4 xl:min-h-[56px] xl:text-sm xl:leading-7">
                        {meta?.description ?? destination.description}
                      </p>

                      <div className="mt-4 flex items-center justify-between gap-3 xl:mt-5 xl:gap-4">
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-text-soft)] md:text-[10px] lg:text-xs xl:gap-2 xl:text-sm">
                          <Clock3 size={14} className="text-[var(--color-text-muted)] xl:size-4" />
                          {formatDuration(destination.duration)}
                        </span>

                        <button
                          type="button"
                          onClick={() => navigate(`/destinations/${destination.slug}`)}
                          className="group/button inline-flex items-center gap-2 rounded-xl border border-[color:var(--color-primary)]/45 px-3.5 py-2 text-xs font-semibold text-[var(--color-primary)] transition hover:bg-[color:rgba(243,201,121,0.1)] md:px-3 md:text-[10px] lg:px-4 lg:text-xs xl:gap-3 xl:px-5 xl:py-2.5 xl:text-sm"
                        >
                          Explore
                          <ArrowRight
                            size={15}
                            className="transition group-hover/button:translate-x-1 xl:size-4"
                          />
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {visibleDestinations.length === 0 && (
              <div className="mt-10 rounded-[1.5rem] border border-[color:var(--color-border)] bg-[var(--color-surface)] p-10 text-center">
                <p className="text-lg font-semibold text-[var(--color-text)]">
                  No destinations found.
                </p>
                <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                  Try another category.
                </p>
              </div>
            )}

            <div className="mt-7 overflow-hidden rounded-[1.25rem] border border-[color:var(--color-primary)]/24 bg-[var(--color-surface)] p-4 shadow-[var(--shadow-primary)] backdrop-blur-xl sm:p-5 md:mt-8 md:rounded-[1.4rem] md:p-5 xl:rounded-[1.6rem] xl:p-7">
              <div className="grid items-center gap-4 md:grid-cols-[auto_1fr_auto] xl:gap-5">
                <div className="grid size-14 place-items-center rounded-full border border-[color:var(--color-primary)]/35 bg-[color:rgba(243,201,121,0.09)] text-[var(--color-primary)] shadow-[var(--shadow-primary)] md:size-16 xl:size-20">
                  <Crown size={26} className="xl:size-9" />
                </div>

                <div>
                  <h2 className="text-xl font-semibold tracking-[-0.05em] sm:text-2xl md:text-2xl xl:text-3xl">
                    Not sure which destination is best for you?
                  </h2>
                  <p className="mt-2 text-xs leading-6 text-[var(--color-text-soft)] sm:text-sm sm:leading-7 md:text-xs lg:text-sm xl:text-sm">
                    Let our AI travel planner create the perfect itinerary tailored just for you.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={onOpenAIChat}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[image:var(--gradient-primary)] px-5 py-3 text-xs font-semibold text-[#140d04] shadow-[var(--shadow-primary)] transition hover:-translate-y-0.5 md:px-5 md:text-xs xl:gap-3 xl:px-8 xl:py-4 xl:text-sm"
                >
                  <Sparkles size={17} />
                  Plan My Trip
                </button>
              </div>
            </div>

            <div className="mt-7 grid gap-4 border-t border-[color:var(--color-border-soft)] pt-7 sm:grid-cols-2 md:grid-cols-4 md:gap-3 xl:mt-8 xl:gap-4">
              {trustItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="flex items-start gap-3 md:gap-2 lg:gap-3 xl:gap-4">
                    <div className="grid size-10 shrink-0 place-items-center rounded-xl border border-[color:var(--color-primary)]/20 bg-[color:rgba(243,201,121,0.08)] text-[var(--color-primary)] md:size-9 lg:size-10 xl:size-11">
                      <Icon size={20} className="md:size-[18px] lg:size-5 xl:size-[22px]" />
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-xs font-semibold text-[var(--color-text)] md:text-[10px] lg:text-xs xl:text-sm">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs leading-5 text-[var(--color-text-muted)] md:text-[9px] md:leading-4 lg:text-xs lg:leading-5 xl:text-sm xl:leading-6">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function formatDuration(duration: string) {
  return duration
    .replace("Nights", "N")
    .replace("Night", "N")
    .replace("Days", "D")
    .replace("Day", "D")
    .replace(/\s*\/\s*/g, " / ");
}

function getTripDays(duration: string) {
  const match = duration.match(/(\d+)\s*Days?/i);
  return match ? Number(match[1]) : 0;
}