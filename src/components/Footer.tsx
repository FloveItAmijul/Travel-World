import type { ReactNode } from "react";
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
    accent: "gold",
  },
  {
    title: "24/7 Support",
    description: "Always here to help",
    icon: Headphones,
    accent: "ice",
  },
  {
    title: "Best Price Guarantee",
    description: "Get the best deals",
    icon: Trophy,
    accent: "gold",
  },
  {
    title: "Trusted by 50K+",
    description: "4.9/5 Rating",
    icon: Globe2,
    accent: "ice",
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

function footerLinkTarget(link: string) {
  const map: Record<string, string> = {
    Destinations: "#destinations",
    "International Tours": "#destinations",
    "Luxury Experiences": "#services",
    "Weekend Getaways": "#destinations",
    "AI Trip Planning": "#ai-travel-assistant",
    "Flight Bookings": "#services",
    "Hotel Bookings": "#services",
    "Airport Transfers": "#services",
    "About Us": "#why-choose-us",
    "Our Story": "#why-choose-us",
    Careers: "#contact",
    "Contact Us": "#contact",
    "Help Center": "#contact",
    "Booking Guide": "#services",
    "Terms & Conditions": "#contact",
    "Privacy Policy": "#contact",
  };

  return map[link] ?? "#";
}

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-[var(--color-bg)] px-4 pb-6 pt-12 text-[var(--color-text)] sm:px-5 sm:pt-14 md:px-6 md:pt-16 lg:px-8 lg:pb-8 lg:pt-20 xl:pt-26"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[image:var(--gradient-bg)]" />
        <div className="absolute left-0 top-0 size-[260px] rounded-full bg-[color:var(--color-primary)]/7 blur-3xl md:size-[340px] xl:size-[420px]" />
        <div className="absolute right-0 bottom-0 size-[300px] rounded-full bg-[color:var(--color-secondary)]/7 blur-3xl md:size-[420px] xl:size-[520px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-primary)]/45 to-transparent" />
        <div className="absolute bottom-0 left-1/2 h-px w-[min(720px,86vw)] -translate-x-1/2 bg-gradient-to-r from-transparent via-[var(--color-secondary)]/25 to-transparent" />
      </div>

      <div className="relative mx-auto w-[min(100%,1280px)]">
        <div className="grid gap-8 md:grid-cols-[0.95fr_2.05fr] md:gap-6 lg:grid-cols-[1.05fr_2.25fr] lg:gap-8 xl:grid-cols-[1.15fr_2.4fr] xl:gap-10">
          <div className="min-w-0">
            <a href="/" className="inline-flex items-center gap-3" aria-label="Traveluxe home">
              <span className="relative grid size-11 shrink-0 place-items-center overflow-hidden rounded-full border border-[color:var(--color-primary)]/35 bg-[color:rgba(243,201,121,0.1)] text-[var(--color-primary-soft)] shadow-[var(--shadow-primary)] md:size-11 lg:size-12 xl:size-14">
                <span className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2),transparent_36%)]" />
                <Globe2 size={24} strokeWidth={1.5} className="relative md:size-[24px] lg:size-[26px] xl:size-[30px]" />
              </span>

              <span className="min-w-0">
                <strong className="block text-base tracking-[0.24em] text-[var(--color-text)] md:text-base md:tracking-[0.22em] lg:text-lg lg:tracking-[0.26em] xl:text-2xl xl:tracking-[0.28em]">
                  TRAVELUXE
                </strong>
                <small className="mt-1 block text-[8px] tracking-[0.22em] text-[var(--color-text-muted)] md:text-[8px] lg:text-[9px] xl:text-[10px] xl:tracking-[0.36em]">
                  JOURNEYS BEYOND LIMITS
                </small>
              </span>
            </a>

            <p className="mt-4 max-w-md text-xs leading-6 text-[var(--color-text-soft)] md:max-w-sm md:text-[11px] md:leading-5 lg:mt-5 lg:text-xs lg:leading-6 xl:mt-6 xl:text-sm xl:leading-7">
              Crafting unforgettable journeys with luxury precision, AI support,
              and human care.
            </p>

            <div className="mt-5 grid gap-3 text-xs leading-5 text-[var(--color-text-soft)] md:mt-5 md:gap-2 md:text-[10px] md:leading-4 lg:mt-6 lg:gap-3 lg:text-xs lg:leading-5 xl:mt-7 xl:gap-4 xl:text-sm">
              <FooterContact icon={<MapPin size={14} />} text="123 Travel Street, New Delhi" />
              <FooterContact icon={<Phone size={14} />} text="+91 98765 43210" href="tel:+919876543210" />
              <FooterContact icon={<Mail size={14} />} text="hello@traveluxe.com" href="mailto:hello@traveluxe.com" />
              <FooterContact icon={<Clock3 size={14} />} text="Mon – Sat: 9 AM – 7 PM" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-5 gap-y-7 sm:grid-cols-4 md:gap-4 lg:gap-6 xl:gap-8">
            {footerColumns.map((column) => (
              <div key={column.title} className="min-w-0">
                <h3 className="truncate text-sm font-semibold text-[var(--color-text)] md:text-xs lg:text-sm xl:text-base">
                  {column.title}
                </h3>

                <div className="mt-2 h-px w-10 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] md:w-9 lg:w-12 xl:mt-3 xl:w-16" />

                <ul className="mt-4 space-y-2.5 md:mt-4 md:space-y-2 lg:mt-5 lg:space-y-3 xl:mt-6 xl:space-y-4">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a
                        href={footerLinkTarget(link)}
                        className="block truncate text-xs text-[var(--color-text-muted)] transition hover:text-[var(--color-primary)] md:text-[10px] lg:text-xs xl:text-sm"
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

        <div className="mt-8 border-t border-[color:var(--color-border-soft)] pt-5 md:mt-9 md:pt-6 xl:mt-14 xl:pt-8">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:gap-3 lg:gap-4">
            {trustItems.map((item) => {
              const Icon = item.icon;
              const isIce = item.accent === "ice";

              return (
                <div
                  key={item.title}
                  className="flex min-w-0 items-center gap-3 rounded-2xl border border-[color:var(--color-border-soft)] bg-[var(--color-surface-soft)] p-3 sm:border-0 sm:bg-transparent sm:p-0 md:gap-2 lg:gap-3 xl:gap-4"
                >
                  <div
                    className={`grid size-9 shrink-0 place-items-center rounded-xl border bg-[var(--color-surface)] md:size-9 lg:size-11 xl:size-13 xl:rounded-2xl ${
                      isIce
                        ? "border-[color:var(--color-secondary)]/25 text-[var(--color-secondary)] shadow-[var(--shadow-secondary)]"
                        : "border-[color:var(--color-primary)]/25 text-[var(--color-primary)] shadow-[var(--shadow-primary)]"
                    }`}
                  >
                    <Icon size={18} strokeWidth={1.55} className="md:size-[18px] lg:size-[22px] xl:size-[26px]" />
                  </div>

                  <div className="min-w-0">
                    <h4 className="truncate text-[10px] font-semibold text-[var(--color-text)] md:text-[9px] lg:text-xs xl:text-sm">
                      {item.title}
                    </h4>
                    <p className="mt-0.5 truncate text-[9px] text-[var(--color-text-muted)] md:text-[8px] lg:text-[10px] xl:mt-1 xl:text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-6 border-t border-[color:var(--color-border-soft)] pt-5 md:mt-7 md:pt-6 xl:mt-10 xl:pt-8">
          <div className="grid gap-5 md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-3">
            <p className="order-3 text-center text-xs text-[var(--color-text-muted)] md:order-1 md:text-left md:text-[10px] lg:text-xs xl:text-sm">
              © 2025 Traveluxe. All rights reserved.
            </p>

            <div className="order-1 text-center md:order-2">
              <p className="mb-2 text-xs font-semibold text-[var(--color-text-soft)] md:text-[10px] lg:text-xs xl:text-sm">
                Follow us
              </p>

              <div className="flex items-center justify-center gap-2 md:gap-1.5 lg:gap-2 xl:gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href="#"
                    aria-label={social.label}
                    className="grid size-8 place-items-center rounded-full border border-[color:var(--color-border)] bg-[var(--color-surface)] text-xs font-bold text-[var(--color-text-muted)] transition hover:-translate-y-1 hover:border-[color:var(--color-primary)]/45 hover:bg-[color:rgba(243,201,121,0.1)] hover:text-[var(--color-primary)] md:size-7 md:text-[10px] lg:size-8 lg:text-xs xl:size-10 xl:text-sm"
                  >
                    {social.short}
                  </a>
                ))}
              </div>
            </div>

            <div className="order-2 flex flex-wrap items-center justify-center gap-2 md:order-3 md:justify-end md:gap-1.5 lg:gap-2 xl:gap-3">
              {payments.map((payment) => (
                <span
                  key={payment}
                  className="rounded-md border border-[color:var(--color-border)] bg-[var(--color-surface-soft)] px-2 py-1 text-[8px] font-semibold tracking-wide text-[var(--color-text-muted)] md:px-1.5 md:text-[7px] lg:px-2 lg:text-[9px] xl:rounded-lg xl:px-3 xl:py-2 xl:text-xs"
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

function FooterContact({
  icon,
  text,
  href,
}: {
  icon: ReactNode;
  text: string;
  href?: string;
}) {
  const content = (
    <>
      <span className="mt-0.5 shrink-0 text-[var(--color-primary)]/70">{icon}</span>
      <span className="min-w-0">{text}</span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className="flex items-start gap-2 transition hover:text-[var(--color-primary)] lg:gap-3 xl:gap-4"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="flex items-start gap-2 lg:gap-3 xl:gap-4">
      {content}
    </div>
  );
}