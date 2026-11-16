import type { Metadata } from "next";
import { pageMeta, JsonLd, faqSchema } from "../lib/seo";
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
import { UFSquareMarquee } from "../components/UFSquareMarquee";
import { TrustBar } from "../components/sections/TrustBar";
import { Process } from "../components/sections/Process";
import { WhyScale } from "../components/sections/WhyScale";
import { Guarantee } from "../components/sections/Guarantee";
import { FinalCTA } from "../components/sections/FinalCTA";
import { Reviews } from "../components/Reviews";
import { Footer } from "../components/Footer";

export const metadata: Metadata = pageMeta({
  title: "Roofing Marketing System for $1M+ Roofers | Roofing Systems Co.",
  description:
    "Done-for-you roofing client acquisition: Meta ads, landing pages, CRM and AI follow-up that book qualified homeowners. Built for $1M+ roofers. Backed in writing.",
  path: "/",
});

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-base">
      <JsonLd data={faqSchema} />
      <main>
        <Hero />
        <ScrollMorphHero />
        <WhyScale />
        <BenefitsSection />
        <RoofingPortfolio />
        <Results />
        <Reviews />
        <InteractiveImageAccordion />
        <Process />
        <PipelineMotion />
        
        {/* Animated sections from commit be441ff */}
        <TrainingVideos />
        <Guarantee />
        <FaqSection />
        <UFSquareMarquee />
        <FinalCTA />
        <TrustBar />
        <StatsBand />
      </main>
      <Footer />
    </div>
  );
}

