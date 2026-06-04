import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import {
  ArrowRight,
  Crown,
  Flame,
  Leaf,
  MapPin,
  Navigation,
  Star,
//  TrendingUp,
} from "lucide-react";
import { useNavigate } from "react-router";

const imageModules = import.meta.glob("../assets/destinations/*.{jpg,jpeg,png,webp}", {
  eager: true,
  query: "?url",
  import: "default",
});

const imagesByName = Object.entries(imageModules).reduce<Record<string, string>>(
  (acc, [path, image]) => {
    const fileName = path.split("/").pop()?.split(".")[0] ?? "";
    const cleanName = fileName.replace(/^\d+[-_\s]*/, "").toLowerCase();
    acc[cleanName] = image as string;
    return acc;
  },
  {}
);

const destinations = [
  {
    slug: "andaman",
    name: "Andaman",
    country: "India",
    image: imagesByName.andaman,
    rating: "4.8",
    reviews: "330+",
    tag: "Popular",
    tagIcon: Flame,
    accent: "gold",
  },
  {
    slug: "lakshadweep",
    name: "Lakshadweep",
    country: "India",
    image: imagesByName.lakshadweep,
    rating: "4.9",
    reviews: "260+",
    tag: "Island",
    tagIcon: Leaf,
    accent: "ice",
  },
  {
    slug: "greece",
    name: "Greece",
    country: "Greece",
    image: imagesByName.greece,
    rating: "4.9",
    reviews: "390+",
    tag: "Luxury",
    tagIcon: Crown,
    accent: "gold",
  },
  {
    slug: "dubai",
    name: "Dubai",
    country: "UAE",
    image: imagesByName.dubai,
    rating: "4.9",
    reviews: "450+",
    tag: "Luxury",
    tagIcon: Crown,
    accent: "gold",
  },
  {
    slug: "kashmir",
    name: "Kashmir",
    country: "India",
    image: imagesByName.kashmir,
    rating: "4.8",
    reviews: "310+",
    tag: "Serene",
    tagIcon: Leaf,
    accent: "ice",
  },
];
export function Destinations() {
  const navigate = useNavigate();

  useEffect(() => {
    destinations.forEach((destination) => {
      if (!destination.image) return;

      const image = new Image();
      image.src = destination.image;

      if ("decode" in image) {
        image.decode().catch(() => {
          console.warn(`Failed to decode image for ${destination.name}`);
        });
      }
    });
  }, []);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.14,
  });

  return (
    <section
      id="destinations"
      ref={ref}
      className={`premium-reveal-section theme-section-bg relative overflow-hidden px-4 py-14 text-[var(--color-text)] sm:px-5 sm:py-16 md:px-6 md:py-18 lg:px-8 lg:py-22 xl:py-28 ${
        inView ? "is-visible" : ""
      }`}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-10 h-px w-[min(520px,78vw)] -translate-x-1/2 bg-gradient-to-r from-transparent via-[var(--color-primary)]/60 to-transparent md:top-14 xl:top-16" />
        <div className="absolute left-1/2 top-10 size-1.5 -translate-x-1/2 rounded-full bg-[var(--color-primary)] shadow-[0_0_30px_var(--color-primary-glow)] md:top-14 xl:top-16" />

        <div className="absolute -left-20 top-16 size-52 rounded-full border border-[color:var(--color-primary)]/10 md:size-64 xl:-left-24 xl:top-20 xl:size-80" />
        <div className="absolute -left-8 top-28 size-36 rounded-full border border-[color:var(--color-primary)]/10 md:size-44 xl:-left-10 xl:top-32 xl:size-52" />
        <div className="absolute -right-24 top-20 size-64 rounded-full border border-[color:var(--color-secondary)]/10 md:size-80 xl:top-24 xl:size-96" />
        <div className="absolute right-4 top-36 size-44 rounded-full border border-[color:var(--color-primary)]/10 md:size-52 xl:right-10 xl:top-40 xl:size-64" />

        <div className="absolute bottom-0 left-0 h-56 w-full bg-[radial-gradient(circle_at_20%_70%,rgba(243,201,121,0.13),transparent_30%),radial-gradient(circle_at_80%_65%,rgba(224,247,255,0.09),transparent_30%)] xl:h-64" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(243,201,121,0.045),transparent_35%)]" />
      </div>

      <div className="relative mx-auto w-[min(100%,1280px)]">
        <div className="premium-reveal-heading mx-auto max-w-4xl text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[var(--color-primary)] sm:text-xs sm:tracking-[0.42em]">
            Curated Destinations
          </p>

          <h2 className="mt-4 text-[clamp(2.25rem,8vw,3.7rem)] font-semibold leading-[0.95] tracking-[-0.06em] text-[var(--color-text)] md:mt-5 md:text-[clamp(2.7rem,5.4vw,4.2rem)] xl:text-[clamp(2.8rem,8vw,5.4rem)]">
            Handpicked Journeys
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-xs leading-6 text-[var(--color-text-soft)] sm:text-sm sm:leading-7 md:mt-5 md:text-sm md:leading-7 xl:mt-6 xl:text-base xl:leading-8">
            Explore our most loved escapes, selected for scenery, comfort, and
            unforgettable experiences.
          </p>
        </div>

        <div className="mt-9 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-4 md:mt-12 md:grid-cols-5 md:gap-3 lg:gap-4 xl:mt-14 xl:gap-5">
          {destinations.map((destination, index) => {
            const TagIcon = destination.tagIcon;
            const isIce = destination.accent === "ice";

            return (
              <article
                key={destination.name}
                style={{ "--reveal-delay": `${index * 80}ms` } as React.CSSProperties}
                className={`premium-reveal-card destination-card group relative isolate overflow-hidden rounded-[1.05rem] bg-[var(--color-bg-soft)] shadow-[0_18px_55px_rgba(0,0,0,0.34)] ring-1 ring-inset transition duration-500 hover:-translate-y-1 sm:rounded-[1.25rem] md:rounded-[1.15rem] xl:rounded-[1.7rem] ${
                  isIce
                    ? "ring-[color:var(--color-secondary)]/20 hover:ring-[color:var(--color-secondary)]/52 hover:shadow-[var(--shadow-secondary)]"
                    : "ring-[color:var(--color-primary)]/22 hover:ring-[color:var(--color-primary)]/55 hover:shadow-[var(--shadow-primary)]"
                }`}
              >
                <div className="destination-image-shell relative h-32 overflow-hidden bg-[var(--color-bg-soft)] sm:h-44 md:h-28 lg:h-36 xl:h-60">
                  {destination.image ? (
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="destination-card-image h-full w-full object-cover"
                      loading="eager"
                      decoding="async"
                      draggable={false}
                    />
                  ) : (
                    <div className="grid h-full place-items-center bg-white/5 text-xs text-[var(--color-text-muted)]">
                      Missing image
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-[var(--color-bg)]/18 to-transparent" />

                  <div
                    className={`absolute left-2 top-2 inline-flex items-center gap-1 rounded-full border px-2 py-1 text-[8px] font-medium backdrop-blur-xl sm:left-3 sm:top-3 sm:text-[10px] md:left-2 md:top-2 md:px-2 md:py-1 md:text-[8px] lg:text-[9px] xl:left-5 xl:top-5 xl:gap-1.5 xl:px-3 xl:py-1.5 xl:text-xs ${
                      isIce
                        ? "border-[color:var(--color-secondary)]/35 bg-[color:rgba(224,247,255,0.1)] text-[var(--color-secondary)]"
                        : "border-[color:var(--color-primary)]/35 bg-[color:rgba(243,201,121,0.12)] text-[var(--color-primary-soft)]"
                    }`}
                  >
                    <TagIcon size={10} className="sm:size-[12px] md:size-[10px] xl:size-[13px]" />
                    <span className="line-clamp-1">{destination.tag}</span>
                  </div>
                </div>

                <div className="relative z-10 bg-[var(--color-bg-soft)] p-3 sm:p-4 md:p-3 lg:p-4 xl:p-5">
                  <div className="flex items-start gap-1.5 sm:gap-2 md:gap-1.5 xl:gap-2">
                    <MapPin
                      size={17}
                      className={`mt-0.5 shrink-0 sm:size-[20px] md:size-[15px] lg:size-[18px] xl:mt-1 xl:size-[23px] ${
                        isIce ? "text-[var(--color-secondary)]" : "text-[var(--color-primary)]"
                      }`}
                    />

                    <div className="min-w-0">
                      <h3 className="truncate text-xl font-semibold leading-none tracking-[-0.05em] text-[var(--color-text)] sm:text-2xl md:text-lg lg:text-xl xl:text-3xl">
                        {destination.name}
                      </h3>

                      <p
                        className={`mt-2 truncate text-xs font-medium md:mt-1.5 md:text-[10px] lg:text-xs xl:mt-3 xl:text-sm ${
                          isIce ? "text-[var(--color-secondary)]" : "text-[var(--color-primary)]"
                        }`}
                      >
                        {destination.country}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 grid gap-2 text-[10px] text-[var(--color-text-soft)] sm:text-xs md:mt-3 md:text-[9px] lg:text-[10px] xl:mt-5 xl:flex xl:flex-wrap xl:items-center xl:gap-x-5 xl:gap-y-2 xl:text-sm">
                    <span className="inline-flex items-center gap-1.5">
                      <Star size={12} className="fill-[var(--color-primary)] text-[var(--color-primary)] md:size-[11px] xl:size-[15px]" />
                      {destination.rating}
                      <span className="hidden xl:inline">({destination.reviews})</span>
                    </span>

                    
                  </div>

                  <div className="my-3 h-px bg-[var(--color-border-soft)] md:my-3 xl:my-5" />

                

                 

                  <button
                    type="button"
                    onClick={() => navigate(`/destinations/${destination.slug}`)}
                    className={`mt-3 flex w-full items-center justify-center gap-2 rounded-full border bg-transparent px-3 py-2 text-[10px] font-semibold text-[var(--color-text)] transition duration-300 group-hover:gap-3 sm:mt-4 sm:py-2.5 sm:text-xs md:mt-3 md:px-2 md:py-2 md:text-[9px] lg:text-[10px] xl:mt-5 xl:gap-3 xl:px-5 xl:py-3 xl:text-sm xl:group-hover:gap-5 ${
                      isIce
                        ? "border-[color:var(--color-secondary)]/40 hover:bg-[color:rgba(224,247,255,0.08)]"
                        : "border-[color:var(--color-primary)]/45 hover:bg-[color:rgba(243,201,121,0.1)]"
                    }`}
                  >
                    <span className="hidden md:inline xl:hidden">Explore</span>
                    <span className="md:hidden xl:inline">Explore Now</span>
                    <ArrowRight
                      size={14}
                      className={`md:size-[13px] xl:size-[18px] ${
                        isIce ? "text-[var(--color-secondary)]" : "text-[var(--color-primary)]"
                      }`}
                    />
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-8 flex justify-center md:mt-9 xl:mt-12">
          <button
            type="button"
            onClick={() => navigate("/destinations")}
            className="group inline-flex w-full max-w-xs items-center justify-center gap-4 rounded-full border border-[color:var(--color-primary)]/35 bg-[var(--color-surface)] px-5 py-3 text-sm font-semibold text-[var(--color-text)] shadow-[var(--shadow-primary)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[color:var(--color-primary-soft)]/70 hover:bg-[color:rgba(243,201,121,0.1)] sm:max-w-sm sm:gap-5 sm:px-6 sm:py-3.5 md:max-w-sm md:gap-5 xl:max-w-md xl:gap-6 xl:px-7 xl:py-4 xl:text-base"
          >
            <span className="grid size-9 place-items-center rounded-full bg-[color:rgba(243,201,121,0.1)] text-[var(--color-primary)] shadow-[0_0_35px_var(--color-primary-glow)] sm:size-10 xl:size-11">
              <Navigation size={17} className="xl:size-[19px]" />
            </span>
            View All Destinations
            <ArrowRight
              size={19}
              className="text-[var(--color-primary)] transition group-hover:translate-x-1 xl:size-[23px]"
            />
          </button>
        </div>
      </div>
    </section>
  );
}

