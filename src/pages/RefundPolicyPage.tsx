import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  ClipboardList,
  CreditCard,
  FileText,
  Headphones,
  Mail,
  Phone,
  RefreshCcw,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  UserCheck,
  Wallet,
} from "lucide-react";
import { Link } from "react-router";

const policySections = [
  {
    number: "1",
    title: "Return and Replacement Period",
    icon: RefreshCcw,
    points: [
      "Returns or replacements may be allowed within 30 days from the purchase date at the sole discretion of Dia Festivo Leisure Pvt Ltd.",
      "After 30 days, customers must work directly with the specific vendor for support or service.",
      "Vendors may request a return on behalf of a customer within 30 days from the original purchase date.",
    ],
  },
  {
    number: "2",
    title: "Recurring Billing Products",
    icon: CreditCard,
    points: [
      "Returns for recurring billing products may be provided if requested within the standard 15-day return period.",
      "An approved return will automatically cancel that subscription.",
      "Approved returns apply only to the most recent payment.",
    ],
  },
  {
    number: "3",
    title: "Refund Processing and Accounts",
    icon: Wallet,
    points: [
      "Returns will only be credited back to the original payment account.",
      "Closed, inactive, or invalid payment accounts are not eligible for refunds.",
      "Vendor and affiliate payouts may be debited back after a refund.",
    ],
  },
  {
    number: "4",
    title: "Partial Refunds for Digital Benefits",
    icon: ClipboardList,
    points: [
      "Customers may retain or benefit from digital products before requesting a return.",
      "Dia Festivo Leisure Pvt Ltd may issue partial refunds based on usage and product type.",
    ],
  },
  {
    number: "5",
    title: "Vendor Guarantees",
    icon: ShieldCheck,
    points: [
      "Vendors may not offer guarantees that conflict with this policy.",
      "Conflicting warranties should be reported for review and corrective action.",
    ],
  },
];

const snapshotItems = [
  {
    title: "30-Day Return Window",
    icon: CalendarDays,
  },
  {
    title: "15-Day Recurring Billing Review",
    icon: RefreshCcw,
  },
  {
    title: "Refund to Original Payment Source",
    icon: CreditCard,
  },
  {
    title: "Memberships are Non-Refundable",
    icon: UserCheck,
  },
];

const contactItems = [
  {
    title: "Email Support",
    description: "support@diafestivo.com",
    icon: Mail,
    href: "mailto:support@diafestivo.com",
  },
  {
    title: "Call Us",
    description: "+91 22 6805 6000",
    icon: Phone,
    href: "tel:+912268056000",
  },
  {
    title: "Concierge Help",
    description: "Live assistance for members",
    icon: Headphones,
    href: "/#contact",
  },
];

export function RefundPolicyPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-[var(--color-text)]">
      <section className="relative overflow-hidden px-3 py-3 sm:px-4 lg:px-5">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,#020711_0%,#03040a_48%,#000_100%)]" />
          <div className="absolute left-0 top-0 h-[260px] w-full bg-[radial-gradient(circle_at_76%_12%,rgba(243,201,121,0.12),transparent_30%),radial-gradient(circle_at_18%_20%,rgba(224,247,255,0.045),transparent_26%)]" />
          <div className="absolute -right-[14rem] -top-[13rem] size-[34rem] rounded-full border border-[color:var(--color-primary)]/10" />
          <div className="absolute -left-[18rem] bottom-[-16rem] size-[42rem] rounded-full border border-[color:var(--color-primary)]/7" />
          <div className="absolute bottom-0 left-0 h-52 w-full bg-[radial-gradient(circle_at_20%_100%,rgba(243,201,121,0.08),transparent_34%)]" />
        </div>

        <div className="relative z-10 mx-auto w-[min(100%,1160px)]">
          <header className="flex items-center justify-between gap-2">
            <Link
              to="/"
              className="group inline-flex items-center gap-2 rounded-full border border-[color:var(--color-primary)]/18 bg-[color:rgba(243,201,121,0.05)] px-2 py-1.5 text-[var(--color-text)] backdrop-blur-xl transition hover:border-[color:var(--color-primary)]/45"
            >
              <span className="grid size-6 place-items-center rounded-full border border-[color:var(--color-primary)]/22 text-[var(--color-primary)]">
                <ArrowLeft size={13} className="transition group-hover:-translate-x-1" />
              </span>

              <span className="hidden text-[9px] font-semibold uppercase tracking-[0.18em] text-[var(--color-primary-soft)] sm:inline">
                Back
              </span>
            </Link>

            <div className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--color-primary)]/18 bg-[color:rgba(243,201,121,0.05)] px-2.5 py-1.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)] backdrop-blur-xl">
              <FileText size={12} />
              Policy Center
            </div>
          </header>

          <HeroSection />

          <section className="grid gap-3 pb-4 lg:grid-cols-[0.68fr_0.32fr]">
            <div className="grid gap-2.5">
              {policySections.map((section) => (
                <PolicyCard key={section.number} section={section} />
              ))}

              <ImportantMembershipNote />
            </div>

            <aside className="grid content-start gap-3">
              <SnapshotCard />
              <CommitmentCard />
              <ContactCard />
            </aside>
          </section>

          <footer className="border-t border-[color:var(--color-border-soft)] py-4 text-center">
            <div className="mx-auto flex max-w-md items-center justify-center gap-2">
              <span className="hidden h-px flex-1 bg-gradient-to-r from-transparent to-[var(--color-primary)]/45 sm:block" />
              <Sparkles size={12} className="text-[var(--color-primary)]" />
              <span className="hidden h-px flex-1 bg-gradient-to-r from-[var(--color-primary)]/45 to-transparent sm:block" />
            </div>

            <p className="mt-2 text-[8px] font-semibold uppercase tracking-[0.34em] text-[var(--color-primary)]/80">
              Dia Festivo Leisure Pvt Ltd
            </p>
            <p className="mt-1 text-[8px] uppercase tracking-[0.24em] text-[var(--color-text-muted)]">
              Journeys curated. Memories forever.
            </p>
          </footer>
        </div>
      </section>
    </main>
  );
}

function HeroSection() {
  return (
    <section className="relative grid gap-4 py-5 sm:py-6 lg:grid-cols-[0.6fr_0.4fr] lg:items-center lg:py-7">
      <div>
        <p className="text-[8px] font-semibold uppercase tracking-[0.32em] text-[var(--color-primary)] sm:text-[10px]">
          Refund & Cancellation Terms
        </p>

        <h1 className="mt-2 text-[clamp(2.05rem,6vw,4.25rem)] font-semibold leading-[0.86] tracking-[-0.08em] text-[var(--color-text)]">
          Cancellation Policy
        </h1>

        <div className="mt-3 flex max-w-[220px] items-center gap-2">
          <span className="h-px flex-1 bg-gradient-to-r from-[var(--color-primary)] to-transparent" />
          <Sparkles size={12} className="text-[var(--color-primary)]" />
        </div>

        <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-[color:var(--color-primary)]/18 bg-[color:rgba(243,201,121,0.055)] px-2.5 py-1 text-[10px] font-semibold text-[var(--color-primary)]">
          <CalendarDays size={13} />
          Last updated: May 28, 2026
        </div>

        <p className="mt-3 max-w-xl text-[11px] leading-5 text-[var(--color-text-soft)] sm:text-xs sm:leading-6">
          This Cancellation Policy outlines the terms and conditions applicable
          to all products and services offered by Dia Festivo Leisure Pvt Ltd.
          By making a purchase with us, you agree to the terms described herein.
        </p>
      </div>

      <div className="relative hidden min-h-[170px] lg:block">
        <div className="absolute left-1/2 top-1/2 grid size-[170px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-[color:var(--color-primary)]/16 bg-[color:rgba(243,201,121,0.03)] shadow-[var(--shadow-primary)]">
          <div className="absolute inset-5 rounded-full border border-[color:var(--color-primary)]/12" />
          <div className="absolute inset-10 rounded-full border border-[color:var(--color-primary)]/8" />

          <div className="relative grid size-22 place-items-center rounded-full border border-[color:var(--color-primary)]/25 bg-black/30 text-[var(--color-primary)]">
            <Sparkles size={52} strokeWidth={1.15} />
          </div>
        </div>
      </div>
    </section>
  );
}

function PolicyCard({
  section,
}: {
  section: {
    number: string;
    title: string;
    icon: React.ElementType;
    points: string[];
  };
}) {
  const Icon = section.icon;

  return (
    <article className="group relative overflow-hidden rounded-xl border border-[color:var(--color-border)] bg-[var(--color-surface)] p-2.5 shadow-[var(--shadow-card)] backdrop-blur-xl transition hover:border-[color:var(--color-primary)]/38 sm:p-3">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.04),transparent_38%,rgba(243,201,121,0.025))]" />
      </div>

      <div className="relative grid gap-3 md:grid-cols-[92px_1fr] lg:grid-cols-[108px_1fr]">
        <div className="flex items-center gap-2.5 md:border-r md:border-[color:var(--color-border-soft)] md:pr-3">
          <span className="grid size-8 shrink-0 place-items-center rounded-full border border-[color:var(--color-primary)]/30 bg-black/30 text-xs font-semibold text-[var(--color-primary)] shadow-[var(--shadow-primary)]">
            {section.number}
          </span>

          <div className="grid size-10 place-items-center rounded-lg border border-[color:var(--color-primary)]/18 bg-[color:rgba(243,201,121,0.07)] text-[var(--color-primary)] sm:size-11">
            <Icon size={23} strokeWidth={1.45} />
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold tracking-[-0.02em] text-[var(--color-primary-soft)] sm:text-base">
            {section.title}
          </h2>

          <ul className="mt-1.5 grid gap-1 text-[11px] leading-4 text-[var(--color-text-soft)] sm:text-xs sm:leading-[1.15rem]">
            {section.points.map((point) => (
              <li key={point} className="flex gap-1.5">
                <span className="mt-1.5 size-1 shrink-0 rounded-full bg-[var(--color-primary)]" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

function ImportantMembershipNote() {
  return (
    <article className="relative overflow-hidden rounded-xl border border-[color:var(--color-primary)]/38 bg-[linear-gradient(135deg,rgba(243,201,121,0.09),rgba(2,4,10,0.92)_42%,rgba(2,4,10,0.98))] p-3 shadow-[var(--shadow-primary)] backdrop-blur-xl">
      <div className="relative grid gap-3 md:grid-cols-[92px_1fr] lg:grid-cols-[108px_1fr]">
        <div className="flex items-center gap-2.5 md:border-r md:border-[color:var(--color-primary)]/18 md:pr-3">
          <span className="grid size-8 shrink-0 place-items-center rounded-full border border-[color:var(--color-primary)]/38 bg-black/30 text-xs font-semibold text-[var(--color-primary)] shadow-[var(--shadow-primary)]">
            6
          </span>

          <div className="grid size-10 place-items-center rounded-lg border border-[color:var(--color-primary)]/28 bg-[color:rgba(243,201,121,0.08)] text-[var(--color-primary)] sm:size-11">
            <ShieldAlert size={25} strokeWidth={1.45} />
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold tracking-[-0.02em] text-[var(--color-primary-soft)] sm:text-base">
            Important Note on Memberships
          </h2>

          <ul className="mt-1.5 grid gap-1 text-[11px] leading-4 text-[var(--color-text-soft)] sm:text-xs sm:leading-[1.15rem]">
            <li className="flex gap-1.5">
              <span className="mt-1.5 size-1 shrink-0 rounded-full bg-[var(--color-primary)]" />
              <span>One-time packages and holiday bookings are subject to this refund policy.</span>
            </li>

            <li className="flex gap-1.5">
              <span className="mt-1.5 size-1 shrink-0 rounded-full bg-[var(--color-primary)]" />
              <span>
                Membership and ownership or any special offer prices are{" "}
                <strong className="text-[var(--color-primary)]">
                  strictly non-refundable
                </strong>{" "}
                once paid.
              </span>
            </li>

            <li className="flex gap-1.5">
              <span className="mt-1.5 size-1 shrink-0 rounded-full bg-[var(--color-primary)]" />
              <span>
                Membership funds can only be utilized through provided holiday
                and leisure facilities.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
}

function SnapshotCard() {
  return (
    <aside className="rounded-xl border border-[color:var(--color-primary)]/22 bg-[var(--color-surface)] p-3 shadow-[var(--shadow-card)] backdrop-blur-xl">
      <div className="text-center">
        <div className="mx-auto grid size-10 place-items-center rounded-full border border-[color:var(--color-primary)]/24 bg-[color:rgba(243,201,121,0.08)] text-[var(--color-primary)]">
          <FileText size={20} strokeWidth={1.45} />
        </div>

        <h2 className="mt-2 text-base font-semibold tracking-[-0.035em] text-[var(--color-primary-soft)]">
          Quick Policy Snapshot
        </h2>
      </div>

      <div className="mt-3 grid gap-0.5">
        {snapshotItems.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="flex items-center gap-2.5 border-b border-[color:var(--color-border-soft)] py-2.5 last:border-b-0"
            >
              <div className="grid size-8 shrink-0 place-items-center rounded-full border border-[color:var(--color-primary)]/18 bg-black/24 text-[var(--color-primary)]">
                <Icon size={17} strokeWidth={1.45} />
              </div>

              <p className="text-[11px] font-medium leading-4 text-[var(--color-text-soft)] sm:text-xs">
                {item.title}
              </p>
            </div>
          );
        })}
      </div>
    </aside>
  );
}

function CommitmentCard() {
  return (
    <aside className="relative overflow-hidden rounded-xl border border-[color:var(--color-primary)]/20 bg-[var(--color-surface)] p-3 text-center shadow-[var(--shadow-card)] backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.045),transparent_42%,rgba(243,201,121,0.035))]" />

      <div className="relative">
        <div className="mx-auto grid size-10 place-items-center rounded-full border border-[color:var(--color-primary)]/22 bg-[color:rgba(243,201,121,0.07)] text-[var(--color-primary)]">
          <Sparkles size={20} />
        </div>

        <p className="mt-3 text-[11px] leading-5 text-[var(--color-text-soft)] sm:text-xs">
          Transparent policies and exceptional travel experiences you can trust.
        </p>
      </div>
    </aside>
  );
}

function ContactCard() {
  return (
    <aside className="rounded-xl border border-[color:var(--color-primary)]/22 bg-[var(--color-surface)] p-3 shadow-[var(--shadow-card)] backdrop-blur-xl">
      <h2 className="text-center text-base font-semibold tracking-[-0.035em] text-[var(--color-primary-soft)]">
        Contact Us
      </h2>

      <p className="mt-1 text-center text-[11px] leading-4 text-[var(--color-text-muted)]">
        Need help? Our concierge team is here for you.
      </p>

      <div className="mt-3 grid gap-2">
        {contactItems.map((item) => {
          const Icon = item.icon;

          return (
            <a
              key={item.title}
              href={item.href}
              className="group flex items-center gap-2.5 rounded-lg border border-[color:var(--color-border)] bg-black/18 p-2.5 transition hover:border-[color:var(--color-primary)]/45 hover:bg-[color:rgba(243,201,121,0.06)]"
            >
              <div className="grid size-8 shrink-0 place-items-center rounded-lg border border-[color:var(--color-primary)]/18 bg-[color:rgba(243,201,121,0.06)] text-[var(--color-primary)]">
                <Icon size={17} />
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="text-[11px] font-semibold text-[var(--color-text)] sm:text-xs">
                  {item.title}
                </h3>
                <p className="mt-0.5 truncate text-[10px] text-[var(--color-text-muted)]">
                  {item.description}
                </p>
              </div>

              <ArrowRight
                size={13}
                className="text-[var(--color-primary)] transition group-hover:translate-x-1"
              />
            </a>
          );
        })}
      </div>

      <div className="mt-3 flex items-center gap-2 border-t border-[color:var(--color-border-soft)] pt-2.5 text-[10px] text-[var(--color-text-muted)]">
        <ShieldCheck size={13} className="text-[var(--color-primary)]" />
        Terms and conditions apply.
      </div>
    </aside>
  );
}