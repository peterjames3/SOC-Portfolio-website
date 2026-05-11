import { Header } from "./components/Header";
import { Footer } from "./components/Footer/Footer";
import { HeroSection } from "./sections/HeroSection";
import { SkillsMarquee } from "./sections/SkillsMarquee";
import { WorkSection } from "./sections/WorkSection";
import { AboutSection } from "./sections/AboutSection";
import { ServicesSection } from "./sections/ServicesSection";
import { CertificationsSection } from "./sections/CertificationsSection";
import { ContactSection } from "./sections/ContactSection";

import { getAllCaseStudies } from "./lib/caseStudies";
export default function Home() {
  const caseStudies = getAllCaseStudies();
  console.log("Loaded case studies:", caseStudies);
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <SkillsMarquee />
        <WorkSection caseStudies={caseStudies} />
        <AboutSection />
        <ServicesSection />
        <CertificationsSection />
        <ContactSection />
      
      </main>
      <Footer />
    </>
  );
}
