
import { useEffect } from "react";
import { updateSeo } from "../utils/seo";

import { AITravelAssistant } from "../components/AITravelAssistant";
import { Destinations } from "../components/Destinations";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Partners } from "../components/Partners";
import { Services } from "../components/Services";
import { Testimonials } from "../components/Testimonials";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { MembershipPreview } from "../components/MembershipPreview";

type HomePageProps = {
  onOpenAIChat: () => void;
};

export function HomePage({ onOpenAIChat }: HomePageProps) {

  useEffect(() => {
    updateSeo({
      title: "Dia-festivo | Premium Travel Planner",
      description:
        "Plan premium holidays with Traveluxe. Explore luxury destinations, hotels, flights, AI trip planning, and personalized travel experiences.",
      });
  }, []);


  return (
    <>
      <Header onOpenAIChat={onOpenAIChat} />

      <main>
        <Hero />
        <Services />
        <MembershipPreview />
        <Destinations />
        <AITravelAssistant onOpenAIChat={onOpenAIChat} />
        <WhyChooseUs />
        <Partners />
        <Testimonials />
      </main>

      <Footer />
    </>
  );
}