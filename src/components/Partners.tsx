import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Building2, CreditCard, Plane, Sparkles } from "lucide-react";

const hotelLogoModules = import.meta.glob("../assets/partners/hotels/*.{jpg,jpeg,png,webp,svg}", {
  eager: true,
  query: "?url",
  import: "default",
});

const airlineLogoModules = import.meta.glob("../assets/partners/airlines/*.{jpg,jpeg,png,webp,svg}", {
  eager: true,
  query: "?url",
  import: "default",
});

const bankLogoModules = import.meta.glob("../assets/partners/banks/*.{jpg,jpeg,png,webp,svg}", {
  eager: true,
  query: "?url",
  import: "default",
});

type Partner = {
  name: string;
  logo?: string;
};

const hotelFallbacks = [
  "Taj",
  "Marriott",
  "Hilton",
  "Hyatt",
  "Radisson",
  "ITC Hotels",
  "The Leela",
  "Accor",
];

const airlineFallbacks = [
  "IndiGo",
  "Air India",
  "Emirates",
  "Qatar Airways",
  "Singapore Airlines",
  "Etihad",
  "Vistara",
  "SpiceJet",
];

const bankFallbacks = [
  "HDFC Bank",
  "ICICI Bank",
  "Axis Bank",
  "SBI",
  "Kotak Bank",
  "American Express",
  "Visa",
  "Mastercard",
];

function createPartners(
  modules: Record<string, unknown>,
  fallbacks: string[]
): Partner[] {
  const logos = Object.entries(modules)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([path, logo]) => {
      const rawName = path.split("/").pop()?.split(".")[0] ?? "Partner";

      const name = rawName
        .replace(/^\d+[-_\s]*/, "")
        .replaceAll("-", " ")
        .replaceAll("_", " ")
        .replace(/\b\w/g, (letter) => letter.toUpperCase());

      return {
        name,
        logo: logo as string,
      };
    });

  if (logos.length > 0) return logos;

  return fallbacks.map((name) => ({ name }));
}

const hotelPartners = createPartners(hotelLogoModules, hotelFallbacks);
const airlinePartners = createPartners(airlineLogoModules, airlineFallbacks);
const bankPartners = createPartners(bankLogoModules, bankFallbacks);

const partnerRows = [
  {
    title: "Preferred Hotel Partners",
    subtitle: "Luxury stays, resorts, villas, and premium hospitality.",
    icon: Building2,
    partners: hotelPartners,
    direction: "left",
    accent: "gold",
  },
  {
    title: "Preferred Airline Partners",
    subtitle: "Smooth domestic and international flight connections.",
    icon: Plane,
    partners: airlinePartners,
    direction: "right",
    accent: "ice",
  },
  {
    title: "Preferred Banking Partners",
    subtitle: "Secure payments, cards, offers, and travel benefits.",
    icon: CreditCard,
    partners: bankPartners,
    direction: "left",
    accent: "gold",
  },
];

export function Partners() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.14,
  });

  useEffect(() => {
    [...hotelPartners, ...airlinePartners, ...bankPartners].forEach((partner) => {
      if (!partner.logo) return;

      const image = new Image();
      image.src = partner.logo;

      if ("decode" in image) {
        image.decode().catch(() => {
          // Safe to ignore decode failure.
        });
      }
    });
  }, []);


  useEffect(() => {
    function handleVisibilityChange() {
      document.documentElement.classList.toggle(
        "is-tab-hidden",
        document.hidden
      );
    }

    handleVisibilityChange();

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      document.documentElement.classList.remove("is-tab-hidden");
    };
  }, []);

    return (
    <section
      id="partners"
      ref={ref}
      className={`premium-reveal-section relative overflow-hidden bg-[var(--color-bg)] px-4 py-14 text-[var(--color-text)] sm:px-5 sm:py-16 md:px-6 md:py-18 lg:px-8 lg:py-22 xl:py-28 ${
        inView ? "is-visible" : ""
      }`}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[image:var(--gradient-bg)]" />

        <div className="absolute left-1/2 top-10 h-px w-[min(620px,80vw)] -translate-x-1/2 bg-gradient-to-r from-transparent via-[var(--color-primary)]/55 to-transparent md:top-12 xl:top-10" />
        <div className="absolute left-1/2 top-10 size-1.5 -translate-x-1/2 rounded-full bg-[var(--color-primary)] shadow-[0_0_32px_var(--color-primary-glow)] md:top-12 xl:top-10" />

        <div className="absolute -left-24 top-20 h-[320px] w-[420px] rounded-full bg-[color:var(--color-primary)]/7 blur-3xl md:h-[360px] md:w-[480px] xl:-left-28 xl:top-24 xl:h-[440px] xl:w-[560px]" />
        <div className="absolute -right-24 top-24 h-[340px] w-[460px] rounded-full bg-[color:var(--color-secondary)]/7 blur-3xl md:h-[400px] md:w-[520px] xl:-right-28 xl:top-28 xl:h-[480px] xl:w-[620px]" />
        <div className="absolute bottom-0 left-1/2 h-[220px] w-[520px] -translate-x-1/2 rounded-full bg-[color:var(--color-primary)]/5 blur-3xl md:w-[680px] xl:h-[280px] xl:w-[820px]" />

        <div className="absolute left-[8%] top-24 hidden size-56 rounded-full border border-[color:var(--color-primary)]/10 md:block lg:size-64 xl:top-28 xl:size-72" />
        <div className="absolute right-[7%] top-36 hidden size-60 rounded-full border border-[color:var(--color-secondary)]/10 md:block lg:size-72 xl:top-40 xl:size-80" />
      </div>

      <div className="relative mx-auto w-[min(100%,1280px)]">
        <div className="premium-reveal-heading mx-auto max-w-4xl text-center">
          <div className="mb-4 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.32em] text-[var(--color-primary)] sm:text-xs sm:tracking-[0.38em] md:mb-5 md:text-[10px] lg:text-xs xl:tracking-[0.42em]">
            <span className="hidden h-px w-14 bg-gradient-to-r from-transparent to-[var(--color-primary)]/70 sm:block md:w-16 xl:w-20" />
            <Sparkles size={15} className="xl:size-4" />
            Trusted Network
            <Sparkles size={15} className="xl:size-4" />
            <span className="hidden h-px w-14 bg-gradient-to-r from-[var(--color-primary)]/70 to-transparent sm:block md:w-16 xl:w-20" />
          </div>

          <h2 className="text-[clamp(2.25rem,8vw,3.7rem)] font-semibold leading-[0.95] tracking-[-0.065em] text-[var(--color-text)] md:text-[clamp(2.7rem,5.5vw,4.25rem)] xl:text-[clamp(2.8rem,8vw,5.4rem)]">
            Trusted Travel Partners
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-xs leading-6 text-[var(--color-text-soft)] sm:text-sm sm:leading-7 md:mt-5 md:text-sm md:leading-7 xl:mt-6 xl:text-base xl:leading-8">
            A premium ecosystem of hotels, airlines, and banking partners that
            helps us deliver smoother trips, better comfort, and reliable travel support.
          </p>
        </div>

        <div
          style={{ "--reveal-delay": "180ms" } as React.CSSProperties}
          className="premium-reveal-card mt-9 overflow-hidden rounded-[1.4rem] border border-[color:var(--color-border)] bg-[var(--color-surface)] p-3 shadow-[var(--shadow-card)] backdrop-blur-2xl sm:mt-10 sm:rounded-[1.6rem] sm:p-4 md:mt-11 md:rounded-[1.7rem] md:p-4 lg:p-5 xl:mt-12 xl:rounded-[2rem] xl:p-7"
        >
          <div className="space-y-4 sm:space-y-5 md:space-y-5 lg:space-y-6 xl:space-y-8">
            {partnerRows.map((row) => {
              const Icon = row.icon;
              const isIce = row.accent === "ice";

              return (
                <div
                  key={row.title}
                  className={`partner-row relative overflow-hidden rounded-[1.1rem] border bg-black/12 p-3 sm:rounded-[1.3rem] sm:p-4 md:rounded-[1.35rem] md:p-4 lg:p-5 xl:rounded-[1.5rem] ${
                    isIce
                      ? "border-[color:var(--color-secondary)]/14"
                      : "border-[color:var(--color-primary)]/16"
                  }`}
                >
                  <div className="pointer-events-none absolute inset-0">
                    <div
                      className={`absolute -right-20 -top-24 size-44 rounded-full blur-3xl md:size-48 xl:size-56 ${
                        isIce
                          ? "bg-[color:var(--color-secondary)]/8"
                          : "bg-[color:var(--color-primary)]/9"
                      }`}
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.055),transparent_38%,rgba(255,255,255,0.025))]" />
                  </div>

                  <div className="relative mb-4 grid items-center gap-3 md:mb-4 md:grid-cols-[0.42fr_0.58fr] lg:gap-4 xl:mb-5">
                    <div className="flex items-center gap-3 md:gap-3 xl:gap-4">
                      <div
                        className={`grid size-11 shrink-0 place-items-center rounded-xl border bg-white/[0.045] sm:size-12 md:size-11 lg:size-12 xl:size-13 xl:rounded-2xl ${
                          isIce
                            ? "border-[color:var(--color-secondary)]/25 text-[var(--color-secondary)] shadow-[var(--shadow-secondary)]"
                            : "border-[color:var(--color-primary)]/25 text-[var(--color-primary)] shadow-[var(--shadow-primary)]"
                        }`}
                      >
                        <Icon
                          size={21}
                          strokeWidth={1.7}
                          className="sm:size-[23px] md:size-[21px] lg:size-[24px] xl:size-[26px]"
                        />
                      </div>

                      <div className="min-w-0">
                        <h3 className="text-base font-semibold tracking-[-0.04em] text-[var(--color-text)] sm:text-xl md:text-base lg:text-xl xl:text-2xl">
                          {row.title}
                        </h3>
                        <p className="mt-1 max-w-md text-[10px] leading-4 text-[var(--color-text-muted)] sm:text-xs sm:leading-5 md:text-[10px] md:leading-4 lg:text-xs lg:leading-5 xl:text-sm xl:leading-6">
                          {row.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="hidden items-center gap-3 md:flex">
                      <span
                        className={`h-px flex-1 ${
                          isIce
                            ? "bg-gradient-to-r from-transparent via-[var(--color-secondary)]/45 to-transparent"
                            : "bg-gradient-to-r from-transparent via-[var(--color-primary)]/45 to-transparent"
                        }`}
                      />
                      <span
                        className={`rounded-full border px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] lg:text-[10px] xl:px-3 xl:text-xs xl:tracking-[0.22em] ${
                          isIce
                            ? "border-[color:var(--color-secondary)]/20 bg-[color:rgba(224,247,255,0.06)] text-[var(--color-secondary)]"
                            : "border-[color:var(--color-primary)]/20 bg-[color:rgba(243,201,121,0.08)] text-[var(--color-primary)]"
                        }`}
                      >
                        Official Network
                      </span>
                    </div>
                  </div>

                  <div className="partner-marquee-mask relative">
                    <div
                      className={`partner-marquee-track ${
                        row.direction === "right"
                          ? "partner-marquee-reverse"
                          : "partner-marquee-forward"
                      }`}
                    >
                      {[...row.partners, ...row.partners, ...row.partners].map(
                        (partner, partnerIndex) => (
                          <PartnerLogo
                            key={`${row.title}-${partner.name}-${partnerIndex}`}
                            partner={partner}
                            accent={row.accent}
                          />
                        )
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mx-auto mt-6 flex max-w-3xl items-center justify-center gap-2 rounded-2xl border border-[color:var(--color-primary)]/16 bg-[var(--color-surface-soft)] px-4 py-3 text-center text-xs leading-5 text-[var(--color-text-muted)] backdrop-blur-xl sm:mt-7 sm:rounded-full sm:text-sm md:mt-7 xl:mt-8">
          <span className="size-1.5 shrink-0 rounded-full bg-[var(--color-primary)] shadow-[0_0_18px_var(--color-primary-glow)]" />
          Partner availability, offers, and benefits may vary by destination and season.
        </div>
      </div>
    </section>
  );
}

function PartnerLogo({
  partner,
  accent,
}: {
  partner: Partner;
  accent: string;
}) {
  const isIce = accent === "ice";

  return (
    <div className="partner-logo-card group">
      <div className="partner-logo-plate">
        {partner.logo ? (
          <img
            src={partner.logo}
            alt={partner.name}
            className="partner-logo-image"
            loading="eager"
            decoding="async"
            draggable={false}
          />
        ) : (
          <span
            className={`partner-logo-text ${
              isIce
                ? "text-[var(--color-secondary)]"
                : "text-[var(--color-primary-soft)]"
            }`}
          >
            {partner.name}
          </span>
        )}
      </div>
    </div>
  );
}