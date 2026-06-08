import { useEffect, useMemo, useState } from "react";
import { updateSeo } from "../utils/seo";

import {
  ArrowRight,
  ChevronDown,
  Crown,
  Headphones,
  Heart,
  MapPin,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import { useNavigate } from "react-router";
import { destinationDetails } from "../data/destinations";
import {
  getLocationCountByFilter,
  locationCatalog,
  type LocationCatalogItem,
  type LocationTag,
} from "../data/locationCatalog";

const locationImageModules = import.meta.glob(
  "../assets/destination-details/*/hero.{jpg,jpeg,png,webp}",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);


const locationImagesBySlug = Object.entries(locationImageModules).reduce<
  Record<string, string>
>((acc, [path, image]) => {
  const parts = path.split("/");
  const folderName = parts[parts.length - 2];

  if (folderName) {
    acc[folderName.toLowerCase()] = image as string;
  }

  return acc;
}, {});

type AllDestinationsPageProps = {
  onOpenAIChat: () => void;
};

const MAX_VISIBLE_DESTINATIONS = 11;

const filters = [
  "All Destinations",
  "India",
  "International",
  "Beach",
  "Mountains",
  "Adventure",
  "Family",
  "Honeymoon",
  "Heritage",
  "Wildlife",
  "Spiritual",
];

const sortOptions = ["Popular", "A to Z", "India First", "International First"];

const availableMoreCount: Record<string, string> = {
  "All Destinations": "+200",
  India: "+200",
  International: "+200",
  Beach: "+200",
  Mountains: "+200",
  Adventure: "+200",
  Family: "+200",
  Honeymoon: "+200",
  Heritage: "+200",
  Wildlife: "+200",
  Spiritual: "+200",
};

const destinationMeta: Record<
  string,
  {
    tag: string;
    description: string;
    rating: string;
    popularity: number;
  }
> = {
  andaman: {
    tag: "Popular",
    rating: "4.8",
    popularity: 10,
    description:
      "Pristine beaches, crystal clear waters, and unforgettable island experiences.",
  },
  dubai: {
    tag: "Luxury",
    rating: "4.9",
    popularity: 9,
    description:
      "Luxury, adventure, shopping, and iconic landmarks in one extraordinary city.",
  },
  kashmir: {
    tag: "Popular",
    rating: "4.8",
    popularity: 8,
    description:
      "Heaven on earth with breathtaking valleys, snow peaks, and serene lakes.",
  },
  goa: {
    tag: "Trending",
    rating: "4.7",
    popularity: 7,
    description:
      "Golden beaches, vibrant nightlife, heritage streets, and coastal luxury.",
  },
  digha: {
    tag: "Weekend",
    rating: "4.6",
    popularity: 6,
    description:
      "A peaceful seaside escape with sunrise views, family moments, and coastal comfort.",
  },
  manali: {
    tag: "Mountains",
    rating: "4.7",
    popularity: 5,
    description:
      "Snowy peaks, pine valleys, adventure activities, and romantic hill escapes.",
  },
  kerala: {
    tag: "Nature",
    rating: "4.8",
    popularity: 5,
    description:
      "Backwaters, Ayurveda, tea gardens, beaches, and calm luxury experiences.",
  },
  ladakh: {
    tag: "Adventure",
    rating: "4.8",
    popularity: 5,
    description:
      "High-altitude roads, monasteries, lakes, mountains, and epic adventure routes.",
  },
  ooty: {
    tag: "Nature",
    rating: "4.6",
    popularity: 4,
    description:
      "Tea gardens, misty hills, peaceful lakes, and family-friendly mountain stays.",
  },
  rajasthan: {
    tag: "Heritage",
    rating: "4.8",
    popularity: 4,
    description:
      "Royal forts, palaces, desert experiences, culture, and luxury heritage stays.",
  },
  gangtok: {
    tag: "Mountains",
    rating: "4.7",
    popularity: 4,
    description:
      "Mountain views, monasteries, clean city vibes, and beautiful nature escapes.",
  },
  singapore: {
    tag: "City",
    rating: "4.8",
    popularity: 5,
    description:
      "Clean cityscapes, family attractions, luxury shopping, and world-class experiences.",
  },
  malaysia: {
    tag: "Family",
    rating: "4.7",
    popularity: 4,
    description:
      "City attractions, islands, nature, shopping, and family-friendly holidays.",
  },
  maldives: {
    tag: "Luxury",
    rating: "4.9",
    popularity: 5,
    description:
      "Private island resorts, turquoise lagoons, overwater villas, and romantic escapes.",
  },
  thailand: {
    tag: "Beach",
    rating: "4.8",
    popularity: 5,
    description:
      "Beaches, nightlife, islands, temples, food, and easy international holidays.",
  },
  indonesia: {
    tag: "Nature",
    rating: "4.8",
    popularity: 4,
    description:
      "Island beauty, beaches, temples, nature, and honeymoon-friendly stays.",
  },
  vietnam: {
    tag: "Heritage",
    rating: "4.7",
    popularity: 4,
    description:
      "Scenic bays, lantern towns, cultural streets, food, and beautiful landscapes.",
  },
  japan: {
    tag: "Premium",
    rating: "4.9",
    popularity: 4,
    description:
      "Modern cities, temples, cherry blossoms, food, shopping, and unique culture.",
  },
  turkey: {
    tag: "Heritage",
    rating: "4.8",
    popularity: 4,
    description:
      "Historic cities, hot-air balloons, coastlines, bazaars, and rich culture.",
  },
  switzerland: {
    tag: "Luxury",
    rating: "4.9",
    popularity: 4,
    description:
      "Alpine scenery, luxury trains, lakes, snow peaks, and romantic mountain stays.",
  },
  australia: {
    tag: "Adventure",
    rating: "4.8",
    popularity: 3,
    description:
      "Beaches, wildlife, cities, road trips, adventure, and premium travel experiences.",
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

    useEffect(() => {
    updateSeo({
      title: "All Destinations | DIA FESTIVO",
      description:
        "Explore all DIA FESTIVO destinations across India and international locations with premium stays, curated experiences, family trips, honeymoon packages, and AI-powered trip planning.",
      canonicalPath: "/destinations",
    });
  }, []);
  
  const visibleDestinations = useMemo(() => {
    const filtered = locationCatalog.filter((location) => {
      if (activeFilter === "All Destinations") return true;
      if (activeFilter === "India") return location.category === "india";
      if (activeFilter === "International") return location.category === "international";

      return location.tags.includes(activeFilter as LocationTag);
    });

    const sorted = [...filtered].sort((a, b) => {
      const metaA = destinationMeta[a.slug];
      const metaB = destinationMeta[b.slug];

      if (sortBy === "A to Z") {
        return a.name.localeCompare(b.name);
      }

      if (sortBy === "India First") {
        if (a.category !== b.category) {
          return a.category === "india" ? -1 : 1;
        }

        return a.name.localeCompare(b.name);
      }

      if (sortBy === "International First") {
        if (a.category !== b.category) {
          return a.category === "international" ? -1 : 1;
        }

        return a.name.localeCompare(b.name);
      }

      return (metaB?.popularity ?? 0) - (metaA?.popularity ?? 0);
    });

    return sorted.slice(0, MAX_VISIBLE_DESTINATIONS);
  }, [activeFilter, sortBy]);

  const realMatchingCount = getLocationCountByFilter(activeFilter);
  const moreLabel = availableMoreCount[activeFilter] ?? "+200";

  return (
    <main className="min-h-screen overflow-hidden bg-[var(--color-bg)] text-[var(--color-text)]">
      <section className="relative">
        <div className="relative min-h-[320px] overflow-hidden px-4 py-16 text-center sm:min-h-[360px] sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <img
            src={destinationDetails.find((item) => item.slug === "kashmir")?.heroImage}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover opacity-90"
          />

<div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,4,10,0.38)_0%,rgba(2,4,10,0.36)_48%,rgba(2,4,10,0.82)_100%)]" />          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_4%,rgba(243,201,121,0.16),transparent_34%)]" />
          <div className="absolute bottom-0 left-1/2 h-px w-[min(960px,86vw)] -translate-x-1/2 bg-gradient-to-r from-transparent via-[var(--color-primary)]/55 to-transparent" />

          <div className="relative mx-auto max-w-4xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[var(--color-primary)] sm:text-xs sm:tracking-[0.42em]">
              Explore The World
            </p>

            <h1 className="mt-5 text-[clamp(3rem,12vw,7rem)] font-semibold leading-[0.88] tracking-[-0.075em]">
              All{" "}
              <span className="bg-[image:var(--gradient-primary)] bg-clip-text text-transparent">
                Destinations
              </span>
            </h1>

            <div className="mx-auto mt-5 flex max-w-sm items-center justify-center gap-4">
              <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[var(--color-primary)]/70" />
              <Sparkles size={16} className="text-[var(--color-primary)]" />
              <span className="h-px flex-1 bg-gradient-to-r from-[var(--color-primary)]/70 to-transparent" />
            </div>

            <p className="mx-auto mt-5 max-w-2xl text-xs leading-6 text-[var(--color-text-soft)] sm:mt-6 sm:text-base sm:leading-8">
              Discover handpicked destinations crafted for luxury, comfort, and
              unforgettable experiences. Explore featured destinations or let our
              AI planner help you choose from 200+ travel options.
            </p>
          </div>
        </div>

        <div className="relative px-3 pb-10 sm:px-5 sm:pb-12 lg:px-8">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[image:var(--gradient-bg)]" />
            <div className="absolute -left-20 top-20 size-[420px] rounded-full bg-[color:var(--color-primary)]/7 blur-3xl" />
            <div className="absolute -right-20 top-40 size-[520px] rounded-full bg-[color:var(--color-secondary)]/6 blur-3xl" />
          </div>

          <div className="relative mx-auto w-[min(100%,1280px)]">
            <div className="flex flex-col gap-4 pt-6 sm:pt-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex flex-wrap gap-2">
                {filters.map((filter) => {
                  const isActive = activeFilter === filter;

                  return (
                    <button
                      key={filter}
                      type="button"
                      onClick={() => setActiveFilter(filter)}
                      className={`rounded-full border px-3 py-2 text-[10px] font-semibold transition sm:px-4 sm:py-2.5 sm:text-xs lg:px-5 ${
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

              <div className="relative w-full sm:w-[240px]">
                <select
                  value={sortBy}
                  onChange={(event) => setSortBy(event.target.value)}
                  className="w-full appearance-none rounded-full border border-[color:var(--color-border)] bg-[var(--color-surface)] px-5 py-3 pr-10 text-sm font-semibold text-[var(--color-text-soft)] outline-none backdrop-blur-xl transition hover:border-[color:var(--color-primary)]/40 focus:border-[color:var(--color-primary)]/55"
                >
                  {sortOptions.map((option) => (
                    <option
                      key={option}
                      value={option}
                      className="bg-[#050914] text-white"
                    >
                      Sort By: {option}
                    </option>
                  ))}
                </select>

                <ChevronDown
                  size={17}
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[var(--color-primary)]"
                />
              </div>
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-[1.2rem] border border-[color:var(--color-border-soft)] bg-[var(--color-surface-soft)] px-4 py-3 backdrop-blur-xl">
              <p className="text-xs text-[var(--color-text-muted)] sm:text-sm">
                Showing{" "}
                <span className="font-semibold text-[var(--color-primary)]">
                  {visibleDestinations.length}
                </span>{" "}
                featured options from{" "}
                <span className="font-semibold text-[var(--color-text)]">
                  {activeFilter}
                </span>
              </p>

              <p className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--color-primary)] sm:text-sm">
                <Search size={16} />
                {realMatchingCount}+ curated matches in catalog
              </p>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3 sm:mt-6 sm:gap-4 md:grid-cols-3 md:gap-5">
              {visibleDestinations.map((location) => (
                <LocationCard
                  key={location.slug}
                  location={location}
                  onExplore={() => {
                    if (location.hasDetailPage) {
                      navigate(`/destinations/${location.slug}`);
                      return;
                    }

                    onOpenAIChat();
                  }}
                />
              ))}

              <MoreDestinationsCard
                countLabel={moreLabel}
                activeFilter={activeFilter}
                onOpenAIChat={onOpenAIChat}
              />
            </div>

            <div className="mt-8 overflow-hidden rounded-[1.3rem] border border-[color:var(--color-primary)]/24 bg-[var(--color-surface)] p-4 shadow-[var(--shadow-primary)] backdrop-blur-xl sm:rounded-[1.6rem] sm:p-7">
              <div className="grid items-center gap-5 lg:grid-cols-[auto_1fr_auto]">
                <div className="grid size-16 place-items-center rounded-full border border-[color:var(--color-primary)]/35 bg-[color:rgba(243,201,121,0.09)] text-[var(--color-primary)] shadow-[var(--shadow-primary)] sm:size-20">
                  <Crown size={30} className="sm:size-[36px]" />
                </div>

                <div>
                  <h2 className="text-xl font-semibold tracking-[-0.05em] sm:text-3xl">
                    Not sure which destination is best for you?
                  </h2>
                  <p className="mt-2 text-xs leading-6 text-[var(--color-text-soft)] sm:text-sm sm:leading-7">
                    Let our AI travel planner create the perfect itinerary
                    tailored just for you.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={onOpenAIChat}
                  className="inline-flex items-center justify-center gap-3 rounded-xl bg-[image:var(--gradient-primary)] px-6 py-3 text-xs font-semibold text-[#140d04] shadow-[var(--shadow-primary)] transition hover:-translate-y-0.5 sm:px-8 sm:py-4 sm:text-sm"
                >
                  <Sparkles size={18} />
                  Plan My Trip
                </button>
              </div>
            </div>

            <div className="mt-8 grid gap-4 border-t border-[color:var(--color-border-soft)] pt-7 sm:grid-cols-2 lg:grid-cols-4">
              {trustItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="grid size-10 shrink-0 place-items-center rounded-xl border border-[color:var(--color-primary)]/20 bg-[color:rgba(243,201,121,0.08)] text-[var(--color-primary)] sm:size-11">
                      <Icon size={21} />
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-[var(--color-text)]">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs leading-5 text-[var(--color-text-muted)] sm:text-sm sm:leading-6">
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

function LocationCard({
  location,
  onExplore,
}: {
  location: LocationCatalogItem;
  onExplore: () => void;
}) {
  const detail = destinationDetails.find((item) => item.slug === location.slug);
  const meta = destinationMeta[location.slug];

  const image = detail?.heroImage ?? locationImagesBySlug[location.slug];
  const tag = meta?.tag ?? location.tags[0] ?? "Curated";
  const rating = meta?.rating ?? "4.7";
  const description =
    meta?.description ??
    `Explore ${location.name} with custom stays, sightseeing, food, transfers, and a personalized itinerary.`;

  return (
    <article className="group overflow-hidden rounded-[1.1rem] border border-[color:var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-card)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-[color:var(--color-primary)]/45 sm:rounded-[1.25rem] lg:rounded-[1.5rem]">
      <div className="relative h-36 overflow-hidden sm:h-44 md:h-52 lg:h-64">
        {image ? (
          <img
            src={image}
            alt={`${location.name}, ${location.country}`}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="grid h-full place-items-center bg-[radial-gradient(circle_at_30%_20%,rgba(243,201,121,0.18),transparent_36%),linear-gradient(135deg,#080b12,#02040a)]">
            <div className="text-center">
              <MapPin
                size={34}
                className="mx-auto text-[var(--color-primary)] sm:size-[40px] lg:size-[44px]"
              />
              <p className="mt-2 text-[8px] font-semibold uppercase tracking-[0.22em] text-[var(--color-primary)] sm:text-[10px] sm:tracking-[0.28em]">
                {location.category === "india" ? "India" : "International"}
              </p>
            </div>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />

        <span className="absolute left-2.5 top-2.5 inline-flex items-center gap-1 rounded-md bg-[var(--color-primary-soft)] px-2 py-1 text-[9px] font-semibold text-[#140d04] sm:left-4 sm:top-4 sm:px-3 sm:py-1.5 sm:text-xs">
          <Star size={11} className="fill-current sm:size-[13px]" />
          {tag}
        </span>

        <button
          type="button"
          aria-label={`Save ${location.name}`}
          className="absolute right-2.5 top-2.5 grid size-8 place-items-center rounded-full border border-white/16 bg-black/35 text-white backdrop-blur-xl transition hover:border-[color:var(--color-primary)]/45 hover:text-[var(--color-primary)] sm:right-4 sm:top-4 sm:size-10"
        >
          <Heart size={15} className="sm:size-[18px]" />
        </button>
      </div>

      <div className="p-3 sm:p-4 lg:p-5">
        <div className="flex items-start justify-between gap-2 sm:gap-4">
          <div className="min-w-0">
            <h2 className="truncate text-lg font-semibold tracking-[-0.055em] text-[var(--color-text)] sm:text-2xl lg:text-3xl">
              {location.name}
            </h2>

            <p className="mt-1.5 flex items-center gap-1.5 truncate text-[11px] text-[var(--color-text-muted)] sm:text-xs lg:mt-2 lg:text-sm">
              <MapPin size={12} className="shrink-0 text-[var(--color-primary)] sm:size-[14px]" />
              {location.country}
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-1 text-xs font-semibold text-[var(--color-primary)] sm:text-sm">
            <Star size={13} className="fill-current sm:size-[15px]" />
            {rating}
          </div>
        </div>

        <p className="mt-3 line-clamp-2 min-h-[40px] text-[11px] leading-5 text-[var(--color-text-soft)] sm:min-h-[44px] sm:text-xs lg:mt-4 lg:min-h-[56px] lg:text-sm lg:leading-7">
          {description}
        </p>

        <div className="mt-4 lg:mt-5">
          <button
            type="button"
            onClick={onExplore}
            className="group/button inline-flex w-full items-center justify-center gap-2 rounded-lg border border-[color:var(--color-primary)]/45 px-3 py-2 text-[11px] font-semibold text-[var(--color-primary)] transition hover:bg-[color:rgba(243,201,121,0.1)] sm:rounded-xl sm:text-xs lg:gap-3 lg:px-5 lg:py-2.5 lg:text-sm"
          >
            {location.hasDetailPage ? "Explore" : "Plan with AI"}
            <ArrowRight
              size={14}
              className="transition group-hover/button:translate-x-1 sm:size-[16px]"
            />
          </button>
        </div>
      </div>
    </article>
  );
}

function MoreDestinationsCard({
  countLabel,
  activeFilter,
  onOpenAIChat,
}: {
  countLabel: string;
  activeFilter: string;
  onOpenAIChat: () => void;
}) {
  return (
    <article className="relative isolate overflow-hidden rounded-[1.1rem] border border-[color:var(--color-primary)]/35 bg-[linear-gradient(135deg,rgba(243,201,121,0.12),rgba(2,4,10,0.92)_46%,rgba(2,4,10,0.98))] p-3 shadow-[var(--shadow-primary)] backdrop-blur-xl sm:rounded-[1.25rem] sm:p-4 lg:rounded-[1.5rem] lg:p-6">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-20 -top-20 size-64 rounded-full bg-[color:var(--color-primary)]/16 blur-3xl" />
        <div className="absolute -left-20 bottom-0 size-56 rounded-full bg-[color:var(--color-secondary)]/9 blur-3xl" />
        <div className="absolute inset-5 rounded-[1.2rem] border border-white/10" />
      </div>

      <div className="relative z-10 flex h-full min-h-[300px] flex-col justify-between text-center sm:min-h-[340px] lg:min-h-[360px]">
        <div>
          <div className="mx-auto grid size-14 place-items-center rounded-full border border-[color:var(--color-primary)]/32 bg-black/24 text-[var(--color-primary)] shadow-[var(--shadow-primary)] sm:size-16 lg:size-20">
            <Sparkles size={26} className="sm:size-[30px] lg:size-[38px]" />
          </div>

          <p className="mt-5 text-[clamp(2.5rem,10vw,5.8rem)] font-semibold leading-none tracking-[-0.08em] text-[var(--color-primary-soft)] lg:mt-7">
            {countLabel}
          </p>

          <h2 className="mt-2 text-lg font-semibold tracking-[-0.055em] text-[var(--color-text)] sm:text-2xl lg:mt-3 lg:text-3xl">
            More Locations
          </h2>

          <p className="mx-auto mt-3 line-clamp-4 max-w-sm text-[11px] leading-5 text-[var(--color-text-soft)] sm:text-xs lg:mt-4 lg:text-sm lg:leading-7">
            Want more options for{" "}
            <span className="font-semibold text-[var(--color-primary)]">
              {activeFilter}
            </span>
            ? Tell our AI planner your budget, dates, mood, and preferred travel
            style.
          </p>
        </div>

        <button
          type="button"
          onClick={onOpenAIChat}
          className="group mt-5 inline-flex items-center justify-center gap-2 rounded-lg bg-[image:var(--gradient-primary)] px-3 py-2.5 text-[11px] font-semibold text-[#140d04] shadow-[var(--shadow-primary)] transition hover:-translate-y-0.5 sm:rounded-xl sm:text-xs lg:mt-8 lg:gap-3 lg:px-7 lg:py-4 lg:text-sm"
        >
          Plan More Locations
          <ArrowRight
            size={14}
            className="transition group-hover:translate-x-1 sm:size-[18px]"
          />
        </button>
      </div>
    </article>
  );
}