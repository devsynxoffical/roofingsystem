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
import { UFSquareMarquee } from "../components/UFSquareMarquee";
import { TrustBar } from "../components/sections/TrustBar";
import { Process } from "../components/sections/Process";
import { Guarantee } from "../components/sections/Guarantee";
import { Footer } from "../components/Footer";
import { RoofingLeadsSection } from "../components/sections/RoofingLeadsSection";

export const metadata: Metadata = pageMeta({
  title: "Exclusive Roofing Leads That Book Inspections",
  description:
    "Exclusive roofing leads from campaigns you own. Verified homeowners, booked inspections and real results like 1,480 leads at $4.77. Get your plan.",
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
        <FaqSection />
        <UFSquareMarquee />
        <TrustBar />
      </main>
      <Footer />
    </div>
  );
}

