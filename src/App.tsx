import { lazy, Suspense, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router";
import { scrollToSectionById } from "./utils/scrollToSection";
import { NotFoundPage } from "./pages/NotFoundPage";

const HomePage = lazy(() =>
  import("./pages/HomePage").then((module) => ({
    default: module.HomePage,
  }))
);

const AllDestinationsPage = lazy(() =>
  import("./pages/AllDestinationsPage").then((module) => ({
    default: module.AllDestinationsPage,
  }))
);

const DestinationDetailPage = lazy(() =>
  import("./pages/DestinationDetailPage").then((module) => ({
    default: module.DestinationDetailPage,
  }))
);

const MembershipPage = lazy(() =>
  import("./pages/MembershipPage").then((module) => ({
    default: module.MembershipPage,
  }))
);

const EmployeeLoginPage = lazy(() =>
  import("./pages/EmployeeLoginPage").then((module) => ({
    default: module.EmployeeLoginPage,
  }))
);

const RefundPolicyPage = lazy(() =>
  import("./pages/RefundPolicyPage").then((module) => ({
    default: module.RefundPolicyPage,
  }))
);

const AboutUsPage = lazy(() =>
  import("./pages/AboutUsPage").then((module) => ({
    default: module.AboutUsPage,
  }))
);

const AIChatModal = lazy(() =>
  import("./components/AIChatModal").then((module) => ({
    default: module.AIChatModal,
  }))
);

function App() {
  const [isAIChatOpen, setIsAIChatOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/") {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      });
      return;
    }

    if (!location.hash) {
      return;
    }

    const id = location.hash.replace("#", "");

    const timer = window.setTimeout(() => {
      scrollToSectionById(id);
    }, 120);

    return () => window.clearTimeout(timer);
  }, [location.pathname, location.hash]);

  function openAIChat() {
    setIsAIChatOpen(true);
  }

  function closeAIChat() {
    setIsAIChatOpen(false);
  }

  return (
    <>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<HomePage onOpenAIChat={openAIChat} />} />

          <Route
            path="/destinations"
            element={<AllDestinationsPage onOpenAIChat={openAIChat} />}
          />

          <Route
            path="/destinations/:slug"
            element={<DestinationDetailPage onOpenAIChat={openAIChat} />}
          />

          <Route path="/membership" element={<MembershipPage />} />

          <Route path="/employee-login" element={<EmployeeLoginPage />} />

          <Route path="/refund-policy" element={<RefundPolicyPage />} />

          <Route path="/about-us" element={<AboutUsPage />} />

          <Route path="*" element={<NotFoundPage onOpenAIChat={openAIChat} />} />
        </Routes>
      </Suspense>

      {isAIChatOpen && (
        <Suspense fallback={null}>
          <AIChatModal isOpen={isAIChatOpen} onClose={closeAIChat} />
        </Suspense>
      )}
    </>
  );
}

function PageLoader() {
  return (
    <main className="grid min-h-screen place-items-center bg-[var(--color-bg)] px-6 text-[var(--color-text)]">
      <div className="text-center">
        <div className="mx-auto size-12 animate-spin rounded-full border border-[color:var(--color-border)] border-t-[var(--color-primary)]" />

        <p className="mt-5 text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-primary)]">
          Loading
        </p>

        <p className="mt-2 text-sm text-[var(--color-text-muted)]">
          Preparing your travel experience...
        </p>
      </div>
    </main>
  );
}

export default App;