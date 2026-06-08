import {
  ArrowRight,
  Compass,
  Home,

  Plane,

  Sparkles,
} from "lucide-react";
import { Link } from "react-router";
import { useEffect } from "react";
import { updateSeo } from "../utils/seo";


type NotFoundPageProps = {
  onOpenAIChat: () => void;
};




export function NotFoundPage({ onOpenAIChat }: NotFoundPageProps) {

  useEffect(() => {
  updateSeo({
    title: "Page Not Found | DIA FESTIVO",
    description:
      "The page you are looking for could not be found. Return to DIA FESTIVO and explore premium travel experiences and destinations.",
    canonicalPath: window.location.pathname,
  });
}, []);


  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--color-bg)] text-[var(--color-text)]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,4,10,0.72)_0%,rgba(2,4,10,0.9)_52%,rgba(2,4,10,1)_100%)]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(243,201,121,0.13),transparent_28%),radial-gradient(circle_at_82%_20%,rgba(224,247,255,0.1),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(243,201,121,0.08),transparent_34%)]" />

        <div className="absolute left-[-8rem] top-[22%] size-[28rem] rounded-full border border-[color:var(--color-primary)]/10" />
        <div className="absolute right-[-9rem] top-[12%] size-[34rem] rounded-full border border-[color:var(--color-secondary)]/10" />

        <div className="absolute bottom-0 left-0 h-[38vh] w-full bg-[linear-gradient(180deg,transparent,rgba(3,8,18,0.82))]" />

        <div className="absolute bottom-20 left-[4%] h-28 w-[42%] rounded-[100%] bg-[radial-gradient(circle_at_center,rgba(243,201,121,0.16),transparent_72%)] blur-2xl" />
      </div>

      <section className="relative z-10 flex min-h-screen flex-col">
        

        <div className="mx-auto grid w-[min(100%-28px,1420px)] flex-1 place-items-center py-10">
          <div className="max-w-5xl text-center">
            <div className="relative mx-auto inline-flex">
              <h1 className="bg-[image:var(--gradient-primary)] bg-clip-text text-[clamp(7rem,22vw,17rem)] font-serif leading-none tracking-[-0.08em] text-transparent drop-shadow-[0_22px_80px_rgba(243,201,121,0.16)]">
                404
              </h1>

              <Plane className="absolute -right-8 top-10 hidden rotate-12 text-[var(--color-primary)] drop-shadow-[0_0_28px_rgba(243,201,121,0.35)] sm:block" size={54} />
            </div>

            <p className="mt-2 text-[clamp(1.25rem,4vw,2.35rem)] font-semibold uppercase tracking-[0.28em] text-white">
              Oops! Page Not Found
            </p>

            <div className="mx-auto mt-5 flex max-w-xs items-center justify-center gap-4">
              <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[var(--color-primary)]" />
              <Plane size={22} className="text-[var(--color-primary)]" />
              <span className="h-px flex-1 bg-gradient-to-r from-[var(--color-primary)] to-transparent" />
            </div>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[var(--color-text-soft)] sm:text-lg">
              Looks like you’ve taken a wrong turn. The destination you’re looking
              for does not exist, but your next journey is still waiting.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-[image:var(--gradient-primary)] px-7 py-4 text-sm font-semibold text-[#140d04] shadow-[var(--shadow-primary)] transition hover:-translate-y-1 sm:w-auto"
              >
                <Home size={18} />
                Go To Home
                <ArrowRight size={17} className="transition group-hover:translate-x-1" />
              </Link>

              <Link
                to="/destinations"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-2xl border border-[color:var(--color-primary)]/30 bg-[var(--color-surface)] px-7 py-4 text-sm font-semibold text-[var(--color-primary-soft)] shadow-[var(--shadow-card)] backdrop-blur-xl transition hover:-translate-y-1 hover:bg-[color:rgba(243,201,121,0.08)] sm:w-auto"
              >
                <Compass size={18} />
                Explore Destinations
                <ArrowRight size={17} className="transition group-hover:translate-x-1" />
              </Link>
            </div>

            <button
              type="button"
              onClick={onOpenAIChat}
              className="group mx-auto mt-8 flex max-w-md items-center justify-center gap-4 rounded-[1.7rem] border border-[color:var(--color-border)] bg-black/24 px-5 py-4 text-left shadow-[var(--shadow-card)] backdrop-blur-2xl transition hover:border-[color:var(--color-primary)]/35 hover:bg-[color:rgba(243,201,121,0.06)]"
            >
              <span className="grid size-13 shrink-0 place-items-center rounded-2xl border border-[color:var(--color-primary)]/25 bg-[color:rgba(243,201,121,0.09)] text-[var(--color-primary)]">
                <Sparkles size={24} />
              </span>

              <span>
                <span className="block text-sm font-semibold text-white sm:text-base">
                  Need help planning your perfect trip?
                </span>
                <span className="mt-1 flex items-center gap-2 text-sm text-[var(--color-primary)]">
                  Ask our AI Travel Planner
                  <ArrowRight size={15} className="transition group-hover:translate-x-1" />
                </span>
              </span>
            </button>
          </div>
        </div>

       
      </section>
    </main>
  );
}

