import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Users, Lightbulb, TrendingUp, Award, Globe, Heart, Rocket, ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const values = [
  { icon: Target, title: 'Mission-Driven', description: 'Excellence in every pixel and line of code.', color: 'text-cyan-500' },
  { icon: Users, title: 'Client-Focused', description: 'Your vision is the heart of our development.', color: 'text-blue-500' },
  { icon: Lightbulb, title: 'Innovation', description: 'Next-gen tech for modern business problems.', color: 'text-purple-500' },
  { icon: Rocket, title: 'Agile Approach', description: 'Fast iterations with maximum efficiency.', color: 'text-orange-500' },
];

const stats = [
  { value: '15+', label: 'Projects', suffix: '' },
  { value: '15+', label: 'Happy Clients', suffix: '' },
  { value: '5+', label: 'Team Experts', suffix: '' },
  { value: '7+', label: 'Years Exp.', suffix: '' },
  { value: '200K+', label: 'Code Lines', suffix: '' },
  { value: '10+', label: 'Industries', suffix: '' },
];

const About = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden bg-white dark:bg-[#030712] inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] md:bg-[size:60px_60px] ">
      {/* Background Decorative Blurs */}
      <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* --- LEFT CONTENT: STORY & STATS --- */}
          <div className="relative z-10">
            <ScrollReveal direction="left">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                className="inline-block px-4 py-1.5 mb-6 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-500 text-xs font-bold uppercase tracking-[0.3em]"
              >
                Our Legacy
              </motion.div>
              
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 text-slate-900 dark:text-white leading-[0.9]">
                WE ARE <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600">G.R MINDS</span>
              </h2>

              <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 font-medium max-w-xl">
                <p>
                  At G.R Minds, we don’t just write code—we craft the digital backbone of tomorrow’s industry leaders. Based on a foundation of innovation and integrity.
                </p>
                <p className="border-l-4 border-cyan-500 pl-6 italic dark:text-slate-300">
                  "Our approach combines raw creativity with technical precision to exceed every expectation."
                </p>
              </div>

              {/* Stats Grid with Glass Effect */}
              <div ref={containerRef} className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-12 backdrop-blur-xl">
                {stats.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: idx * 0.1 }}
                    className="p-6 rounded-3xl bg-slate-50 dark:bg-white/[0.03] border border-slate-100 dark:border-white/5 hover:border-cyan-500/30 transition-colors group"
                  >
                    <div className="text-3xl font-black text-slate-900 dark:text-white mb-1 group-hover:text-cyan-500 transition-colors">
                      {stat.value}
                    </div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* --- RIGHT CONTENT: VALUES MOSAIC --- */}
          <div className="relative">
            <ScrollReveal direction="right">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -10, rotate: index % 2 === 0 ? 1 : -1 }}
                    className="p-8 rounded-[40px] bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 shadow-xl shadow-slate-200/50 dark:shadow-none backdrop-blur-xl relative overflow-hidden group"
                  >
                    {/* Decorative Blob */}
                    <div className={`absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-colors`} />
                    
                    <div className="relative z-10">
                      <div className={`w-14 h-14 rounded-2xl bg-slate-50 dark:bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                        <value.icon className={`h-7 w-7 ${value.color}`} />
                      </div>
                      <h3 className="text-xl font-bold mb-3 dark:text-white uppercase tracking-tight">{value.title}</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>
          </div>

        </div>

        {/* --- BOTTOM "PARTNER" TRAY --- */}
        <ScrollReveal direction="up">
          <div className="mt-24 p-10 md:p-16 rounded-[50px] bg-slate-900 dark:bg-white flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-xl text-center md:text-left">
              <h3 className="text-3xl md:text-5xl font-black text-white dark:text-slate-900 tracking-tighter mb-4">
                READY TO SCALE YOUR VISION?
              </h3>
              <p className="text-slate-400 dark:text-slate-600 font-medium">
                Whether you're a startup or an enterprise, we bridge the gap between concept and reality.
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-cyan-500 text-white font-black uppercase text-sm rounded-full flex items-center gap-3 shadow-[0_20px_40px_rgba(6,182,212,0.3)]"
            >
              Partner with Us <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default About;