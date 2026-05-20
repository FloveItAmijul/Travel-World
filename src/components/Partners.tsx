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

const rows = [
  {
    title: "Preferred Hotel Partners",
    icon: Building2,
    partners: hotelPartners,
    direction: "left",
    accent: "violet",
  },
  {
    title: "Preferred Airline Partners",
    icon: Plane,
    partners: airlinePartners,
    direction: "right",
    accent: "cyan",
  },
  {
    title: "Preferred Banking Partners",
    icon: CreditCard,
    partners: bankPartners,
    direction: "left",
    accent: "violet",
  },
];

export function Partners() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.16,
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

  return (
    <section
      id="partners"
      ref={ref}
      className={`premium-reveal-section relative overflow-hidden bg-[#02040a] px-4 py-18 text-white sm:px-6 sm:py-22 lg:px-8 lg:py-28 ${
        inView ? "is-visible" : ""
      }`}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#02040a_0%,#030716_48%,#02040a_100%)]" />
        <div className="absolute left-1/2 top-10 h-px w-[520px] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent" />
        <div className="absolute left-1/2 top-10 size-1.5 -translate-x-1/2 rounded-full bg-cyan-200 shadow-[0_0_30px_rgba(125,211,252,0.95)]" />
        <div className="absolute -left-16 bottom-0 h-[420px] w-[560px] rounded-full bg-cyan-300/[0.06] blur-3xl" />
        <div className="absolute -right-16 bottom-0 h-[460px] w-[620px] rounded-full bg-violet-500/[0.07] blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-full bg-[radial-gradient(circle_at_20%_90%,rgba(34,211,238,0.13),transparent_30%),radial-gradient(circle_at_80%_88%,rgba(167,139,250,0.13),transparent_30%)]" />
      </div>

      <div className="relative mx-auto w-[min(100%,1280px)]">
        <div className="premium-reveal-heading mx-auto max-w-4xl text-center">
          <div className="mb-5 inline-flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.42em] text-cyan-200">
            <span className="hidden h-px w-20 bg-gradient-to-r from-transparent to-cyan-300/70 sm:block" />
            <Sparkles size={16} />
            Trusted Network
            <Sparkles size={16} />
            <span className="hidden h-px w-20 bg-gradient-to-r from-cyan-300/70 to-transparent sm:block" />
          </div>

          <h2 className="text-[clamp(2.7rem,8vw,5.4rem)] font-semibold leading-[0.95] tracking-[-0.065em] text-white">
            Trusted Travel Partners
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/62 sm:text-base sm:leading-8">
            Our preferred hotel, airline, and banking partners help us deliver
            smoother bookings, better comfort, and more reliable travel experiences.
          </p>
        </div>

        <div
            style={{ "--reveal-delay": "180ms" } as React.CSSProperties}
            className="premium-reveal-card mt-12 overflow-hidden p-0"
        >
          <div className="space-y-6 sm:space-y-7">
            {rows.map((row, index) => {
              const Icon = row.icon;
              const isViolet = row.accent === "violet";

              return (
                <div
                  key={row.title}
                  className={`partner-row relative ${
                    index !== rows.length - 1 ? "border-b border-white/10 pb-6 sm:pb-7" : ""
                  }`}
                >
                    <div className="partner-row-heading mb-6 flex items-center justify-center gap-3 sm:gap-4">
                    <span
                        className={`partner-heading-line ${
                        isViolet ? "partner-heading-line-violet" : "partner-heading-line-cyan"
                        }`}
                    />

                    <div className="partner-heading-title">
                        <Icon
                        size={22}
                        strokeWidth={1.8}
                        className={isViolet ? "text-violet-300" : "text-cyan-300"}
                        />

                        <h3 className="text-center text-sm font-semibold tracking-[0.08em] text-white sm:text-lg">
                        {row.title}
                        </h3>
                    </div>

                    <span
                        className={`partner-heading-line ${
                        isViolet ? "partner-heading-line-violet" : "partner-heading-line-cyan"
                        }`}
                    />
                    </div>

                  <div className="partner-marquee-mask">
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

        <div className="pointer-events-none mx-auto mt-8 h-px w-[min(520px,80%)] bg-gradient-to-r from-transparent via-violet-300/45 to-transparent" />
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
  const isViolet = accent === "violet";

  return (
    <div
      className={`partner-logo-card group ${
        isViolet ? "hover:border-violet-300/60" : "hover:border-cyan-300/60"
      }`}
    >
      {partner.logo ? (
        <img
          src={partner.logo}
          alt={partner.name}
          className="max-h-14 max-w-[150px] object-contain opacity-80 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0 sm:max-h-16 sm:max-w-[170px]"
          loading="eager"
          decoding="async"
          draggable={false}
        />
      ) : (
        <span
          className={`text-lg font-semibold tracking-tight opacity-75 transition duration-300 group-hover:opacity-100 sm:text-xl ${
            isViolet ? "text-violet-100" : "text-cyan-100"
          }`}
        >
          {partner.name}
        </span>
      )}
    </div>
  );
}