import {
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  Crown,
  Diamond,
  Eye,
  Headphones,
  Lock,
  Mail,
  ShieldCheck,
  Sparkles,
  UserRound,
} from "lucide-react";
import { Link } from "react-router";

const accessFeatures = [
  {
    title: "Secure Account Access",
    description: "Your data is protected with enterprise-grade security.",
    icon: ShieldCheck,
  },
  {
    title: "Membership Dashboard",
    description: "View bookings, preferences, and member benefits.",
    icon: UserRound,
  },
  {
    title: "Personalized Travel Services",
    description: "Curated support tailored for premium travel operations.",
    icon: Diamond,
  },
];

export function EmployeeLoginPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black px-3 py-4 text-[var(--color-text)] sm:px-5 sm:py-5 lg:px-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(243,201,121,0.13),transparent_26%),radial-gradient(circle_at_82%_22%,rgba(224,247,255,0.08),transparent_24%),linear-gradient(135deg,#020711_0%,#03040a_45%,#000_100%)]" />

        <div className="absolute -left-[24rem] top-[-12rem] size-[52rem] rounded-full border border-[color:var(--color-primary)]/18" />
        <div className="absolute -left-[18rem] top-[-7rem] size-[40rem] rounded-full border border-[color:var(--color-primary)]/10" />

        <div className="absolute -right-[18rem] bottom-[-16rem] size-[44rem] rounded-full border border-[color:var(--color-primary)]/18" />
        <div className="absolute right-[-4rem] bottom-[5rem] h-px w-[34rem] rotate-[-32deg] bg-gradient-to-r from-transparent via-[var(--color-primary)]/65 to-transparent" />

        <div className="absolute left-0 bottom-0 h-72 w-[520px] bg-[radial-gradient(circle_at_0%_100%,rgba(243,201,121,0.18),transparent_42%)] blur-2xl" />
        <div className="absolute right-0 top-0 h-72 w-[520px] bg-[radial-gradient(circle_at_100%_0%,rgba(224,247,255,0.09),transparent_42%)] blur-2xl" />

        <div className="absolute right-[8%] top-[18%] hidden size-36 rounded-full bg-[radial-gradient(circle,rgba(243,201,121,0.22)_1px,transparent_1px)] [background-size:14px_14px] opacity-35 md:block" />
        <div className="absolute left-[4%] bottom-[8%] hidden size-32 rounded-full bg-[radial-gradient(circle,rgba(243,201,121,0.18)_1px,transparent_1px)] [background-size:13px_13px] opacity-35 md:block" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-32px)] w-[min(100%,1380px)] flex-col sm:min-h-[calc(100vh-40px)]">
        <header className="flex shrink-0 items-center justify-between gap-3">
          <Link
            to="/"
            className="group inline-flex items-center gap-2 rounded-full border border-[color:var(--color-primary)]/20 bg-[color:rgba(243,201,121,0.06)] px-2.5 py-2 text-[var(--color-text)] backdrop-blur-xl transition hover:border-[color:var(--color-primary)]/45 hover:bg-[color:rgba(243,201,121,0.1)] sm:gap-3 sm:px-3"
          >
            <span className="grid size-8 place-items-center rounded-full border border-[color:var(--color-primary)]/25 text-[var(--color-primary)]">
              <ArrowLeft size={16} className="transition group-hover:-translate-x-1" />
            </span>

            <span className="hidden text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-primary-soft)] sm:inline md:text-xs md:tracking-[0.22em]">
              Back to Website
            </span>
          </Link>

          <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-primary)]/20 bg-[color:rgba(243,201,121,0.06)] px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-[var(--color-primary)] backdrop-blur-xl sm:px-4 sm:text-xs sm:tracking-[0.24em]">
            <Sparkles size={13} className="sm:size-[14px]" />
            Secure Portal
          </div>
        </header>

        <section className="grid flex-1 items-center gap-5 py-5 md:grid-cols-[0.42fr_0.58fr] md:gap-6 md:py-7 lg:gap-10 lg:py-8 xl:gap-20 xl:py-10">
          <div className="relative">
            <div className="mb-4 text-center md:mb-6 md:text-left lg:mb-8">
              <div className="mx-auto mb-3 grid size-14 place-items-center rounded-full border border-[color:var(--color-primary)]/30 bg-[color:rgba(243,201,121,0.08)] text-[var(--color-primary)] shadow-[var(--shadow-primary)] sm:size-16 md:mx-0 lg:mb-5 lg:size-20">
                <Crown size={28} strokeWidth={1.35} className="sm:size-[32px] lg:size-[38px]" />
              </div>

              <h1 className="text-[clamp(2.3rem,9vw,5.7rem)] font-semibold leading-[0.9] tracking-[-0.075em] text-[var(--color-text)]">
                Welcome{" "}
                <span className="bg-[image:var(--gradient-primary)] bg-clip-text text-transparent">
                  Back
                </span>
              </h1>

              <p className="mx-auto mt-3 max-w-md text-xs leading-6 text-[var(--color-text-soft)] sm:text-sm sm:leading-7 md:mx-0 lg:mt-5 lg:text-base">
                Sign in to your account and continue your journey of exceptional
                travel experiences.
              </p>
            </div>

            <div className="mx-auto max-w-xl md:mx-0">
              <div className="space-y-3 sm:space-y-4 lg:space-y-5">
                {accessFeatures.map((feature) => {
                  const Icon = feature.icon;

                  return (
                    <div key={feature.title} className="grid grid-cols-[auto_1fr] gap-3 sm:gap-4">
                      <div className="grid size-11 place-items-center rounded-xl border border-[color:var(--color-primary)]/18 bg-[var(--color-surface)] text-[var(--color-primary)] shadow-[0_18px_60px_rgba(0,0,0,0.28)] sm:size-12 sm:rounded-2xl lg:size-14">
                        <Icon size={21} strokeWidth={1.55} className="lg:size-[25px]" />
                      </div>

                      <div className="border-b border-[color:var(--color-border-soft)] pb-3 sm:pb-4 lg:pb-5">
                        <h3 className="text-sm font-semibold tracking-[-0.035em] text-[var(--color-primary-soft)] sm:text-base lg:text-lg">
                          {feature.title}
                        </h3>
                        <p className="mt-1 text-xs leading-5 text-[var(--color-text-muted)] sm:text-sm sm:leading-6">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 overflow-hidden rounded-[1.1rem] border border-[color:var(--color-border)] bg-[var(--color-surface)] p-3 backdrop-blur-xl sm:mt-6 sm:rounded-[1.3rem] sm:p-4 lg:mt-8">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="grid size-10 shrink-0 place-items-center rounded-full border border-[color:var(--color-primary)]/25 bg-[color:rgba(243,201,121,0.08)] text-[var(--color-primary)] sm:size-12">
                    <Sparkles size={19} className="sm:size-[22px]" />
                  </div>

                  <div>
                    <p className="text-xs leading-5 text-[var(--color-text-soft)] sm:text-sm">
                      Trusted internal access for authorized team members.
                    </p>
                    <p className="mt-0.5 text-xs font-semibold text-[var(--color-primary)] sm:mt-1 sm:text-sm">
                      Premium service. Protected operations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="mx-auto max-w-[650px] overflow-hidden rounded-[1.35rem] border border-[color:var(--color-primary)]/22 bg-[var(--color-glass)] p-3 shadow-[0_40px_150px_rgba(0,0,0,0.72)] backdrop-blur-2xl sm:rounded-[1.6rem] sm:p-4 md:p-5 lg:rounded-[2rem] lg:p-6 xl:mr-28 2xl:mr-40">
              <div className="pointer-events-none absolute inset-0 rounded-[2rem]">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.09),transparent_36%,rgba(243,201,121,0.055))]" />
                <div className="absolute -right-20 -top-20 size-72 rounded-full bg-[color:var(--color-primary)]/10 blur-3xl" />
                <div className="absolute -left-20 bottom-0 size-60 rounded-full bg-[color:var(--color-secondary)]/7 blur-3xl" />
                <div className="absolute left-1/2 top-0 h-px w-64 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/70 to-transparent" />
                <div className="absolute right-0 top-[46%] h-24 w-px bg-gradient-to-b from-transparent via-[var(--color-primary)]/80 to-transparent" />
              </div>

              <div className="relative z-10">
                <div className="grid grid-cols-2 overflow-hidden rounded-xl border border-[color:var(--color-border)] bg-black/18 p-1 sm:rounded-2xl">
                  <button
                    type="button"
                    className="relative flex items-center justify-center gap-1.5 rounded-lg border border-[color:var(--color-primary)]/26 bg-[color:rgba(243,201,121,0.08)] px-2 py-3 text-[11px] font-semibold text-[var(--color-primary)] shadow-[var(--shadow-primary)] sm:gap-2 sm:rounded-xl sm:px-4 sm:py-4 sm:text-sm"
                  >
                    <BriefcaseBusiness size={15} className="sm:size-[18px]" />
                    Employee
                  </button>

                  <button
                    type="button"
                    className="flex items-center justify-center gap-1.5 rounded-lg px-2 py-3 text-[11px] font-semibold text-[var(--color-text-muted)] transition hover:text-[var(--color-text)] sm:gap-2 sm:rounded-xl sm:px-4 sm:py-4 sm:text-sm"
                  >
                    <UserRound size={15} className="sm:size-[18px]" />
                    Member
                  </button>
                </div>

                <div className="mt-5 text-center sm:mt-6 lg:mt-8">
                  <h2 className="text-[clamp(1.8rem,7vw,3.5rem)] font-semibold tracking-[-0.065em] text-[var(--color-text)]">
                    Employee Login
                  </h2>

                  <div className="mx-auto mt-3 flex max-w-xs items-center justify-center gap-3 sm:mt-4">
                    <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[var(--color-primary)]/60" />
                    <Sparkles size={14} className="text-[var(--color-primary)]" />
                    <span className="h-px flex-1 bg-gradient-to-r from-[var(--color-primary)]/60 to-transparent" />
                  </div>

                  <p className="mx-auto mt-3 max-w-sm text-xs leading-5 text-[var(--color-text-muted)] sm:mt-4 sm:text-sm">
                    Secure access for internal team members.
                  </p>
                </div>

                <form className="mt-5 grid gap-4 sm:mt-6 sm:gap-5 lg:mt-8">
                  <label className="block">
                    <span className="mb-2 block text-xs font-medium text-[var(--color-text)] sm:text-sm">
                      Email / Employee ID
                    </span>

                    <div className="flex items-center gap-3 rounded-xl border border-[color:var(--color-border)] bg-black/20 px-3 py-3.5 focus-within:border-[color:var(--color-primary)]/50 sm:px-4 sm:py-4">
                      <Mail size={19} className="shrink-0 text-[var(--color-text-muted)] sm:size-[21px]" />
                      <input
                        type="text"
                        placeholder="Enter your email or employee ID"
                        className="min-w-0 flex-1 bg-transparent text-xs text-[var(--color-text)] outline-none placeholder:text-[var(--color-text-faint)] sm:text-sm"
                      />
                    </div>
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-xs font-medium text-[var(--color-text)] sm:text-sm">
                      Password
                    </span>

                    <div className="flex items-center gap-3 rounded-xl border border-[color:var(--color-border)] bg-black/20 px-3 py-3.5 focus-within:border-[color:var(--color-primary)]/50 sm:px-4 sm:py-4">
                      <Lock size={19} className="shrink-0 text-[var(--color-text-muted)] sm:size-[21px]" />
                      <input
                        type="password"
                        placeholder="Enter your password"
                        className="min-w-0 flex-1 bg-transparent text-xs text-[var(--color-text)] outline-none placeholder:text-[var(--color-text-faint)] sm:text-sm"
                      />
                      <button
                        type="button"
                        aria-label="Show password"
                        className="text-[var(--color-text-muted)] transition hover:text-[var(--color-primary)]"
                      >
                        <Eye size={18} className="sm:size-[20px]" />
                      </button>
                    </div>
                  </label>

                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <label className="inline-flex items-center gap-2 text-xs text-[var(--color-text-soft)] sm:gap-3 sm:text-sm">
                      <input
                        type="checkbox"
                        className="size-4 rounded border border-[color:var(--color-border)] bg-transparent accent-[var(--color-primary)] sm:size-5"
                      />
                      Remember me
                    </label>

                    <button
                      type="button"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-primary)] transition hover:text-[var(--color-primary-soft)] sm:text-sm"
                    >
                      Forgot password?
                      <ArrowRight size={13} className="sm:size-[14px]" />
                    </button>
                  </div>

                  <button
                    type="submit"
                    className="group mt-1 inline-flex items-center justify-center gap-3 rounded-xl bg-[image:var(--gradient-primary)] px-5 py-3.5 text-xs font-bold text-[#140d04] shadow-[var(--shadow-primary)] transition hover:-translate-y-0.5 sm:mt-2 sm:gap-4 sm:px-7 sm:py-4 sm:text-sm"
                  >
                    Login Securely
                    <ArrowRight
                      size={18}
                      className="transition group-hover:translate-x-1 sm:size-[21px]"
                    />
                  </button>

                  <button
                    type="button"
                    className="inline-flex items-center justify-center gap-3 rounded-xl border border-[color:var(--color-primary)]/30 bg-[color:rgba(243,201,121,0.05)] px-5 py-3.5 text-xs font-semibold text-[var(--color-primary)] transition hover:border-[color:var(--color-primary)]/55 hover:bg-[color:rgba(243,201,121,0.1)] sm:px-7 sm:py-4 sm:text-sm"
                  >
                    <Headphones size={18} className="sm:size-[19px]" />
                    Contact Support
                  </button>
                </form>

                <div className="mt-5 flex items-center gap-4 sm:mt-7">
                  <span className="h-px flex-1 bg-gradient-to-r from-transparent via-white/16 to-transparent" />
                  <ShieldCheck size={18} className="text-[var(--color-primary)]" />
                  <span className="h-px flex-1 bg-gradient-to-r from-transparent via-white/16 to-transparent" />
                </div>

                <p className="mt-3 text-center text-[11px] leading-5 text-[var(--color-text-muted)] sm:mt-4 sm:text-xs sm:leading-6">
                  Your security is our priority. All sign-ins are protected.
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer className="shrink-0 pb-1 text-center sm:pb-2">
          <p className="text-[8px] font-semibold uppercase tracking-[0.26em] text-[var(--color-primary)]/70 sm:text-[10px] sm:tracking-[0.38em]">
            Exclusive journeys. Extraordinary memories.
          </p>
        </footer>
      </div>
    </main>
  );
}