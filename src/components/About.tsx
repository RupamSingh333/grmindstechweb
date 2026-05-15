import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Users, Lightbulb, TrendingUp, Award, Globe, Heart, Rocket, ArrowRight, Brain, Shield, Cpu } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import AntigravityWrapper from './AntigravityWrapper';

const values = [
  { icon: Brain, title: 'AI First', description: 'Embedding intelligence into the core of every solution.', color: 'text-cyan-500' },
  { icon: Target, title: 'Precision', description: 'Excellence in every pixel and neural connection.', color: 'text-blue-500' },
  { icon: Lightbulb, title: 'Invention', description: 'Next-gen tech for modern business problems.', color: 'text-purple-500' },
  { icon: Rocket, title: 'Scale', description: 'Fast iterations with maximum cloud efficiency.', color: 'text-indigo-500' },
];

const stats = [
  { value: '50+', label: 'AI Models', suffix: '' },
  { value: '25+', label: 'Enterprises', suffix: '' },
  { value: '10+', label: 'Core Experts', suffix: '' },
  { value: '8+', label: 'Years Exp.', suffix: '' },
];

const About = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden bg-white dark:bg-[#030712]">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-10 dark:opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* --- LEFT CONTENT: STORY & STATS --- */}
          <div className="relative z-10">
            <ScrollReveal direction="left">
              <motion.div 
                className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-500 text-[10px] font-black uppercase tracking-[0.4em]"
              >
                <Cpu className="w-3 h-3" />
                <span>Our Digital DNA</span>
              </motion.div>
              
              <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-10 text-slate-900 dark:text-white leading-[0.85] italic uppercase">
                Forging <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-indigo-600">The Future</span>
              </h2>

              <div className="space-y-8 text-lg md:text-xl text-slate-600 dark:text-slate-400 font-medium max-w-xl leading-relaxed">
                <p>
                  GR Minds is an elite collective of engineers and dreamers dedicated to <span className="text-cyan-500 font-bold">Autonomizing</span> the world through sophisticated software.
                </p>
                <div className="p-8 rounded-[2rem] bg-slate-50 dark:bg-white/[0.03] border-l-4 border-cyan-500 italic dark:text-slate-300 shadow-2xl">
                  "We bridge the void between raw human vision and high-performance machine execution."
                </div>
              </div>

              {/* Stats Grid */}
              <div ref={containerRef} className="grid grid-cols-2 gap-6 mt-16">
                {stats.map((stat, idx) => (
                  <AntigravityWrapper key={idx} floatRange={[-5, 5]} parallaxStrength={15 + idx * 5}>
                    <div className="p-8 rounded-[2rem] bg-white dark:bg-white/[0.02] border border-slate-100 dark:border-white/5 hover:border-cyan-500/30 transition-all group shadow-xl">
                      <div className="text-4xl font-black text-slate-900 dark:text-white mb-2 group-hover:text-cyan-500 transition-colors tracking-tighter">
                        {stat.value}
                      </div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">
                        {stat.label}
                      </div>
                    </div>
                  </AntigravityWrapper>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* --- RIGHT CONTENT: VALUES MOSAIC --- */}
          <div className="relative">
            <ScrollReveal direction="right">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {values.map((value, index) => (
                  <AntigravityWrapper key={index} floatRange={[-10, 10]} floatDuration={4 + index} parallaxStrength={30 + index * 10}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="p-10 rounded-[3rem] bg-white dark:bg-slate-950/40 border border-slate-200 dark:border-white/5 shadow-2xl backdrop-blur-xl relative overflow-hidden group"
                    >
                      <div className={`absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/5 rounded-full blur-3xl group-hover:bg-cyan-500/10 transition-all duration-700`} />
                      
                      <div className="relative z-10">
                        <div className={`w-16 h-16 rounded-2xl bg-slate-50 dark:bg-white/5 flex items-center justify-center mb-8 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-500`}>
                          <value.icon className={`h-8 w-8`} />
                        </div>
                        <h3 className="text-2xl font-black mb-4 dark:text-white uppercase tracking-tighter italic">{value.title}</h3>
                        <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                          {value.description}
                        </p>
                      </div>
                    </motion.div>
                  </AntigravityWrapper>
                ))}
              </div>
            </ScrollReveal>
          </div>

        </div>

        {/* --- BOTTOM CTA TRAY --- */}
        <ScrollReveal direction="up">
          <div className="mt-32 p-12 md:p-20 rounded-[4rem] bg-slate-950 dark:bg-white relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="max-w-2xl text-center md:text-left">
                <h3 className="text-4xl md:text-6xl font-black text-white dark:text-slate-900 tracking-tighter mb-6 leading-[0.9]">
                  READY TO UPGRADE <br />
                  <span className="text-cyan-500">YOUR REALITY?</span>
                </h3>
                <p className="text-lg text-slate-400 dark:text-slate-600 font-medium">
                  Step into the era of Autonomous Intelligence. Let's build your next digital empire together.
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-6 bg-cyan-500 text-white font-black uppercase tracking-widest text-sm rounded-2xl flex items-center gap-4 shadow-[0_20px_50px_rgba(6,182,212,0.4)]"
              >
                Initiate Project <ArrowRight className="w-6 h-6" />
              </motion.button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default About;