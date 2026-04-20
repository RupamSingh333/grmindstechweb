import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
// import ParticleBackground from '@/components/ParticleBackground';
import Team from '@/components/Teams';
import Career from '@/components/Careers';


const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* <ParticleBackground /> */}
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="team">
        <Team />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <div className="careers">
        <Career />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
