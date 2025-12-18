import React, {useEffect} from "react";
import { ThemeToggle } from "/components/ThemeToggle";
import { StarBackground } from "/components/StarBackground";
import { NavBar } from "/components/NavBar";
import { HeroSection } from "/components/HeroSection";
import { AboutSection } from "/components/AboutSection";
import { SkillsSection } from "../../components/SkillsSection";
import { ProjectsSection } from "../../components/ProjectsSection";
import { ContactSection } from "../../components/ContactSection";
import { Footer } from "/components/Footer";


export const Home = () => {

  useEffect(() => {
    document.title = 'George Jereos - Portfolio';
  }, []) //Empty array dependency to run only once on mount
  
  return (
    <div className= "min-h-screen bg-background text-foreground overflow-x-hidden">

      <ThemeToggle />

      <StarBackground />

      <NavBar />

      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>

    
  );
}

export default Home;