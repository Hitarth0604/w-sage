import { useState, useEffect } from 'react';
import { TerminalPreloader } from './components/TerminalPreloader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatementSection } from './components/StatementSection';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { CaseStudyModal } from './components/CaseStudyModal';
import { WhyWsage } from './components/WhyWsage';
import { Process } from './components/Process';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { CTASection } from './components/CTASection';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { NoiseOverlay } from './components/NoiseOverlay';
import { type Project } from './data/agencyData';

export function App() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);

  const handleOpenContact = (serviceName?: string) => {
    if (serviceName) {
      setPreselectedService(serviceName);
    }
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreWork = () => {
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-canvas text-text-primary min-h-screen selection:bg-accent selection:text-black">
      {/* Terminal Boot Preloader */}
      {showPreloader && <TerminalPreloader onComplete={() => setShowPreloader(false)} />}

      {/* Background Film Grain Overlay */}
      <NoiseOverlay />

      {/* Desktop Custom Tracking Cursor */}
      <CustomCursor />

      {/* Sticky Editorial Navigation */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* Main Content Layout */}
      <main>
        {/* 01 // HERO */}
        <Hero
          onOpenContact={() => handleOpenContact()}
          onExploreWork={handleExploreWork}
        />

        {/* 02 // MANIFESTO & INTRO STATEMENT */}
        <StatementSection />

        {/* 03 // SERVICES */}
        <Services onSelectService={(srv) => handleOpenContact(srv)} />

        {/* 04 // SELECTED WORK / PORTFOLIO */}
        <Portfolio onSelectProject={(p) => setSelectedProject(p)} />

        {/* 05 // WHY WSAGE (5 PRINCIPLES) */}
        <WhyWsage onStartProject={() => handleOpenContact()} />

        {/* 06 // PROCESS TIMELINE (DISCOVER TO DELIVER) */}
        <Process />

        {/* 07 // ABOUT STUDIO */}
        <About onStartProject={() => handleOpenContact()} />

        {/* 08 // TESTIMONIALS */}
        <Testimonials />

        {/* 09 // DRAMATIC CTA */}
        <CTASection
          onStartProject={() => handleOpenContact()}
          onExploreWork={handleExploreWork}
        />

        {/* 10 // PROJECT INQUIRY CONTACT FORM */}
        <ContactForm preselectedService={preselectedService} />
      </main>

      {/* 11 // FOOTER */}
      <Footer />

      {/* Case Study Full-Screen Experience */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(p) => setSelectedProject(p)}
        onStartProject={(service) => handleOpenContact(service)}
      />
    </div>
  );
}

export default App;
