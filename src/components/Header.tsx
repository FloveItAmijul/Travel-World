import { AnimatePresence, motion } from "framer-motion";
import { Compass, Menu, Sparkles, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

const navItems = [
  { label: "Home", target: "home" },
  { label: "Services", target: "services" },
  { label: "Destinations", target: "destinations" },
  { label: "AI Planner", target: "ai-travel-assistant" },
  { label: "Why Us", target: "why-choose-us" },
  { label: "Partners", target: "partners" },
  { label: "Stories", target: "testimonials" },
  { label: "Contact", target: "contact" },
];

const HEADER_OFFSET = 92;

type HeaderProps = {
  onOpenAIChat: () => void;
};

export function Header({ onOpenAIChat }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const sectionIds = useMemo(() => navItems.map((item) => item.target), []);
  const scrollLockTargetRef = useRef<string | null>(null);
  const scrollLockTimerRef = useRef<number | null>(null);

  const activeIndex = Math.max(
    navItems.findIndex((item) => item.target === activeSection),
    0
  );

  useEffect(() => {
    function updateHeaderState() {
      setIsScrolled(window.scrollY > 24);

      if (scrollLockTargetRef.current) return;

      const pageBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 8;

      if (pageBottom) {
        setActiveSection("contact");
        return;
      }

      let currentSection = "home";
      const triggerPoint = HEADER_OFFSET + 110;

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (!element) continue;

        const rect = element.getBoundingClientRect();

        if (rect.top <= triggerPoint) {
          currentSection = id;
        }
      }

      setActiveSection(currentSection);
    }

    updateHeaderState();

    let frameId = 0;

    function handleScroll() {
      if (frameId) return;

      frameId = window.requestAnimationFrame(() => {
        updateHeaderState();
        frameId = 0;
      });
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateHeaderState);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateHeaderState);

      if (frameId) window.cancelAnimationFrame(frameId);
      if (scrollLockTimerRef.current) window.clearTimeout(scrollLockTimerRef.current);
    };
  }, [sectionIds]);

  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  function scrollToSection(target: string) {
    const element = document.getElementById(target);
    if (!element) return;

    const elementTop = element.getBoundingClientRect().top + window.scrollY;
    const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;

    const targetTop =
      target === "contact"
        ? maxScrollTop
        : Math.min(elementTop - HEADER_OFFSET, maxScrollTop);

    scrollLockTargetRef.current = target;
    setActiveSection(target);
    setIsMenuOpen(false);

    if (scrollLockTimerRef.current) {
      window.clearTimeout(scrollLockTimerRef.current);
    }

    window.scrollTo({
      top: targetTop,
      behavior: "smooth",
    });

    scrollLockTimerRef.current = window.setTimeout(() => {
      scrollLockTargetRef.current = null;
      setActiveSection(target);
    }, 1200);
  }

  function openAIFromMenu() {
    setIsMenuOpen(false);
    onOpenAIChat();
  }

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[color:rgba(2,4,10,0.76)] shadow-[0_16px_70px_rgba(0,0,0,0.3)] backdrop-blur-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex w-[min(100%-28px,1320px)] items-center justify-between gap-4 py-4">
          <button
            type="button"
            onClick={() => scrollToSection("home")}
            className="group flex shrink-0 items-center gap-3 rounded-full text-left outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]"
            aria-label="Traveluxe home"
          >
            <span className="relative grid size-12 place-items-center overflow-hidden rounded-full border border-[color:var(--color-primary)]/30 bg-[var(--color-surface)] text-[var(--color-primary-soft)] shadow-[0_0_45px_var(--color-primary-glow)] transition duration-500 group-hover:border-[color:var(--color-primary-soft)]/65 group-hover:shadow-[0_0_70px_var(--color-primary-glow)]">
              <span className="absolute inset-0 bg-[conic-gradient(from_180deg,transparent,rgba(243,201,121,0.38),rgba(224,247,255,0.28),transparent)] opacity-70 transition duration-500 group-hover:rotate-180" />
              <span className="absolute inset-[5px] rounded-full bg-[var(--color-bg-soft)]" />
              <Compass className="relative" size={25} strokeWidth={1.45} />
            </span>

            <span className="hidden sm:block">
              <strong className="block text-base tracking-[0.28em] text-[var(--color-text)]">
                TRAVELUXE
              </strong>
              <small className="mt-1 block text-[9px] tracking-[0.34em] text-[var(--color-text-muted)]">
                JOURNEYS BEYOND LIMITS
              </small>
            </span>
          </button>

          <nav
            className="nav-luxury-shell relative hidden min-w-[770px] grid-cols-8 items-center rounded-full border border-[color:var(--color-border)] bg-[var(--color-glass)] p-2 shadow-[0_20px_90px_rgba(0,0,0,0.36)] backdrop-blur-2xl lg:grid xl:min-w-[860px]"
            aria-label="Main navigation"
          >
            <span className="pointer-events-none absolute -bottom-px left-[9%] h-px w-[24%] bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent shadow-[0_0_22px_var(--color-primary-glow)]" />
            <span className="pointer-events-none absolute -top-px right-[14%] h-px w-[22%] bg-gradient-to-r from-transparent via-[var(--color-secondary)] to-transparent shadow-[0_0_22px_var(--color-secondary-glow)]" />

            <span
              className="nav-glass-indicator"
              style={{
                width: `calc((100% - 16px) / ${navItems.length})`,
                transform: `translate3d(${activeIndex * 100}%, 0, 0)`,
              }}
            />

            {navItems.map((item) => {
              const isActive = activeSection === item.target;

              return (
                <button
                  key={item.target}
                  type="button"
                  onClick={() => scrollToSection(item.target)}
                  aria-current={isActive ? "page" : undefined}
                  className={`nav-luxury-item relative z-10 rounded-full px-2.5 py-2.5 text-center text-sm outline-none transition duration-300 focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/70 xl:px-3 ${
                    isActive
                      ? "text-[var(--color-text)]"
                      : "text-[var(--color-text-soft)] hover:text-[var(--color-text)]"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={onOpenAIChat}
              className="group ai-planner-button relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-[color:var(--color-primary)]/35 bg-[color:rgba(243,201,121,0.1)] px-4 py-3 text-xs font-semibold text-[var(--color-text)] shadow-[var(--shadow-primary)] outline-none backdrop-blur-2xl transition duration-300 hover:-translate-y-0.5 hover:border-[color:var(--color-primary-soft)]/60 hover:bg-[color:rgba(243,201,121,0.16)]  focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/70 sm:px-5 sm:text-sm"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/18 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(243,201,121,0.22),transparent_38%),radial-gradient(circle_at_80%_80%,rgba(224,247,255,0.12),transparent_42%)]" />
              <Sparkles className="relative text-[var(--color-primary)]" size={18} />
              <span className="relative hidden sm:inline">AI Planner</span>
              <span className="relative sm:hidden">AI</span>
            </button>

            <button
              type="button"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsMenuOpen((current) => !current)}
              className="relative grid size-12 place-items-center overflow-hidden rounded-full border border-[color:var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] shadow-[0_0_38px_var(--color-secondary-glow)] outline-none backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-[color:var(--color-primary)]/50 hover:bg-[var(--color-surface-strong)] focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/70 lg:hidden"
            >
              <span className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(243,201,121,0.2),transparent_55%)]" />
              <motion.span
                className="relative"
                animate={{
                  rotate: isMenuOpen ? 180 : 0,
                  scale: isMenuOpen ? 1.04 : 1,
                }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                {isMenuOpen ? <X size={23} /> : <Menu size={23} />}
              </motion.span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu overlay"
              onClick={() => setIsMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/56 backdrop-blur-sm lg:hidden"
            />

            <motion.aside
              id="mobile-navigation"
              initial={{ opacity: 0, x: 90, rotateY: -20, scale: 0.94 }}
              animate={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }}
              exit={{ opacity: 0, x: 90, rotateY: -20, scale: 0.94 }}
              transition={{
                type: "spring",
                stiffness: 170,
                damping: 22,
                mass: 0.82,
              }}
              className="fixed right-4 top-24 z-50 w-[min(430px,calc(100%-32px))] origin-right overflow-hidden rounded-[2rem] border border-[color:var(--color-border)] bg-[color:rgba(6,11,22,0.92)] p-4 shadow-[0_30px_120px_rgba(0,0,0,0.72)] backdrop-blur-2xl lg:hidden"
              style={{ perspective: 1200 }}
            >
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute -right-20 -top-20 size-56 rounded-full bg-[color:var(--color-primary)]/18 blur-3xl" />
                <div className="absolute -bottom-24 left-0 size-64 rounded-full bg-[color:var(--color-secondary)]/14 blur-3xl" />
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.1),transparent_35%,rgba(243,201,121,0.06))]" />
              </div>

              <div className="relative mb-5 rounded-3xl border border-[color:var(--color-border-soft)] bg-[var(--color-surface)] p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-primary)]">
                  Navigation
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[var(--color-text)]">
                  Explore Traveluxe
                </h2>
              </div>

              <nav className="relative grid gap-2" aria-label="Mobile navigation">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.target;

                  return (
                    <motion.button
                      key={item.target}
                      type="button"
                      onClick={() => scrollToSection(item.target)}
                      aria-current={isActive ? "page" : undefined}
                      initial={{ opacity: 0, x: 28 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.06 + index * 0.04 }}
                      className={`group flex items-center justify-between rounded-2xl border px-4 py-4 text-sm outline-none transition duration-300 focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/70 ${
                        isActive
                          ? "border-[color:var(--color-primary)]/40 bg-[color:rgba(243,201,121,0.1)] text-[var(--color-text)] shadow-[var(--shadow-primary)]"
                          : "border-[color:var(--color-border-soft)] bg-[var(--color-surface-soft)] text-[var(--color-text-soft)] hover:border-[color:var(--color-primary)]/35 hover:bg-[color:rgba(243,201,121,0.08)] hover:text-[var(--color-text)]"
                      }`}
                    >
                      <span>{item.label}</span>
                      <span
                        className={`size-1.5 rounded-full transition ${
                          isActive
                            ? "bg-[var(--color-primary)]"
                            : "bg-transparent group-hover:bg-[var(--color-primary)]"
                        }`}
                      />
                    </motion.button>
                  );
                })}
              </nav>

              <motion.button
                type="button"
                onClick={openAIFromMenu}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.36 }}
                className="relative mt-5 flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl border border-[color:var(--color-ai-violet)]/35 bg-[color:rgba(167,139,250,0.1)] px-5 py-4 text-sm font-medium text-[var(--color-text)] shadow-[var(--shadow-ai)] outline-none transition hover:border-[color:var(--color-secondary)]/70 hover:bg-[color:rgba(125,211,252,0.1)] focus-visible:ring-2 focus-visible:ring-[var(--color-ai-violet)]/70"
              >
                <Sparkles size={18} />
                Start AI Trip Planning
              </motion.button>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}