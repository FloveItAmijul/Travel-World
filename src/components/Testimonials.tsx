import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Diamond,
  Globe2,
  MapPin,
  ShieldCheck,
  Star,
  UsersRound,
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

const testimonials = [
  {
    name: "James Carter",
    destination: "Goa, India",
    date: "May 10 – May 17, 2024",
    travelers: "2 Travelers",
    tripType: "Luxury Escape",
    quote:
      "From the moment we landed to the final sunset dinner, every detail was flawless. The team curated an experience beyond anything we imagined.",
    accent: "gold",
    avatar: "JC",
  },
  {
    name: "Arijit Roy",
    destination: "Andaman, India",
    date: "Apr 22 – Apr 29, 2024",
    travelers: "2 Travelers",
    tripType: "Romantic Getaway",
    quote:
      "Our romantic escape was straight out of a dream. The accommodations, views, and thoughtful touches made it unforgettable.",
    accent: "ice",
    avatar: "AR",
  },
  {
    name: "Ankit Kumar",
    destination: "Kashmir, India",
    date: "Jun 5 – Jun 12, 2024",
    travelers: "4 Travelers",
    tripType: "Family Vacation",
    quote:
      "An incredible family vacation. The itinerary was perfect for our kids and us, with seamless planning and amazing support throughout.",
    accent: "gold",
    avatar: "AK",
  },
  {
    name: "Aarav Mehta",
    destination: "Dubai, UAE",
    date: "Jul 8 – Jul 13, 2025",
    travelers: "2 Travelers",
    tripType: "Premium City Break",
    quote:
      "Everything was arranged beautifully, from airport transfers to hotel selection. The Dubai experience felt smooth, premium, and effortless.",
    accent: "ice",
    avatar: "AM",
  },
  {
    name: "Priya Sharma",
    destination: "Andaman, India",
    date: "Jan 3 – Jan 9, 2026",
    travelers: "3 Travelers",
    tripType: "Island Escape",
    quote:
      "The beaches, stays, and private experiences were amazing. It felt like every part of the journey was thoughtfully planned for us.",
    accent: "gold",
    avatar: "PS",
  },

    {
    name: "Anika Nair",
    destination: "Andaman, India",
    date: "Aug 5 – Aug 9, 2025",
    travelers: "3 Travelers",
    tripType: "Island Escape",
    quote:
      "The beaches, stays, and private experiences were amazing. It felt like every part of the journey was thoughtfully planned for us.",
    accent: "gold",
    avatar: "AN",
  },


    {
    name: "Meera Mehta",
    destination: "Andaman, India",
    date: "Jun 15 – Jun 20, 2026",
    travelers: "3 Travelers",
    tripType: "Island Escape",
    quote:
      "The beaches, stays, and private experiences were amazing. It felt like every part of the journey was thoughtfully planned for us.",
    accent: "gold",
    avatar: "MM",
  },



    {
    name: "Isha Singh",
    destination: "Andaman, India",
    date: "Sep 23 – Sep 28, 2025",
    travelers: "3 Travelers",
    tripType: "Island Escape",
    quote:
      "The beaches, stays, and private experiences were amazing. It felt like every part of the journey was thoughtfully planned for us.",
    accent: "gold",
    avatar: "IS",
  },



    {
    name: "Vihaan Patel",
    destination: "Andaman, India",
    date: "Aug 3 – Aug 9, 2024",
    travelers: "3 Travelers",
    tripType: "Island Escape",
    quote:
      "The beaches, stays, and private experiences were amazing. It felt like every part of the journey was thoughtfully planned for us.",
    accent: "gold",
    avatar: "VP",
  },


    {
    name: "Sarbani Agarwal",
    destination: "Andaman, India",
    date: "Aug 3 – Aug 9, 2024",
    travelers: "3 Travelers",
    tripType: "Island Escape",
    quote:
      "The beaches, stays, and private experiences were amazing. It felt like every part of the journey was thoughtfully planned for us.",
    accent: "gold",
    avatar: "SA",
  },

];

const trustStats = [
  {
    value: "4.7 / 5",
    label: "Average Rating",
    icon: Star,
    accent: "gold",
  },
  {
    value: "3K+",
    label: "Happy Travelers",
    icon: UsersRound,
    accent: "ice",
  },
  {
    value: "120+",
    label: "Destinations",
    icon: Globe2,
    accent: "gold",
  },
];

export function Testimonials() {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const isPausedRef = useRef(false);
  const resumeTimerRef = useRef<number | null>(null);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.16,
  });

  useEffect(() => {
    let animationFrame = 0;
    let lastTime = performance.now();

    function stopAutoScrollFrame() {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
        animationFrame = 0;
      }
    }

    function autoScroll(currentTime: number) {
      const slider = sliderRef.current;

      if (!slider) {
        stopAutoScrollFrame();
        return;
      }

      const delta = currentTime - lastTime;
      lastTime = currentTime;

      if (!isPausedRef.current) {
        const speed = 0.026;

        slider.scrollLeft += delta * speed;

        const reachedEnd =
          slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 2;

        if (reachedEnd) {
          slider.scrollTo({
            left: 0,
            behavior: "smooth",
          });
        }
      }

      animationFrame = requestAnimationFrame(autoScroll);
    }

    function startAutoScrollFrame() {
      if (animationFrame || document.hidden) return;

      lastTime = performance.now();
      animationFrame = requestAnimationFrame(autoScroll);
    }

    function handleVisibilityChange() {
      if (document.hidden) {
        stopAutoScrollFrame();
        return;
      }

      startAutoScrollFrame();
    }

    startAutoScrollFrame();

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      stopAutoScrollFrame();
      document.removeEventListener("visibilitychange", handleVisibilityChange);

      if (resumeTimerRef.current) {
        window.clearTimeout(resumeTimerRef.current);
      }
    };
  }, []);

  function pauseAutoScroll() {
    isPausedRef.current = true;

    if (resumeTimerRef.current) {
      window.clearTimeout(resumeTimerRef.current);
    }
  }

  function resumeAutoScrollSoon() {
    if (resumeTimerRef.current) {
      window.clearTimeout(resumeTimerRef.current);
    }

    resumeTimerRef.current = window.setTimeout(() => {
      isPausedRef.current = false;
    }, 2600);
  }

  function scrollByCard(direction: "left" | "right") {
    const slider = sliderRef.current;
    if (!slider) return;

    pauseAutoScroll();

    const amount = Math.min(slider.clientWidth * 0.86, 460);

    slider.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });

    resumeAutoScrollSoon();
  }

  return (
    <section
      id="testimonials"
      ref={ref}
      className={`premium-reveal-section relative overflow-hidden bg-[var(--color-bg)] px-4 py-14 text-[var(--color-text)] sm:px-5 sm:py-16 md:px-6 md:py-18 lg:px-8 lg:py-22 xl:py-28 ${
        inView ? "is-visible" : ""
      }`}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[image:var(--gradient-bg)]" />

        {imagesByName.andaman && (
          <img
            src={imagesByName.andaman}
            alt=""
            aria-hidden="true"
            className="absolute right-0 top-0 h-[240px] w-[72%] object-cover opacity-8 sm:h-[300px] md:h-[340px] md:w-[62%] md:opacity-10 xl:h-[420px] xl:opacity-14"
            draggable={false}
          />
        )}

        <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--color-bg)_0%,rgba(2,4,10,0.86)_48%,rgba(2,4,10,0.56)_100%)]" />
        <div className="absolute right-0 top-0 h-[300px] w-[420px] rounded-full bg-[color:var(--color-primary)]/7 blur-3xl md:h-[380px] md:w-[520px] xl:h-[520px] xl:w-[680px]" />
        <div className="absolute left-0 bottom-0 h-[260px] w-[360px] rounded-full bg-[color:var(--color-secondary)]/6 blur-3xl md:h-[340px] md:w-[480px] xl:h-[420px] xl:w-[620px]" />
        <div className="absolute left-1/2 top-10 h-px w-[min(520px,70vw)] -translate-x-1/2 bg-gradient-to-r from-transparent via-[var(--color-primary)]/50 to-transparent md:top-12" />
      </div>

      <div className="relative mx-auto w-[min(100%,1280px)]">
        <div className="premium-reveal-heading mx-auto max-w-4xl text-center">
          <div className="mb-4 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.32em] text-[var(--color-primary)] sm:text-xs sm:tracking-[0.38em] md:text-[10px] lg:text-xs xl:mb-5 xl:tracking-[0.42em]">
            <span className="hidden h-px w-14 bg-gradient-to-r from-transparent to-[var(--color-primary)]/70 sm:block md:w-16 xl:w-20" />
            <Diamond size={14} className="xl:size-4" />
            Client Experiences
            <span className="hidden h-px w-14 bg-gradient-to-r from-[var(--color-primary)]/70 to-transparent sm:block md:w-16 xl:w-20" />
          </div>

          <h2 className="text-[clamp(2.25rem,8vw,3.7rem)] font-semibold leading-[0.95] tracking-[-0.065em] text-[var(--color-text)] md:text-[clamp(2.7rem,5.5vw,4.25rem)] xl:text-[clamp(2.8rem,8vw,5.4rem)]">
            Stories From Our Travelers
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-xs leading-6 text-[var(--color-text-soft)] sm:text-sm sm:leading-7 md:mt-5 md:text-sm md:leading-7 xl:mt-6 xl:text-base xl:leading-8">
            Real journeys. Real stories. See how we turn travel dreams into
            unforgettable memories.
          </p>
        </div>

        <div
          style={{ "--reveal-delay": "140ms" } as React.CSSProperties}
          className="premium-reveal-card relative mt-9 sm:mt-10 md:mt-11 xl:mt-14"
        >
          <div className="mb-4 flex justify-end gap-2 md:gap-3">
            <button
              type="button"
              onClick={() => scrollByCard("left")}
              className="grid size-9 place-items-center rounded-full border border-[color:var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-soft)] backdrop-blur-xl transition hover:border-[color:var(--color-primary)]/45 hover:bg-[color:rgba(243,201,121,0.1)] hover:text-[var(--color-text)] md:size-9 xl:size-10"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} className="xl:size-[19px]" />
            </button>

            <button
              type="button"
              onClick={() => scrollByCard("right")}
              className="grid size-9 place-items-center rounded-full border border-[color:var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-soft)] backdrop-blur-xl transition hover:border-[color:var(--color-primary)]/45 hover:bg-[color:rgba(243,201,121,0.1)] hover:text-[var(--color-text)] md:size-9 xl:size-10"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} className="xl:size-[19px]" />
            </button>
          </div>

          <div
            ref={sliderRef}
            onMouseEnter={pauseAutoScroll}
            onMouseLeave={resumeAutoScrollSoon}
            onTouchStart={pauseAutoScroll}
            onTouchEnd={resumeAutoScrollSoon}
            onPointerDown={pauseAutoScroll}
            onPointerUp={resumeAutoScrollSoon}
            onFocus={pauseAutoScroll}
            onBlur={resumeAutoScrollSoon}
            className="testimonial-slider flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth pb-4 sm:gap-4 md:gap-4 xl:gap-5"
          >
            {testimonials.map((testimonial) => {
              const isIce = testimonial.accent === "ice";

              return (
                <article
                  key={`${testimonial.name}-${testimonial.destination}`}
                  className={`testimonial-card group relative min-w-[78%] snap-start overflow-hidden rounded-[1rem] border bg-[var(--color-surface)] p-3 shadow-[0_16px_45px_rgba(0,0,0,0.34)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 sm:min-w-[48%] sm:rounded-[1.35rem] sm:p-5 md:min-w-[315px] md:rounded-[1.35rem] md:p-4 lg:min-w-[350px] lg:p-5 xl:min-w-[410px] xl:rounded-[1.8rem] xl:p-6 xl:shadow-[var(--shadow-card)] ${
                    isIce
                      ? "border-[color:var(--color-secondary)]/22 hover:border-[color:var(--color-secondary)]/48 hover:shadow-[var(--shadow-secondary)]"
                      : "border-[color:var(--color-primary)]/22 hover:border-[color:var(--color-primary)]/52 hover:shadow-[var(--shadow-primary)]"
                  }`}
                >
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.075),transparent_36%,rgba(243,201,121,0.035))]" />

                  <div
                    className={`absolute -right-16 -top-16 size-32 rounded-full blur-3xl xl:size-36 ${
                      isIce
                        ? "bg-[color:var(--color-secondary)]/10"
                        : "bg-[color:var(--color-primary)]/12"
                    }`}
                  />

                  <div className="absolute right-4 top-4 text-6xl font-serif leading-none text-white/[0.055] xl:right-6 xl:top-6 xl:text-8xl">
                    “
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 xl:gap-4">
                      <div
                        className={`relative grid size-11 shrink-0 place-items-center overflow-hidden rounded-full border text-sm font-semibold sm:size-14 sm:text-base md:size-14 md:text-base lg:size-16 xl:size-20 xl:text-xl ${
                          isIce
                            ? "border-[color:var(--color-secondary)]/35 bg-[color:rgba(224,247,255,0.1)] text-[var(--color-secondary)] shadow-[var(--shadow-secondary)]"
                            : "border-[color:var(--color-primary)]/35 bg-[color:rgba(243,201,121,0.1)] text-[var(--color-primary-soft)] shadow-[var(--shadow-primary)]"
                        }`}
                      >
                        <span className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.22),transparent_36%)]" />
                        <span className="relative">{testimonial.avatar}</span>
                      </div>

                      <div className="min-w-0">
                        <h3 className="truncate text-base font-semibold tracking-[-0.04em] text-[var(--color-text)] md:text-base lg:text-lg xl:text-2xl">
                          {testimonial.name}
                        </h3>

                        <p
                          className={`mt-1 flex items-center gap-1.5 truncate text-xs xl:mt-2 xl:text-sm ${
                            isIce ? "text-[var(--color-secondary)]" : "text-[var(--color-primary)]"
                          }`}
                        >
                          <MapPin size={13} className="shrink-0 xl:size-4" />
                          {testimonial.destination}
                        </p>

                        <div className="mt-2 flex items-center gap-0.5 text-[var(--color-primary)] xl:mt-3 xl:gap-1">
                          {Array.from({ length: 5 }).map((_, starIndex) => (
                            <Star
                              key={starIndex}
                              size={13}
                              className="fill-current xl:size-4"
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    <p className="mt-4 line-clamp-3 text-[11px] leading-5 text-[var(--color-text-soft)] sm:mt-5 sm:line-clamp-4 sm:text-xs sm:leading-6 md:mt-5 md:text-xs md:leading-6 lg:text-sm lg:leading-7 xl:mt-7 xl:text-base xl:leading-8">
                      “{testimonial.quote}”
                    </p>

                    <div
                      className={`mt-5 inline-flex max-w-full items-center gap-1.5 rounded-full border px-3 py-2 text-xs xl:mt-6 xl:px-4 xl:text-sm ${
                        isIce
                          ? "border-[color:var(--color-secondary)]/28 bg-[color:rgba(224,247,255,0.08)] text-[var(--color-secondary)]"
                          : "border-[color:var(--color-primary)]/28 bg-[color:rgba(243,201,121,0.09)] text-[var(--color-primary)]"
                      }`}
                    >
                      <Diamond size={13} className="shrink-0 xl:size-4" />
                      <span className="truncate">{testimonial.tripType}</span>
                    </div>

                    <div className="mt-5 h-px bg-[var(--color-border-soft)] xl:mt-6" />

                    <div className="mt-4 grid gap-2 text-xs text-[var(--color-text-muted)] md:text-[11px] lg:text-xs xl:flex xl:flex-wrap xl:items-center xl:gap-x-6 xl:gap-y-3 xl:text-sm">
                      <span className="inline-flex items-center gap-1.5">
                        <CalendarDays size={13} className="shrink-0 text-[var(--color-text-muted)] xl:size-4" />
                        <span className="truncate">{testimonial.date}</span>
                      </span>

                      <span className="inline-flex items-center gap-1.5">
                        <UsersRound size={13} className="shrink-0 text-[var(--color-text-muted)] xl:size-4" />
                        <span className="truncate">{testimonial.travelers}</span>
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div
          style={{ "--reveal-delay": "420ms" } as React.CSSProperties}
          className="premium-reveal-card mx-auto mt-7 max-w-5xl overflow-hidden rounded-[1.2rem] border border-[color:var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-primary)] backdrop-blur-xl sm:mt-8 md:mt-8 lg:rounded-[1.4rem] xl:mt-10 xl:rounded-[1.6rem]"
        >
          <div className="grid grid-cols-1 divide-y divide-[color:var(--color-border-soft)] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {trustStats.map((stat) => {
              const Icon = stat.icon;
              const isIce = stat.accent === "ice";

              return (
                <div
                  key={stat.label}
                  className="flex items-center justify-start gap-3 p-4 text-left sm:flex-row sm:justify-center sm:gap-4 sm:p-5 sm:text-center md:gap-3 md:p-4 lg:gap-4 lg:p-5 xl:gap-6 xl:p-7"
                >
                  <div
                    className={`grid size-10 shrink-0 place-items-center rounded-full border bg-white/[0.045] sm:size-11 md:size-10 lg:size-12 xl:size-16 ${
                      isIce
                        ? "border-[color:var(--color-secondary)]/25 text-[var(--color-secondary)]"
                        : "border-[color:var(--color-primary)]/25 text-[var(--color-primary)]"
                    }`}
                  >
                    <Icon size={18} strokeWidth={1.5} className="md:size-[18px] lg:size-[22px] xl:size-[30px]" />
                  </div>

                  <div className="min-w-0">
                    <p className="truncate text-base font-semibold tracking-[0.02em] text-[var(--color-text)] sm:text-xl md:text-lg lg:text-2xl xl:text-4xl">
                      {stat.value}
                    </p>
                    <p className="mt-0.5 truncate text-[8px] font-semibold uppercase tracking-[0.14em] text-[var(--color-text-muted)] sm:text-[10px] md:text-[9px] lg:text-[10px] xl:mt-2 xl:text-xs xl:tracking-[0.28em]">
                      {stat.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-5 flex items-center justify-center gap-2 text-center text-[11px] text-[var(--color-text-muted)] sm:mt-6 sm:text-sm md:mt-6 xl:mt-8">
          <ShieldCheck size={15} className="shrink-0 text-[var(--color-primary)] sm:size-[18px]" />
          Trusted by thousands. Recommended by travelers worldwide.
        </div>
      </div>
    </section>
  );
}