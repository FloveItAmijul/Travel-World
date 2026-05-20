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
    accent: "cyan",
    avatar: "JC",
  },
  {
    name: "Sophia Nguyen",
    destination: "Andaman, India",
    date: "Apr 22 – Apr 29, 2024",
    travelers: "2 Travelers",
    tripType: "Romantic Getaway",
    quote:
      "Our romantic escape was straight out of a dream. The accommodations, views, and thoughtful touches made it unforgettable.",
    accent: "violet",
    avatar: "SN",
  },
  {
    name: "Daniel Brooks",
    destination: "Kashmir, India",
    date: "Jun 5 – Jun 12, 2024",
    travelers: "4 Travelers",
    tripType: "Family Vacation",
    quote:
      "An incredible family vacation. The itinerary was perfect for our kids and us, with seamless planning and amazing support throughout.",
    accent: "cyan",
    avatar: "DB",
  },
  {
    name: "Aarav Mehta",
    destination: "Dubai, UAE",
    date: "Jul 8 – Jul 13, 2024",
    travelers: "2 Travelers",
    tripType: "Premium City Break",
    quote:
      "Everything was arranged beautifully, from airport transfers to hotel selection. The Dubai experience felt smooth, premium, and effortless.",
    accent: "violet",
    avatar: "AM",
  },
  {
    name: "Priya Sharma",
    destination: "Andaman, India",
    date: "Aug 3 – Aug 9, 2024",
    travelers: "3 Travelers",
    tripType: "Island Escape",
    quote:
      "The beaches, stays, and private experiences were amazing. It felt like every part of the journey was thoughtfully planned for us.",
    accent: "cyan",
    avatar: "PS",
  },
];

const trustStats = [
  {
    value: "4.9 / 5",
    label: "Average Rating",
    icon: Star,
    accent: "cyan",
  },
  {
    value: "50K+",
    label: "Happy Travelers",
    icon: UsersRound,
    accent: "violet",
  },
  {
    value: "120+",
    label: "Destinations",
    icon: Globe2,
    accent: "cyan",
  },
];

export function Testimonials() {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const isPausedRef = useRef(false);
  const resumeTimerRef = useRef<number | null>(null);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.18,
  });

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let animationFrame = 0;
    let lastTime = performance.now();

    function autoScroll(currentTime: number) {
      const delta = currentTime - lastTime;
      lastTime = currentTime;

      if (slider && !isPausedRef.current && !document.hidden) {
        const speed = 0.028;
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

    animationFrame = requestAnimationFrame(autoScroll);

    return () => {
      cancelAnimationFrame(animationFrame);

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

    const amount = Math.min(slider.clientWidth * 0.88, 460);

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
      className={`premium-reveal-section relative overflow-hidden bg-[#02040a] px-3 py-14 text-white sm:px-5 sm:py-18 lg:px-8 lg:py-28 ${
        inView ? "is-visible" : ""
      }`}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#02040a_0%,#040817_48%,#02040a_100%)]" />

        {imagesByName.andaman && (
          <img
            src={imagesByName.andaman}
            alt=""
            aria-hidden="true"
            className="absolute right-0 top-0 h-[260px] w-[62%] object-cover opacity-12 sm:h-[340px] lg:h-[420px] lg:opacity-18"
            draggable={false}
          />
        )}

        <div className="absolute inset-0 bg-[linear-gradient(90deg,#02040a_0%,rgba(2,4,10,0.82)_48%,rgba(2,4,10,0.45)_100%)]" />
        <div className="absolute right-0 top-0 h-[360px] w-[520px] rounded-full bg-violet-500/[0.08] blur-3xl lg:h-[520px] lg:w-[680px]" />
        <div className="absolute left-0 bottom-0 h-[300px] w-[460px] rounded-full bg-cyan-300/[0.06] blur-3xl lg:h-[420px] lg:w-[620px]" />
        <div className="absolute left-1/2 top-10 h-px w-[min(520px,70vw)] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent lg:top-12" />
      </div>

      <div className="relative mx-auto w-[min(100%,1280px)]">
        <div className="premium-reveal-heading mx-auto max-w-4xl text-center">
          <div className="mb-4 inline-flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.32em] text-cyan-200 sm:text-xs sm:tracking-[0.42em] lg:mb-5">
            <span className="hidden h-px w-14 bg-gradient-to-r from-transparent to-cyan-300/70 sm:block lg:w-20" />
            <Diamond size={14} className="sm:size-4" />
            Client Experiences
            <span className="hidden h-px w-14 bg-gradient-to-r from-cyan-300/70 to-transparent sm:block lg:w-20" />
          </div>

          <h2 className="text-[clamp(2.2rem,7vw,5.4rem)] font-semibold leading-[0.95] tracking-[-0.065em] text-white">
            Stories From Our Travelers
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-xs leading-6 text-white/62 sm:mt-5 sm:text-sm sm:leading-7 lg:mt-6 lg:text-base lg:leading-8">
            Real journeys. Real stories. See how we turn travel dreams into
            unforgettable memories.
          </p>
        </div>

        <div
          style={{ "--reveal-delay": "140ms" } as React.CSSProperties}
          className="premium-reveal-card relative mt-9 sm:mt-11 lg:mt-14"
        >
          <div className="mb-4 flex justify-end gap-3">
            <button
              type="button"
              onClick={() => scrollByCard("left")}
              className="grid size-10 place-items-center rounded-full border border-white/12 bg-white/[0.045] text-white/70 transition hover:border-cyan-300/45 hover:bg-cyan-300/10 hover:text-white"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={19} />
            </button>

            <button
              type="button"
              onClick={() => scrollByCard("right")}
              className="grid size-10 place-items-center rounded-full border border-white/12 bg-white/[0.045] text-white/70 transition hover:border-cyan-300/45 hover:bg-cyan-300/10 hover:text-white"
              aria-label="Next testimonial"
            >
              <ChevronRight size={19} />
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
            className="testimonial-slider flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth pb-4 sm:gap-4 lg:gap-5"
          >
            {testimonials.map((testimonial) => {
              const isViolet = testimonial.accent === "violet";

              return (
                <article
                  key={`${testimonial.name}-${testimonial.destination}`}
                  className={`testimonial-card group relative min-w-[86%] snap-start overflow-hidden rounded-[1.15rem] border bg-white/[0.04] p-4 shadow-[0_20px_60px_rgba(0,0,0,0.36)] transition duration-500 hover:-translate-y-1 sm:min-w-[48%] sm:rounded-[1.4rem] sm:p-5 lg:min-w-[410px] lg:rounded-[1.8rem] lg:p-6 lg:shadow-[0_26px_90px_rgba(0,0,0,0.42)] ${
                    isViolet
                      ? "border-violet-300/25 hover:border-violet-300/55 hover:shadow-[0_26px_95px_rgba(167,139,250,0.15)]"
                      : "border-cyan-300/22 hover:border-cyan-300/55 hover:shadow-[0_26px_95px_rgba(125,211,252,0.15)]"
                  }`}
                >
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_36%,rgba(125,211,252,0.04))]" />

                  <div className="absolute right-4 top-4 text-6xl font-serif leading-none text-white/[0.06] lg:right-6 lg:top-6 lg:text-8xl">
                    “
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 lg:gap-4">
                      <div
                        className={`relative grid size-14 shrink-0 place-items-center overflow-hidden rounded-full border text-base font-semibold lg:size-20 lg:text-xl ${
                          isViolet
                            ? "border-violet-300/35 bg-violet-300/12 text-violet-100 shadow-[0_0_42px_rgba(167,139,250,0.16)]"
                            : "border-cyan-300/35 bg-cyan-300/12 text-cyan-100 shadow-[0_0_42px_rgba(125,211,252,0.16)]"
                        }`}
                      >
                        <span className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.22),transparent_36%)]" />
                        <span className="relative">{testimonial.avatar}</span>
                      </div>

                      <div className="min-w-0">
                        <h3 className="truncate text-base font-semibold tracking-[-0.04em] text-white lg:text-2xl">
                          {testimonial.name}
                        </h3>

                        <p
                          className={`mt-1 flex items-center gap-1.5 truncate text-xs lg:mt-2 lg:text-sm ${
                            isViolet ? "text-violet-200" : "text-cyan-200"
                          }`}
                        >
                          <MapPin size={13} className="shrink-0 lg:size-4" />
                          {testimonial.destination}
                        </p>

                        <div className="mt-2 flex items-center gap-0.5 text-yellow-400 lg:mt-3 lg:gap-1">
                          {Array.from({ length: 5 }).map((_, starIndex) => (
                            <Star
                              key={starIndex}
                              size={13}
                              className="fill-current lg:size-4"
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    <p className="mt-5 line-clamp-4 text-sm leading-7 text-white/72 lg:mt-7 lg:text-base lg:leading-8">
                      “{testimonial.quote}”
                    </p>

                    <div
                      className={`mt-5 inline-flex items-center gap-1.5 rounded-full border px-3 py-2 text-xs lg:mt-6 lg:px-4 lg:text-sm ${
                        isViolet
                          ? "border-violet-300/28 bg-violet-300/10 text-violet-100"
                          : "border-cyan-300/28 bg-cyan-300/10 text-cyan-100"
                      }`}
                    >
                      <Diamond size={13} className="lg:size-4" />
                      <span className="truncate">{testimonial.tripType}</span>
                    </div>

                    <div className="mt-5 h-px bg-white/10 lg:mt-6" />

                    <div className="mt-4 grid gap-2 text-xs text-white/62 lg:flex lg:flex-wrap lg:items-center lg:gap-x-6 lg:gap-y-3 lg:text-sm">
                      <span className="inline-flex items-center gap-1.5">
                        <CalendarDays size={13} className="shrink-0 text-white/45 lg:size-4" />
                        <span className="truncate">{testimonial.date}</span>
                      </span>

                      <span className="inline-flex items-center gap-1.5">
                        <UsersRound size={13} className="shrink-0 text-white/45 lg:size-4" />
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
          className="premium-reveal-card mx-auto mt-7 max-w-5xl overflow-hidden rounded-[1.2rem] border border-white/12 bg-white/[0.035] shadow-[0_0_70px_rgba(125,211,252,0.08)] sm:mt-8 lg:mt-10 lg:rounded-[1.6rem]"
        >
          <div className="grid grid-cols-3 divide-x divide-white/10">
            {trustStats.map((stat) => {
              const Icon = stat.icon;
              const isViolet = stat.accent === "violet";

              return (
                <div
                  key={stat.label}
                  className="flex items-center justify-center gap-2 p-3 sm:gap-4 sm:p-5 lg:gap-6 lg:p-7"
                >
                  <div
                    className={`grid size-10 shrink-0 place-items-center rounded-full border bg-white/[0.045] sm:size-12 lg:size-16 ${
                      isViolet
                        ? "border-violet-300/25 text-violet-200"
                        : "border-cyan-300/25 text-cyan-200"
                    }`}
                  >
                    <Icon size={18} strokeWidth={1.5} className="sm:size-[22px] lg:size-[30px]" />
                  </div>

                  <div className="min-w-0">
                    <p className="truncate text-lg font-semibold tracking-[0.02em] text-white sm:text-2xl lg:text-4xl">
                      {stat.value}
                    </p>
                    <p className="mt-0.5 truncate text-[8px] font-semibold uppercase tracking-[0.18em] text-white/48 sm:text-[10px] lg:mt-2 lg:text-xs lg:tracking-[0.28em]">
                      {stat.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-5 flex items-center justify-center gap-2 text-center text-[11px] text-white/52 sm:mt-6 sm:text-sm lg:mt-8">
          <ShieldCheck size={15} className="shrink-0 text-cyan-200 sm:size-[18px]" />
          Trusted by thousands. Recommended by travelers worldwide.
        </div>
      </div>
    </section>
  );
}