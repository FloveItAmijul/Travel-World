import { AITravelAssistant } from "./components/AITravelAssistant";
import { Destinations } from "./components/Destinations";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Partners } from "./components/Partners";
import { Services } from "./components/Services";
import { Testimonials } from "./components/Testimonials";
import { WhyChooseUs } from "./components/WhyChooseUs";


function App() {
  return (
    <>
      <Header />

      <main>
        
        <Hero />
        
        <Services />
        <Destinations />
        <AITravelAssistant />
        <WhyChooseUs />
        <Partners />
        <Testimonials />
      </main>

      <Footer />
    </>
  );
}

export default App;