


import { Route, Routes, useLocation } from "react-router";
import { useEffect, useState } from "react";
import { scrollToSectionById } from "./utils/scrollToSection";

import { AIChatModal } from "./components/AIChatModal";
import { DestinationDetailPage } from "./pages/DestinationDetailPage";
import { HomePage } from "./pages/HomePage";
import { AllDestinationsPage } from "./pages/AllDestinationsPage";



function App() {
  const [isAIChatOpen, setIsAIChatOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/") {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
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
      <Routes>
        <Route path="/" element={<HomePage onOpenAIChat={openAIChat} />} />

        <Route 
          path="/destinations"
          element={<AllDestinationsPage onOpenAIChat={openAIChat} />} />

        <Route
          path="/destinations/:slug"
          element={<DestinationDetailPage onOpenAIChat={openAIChat} />}
        />
      </Routes>

      <AIChatModal isOpen={isAIChatOpen} onClose={closeAIChat} />
    </>
  );
}


export default App;