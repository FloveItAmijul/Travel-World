import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Compass,
  Headphones,
  MapPin,
  Martini,
  Music,
  Sailboat,
  Search,
  Sparkles,
  Star,
  Sun,
  Utensils,
  Waves,
} from "lucide-react";
import { Link, useParams } from "react-router";
import { getDestinationBySlug } from "../data/destinations";

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
    title: "Goan Cuisine",
    description: "Flavors that tell a local story.",
    icon: Utensils,
  },
  {
    title: "Nightlife",
    description: "Beach shacks to world-class DJs.",
    icon: Music,
  },
  {
    title: "Heritage Walk",
    description: "Portuguese tales around every corner.",
    icon: Compass,
  },
];

export function DestinationDetailPage1({ onOpenAIChat }: DestinationDetailPageProps) {
  const { slug } = useParams();
  const destination = getDestinationBySlug(slug);

  if (!destination) {
    return (
      <main className="grid min-h-screen place-items-center bg-[#02040a] px-4 text-white">
        <div className="max-w-xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200">
            Destination Not Found
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em]">
            This destination is not available yet.
          </h1>
          <Link
            to="/"
            className="mt-8 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-sm text-white/70 transition hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-white"
          >
            ← Back to Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#02040a] text-white">
      <section className="relative min-h-screen overflow-hidden px-4 py-4 sm:px-6 lg:px-8">
        <img
          src={destination.heroImage}
          alt={`${destination.name}, ${destination.country}`}
          className="absolute inset-0 h-[42vh] min-h-[330px] w-full object-cover lg:h-[43vh]"
          loading="eager"
          decoding="async"
        />

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,4,10,0.34)_0%,rgba(2,4,10,0.5)_28%,#02040a_44%,#02040a_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_16%,rgba(251,191,36,0.13),transparent_28%),radial-gradient(circle_at_84%_10%,rgba(125,211,252,0.13),transparent_28%)]" />

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-32px)] w-[min(100%,1500px)] flex-col">
          <header className="flex items-center justify-between gap-4">
            <Link
              to="/"
              className="group inline-flex items-center gap-3 text-white"
            >
              <span className="grid size-10 place-items-center rounded-full border border-amber-300/25 bg-amber-300/10 text-amber-200">
                <ArrowLeft size={18} className="transition group-hover:-translate-x-1" />
              </span>

              <span>
                <strong className="block text-lg tracking-[0.35em] text-amber-100">
                  TRAVELUXE
                </strong>
                <small className="mt-1 hidden text-[8px] uppercase tracking-[0.32em] text-white/45 sm:block">
                  Destination Experience
                </small>
              </span>
            </Link>

            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Search"
                className="hidden size-11 place-items-center rounded-full border border-white/10 bg-black/25 text-white/70 backdrop-blur-xl transition hover:border-cyan-300/40 hover:text-white sm:grid"
              >
                <Search size={18} />
              </button>

              <button
                type="button"
                onClick={onOpenAIChat}
                className="rounded-xl border border-cyan-200/30 bg-cyan-200/10 px-4 py-2.5 text-xs font-semibold text-cyan-50 backdrop-blur-xl transition hover:bg-cyan-200/15 sm:px-5"
              >
                Plan with AI
              </button>
            </div>
          </header>

          <div className="grid flex-1 content-start gap-5 pt-10 lg:grid-cols-[1.25fr_0.95fr] lg:pt-12">
            <div className="max-w-4xl">
              <p className="flex items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.34em] text-amber-200">
                <span className="h-px w-14 bg-gradient-to-r from-transparent to-amber-300/80" />
                Incredible {destination.country}
              </p>

              <h1 className="mt-4 text-[clamp(4.8rem,12vw,9.5rem)] font-semibold leading-[0.78] tracking-[-0.08em] text-white">
                {destination.name}, {destination.country}
              </h1>

              <h2 className="mt-4 text-[clamp(1.35rem,3vw,2.35rem)] font-medium tracking-[-0.04em] text-amber-200">
                Where Coastal Luxury Meets Culture
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/72 sm:text-base">
                {destination.description}
              </p>

              <button
                type="button"
                onClick={onOpenAIChat}
                className="group mt-6 inline-flex items-center gap-3 rounded-full border border-amber-300/25 bg-black/25 px-5 py-3 text-sm font-semibold text-amber-100 backdrop-blur-xl transition hover:border-amber-200/60 hover:bg-amber-300/10"
              >
                <span className="grid size-9 place-items-center rounded-full bg-amber-300/15 text-amber-200">
                  <Sparkles size={17} />
                </span>
                Plan {destination.name} Escape
                <ArrowRight size={16} className="transition group-hover:translate-x-1" />
              </button>
            </div>

            <div className="self-start rounded-[1.8rem] border border-amber-300/22 bg-[#07101a]/80 p-4 shadow-[0_30px_100px_rgba(0,0,0,0.55)] backdrop-blur-2xl lg:mt-12">
              <div className="grid grid-cols-4 divide-x divide-white/10 text-center">
                <HeroStat icon={<CalendarDays size={22} />} label="Ideal Duration" value="3 – 5 Days" />
                <HeroStat icon={<Sun size={22} />} label="Best Season" value={destination.bestTime} />
                <HeroStat icon={<Star size={22} />} label="Rating" value={`${destination.rating} / 5`} />
                <HeroStat icon={<Sparkles size={22} />} label="Starting From" value={destination.startingFrom} />
              </div>

              <button
                type="button"
                onClick={onOpenAIChat}
                className="mt-5 flex w-full items-center justify-center gap-3 rounded-lg bg-gradient-to-r from-amber-200 to-amber-500 px-5 py-3 text-sm font-semibold text-[#140d04] shadow-[0_18px_60px_rgba(251,191,36,0.2)] transition hover:-translate-y-0.5"
              >
                Plan Your {destination.name} Escape
                <ArrowRight size={16} />
              </button>

              <p className="mt-3 text-center text-xs text-white/54">
                Custom itineraries · Handpicked stays · 24/7 Concierge
              </p>
            </div>
          </div>

          <div className="grid gap-5 pb-4 lg:grid-cols-[0.55fr_1.45fr]">
            <SideIntro
              eyebrow="Where You'll Stay"
              title="Stay in places that define luxury"
              description="Curated luxury stays with breathtaking views, world-class service, and unforgettable experiences."
            />

            <div className="grid gap-3 sm:grid-cols-3">
              {destination.stays.map((stay, index) => (
                <CompactImageCard
                  key={stay.title}
                  image={stay.image}
                  label={index === 0 ? "North Goa" : index === 1 ? "South Goa" : "Heritage"}
                  title={stay.title}
                  description={stay.description}
                  meta={stay.type}
                  tall
                />
              ))}
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1.15fr_1fr]">
            <div>
              <SectionHeader eyebrow="Where You'll Capture Memories" />

              <div className="grid gap-3 sm:grid-cols-4">
                {destination.selfieSpots.map((spot) => (
                  <CompactImageCard
                    key={spot.title}
                    image={spot.image}
                    label="Photo Spot"
                    title={spot.title}
                    description={spot.description}
                    meta="Perfect for clicks"
                  />
                ))}
              </div>
            </div>

            <div>
              <SectionHeader eyebrow="Places To Explore" action="View all places" />

              <div className="grid gap-3 sm:grid-cols-4">
                {destination.places.map((place) => (
                  <CompactImageCard
                    key={place.title}
                    image={place.image}
                    label="Explore"
                    title={place.title}
                    description={place.description}
                    meta={destination.name}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-5 grid gap-5 lg:grid-cols-[0.48fr_1.52fr]">
            <div>
              <SectionHeader eyebrow="Suggested Itinerary" />
              <p className="max-w-sm text-sm leading-6 text-white/58">
                A clean sample flow for a smooth {destination.name} journey.
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-amber-300/70 via-amber-300/25 to-transparent md:block" />

              <div className="grid gap-3 md:grid-cols-4">
                {destination.itinerary.map((item, index) => (
                  <div key={item.day} className="relative rounded-2xl border border-white/10 bg-white/[0.035] p-4 backdrop-blur-xl">
                    <span className="relative z-10 grid size-9 place-items-center rounded-full border border-amber-300/35 bg-[#07101a] text-xs font-bold text-amber-200">
                      {index + 1}
                    </span>
                    <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-amber-200">
                      {item.day}
                    </p>
                    <h3 className="mt-2 text-sm font-semibold text-cyan-100">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs leading-5 text-white/52">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_0.6fr]">
            <div className="rounded-[1.7rem] border border-amber-300/20 bg-white/[0.035] p-5 backdrop-blur-xl">
              <SectionHeader eyebrow="Signature Experiences" />

              <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-6">
                {experiences.map((experience) => {
                  const Icon = experience.icon;

                  return (
                    <div key={experience.title} className="text-center">
                      <div className="mx-auto grid size-12 place-items-center rounded-2xl border border-amber-300/18 bg-amber-300/8 text-amber-200">
                        <Icon size={23} />
                      </div>
                      <h4 className="mt-3 text-sm font-semibold text-white">
                        {experience.title}
                      </h4>
                      <p className="mt-1 text-xs leading-5 text-white/48">
                        {experience.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-[1.7rem] border border-amber-300/20 bg-white/[0.035] p-5 backdrop-blur-xl">
              <p className="flex items-center gap-2 text-sm font-semibold text-amber-100">
                <Sparkles size={18} />
                This is just a sample
              </p>
              <p className="mt-3 text-sm leading-6 text-white/58">
                Every itinerary is crafted just for you. Tell AI your budget, mood, travelers, and travel dates.
              </p>
            </div>
          </div>

          <footer className="mt-5 overflow-hidden rounded-[2rem] border border-amber-300/20 bg-[#07101a]/80 p-4 backdrop-blur-2xl">
            <div className="grid items-center gap-4 lg:grid-cols-[1fr_auto_auto]">
              <div>
                <h3 className="text-[clamp(1.6rem,4vw,2.8rem)] font-semibold tracking-[-0.055em] text-white">
                  Your Goan Escape Awaits
                </h3>
                <p className="mt-1 text-sm text-white/52">
                  Let our travel experts craft a journey that’s uniquely yours.
                </p>
              </div>

              <button
                type="button"
                onClick={onOpenAIChat}
                className="rounded-xl bg-gradient-to-r from-amber-200 to-amber-500 px-8 py-3 text-sm font-semibold text-[#140d04] transition hover:-translate-y-0.5"
              >
                Plan with AI
              </button>

              <Link
                to="/#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-amber-300/25 px-8 py-3 text-sm font-semibold text-amber-100 transition hover:bg-amber-300/10"
              >
                <Headphones size={17} />
                Contact Us
              </Link>
            </div>
          </footer>
        </div>
      </section>
    </main>
  );
}

function HeroStat({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="px-2 py-2">
      <div className="mx-auto mb-2 grid size-9 place-items-center text-cyan-100">
        {icon}
      </div>
      <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-cyan-100/62">
        {label}
      </p>
      <p className="mt-1 text-sm font-semibold text-white sm:text-base">{value}</p>
    </div>
  );
}

function SideIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div>
      <SectionHeader eyebrow={eyebrow} />
      <h2 className="max-w-xs text-[clamp(1.6rem,4vw,2.45rem)] font-semibold leading-[0.98] tracking-[-0.06em] text-white">
        {title}
      </h2>
      <div className="mt-4 h-px w-16 bg-amber-300" />
      <p className="mt-4 max-w-sm text-sm leading-6 text-white/58">
        {description}
      </p>
      <button className="mt-4 text-sm font-semibold text-amber-200 transition hover:text-amber-100">
        View all stays →
      </button>
    </div>
  );
}

function SectionHeader({
  eyebrow,
  action,
}: {
  eyebrow: string;
  action?: string;
}) {
  return (
    <div className="mb-4 flex items-center justify-between gap-4">
      <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-amber-200">
        {eyebrow}
        <span className="h-px w-14 bg-gradient-to-r from-amber-300 to-transparent" />
      </p>

      {action && (
        <button className="hidden text-xs font-semibold text-cyan-100/70 transition hover:text-cyan-100 sm:block">
          {action} →
        </button>
      )}
    </div>
  );
}

function CompactImageCard({
  image,
  label,
  title,
  description,
  meta,
  tall = false,
}: {
  image: string;
  label: string;
  title: string;
  description: string;
  meta: string;
  tall?: boolean;
}) {
  return (
    <article className="group overflow-hidden rounded-xl border border-white/10 bg-white/[0.035] shadow-[0_18px_60px_rgba(0,0,0,0.3)]">
      <div className={tall ? "relative h-40 overflow-hidden" : "relative h-32 overflow-hidden"}>
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/12 to-transparent" />
        <span className="absolute left-3 top-3 rounded-full bg-black/35 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-white/78 backdrop-blur-xl">
          {label}
        </span>
      </div>

      <div className="p-3">
        <h3 className="truncate text-base font-semibold tracking-[-0.04em] text-white">
          {title}
        </h3>
        <p className="mt-1 line-clamp-2 text-xs leading-5 text-white/56">
          {description}
        </p>
        <div className="mt-3 flex items-center gap-1.5 text-[11px] text-white/42">
          <MapPin size={12} className="text-amber-200" />
          {meta}
        </div>
      </div>
    </article>
  );
}