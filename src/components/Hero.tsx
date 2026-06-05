import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const imageModules = import.meta.glob("../assets/destinations/*.{jpg,jpeg,png,webp}", {
  eager: true,
  query: "?url",
  import: "default",
});

const AUTOPLAY_DURATION = 3000;
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
    Kashmir: "India",
    Lakshadweep: "India",
    Dubai: "United Arab Emirates",
    Bali: "Indonesia",
    Bandipur: "Karnataka, India",
    Greece: "Europe",
  };

  return locations[title] ?? "Luxury Escape";
}

function getDestinationDescription(title: string) {
  const descriptions: Record<string, string> = {
    Andaman:
      "Crystal blue water, quiet beaches, island luxury, and unforgettable tropical escapes.",
    Kashmir:
      "Snow peaks, valleys, houseboats, gardens, and breathtaking Himalayan beauty.",
    Lakshadweep:
      "Turquoise lagoons, coral islands, white sand beaches, and untouched tropical calm.",
    Dubai:
      "Iconic skylines, desert luxury, premium shopping, and world-class travel experiences.",
    Bali:
      "Temples, rice terraces, beach clubs, waterfalls, and romantic island escapes.",
    Bandipur:
      "Wild forests, safari trails, peaceful resorts, and unforgettable wildlife moments.",
    Greece:
      "Blue-domed villages, island sunsets, ancient heritage, and luxury Mediterranean escapes.",
  };

  return (
    descriptions[title] ??
    "Experience breathtaking landscapes, luxury stays, and unforgettable moments curated around your dream destination."
  );
}

export function Hero() {
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
              // Safe to ignore decode failure.
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

    const safeIndex = (nextIndex + destinations.length) % destinations.length;

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

  function scrollToDestinations() {
    const element = document.getElementById("destinations");
    if (!element) return;

    const headerOffset = 92;
    const elementTop = element.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: elementTop - headerOffset,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    if (destinations.length <= 1) return;

    let timer: number | null = null;

    function stopAutoplay() {
      if (timer) {
        window.clearInterval(timer);
        timer = null;
      }
    }

    function startAutoplay() {
      if (timer || document.hidden) return;

      timer = window.setInterval(() => {
        goNext();
      }, AUTOPLAY_DURATION);
    }

    function handleVisibilityChange() {
      if (document.hidden) {
        stopAutoplay();
        return;
      }

      startAutoplay();
    }

    startAutoplay();

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      stopAutoplay();
      document.removeEventListener("visibilitychange", handleVisibilityChange);

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

  const desktopCardSlots = [
    { x: 0, y: 0, width: 330, height: 510, scale: 1, opacity: 1, zIndex: 5 },
    { x: 255, y: 42, width: 300, height: 450, scale: 0.96, opacity: 0.9, zIndex: 4 },
    { x: 470, y: 82, width: 270, height: 390, scale: 0.92, opacity: 0.78, zIndex: 3 },
    { x: 650, y: 118, width: 245, height: 335, scale: 0.88, opacity: 0.64, zIndex: 2 },
  ];

  const tabletCardSlots = [
    { x: 0, y: 0, width: 220, height: 335, scale: 1, opacity: 1, zIndex: 5 },
    { x: 150, y: 34, width: 198, height: 292, scale: 0.95, opacity: 0.86, zIndex: 4 },
    { x: 270, y: 62, width: 176, height: 246, scale: 0.9, opacity: 0.68, zIndex: 3 },
    { x: 362, y: 84, width: 154, height: 210, scale: 0.84, opacity: 0.46, zIndex: 2 },
  ];

  const mobileCardSlots = [
    { x: 0, y: 0, width: 188, height: 246, scale: 1, opacity: 1, zIndex: 4 },
    { x: 125, y: 28, width: 164, height: 210, scale: 0.94, opacity: 0.78, zIndex: 3 },
    { x: 222, y: 54, width: 140, height: 174, scale: 0.88, opacity: 0.56, zIndex: 2 },
    { x: 300, y: 74, width: 118, height: 146, scale: 0.84, opacity: 0.38, zIndex: 1 },
  ];

  if (destinations.length === 0) {
    return (
      <section className="grid min-h-[560px] place-items-center bg-[var(--color-bg)] px-6 text-center text-[var(--color-text)]">
        <div>
          <h1 className="text-3xl font-bold sm:text-4xl">
            No destination images found
          </h1>
          <p className="mt-4 text-[var(--color-text-soft)]">
            Add images inside <code>src/assets/destinations</code>.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="home"
      className="relative min-h-[690px] overflow-hidden bg-[var(--color-bg)] pt-20 sm:min-h-[710px] sm:pt-24 md:min-h-[640px] md:pt-24 lg:min-h-[720px] xl:min-h-screen"
    >
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

     <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,4,10,0.34)_0%,rgba(2,4,10,0.24)_46%,rgba(2,4,10,0.48)_100%)] md:bg-[linear-gradient(90deg,rgba(2,4,10,0.54)_0%,rgba(2,4,10,0.32)_44%,rgba(2,4,10,0.08)_100%)]" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/28 via-transparent to-black/10" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_20%,rgba(243,201,121,0.10),transparent_28%),radial-gradient(circle_at_18%_76%,rgba(224,247,255,0.06),transparent_32%)]" />

      <div className="relative z-10 mx-auto flex w-[min(100%-28px,1360px)] flex-col pb-8 sm:w-[min(100%-40px,1360px)] md:min-h-[calc(640px-96px)] md:justify-center lg:min-h-[calc(720px-96px)] xl:min-h-[calc(100vh-96px)]">
        <div className="grid items-center gap-7 md:grid-cols-[0.42fr_0.58fr] md:gap-6 lg:gap-8 xl:gap-10">
          <div className="relative max-w-2xl pt-8 sm:pt-10 md:pt-0 md:pl-12 lg:pl-16 xl:pl-20">
            <div className="absolute left-0 top-1/2 hidden -translate-y-1/2 md:block">
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous destination"
                className="grid size-10 place-items-center rounded-full border border-[color:var(--color-border)] bg-black/30 text-white/82 backdrop-blur-xl transition hover:border-[color:var(--color-primary)]/60 hover:bg-[color:rgba(243,201,121,0.1)] hover:text-white lg:size-12 xl:size-14"
              >
                <ChevronLeft size={20} className="xl:size-6" />
              </button>

              <div className="mt-6 flex flex-col items-center gap-3 xl:mt-8 xl:gap-4">
                {destinations.map((destination, index) => (
                  <button
                    key={destination.image}
                    type="button"
                    onClick={() => changeSlide(index)}
                    aria-label={`Go to ${destination.title}`}
                    className={`rounded-full transition duration-300 ${
                      index === activeIndex
                        ? "h-2.5 w-2.5 bg-[var(--color-primary)] shadow-[0_0_18px_var(--color-primary-glow)]"
                        : "h-1.5 w-1.5 bg-white/35 hover:bg-white/70"
                    }`}
                  />
                ))}
              </div>
            </div>

            <p
              key={`eyebrow-${activeIndex}`}
              className="hero-copy-enter mb-3 text-[9px] font-semibold uppercase tracking-[0.34em] text-[var(--color-primary)] sm:mb-4 sm:text-xs sm:tracking-[0.42em] md:text-[9px] lg:text-[10px] xl:text-xs"
            >
              Explore the world
            </p>

            <h1
              key={`title-${activeIndex}`}
              className="hero-copy-enter max-w-[12ch] text-[clamp(3.2rem,15vw,5.4rem)] font-semibold uppercase leading-[0.9] tracking-[-0.075em] text-[var(--color-text)] drop-shadow-[0_14px_45px_rgba(0,0,0,0.52)] sm:text-[clamp(4.2rem,11vw,6.5rem)] md:text-[clamp(3.1rem,7vw,4.6rem)] lg:text-[clamp(4rem,7vw,6rem)] xl:text-8xl"
            >
              {activeDestination.title}
            </h1>

            <p
              key={`description-${activeIndex}`}
              className="hero-copy-enter mt-4 max-w-lg text-sm leading-7 text-[var(--color-text-soft)] drop-shadow-[0_8px_24px_rgba(0,0,0,0.4)] sm:mt-5 sm:text-base sm:leading-8 md:max-w-sm md:text-xs md:leading-6 lg:max-w-md lg:text-sm lg:leading-7 xl:mt-7 xl:max-w-lg xl:text-lg xl:leading-8"
            >
              {activeDestination.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-3 sm:mt-7 sm:gap-4 lg:mt-8 xl:mt-9">
              <button
                type="button"
                onClick={scrollToDestinations}
                className="group inline-flex items-center gap-3 rounded-full bg-[image:var(--gradient-primary)] px-5 py-3.5 text-sm font-semibold text-[#140d04] shadow-[var(--shadow-primary)] transition duration-300 hover:-translate-y-1 md:px-4 md:py-3 md:text-xs lg:px-5 lg:py-3.5 xl:px-6 xl:py-4 xl:text-sm"
              >
                Discover Now
                <span className="grid size-8 place-items-center rounded-full bg-black/20 text-[#140d04] transition group-hover:translate-x-1 md:size-7 xl:size-9">
                  <ChevronRight size={18} />
                </span>
              </button>
            </div>
          </div>

          <div className="relative hidden min-h-[385px] items-center md:flex lg:min-h-[455px] xl:min-h-[620px]">
            <div className="relative h-[360px] w-full lg:h-[430px] xl:hidden">
              {visibleCards.map((card) => {
                const slot = tabletCardSlots[card.position];

                return (
                  <HeroStackCard
                    key={card.image}
                    card={card}
                    slot={slot}
                    size="tablet"
                  />
                );
              })}
            </div>

            <div className="relative hidden h-[560px] w-full xl:block">
              {visibleCards.map((card) => {
                const slot = desktopCardSlots[card.position];

                return (
                  <HeroStackCard
                    key={card.image}
                    card={card}
                    slot={slot}
                    size="desktop"
                  />
                );
              })}
            </div>

            <button
              type="button"
              onClick={goNext}
              aria-label="Next destination"
              className="absolute right-2 top-1/2 z-20 grid size-10 -translate-y-1/2 place-items-center rounded-full border border-[color:var(--color-border)] bg-black/30 text-white/82 backdrop-blur-xl transition hover:border-[color:var(--color-primary)]/60 hover:bg-[color:rgba(243,201,121,0.1)] hover:text-white lg:size-12 xl:right-6 xl:size-14"
            >
              <ChevronRight size={20} className="xl:size-6" />
            </button>
          </div>

          <div className="relative mt-4 min-h-[292px] overflow-hidden sm:min-h-[318px] md:hidden">
            <div className="relative h-[255px] w-full sm:h-[280px]">
              {visibleCards.map((card) => {
                const slot = mobileCardSlots[card.position];

                return (
                  <HeroStackCard
                    key={card.image}
                    card={card}
                    slot={slot}
                    size="mobile"
                  />
                );
              })}
            </div>

            <div className="mt-3 flex items-center gap-4">
              <button
                type="button"
                onClick={goPrev}
                className="grid size-11 shrink-0 place-items-center rounded-full border border-white/12 bg-white/[0.045] text-white"
                aria-label="Previous destination"
              >
                <ChevronLeft size={20} />
              </button>

              <div className="relative h-px flex-1 overflow-hidden bg-white/18">
                <div
                  key={progressKey}
                  className="hero-progress h-full bg-[var(--color-primary)]"
                />
              </div>

              <button
                type="button"
                onClick={goNext}
                className="grid size-11 shrink-0 place-items-center rounded-full border border-white/12 bg-white/[0.045] text-white"
                aria-label="Next destination"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroStackCard({
  card,
  slot,
  size,
}: {
  card: {
    image: string;
    title: string;
    location: string;
    index: number;
    position: number;
  };
  slot: {
    x: number;
    y: number;
    width: number;
    height: number;
    scale: number;
    opacity: number;
    zIndex: number;
  };
  size: "mobile" | "tablet" | "desktop";
}) {
  const isDesktop = size === "desktop";
  const isTablet = size === "tablet";

  return (
    <article
      className={`hero-card absolute overflow-hidden border border-white/14 bg-white/[0.045] text-left shadow-[0_30px_110px_rgba(0,0,0,0.62)] backdrop-blur-xl ${
        isDesktop ? "rounded-[1.8rem]" : isTablet ? "rounded-[1.45rem]" : "rounded-[1.25rem]"
      }`}
      style={{
        width: `${slot.width}px`,
        height: `${slot.height}px`,
        transform: `translate3d(${slot.x}px, ${slot.y}px, 0) scale(${slot.scale})`,
        opacity: slot.opacity,
        zIndex: slot.zIndex,
      }}
    >
      <img
        src={card.image}
        alt={card.title}
        className="h-full w-full object-cover"
        draggable={false}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/84 via-black/18 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_18%,rgba(255,255,255,0.2),transparent_24%)]" />

      <div
        className={
          isDesktop
            ? "absolute left-6 top-6 flex items-center gap-3"
            : isTablet
              ? "absolute left-4 top-4 flex items-center gap-2"
              : "absolute left-4 top-4 flex items-center gap-2"
        }
      >
        <span
          className={
            isDesktop
              ? "text-sm font-medium text-white/88"
              : "text-xs font-medium text-white/88"
          }
        >
          {String(card.index + 1).padStart(2, "0")}
        </span>

        {card.position === 0 && (
          <span className="rounded-full border border-[color:var(--color-primary)]/25 bg-[color:rgba(243,201,121,0.12)] px-2.5 py-1 text-[10px] font-semibold text-[var(--color-primary-soft)] sm:text-xs">
            Popular
          </span>
        )}
      </div>

      <div
        className={
          isDesktop
            ? "absolute bottom-7 left-6 right-6"
            : isTablet
              ? "absolute bottom-5 left-4 right-4"
              : "absolute bottom-4 left-4 right-4"
        }
      >
        <h3
          className={
            isDesktop
              ? "text-4xl font-semibold tracking-[-0.06em] text-white"
              : isTablet
                ? "text-2xl font-semibold tracking-[-0.05em] text-white"
                : "text-xl font-semibold tracking-[-0.04em] text-white"
          }
        >
          {card.title}
        </h3>

        <p
          className={
            isDesktop
              ? "mt-4 flex items-center gap-2 text-sm text-white/68"
              : "mt-2 flex items-center gap-1.5 text-xs text-white/68"
          }
        >
          <MapPin
            size={isDesktop ? 16 : 13}
            className="text-[var(--color-primary)]"
          />
          {card.location}
        </p>
      </div>
    </article>
  );
}