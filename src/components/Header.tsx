import { AnimatePresence, motion } from "framer-motion";
import {
  BriefcaseBusiness,
  CircleHelp,
  FileText,
  Handshake,
  Home,
  Info,
  LogIn,
  Menu,
  MessageCircle,
  PlaneTakeoff,
  Quote,
  Sparkles,
  X,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router";

import logo from "../assets/brand/logosvg.svg";

const navItems = [
  {
    label: "Home",
    target: "home",
    type: "section",
    icon: Home,
    description: "Back to main welcome section",
  },
  {
    label: "Services",
    target: "services",
    type: "section",
    icon: BriefcaseBusiness,
    description: "Travel support and booking services",
  },
  {
    label: "Destinations",
    target: "destinations",
    type: "section",
    icon: PlaneTakeoff,
    description: "Explore handpicked destinations",
  },
  {
    label: "AI Planner",
    target: "ai-travel-assistant",
    type: "section",
    icon: Sparkles,
    description: "Smart trip planning assistant",
  },
  {
    label: "Why Us",
    target: "why-choose-us",
    type: "section",
    icon: CircleHelp,
    description: "Why travelers choose Dia Festivo",
  },
  {
    label: "Partners",
    target: "partners",
    type: "section",
    icon: Handshake,
    description: "Trusted travel and hospitality partners",
  },
  {
    label: "Stories",
    target: "testimonials",
    type: "section",
    icon: Quote,
    description: "Guest memories and testimonials",
  },
  {
    label: "Contact",
    target: "contact",
    type: "section",
    icon: MessageCircle,
    description: "Reach our travel support team",
  },
];

const utilityMenuItems = [
  {
    label: "About Us",
    target: "/about-us",
    type: "route",
    icon: Info,
    description: "Our background, vision, and services",
  },
  {
    label: "Employee Login",
    target: "/employee-login",
    type: "route",
    icon: LogIn,
    description: "Internal secure access",
  },
  {
    label: "Cancellation Policy",
    target: "/refund-policy",
    type: "route",
    icon: FileText,
    description: "Refund terms & conditions",
  },
];

const HEADER_OFFSET = 92;

type HeaderProps = {
  onOpenAIChat: () => void;
};

type MenuItem = {
  label: string;
  target: string;
  type: string;
  icon: React.ElementType;
  description: string;
};

export function Header({ onOpenAIChat }: HeaderProps) {
  const navigate = useNavigate();

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
      if (scrollLockTimerRef.current) {
        window.clearTimeout(scrollLockTimerRef.current);
      }
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

    if (!element) {
      navigate(`/#${target}`);
      setIsMenuOpen(false);
      return;
    }

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

  function handleMenuItemClick(item: MenuItem) {
    if (item.type === "route") {
      setIsMenuOpen(false);
      navigate(item.target);
      return;
    }

    scrollToSection(item.target);
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
            aria-label="Dia Festivo home"
          >
            <span className="relative grid size-12 place-items-center overflow-hidden rounded-full border border-[color:var(--color-primary)]/30 bg-[var(--color-surface)] text-[var(--color-primary-soft)] shadow-[0_0_45px_var(--color-primary-glow)] transition duration-500 group-hover:border-[color:var(--color-primary-soft)]/65 group-hover:shadow-[0_0_70px_var(--color-primary-glow)]">
              <span className="absolute inset-0 bg-[conic-gradient(from_180deg,transparent,rgba(243,201,121,0.38),rgba(224,247,255,0.28),transparent)] opacity-70 transition duration-500 group-hover:rotate-180" />
              <span className="absolute inset-[5px] rounded-full bg-[var(--color-bg-soft)]" />
              <img
                src={logo}
                alt="Dia Festivo"
                className="relative h-8 w-8 object-contain"
                loading="eager"
                decoding="async"
                draggable={false}
              />
            </span>

            <span className="hidden sm:block">
              <strong className="block text-base tracking-[0.28em] text-[var(--color-text)]">
                DIA FESTIVO
              </strong>
              <small className="mt-1 block text-[9px] tracking-[0.34em] text-[var(--color-text-muted)]">
                DISCOVER MORE. LIVE MORE
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
              className="group ai-planner-button relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-[color:var(--color-primary)]/35 bg-[color:rgba(243,201,121,0.1)] px-4 py-3 text-xs font-semibold text-[var(--color-text)] shadow-[var(--shadow-primary)] outline-none backdrop-blur-2xl transition duration-300 hover:-translate-y-0.5 hover:border-[color:var(--color-primary-soft)]/60 hover:bg-[color:rgba(243,201,121,0.16)] focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/70 sm:px-5 sm:text-sm"
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
              className="fixed bottom-4 right-4 top-24 z-50 flex w-[min(430px,calc(100%-32px))] origin-right flex-col overflow-hidden rounded-[2rem] border border-[color:var(--color-border)] bg-[color:rgba(6,11,22,0.92)] p-4 shadow-[0_30px_120px_rgba(0,0,0,0.72)] backdrop-blur-2xl lg:hidden"
              style={{ perspective: 1200 }}
            >
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute -right-20 -top-20 size-56 rounded-full bg-[color:var(--color-primary)]/18 blur-3xl" />
                <div className="absolute -bottom-24 left-0 size-64 rounded-full bg-[color:var(--color-secondary)]/14 blur-3xl" />
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.1),transparent_35%,rgba(243,201,121,0.06))]" />
              </div>

              <div className="relative shrink-0 rounded-3xl border border-[color:var(--color-border-soft)] bg-[var(--color-surface)] p-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--color-primary)]">
                  Menu
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[var(--color-text)]">
                  Explore Dia Festivo
                </h2>
              </div>

              <div className="relative mt-4 min-h-0 flex-1 overflow-y-auto pr-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                <nav className="grid gap-2 pb-4" aria-label="Mobile navigation">
                  {navItems.map((item, index) => (
                    <PremiumMobileMenuButton
                      key={item.target}
                      item={item}
                      index={index}
                      isActive={activeSection === item.target}
                      onClick={() => handleMenuItemClick(item)}
                    />
                  ))}
                </nav>

                <div className="border-t border-[color:var(--color-border-soft)] pt-4">
                  <p className="mb-3 px-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--color-primary)]">
                    Utility Links
                  </p>

                  <div className="grid gap-2">
                    {utilityMenuItems.map((item, index) => (
                      <PremiumMobileMenuButton
                        key={item.target}
                        item={item}
                        index={index + navItems.length}
                        isActive={false}
                        onClick={() => handleMenuItemClick(item)}
                        isUtility
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative shrink-0 border-t border-[color:var(--color-border-soft)] pt-4">
                <motion.button
                  type="button"
                  onClick={openAIFromMenu}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.36 }}
                  className="relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl border border-[color:var(--color-primary)]/35 bg-[color:rgba(243,201,121,0.1)] px-5 py-4 text-sm font-semibold text-[var(--color-text)] shadow-[var(--shadow-primary)] outline-none transition hover:border-[color:var(--color-primary)]/60 hover:bg-[color:rgba(243,201,121,0.14)] focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/70"
                >
                  <Sparkles size={18} className="text-[var(--color-primary)]" />
                  Start AI Trip Planning
                </motion.button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function PremiumMobileMenuButton({
  item,
  index,
  isActive,
  onClick,
  isUtility = false,
}: {
  item: MenuItem;
  index: number;
  isActive: boolean;
  onClick: () => void;
  isUtility?: boolean;
}) {
  const Icon = item.icon;

  return (
    <motion.button
      type="button"
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
      initial={{ opacity: 0, x: 28 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.06 + index * 0.025 }}
      className={`group flex items-center gap-3 rounded-2xl border px-4 py-3.5 text-left outline-none transition duration-300 focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/70 ${
        isActive
          ? "border-[color:var(--color-primary)]/42 bg-[color:rgba(243,201,121,0.1)] text-[var(--color-text)] shadow-[var(--shadow-primary)]"
          : isUtility
            ? "border-[color:var(--color-primary)]/18 bg-[color:rgba(243,201,121,0.06)] text-[var(--color-text)] hover:border-[color:var(--color-primary)]/42 hover:bg-[color:rgba(243,201,121,0.1)]"
            : "border-[color:var(--color-border-soft)] bg-[var(--color-surface-soft)] text-[var(--color-text)] hover:border-[color:var(--color-primary)]/35 hover:bg-[color:rgba(243,201,121,0.08)]"
      }`}
    >
      <span
        className={`grid size-10 shrink-0 place-items-center rounded-xl border transition ${
          isActive || isUtility
            ? "border-[color:var(--color-primary)]/24 text-[var(--color-primary)]"
            : "border-[color:var(--color-border)] text-[var(--color-primary)] group-hover:border-[color:var(--color-primary)]/24"
        }`}
      >
        <Icon size={18} />
      </span>

      <span className="min-w-0 flex-1">
        <span className="block text-sm font-semibold text-[var(--color-text)]">
          {item.label}
        </span>
        <span className="mt-0.5 block truncate text-xs text-[var(--color-text-muted)]">
          {item.description}
        </span>
      </span>

      <span
        className={`size-1.5 shrink-0 rounded-full transition ${
          isActive
            ? "bg-[var(--color-primary)]"
            : "bg-transparent group-hover:bg-[var(--color-primary)]"
        }`}
      />
    </motion.button>
  );
}