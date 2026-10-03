import { Hero } from "../components/Hero";
import { ScrollMorphHero } from "../components/ScrollMorphHero";
import { BenefitsSection } from "../components/BenefitsSection";
import { RoofingPortfolio } from "../components/RoofingPortfolio";
import { Results } from "../components/sections/Results";
import { InteractiveImageAccordion } from "../components/ui/interactive-image-accordion";
import { StatsBand } from "../components/StatsBand";
import { PipelineMotion } from "../components/PipelineMotion";
import { TrainingVideos } from "../components/TrainingVideos";
import { FaqSection } from "../components/FaqSection";
import { TrustBar } from "../components/sections/TrustBar";
import { Process } from "../components/sections/Process";
import { WhyScale } from "../components/sections/WhyScale";
import { Guarantee } from "../components/sections/Guarantee";
import { FinalCTA } from "../components/sections/FinalCTA";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-base">
      <main>
        <Hero />
        <ScrollMorphHero />
        <WhyScale />
        <BenefitsSection />
        <RoofingPortfolio />
        <Results />
        <InteractiveImageAccordion />
        <Process />
        <PipelineMotion />
        
        {/* Animated sections from commit be441ff */}
        <TrainingVideos />
        <Guarantee />
        <FaqSection />
        <FinalCTA />
        <TrustBar />
        <StatsBand />
      </main>
      <Footer />
    </div>
  );
}

