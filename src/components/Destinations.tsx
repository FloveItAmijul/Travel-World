

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import {
  ArrowRight,
  Clock3,
  Crown,
  Flame,
  Leaf,
  MapPin,
  Navigation,
  Star,
  TrendingUp,
} from "lucide-react";

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
    name: "Andaman",
    country: "India",
    image: imagesByName.andaman,
    rating: "4.8",
    reviews: "330+",
    duration: "4 Nights / 5 Days",
    price: "₹24,999",
    tag: "Popular",
    tagIcon: Flame,
    accent: "cyan",
  },
  {
    name: "Goa",
    country: "India",
    image: imagesByName.goa,
    rating: "4.7",
    reviews: "280+",
    duration: "3 Nights / 4 Days",
    price: "₹15,999",
    tag: "Trending",
    tagIcon: TrendingUp,
    accent: "violet",
  },
  {
    name: "Digha",
    country: "India",
    image: imagesByName.digha,
    rating: "4.6",
    reviews: "210+",
    duration: "2 Nights / 3 Days",
    price: "₹8,999",
    tag: "Best Seller",
    tagIcon: Star,
    accent: "cyan",
  },
  {
    name: "Dubai",
    country: "UAE",
    image: imagesByName.dubai,
    rating: "4.9",
    reviews: "450+",
    duration: "4 Nights / 5 Days",
    price: "₹39,999",
    tag: "Luxury",
    tagIcon: Crown,
    accent: "violet",
  },
  {
    name: "Kashmir",
    country: "India",
    image: imagesByName.kashmir,
    rating: "4.8",
    reviews: "310+",
    duration: "4 Nights / 5 Days",
    price: "₹18,999",
    tag: "Serene",
    tagIcon: Leaf,
    accent: "cyan",
  },
];

export function Destinations() {

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
    threshold: 0.16,
  });



  return (
    <section
      id="destinations"
      ref={ref}
      className={`premium-reveal-section relative overflow-hidden bg-[#02040a] px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-8 lg:py-28 ${
        inView ? "is-visible" : ""
      }`}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-16 h-px w-[520px] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />
        <div className="absolute left-1/2 top-16 size-1.5 -translate-x-1/2 rounded-full bg-cyan-200 shadow-[0_0_30px_rgba(125,211,252,0.95)]" />

        <div className="absolute -left-24 top-20 size-80 rounded-full border border-cyan-300/10" />
        <div className="absolute -left-10 top-32 size-52 rounded-full border border-cyan-300/10" />
        <div className="absolute -right-24 top-24 size-96 rounded-full border border-violet-300/10" />
        <div className="absolute right-10 top-40 size-64 rounded-full border border-cyan-300/10" />

        <div className="absolute bottom-0 left-0 h-64 w-full bg-[radial-gradient(circle_at_20%_70%,rgba(34,211,238,0.15),transparent_30%),radial-gradient(circle_at_80%_65%,rgba(167,139,250,0.14),transparent_30%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(125,211,252,0.06),transparent_35%)]" />
      </div>

      <div className="relative mx-auto w-[min(100%,1280px)]">
        <div className="premium-reveal-heading mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.42em] text-cyan-200">
            Curated Destinations
          </p>

          <h2 className="mt-5 text-[clamp(2.8rem,8vw,5.4rem)] font-semibold leading-[0.95] tracking-[-0.06em] text-white">
            Handpicked Journeys
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/62 sm:text-base sm:leading-8">
            Explore our most loved escapes, selected for scenery, comfort, and
            unforgettable experiences.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
          {destinations.map((destination, index) => {
            const TagIcon = destination.tagIcon;
            const isViolet = destination.accent === "violet";

            return (
              <article
                key={destination.name}
                style={{ "--reveal-delay": `${index * 90}ms` } as React.CSSProperties}
                className={`premium-reveal-card destination-card group relative isolate overflow-hidden rounded-[1.7rem] bg-[#050b14] shadow-[0_26px_90px_rgba(0,0,0,0.42)] ring-1 ring-inset transition-shadow duration-500 ${
                isViolet
                  ? "ring-violet-300/24 hover:ring-violet-300/55 hover:shadow-[0_26px_95px_rgba(167,139,250,0.18)]"
                  : "ring-cyan-300/22 hover:ring-cyan-300/55 hover:shadow-[0_26px_95px_rgba(125,211,252,0.16)]"
              }`}
              >
               <div className="destination-image-shell relative h-64 overflow-hidden bg-[#050b14] sm:h-72 xl:h-60">
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
                    <div className="grid h-full place-items-center bg-white/5 text-sm text-white/50">
                      Missing image
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-[#02040a] via-[#02040a]/18 to-transparent" />

                  <div
                    className={`absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium backdrop-blur-xl ${
                      isViolet
                        ? "border-violet-300/35 bg-violet-300/12 text-violet-100"
                        : "border-cyan-300/35 bg-cyan-300/12 text-cyan-100"
                    }`}
                  >
                    <TagIcon size={13} />
                    {destination.tag}
                  </div>
                </div>

                <div className="relative z-10 bg-[#050b14] p-5">
                  <div className="flex items-start gap-2">
                    <MapPin
                      size={23}
                      className={isViolet ? "mt-1 text-violet-300" : "mt-1 text-cyan-300"}
                    />

                    <div>
                      <h3 className="text-3xl font-semibold leading-none tracking-[-0.05em] text-white">
                        {destination.name}
                      </h3>
                      <p
                        className={`mt-3 text-sm font-medium ${
                          isViolet ? "text-violet-200" : "text-cyan-200"
                        }`}
                      >
                        {destination.country}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/72">
                    <span className="inline-flex items-center gap-1.5">
                      <Star size={15} className="fill-yellow-400 text-yellow-400" />
                      {destination.rating} ({destination.reviews})
                    </span>

                    <span className="inline-flex items-center gap-1.5">
                      <Clock3 size={15} className="text-white/48" />
                      {destination.duration}
                    </span>
                  </div>

                  <div className="my-5 h-px bg-white/10" />

                  <p className="text-sm text-white/58">Starting from</p>

                  <p
                    className={`mt-1 text-3xl font-black tracking-[0.04em] ${
                      isViolet ? "text-violet-200" : "text-cyan-200"
                    }`}
                  >
                    {destination.price}
                  </p>

                  <button
                    type="button"
                    className={`mt-5 flex w-full items-center justify-center gap-3 rounded-full border bg-transparent px-5 py-3 text-sm font-semibold text-white transition duration-300 group-hover:gap-5 ${
                      isViolet
                        ? "border-violet-300/45 hover:bg-violet-300/10"
                        : "border-cyan-300/45 hover:bg-cyan-300/10"
                    }`}
                  >
                    Explore Now
                    <ArrowRight
                      size={18}
                      className={isViolet ? "text-violet-200" : "text-cyan-200"}
                    />
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <button
            type="button"
            className="group inline-flex w-full max-w-sm items-center justify-center gap-6 rounded-full border border-cyan-300/35 bg-white/[0.035] px-7 py-4 text-base font-semibold text-white shadow-[0_24px_80px_rgba(125,211,252,0.08)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-200/70 hover:bg-cyan-300/10 sm:max-w-md"
          >
            <span className="grid size-11 place-items-center rounded-full bg-cyan-300/10 text-cyan-200 shadow-[0_0_35px_rgba(125,211,252,0.22)]">
              <Navigation size={19} />
            </span>
            View All Destinations
            <ArrowRight
              size={23}
              className="text-cyan-200 transition group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>
    </section>
  );
}