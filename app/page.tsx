import { Header } from "./components/Header";
import { Footer } from "./components/Footer/Footer";
import { HeroSection } from "./sections/HeroSection";
import { SkillsMarquee } from "./sections/SkillsMarquee";

import { AboutSection } from "./sections/AboutSection";
import { ServicesSection } from "./sections/ServicesSection";
import { CertificationsSection } from "./sections/CertificationsSection";
import { ContactSection } from "./sections/ContactSection";
import { WorkSections } from "@/app/components/work/WorkSections";

import { getAllCaseStudies } from "./lib/caseStudies";
import { getAllSelectedWorks } from "@/app/lib/selectedWorks";
export default function Home() {
  const caseStudies = getAllCaseStudies();
  console.log("Loaded case studies:", caseStudies);
  const selectedWorks = getAllSelectedWorks();
  console.log("Loaded selected works:", selectedWorks);
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <SkillsMarquee />

        <WorkSections caseStudies={caseStudies} selectedWorks={selectedWorks} />
        <AboutSection />
        <ServicesSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
