import { Header } from "./components/Header";
import { Footer } from "./components/Footer/Footer";
import { HeroSection } from "./sections/HeroSection";
import { SkillsMarquee } from "./sections/SkillsMarquee";

import { AboutSection } from "./sections/AboutSection";
import { ServicesSection } from "./sections/ServicesSection";
import { CertificationsSection } from "./sections/CertificationsSection";
import { ContactSection } from "./sections/ContactSection";
import { WorkSections } from "@/app/components/work/WorkSections";
import { BlogSection } from "@/app/components/blog/BlogSection"
import { getAllCaseStudies } from "./lib/caseStudies";
import { getAllSelectedWorks } from "@/app/lib/selectedWorks";
import { getAllBlogs } from "@/app/lib/blogs";
import { getAllWriteUps } from "@/app/lib/writeUps"
export default function Home() {
  const caseStudies = getAllCaseStudies();
  const blogs = getAllBlogs();
  const selectedWorks = getAllSelectedWorks();
  const writeups = getAllWriteUps();
  
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <SkillsMarquee />

        <WorkSections writeups={writeups} caseStudies={caseStudies} selectedWorks={selectedWorks} />
        <AboutSection />
        <ServicesSection />
        <CertificationsSection />
        <BlogSection blogs={blogs}  />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
