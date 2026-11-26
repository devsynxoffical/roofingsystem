import type { Metadata } from "next";
import { pageMeta, JsonLd, faqSchema } from "../lib/seo";
import { Hero } from "../components/Hero";
import { ScrollMorphHero } from "../components/ScrollMorphHero";
import { BenefitsSection } from "../components/BenefitsSection";
import { RoofingPortfolio } from "../components/RoofingPortfolio";
import { CaseStudiesShowcase } from "../components/sections/CaseStudiesShowcase";
import { InteractiveImageAccordion } from "../components/ui/interactive-image-accordion";
import { PipelineMotion } from "../components/PipelineMotion";
import { TrainingVideos } from "../components/TrainingVideos";
import { MastermindVideo } from "../components/MastermindVideo";
import { FaqSection } from "../components/FaqSection";
import { Process } from "../components/sections/Process";
import { Guarantee } from "../components/sections/Guarantee";
import { Footer } from "../components/Footer";
import { RoofingLeadsSection } from "../components/sections/RoofingLeadsSection";

export const metadata: Metadata = pageMeta({
  title: "Roofing Marketing Agency for Roofers: SEO and Facebook Ads",
  description:
    "Roofing marketing agency for roofers: roofing SEO, Facebook ads for roofing companies and digital marketing in one system you own, with published results.",
  path: "/",
});

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-base">
      <JsonLd data={faqSchema} />
      <main>
        <Hero />
        <ScrollMorphHero />
        <BenefitsSection />
        <RoofingPortfolio />
        <MastermindVideo />
        <CaseStudiesShowcase />
        <RoofingLeadsSection />
        <InteractiveImageAccordion />
        <Process />
        <PipelineMotion />
        
        {/* Animated sections from commit be441ff */}
        <TrainingVideos />
        <Guarantee />
        <FaqSection
          title={
            <>
              Roofing marketing agency <span className="text-gradient-animated">questions, answered.</span>
            </>
          }
        />
      </main>
      <Footer />
    </div>
  );
}

