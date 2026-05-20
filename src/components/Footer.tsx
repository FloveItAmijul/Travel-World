import {
  Clock3,
  Globe2,
  Headphones,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Trophy,
} from "lucide-react";

const footerColumns = [
  {
    title: "Explore",
    links: ["Destinations", "International Tours", "Luxury Experiences", "Weekend Getaways"],
  },
  {
    title: "Services",
    links: ["AI Trip Planning", "Flight Bookings", "Hotel Bookings", "Airport Transfers"],
  },
  {
    title: "Company",
    links: ["About Us", "Our Story", "Careers", "Contact Us"],
  },
  {
    title: "Support",
    links: ["Help Center", "Booking Guide", "Terms & Conditions", "Privacy Policy"],
  },
];

const trustItems = [
  {
    title: "Secure Payments",
    description: "100% Protected",
    icon: ShieldCheck,
    accent: "cyan",
  },
  {
    title: "24/7 Support",
    description: "Always here to help",
    icon: Headphones,
    accent: "cyan",
  },
  {
    title: "Best Price Guarantee",
    description: "Get the best deals",
    icon: Trophy,
    accent: "violet",
  },
  {
    title: "Trusted by 50K+",
    description: "4.9/5 Rating",
    icon: Globe2,
    accent: "violet",
  },
];

const socialLinks = [
  { label: "Facebook", short: "f" },
  { label: "Instagram", short: "◎" },
  { label: "Twitter / X", short: "𝕏" },
  { label: "YouTube", short: "▶" },
  { label: "LinkedIn", short: "in" },
];

const payments = ["VISA", "MC", "AMEX", "PayPal", "G Pay", "Apple Pay"];

export function Footer() {
  return (
    <footer
        id="contact"
        className="relative overflow-hidden bg-[#02040a] px-3 pb-6 pt-12 text-white sm:px-5 sm:pt-16 lg:px-8 lg:pb-8 lg:pt-26"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#02040a_0%,#030716_50%,#02040a_100%)]" />
        <div className="absolute left-0 top-0 size-[300px] rounded-full bg-cyan-300/[0.055] blur-3xl lg:size-[420px]" />
        <div className="absolute right-0 bottom-0 size-[360px] rounded-full bg-violet-500/[0.065] blur-3xl lg:size-[520px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />
      </div>

      <div className="relative mx-auto w-[min(100%,1280px)]">
        <div className="grid grid-cols-[0.95fr_2.05fr] gap-5 sm:gap-8 lg:grid-cols-[1.15fr_2.4fr] lg:gap-10">
          <div className="min-w-0">
            <a href="/" className="inline-flex items-center gap-2 sm:gap-3" aria-label="Traveluxe home">
              <span className="relative grid size-10 shrink-0 place-items-center rounded-full border border-cyan-300/35 bg-cyan-300/10 text-cyan-200 shadow-[0_0_42px_rgba(125,211,252,0.2)] sm:size-12 lg:size-14">
                <Globe2 size={22} strokeWidth={1.5} className="sm:size-[26px] lg:size-[30px]" />
              </span>

              <span className="min-w-0">
                <strong className="block text-sm tracking-[0.22em] text-white sm:text-lg sm:tracking-[0.26em] lg:text-2xl lg:tracking-[0.28em]">
                  TRAVELUXE
                </strong>
                <small className="mt-1 hidden text-[8px] tracking-[0.22em] text-white/48 sm:block lg:text-[10px] lg:tracking-[0.36em]">
                  JOURNEYS BEYOND LIMITS
                </small>
              </span>
            </a>

            <p className="mt-4 max-w-sm text-[10px] leading-5 text-white/58 sm:mt-5 sm:text-xs sm:leading-6 lg:mt-6 lg:text-sm lg:leading-7">
              Crafting unforgettable journeys with AI precision and human care.
            </p>

            <div className="mt-4 grid gap-2 text-[9px] leading-4 text-white/62 sm:mt-6 sm:gap-3 sm:text-xs lg:mt-7 lg:gap-4 lg:text-sm">
              <FooterContact icon={<MapPin size={14} />} text="123 Travel Street, New Delhi" />
              <FooterContact icon={<Phone size={14} />} text="+91 98765 43210" />
              <FooterContact icon={<Mail size={14} />} text="hello@traveluxe.com" />
              <FooterContact icon={<Clock3 size={14} />} text="Mon – Sat: 9 AM – 7 PM" />
            </div>
          </div>

          <div className="grid grid-cols-4 gap-3 sm:gap-5 lg:gap-8">
            {footerColumns.map((column) => (
              <div key={column.title} className="min-w-0">
                <h3 className="truncate text-[11px] font-semibold text-white sm:text-sm lg:text-base">
                  {column.title}
                </h3>

                <div className="mt-2 h-px w-8 bg-gradient-to-r from-cyan-300 to-violet-400 sm:w-12 lg:mt-3 lg:w-16" />

                <ul className="mt-3 space-y-2 sm:mt-5 sm:space-y-3 lg:mt-6 lg:space-y-4">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a
                        href={`#${link.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and")}`}
                        className="block truncate text-[9px] text-white/58 transition hover:text-cyan-200 sm:text-xs lg:text-sm"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-5 sm:mt-10 sm:pt-6 lg:mt-14 lg:pt-8">
          <div className="grid grid-cols-4 gap-3">
            {trustItems.map((item) => {
              const Icon = item.icon;
              const isViolet = item.accent === "violet";

              return (
                <div
                  key={item.title}
                  className="flex min-w-0 items-center gap-2 border-r border-white/10 pr-2 last:border-r-0 sm:gap-3 lg:gap-4"
                >
                  <div
                    className={`grid size-9 shrink-0 place-items-center rounded-xl border bg-white/[0.04] sm:size-11 lg:size-13 lg:rounded-2xl ${
                      isViolet
                        ? "border-violet-300/25 text-violet-200 shadow-[0_0_34px_rgba(167,139,250,0.13)]"
                        : "border-cyan-300/25 text-cyan-200 shadow-[0_0_34px_rgba(125,211,252,0.13)]"
                    }`}
                  >
                    <Icon size={18} strokeWidth={1.55} className="sm:size-[22px] lg:size-[26px]" />
                  </div>

                  <div className="min-w-0">
                    <h4 className="truncate text-[9px] font-semibold text-white sm:text-xs lg:text-sm">
                      {item.title}
                    </h4>
                    <p className="mt-0.5 truncate text-[8px] text-white/50 sm:text-[10px] lg:mt-1 lg:text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-6 border-t border-white/10 pt-5 sm:mt-8 sm:pt-6 lg:mt-10 lg:pt-8">
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
            <p className="truncate text-[9px] text-white/48 sm:text-xs lg:text-sm">
              © 2025 Traveluxe. All rights reserved.
            </p>

            <div className="text-center">
              <p className="mb-2 text-[9px] font-semibold text-white/78 sm:text-xs lg:text-sm">
                Follow us
              </p>

              <div className="flex items-center justify-center gap-1.5 sm:gap-2 lg:gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href="#"
                    aria-label={social.label}
                    className="grid size-7 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-[10px] font-bold text-white/58 transition hover:-translate-y-1 hover:border-cyan-300/45 hover:bg-cyan-300/10 hover:text-white sm:size-8 sm:text-xs lg:size-10 lg:text-sm"
                  >
                    {social.short}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-end gap-1.5 sm:gap-2 lg:gap-3">
              {payments.map((payment) => (
                <span
                  key={payment}
                  className="rounded-md border border-white/10 bg-white/[0.035] px-1.5 py-1 text-[7px] font-semibold tracking-wide text-white/58 sm:px-2 sm:text-[9px] lg:rounded-lg lg:px-3 lg:py-2 lg:text-xs"
                >
                  {payment}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterContact({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-start gap-2 sm:gap-3 lg:gap-4">
      <span className="mt-0.5 shrink-0 text-white/48">{icon}</span>
      <span className="min-w-0">{text}</span>
    </div>
  );
}