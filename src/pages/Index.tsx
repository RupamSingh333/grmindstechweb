import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import Team from '@/components/Teams';
import TechStack from '@/components/TechnologiesWeUse';
import ElectricSDLC from '@/components/SDLCFlow';
import AntigravityWrapper from '@/components/AntigravityWrapper';

const Index = () => {
  return (
    <div className="min-h-screen relative bg-white dark:bg-[#030712] selection:bg-cyan-500/30">
      <ParticleBackground />
      <Navbar />
      
      <main className="relative">
        <div id="home">
          <Hero />
        </div>
        
        <div id="services" className="relative z-10">
          <Services />
        </div>
        
        <div id="technologies" className="relative z-10 py-20">
          <AntigravityWrapper parallaxStrength={40}>
            <TechStack />
          </AntigravityWrapper>
        </div>
        
        <div id="sdlc" className="relative z-10">
          <ElectricSDLC />
        </div>
        
        <div id="about" className="relative z-10">
          <About />
        </div>
        
        <div id="team" className="relative z-10">
          <Team />
        </div>
        
        <div id="contact" className="relative z-10">
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
