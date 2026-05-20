import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const imageModules = import.meta.glob("../assets/destinations/*.{jpg,jpeg,png,webp}", {
  eager: true,
  query: "?url",
  import: "default",
});

const AUTOPLAY_DURATION = 5000;
const BACKGROUND_FADE_DURATION = 900;

const destinations = Object.entries(imageModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, image]) => {
    const rawName = path.split("/").pop()?.split(".")[0] ?? "Destination";

    const title = rawName
      .replace(/^\d+[-_\s]*/, "")
      .replaceAll("-", " ")
      .replaceAll("_", " ")
      .replace(/\b\w/g, (letter) => letter.toUpperCase());

    return {
      image: image as string,
      title,
      location: getDestinationLocation(title),
      description: getDestinationDescription(title),
    };
  });

function getDestinationLocation(title: string) {
  const locations: Record<string, string> = {
    Andaman: "India",
    Goa: "India",
    Digha: "West Bengal, India",
    Dubai: "United Arab Emirates",
    Kashmir: "India",
  };

  return locations[title] ?? "Luxury Escape";
}

function getDestinationDescription(title: string) {
  const descriptions: Record<string, string> = {
    Andaman:
      "Crystal blue water, quiet beaches, island luxury, and unforgettable tropical escapes.",
    Goa:
      "Golden beaches, boutique stays, nightlife, seafood, and relaxed coastal luxury.",
    Digha:
      "A peaceful seaside escape with soft waves, family moments, and relaxing ocean views.",
    Dubai:
      "Iconic skylines, desert luxury, premium shopping, and world-class travel experiences.",
    Kashmir:
      "Snow peaks, valleys, houseboats, gardens, and breathtaking Himalayan beauty.",
  };

  return (
    descriptions[title] ??
    "Experience breathtaking landscapes, luxury stays, and unforgettable moments curated around your dream destination."
  );
}

export function Popular() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState<number | null>(null);
  const [progressKey, setProgressKey] = useState(0);

  const activeIndexRef = useRef(activeIndex);
  const fadeCleanupRef = useRef<number | null>(null);

  const activeDestination = destinations[activeIndex];
  const previousDestination =
    previousIndex === null ? null : destinations[previousIndex];

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  useEffect(() => {
    let cancelled = false;

    async function preloadImages() {
      await Promise.allSettled(
        destinations.map(async (destination) => {
          const image = new Image();
          image.src = destination.image;

          if ("decode" in image) {
            try {
              await image.decode();
            } catch {
              // Browser may fail decode for cached/local images. Safe to ignore.
            }
          }
        })
      );

      if (!cancelled) {
        document.documentElement.classList.add("images-ready");
      }
    }

    preloadImages();

    return () => {
      cancelled = true;
    };
  }, []);

  const changeSlide = useCallback((nextIndex: number) => {
    if (destinations.length === 0) return;

    const safeIndex =
      (nextIndex + destinations.length) % destinations.length;

    if (safeIndex === activeIndexRef.current) return;

    if (fadeCleanupRef.current) {
      window.clearTimeout(fadeCleanupRef.current);
    }

    setPreviousIndex(activeIndexRef.current);
    setActiveIndex(safeIndex);
    setProgressKey((current) => current + 1);

    fadeCleanupRef.current = window.setTimeout(() => {
      setPreviousIndex(null);
    }, BACKGROUND_FADE_DURATION);
  }, []);

  const goNext = useCallback(() => {
    changeSlide(activeIndexRef.current + 1);
  }, [changeSlide]);

  const goPrev = useCallback(() => {
    changeSlide(activeIndexRef.current - 1);
  }, [changeSlide]);

  useEffect(() => {
    if (destinations.length <= 1) return;

    const timer = window.setInterval(() => {
      if (document.hidden) return;
      goNext();
    }, AUTOPLAY_DURATION);

    return () => {
      window.clearInterval(timer);

      if (fadeCleanupRef.current) {
        window.clearTimeout(fadeCleanupRef.current);
      }
    };
  }, [goNext]);

  const visibleCards = useMemo(() => {
    const cardsToShow = Math.min(4, Math.max(destinations.length - 1, 0));

    return Array.from({ length: cardsToShow }, (_, position) => {
      const index = (activeIndex + position + 1) % destinations.length;

      return {
        ...destinations[index],
        index,
        position,
      };
    });
  }, [activeIndex]);

  const cardSlots = [
    { x: 0, scale: 1.06, opacity: 1, zIndex: 4 },
    { x: 176, scale: 1, opacity: 0.92, zIndex: 3 },
    { x: 352, scale: 0.94, opacity: 0.78, zIndex: 2 },
    { x: 528, scale: 0.88, opacity: 0.62, zIndex: 1 },
  ];

  if (destinations.length === 0) {
    return (
      <section className="grid min-h-screen place-items-center bg-[#02040a] px-6 text-center text-white">
        <div>
          <h1 className="text-4xl font-bold">No destination images found</h1>
          <p className="mt-4 text-white/60">
            Add images inside <code>src/assets/destinations</code>.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#02040a] pt-24">
      <div className="absolute inset-0">
        {previousDestination && (
          <img
            key={`previous-${previousDestination.image}`}
            src={previousDestination.image}
            alt=""
            aria-hidden="true"
            className="hero-bg-image hero-bg-previous"
            draggable={false}
          />
        )}

        <img
          key={`active-${activeDestination.image}`}
          src={activeDestination.image}
          alt=""
          aria-hidden="true"
          className="hero-bg-image hero-bg-active"
          draggable={false}
        />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,4,10,0.62)_0%,rgba(2,4,10,0.34)_38%,rgba(2,4,10,0.06)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#02040a]/42 via-transparent to-[#02040a]/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_72%,rgba(125,211,252,0.1),transparent_34%)]" />

      <div className="relative z-10 mx-auto min-h-[calc(100vh-96px)] w-[min(100%-32px,1180px)]">
        <div className="grid min-h-[calc(100vh-96px)] items-center gap-10 lg:grid-cols-[0.86fr_1.14fr]">
          <div className="max-w-2xl pt-8">
            <p
              key={`eyebrow-${activeIndex}`}
              className="hero-copy-enter mb-5 text-xs font-semibold uppercase tracking-[0.38em] text-cyan-100"
            >
              Explore the world
            </p>

            <h1
              key={`title-${activeIndex}`}
              className="hero-copy-enter text-6xl font-black uppercase leading-[0.88] tracking-[-0.07em] text-white drop-shadow-[0_10px_35px_rgba(0,0,0,0.45)] sm:text-7xl lg:text-8xl"
            >
              {activeDestination.title}
            </h1>

            <p
              key={`description-${activeIndex}`}
              className="hero-copy-enter mt-7 max-w-lg text-base leading-8 text-white/88 drop-shadow-[0_8px_24px_rgba(0,0,0,0.4)] sm:text-lg"
            >
              {activeDestination.description}
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <button className="group inline-flex items-center gap-4 rounded-full bg-white px-6 py-4 text-sm font-semibold text-[#02040a] shadow-[0_18px_70px_rgba(255,255,255,0.18)] transition duration-300 hover:-translate-y-1 hover:bg-cyan-100">
                Discover Location
                <span className="grid size-9 place-items-center rounded-full bg-[#02040a] text-white transition group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>
          </div>

          <div className="relative hidden min-h-[560px] items-end lg:flex">
            <div className="absolute bottom-24 left-0 right-0">
              <div className="relative h-[300px] overflow-visible">
                {visibleCards.map((destination) => {
                  const slot = cardSlots[destination.position];

                  return (
                    <button
                      key={destination.image}
                      type="button"
                      onClick={() => changeSlide(destination.index)}
                      className="hero-card absolute bottom-0 h-[270px] w-[172px] overflow-hidden rounded-[1.8rem] border border-white/16 bg-white/10 text-left shadow-[0_28px_90px_rgba(0,0,0,0.56)] outline-none backdrop-blur-xl transition-[border-color] duration-300 hover:border-cyan-200/45"
                      style={{
                        transform: `translate3d(${slot.x}px, 0, 0) scale(${slot.scale})`,
                        opacity: slot.opacity,
                        zIndex: slot.zIndex,
                      }}
                    >
                      <img
                        src={destination.image}
                        alt={destination.title}
                        className="h-full w-full object-cover"
                        draggable={false}
                        loading="eager"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                      <div className="absolute inset-0 rounded-[1.8rem] ring-1 ring-inset ring-white/10" />

                      <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/20 px-3 py-1 text-[10px] font-semibold tracking-[0.18em] text-white/85 backdrop-blur-xl">
                        {String(destination.index + 1).padStart(2, "0")}
                      </div>

                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-lg font-bold leading-tight text-white">
                          {destination.title}
                        </h3>

                        <p className="mt-1.5 flex items-center gap-1.5 text-xs text-white/72">
                          <MapPin size={13} />
                          {destination.location}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="mt-9 flex items-center gap-4">
                <button
                  type="button"
                  onClick={goPrev}
                  className="grid size-11 place-items-center rounded-full border border-white/15 bg-white/[0.06] text-white backdrop-blur-xl transition hover:border-cyan-300/50 hover:bg-cyan-300/10"
                  aria-label="Previous destination"
                >
                  <ChevronLeft size={21} />
                </button>

                <button
                  type="button"
                  onClick={goNext}
                  className="grid size-11 place-items-center rounded-full border border-white/15 bg-white/[0.06] text-white backdrop-blur-xl transition hover:border-cyan-300/50 hover:bg-cyan-300/10"
                  aria-label="Next destination"
                >
                  <ChevronRight size={21} />
                </button>

                <div className="relative h-px flex-1 overflow-hidden bg-white/28">
                  <div
                    key={progressKey}
                    className="hero-progress absolute left-0 top-0 h-full bg-cyan-100 shadow-[0_0_20px_rgba(125,211,252,0.9)]"
                  />
                </div>

                <span className="min-w-10 text-right text-2xl font-bold text-white">
                  {String(activeIndex + 1).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>

          <div className="lg:hidden">
            <div className="mt-8 flex gap-3 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {destinations.map((destination, index) => (
                <button
                  key={destination.image}
                  type="button"
                  onClick={() => changeSlide(index)}
                  className={`min-w-[150px] overflow-hidden rounded-3xl border bg-white/10 text-left backdrop-blur-xl ${
                    index === activeIndex ? "border-cyan-200/60" : "border-white/12"
                  }`}
                >
                  <img
                    src={destination.image}
                    alt={destination.title}
                    className="h-44 w-full object-cover"
                    loading="eager"
                  />

                  <div className="p-3">
                    <h3 className="text-sm font-bold text-white">
                      {destination.title}
                    </h3>
                    <p className="mt-1 text-xs text-white/65">
                      {destination.location}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-2 flex items-center gap-3">
              <button
                type="button"
                onClick={goPrev}
                className="grid size-11 place-items-center rounded-full border border-white/15 bg-white/[0.06] text-white backdrop-blur-xl"
                aria-label="Previous destination"
              >
                <ChevronLeft size={21} />
              </button>

              <button
                type="button"
                onClick={goNext}
                className="grid size-11 place-items-center rounded-full border border-white/15 bg-white/[0.06] text-white backdrop-blur-xl"
                aria-label="Next destination"
              >
                <ChevronRight size={21} />
              </button>

              <div className="relative h-px flex-1 overflow-hidden bg-white/25">
                <div
                  key={`mobile-${progressKey}`}
                  className="hero-progress absolute left-0 top-0 h-full bg-cyan-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}