import { motion } from 'framer-motion';
import { Briefcase, Users, Rocket, Heart, ArrowRight, Stars } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const jobs = [
  {
    title: 'Frontend Developer (React)',
    type: 'Remote / Freelance',
    accent: 'from-cyan-500 to-blue-500',
    description: 'Master of modern UI, Tailwind CSS, and Framer Motion. Help us craft liquid interfaces.',
  },
  {
    title: 'Backend Developer (Node.js)',
    type: 'Remote',
    accent: 'from-purple-500 to-indigo-500',
    description: 'Architecting scalable REST APIs and secure database structures for high-traffic apps.',
  },
  {
    title: 'UI/UX Designer',
    type: 'Part-Time',
    accent: 'from-emerald-500 to-teal-500',
    description: 'Transforming complex requirements into clean, user-centric, and futuristic design systems.',
  },
];

const Career = () => {
  return (
    <section className="relative py-20 px-6 overflow-hidden bg-white dark:bg-[#030712]  inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] md:bg-[size:60px_60px] " id="careers">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_top,rgba(6,182,212,0.03)_0%,transparent_50%)] pointer-events-none" />

      <div className="container mx-auto max-w-8xl relative z-10">

        {/* --- HEADING --- */}
        <ScrollReveal direction="up">
          <div className="text-center mb-20">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-500 text-xs font-bold uppercase tracking-[0.2em]"
            >
              <Stars className="w-4 h-4" />
              <span>We Are Hiring</span>
            </motion.div>
            
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 text-slate-900 dark:text-white leading-[0.9]">
              JOIN THE <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600 animate-gradient-x">CREATIVE TRIBE</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium">
              We’re looking for radical thinkers and elite engineers to build the next generation of digital infrastructure.
            </p>
          </div>
        </ScrollReveal>

        {/* --- WHY JOIN US (BENTO GRID) --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
          {[
            { icon: Rocket, title: 'Rapid Growth', color: 'text-orange-500' },
            { icon: Users, title: 'True Culture', color: 'text-cyan-500' },
            { icon: Briefcase, title: 'Flex Hours', color: 'text-purple-500' },
            { icon: Heart, title: 'Passionate', color: 'text-red-500' },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5, backgroundColor: "rgba(6, 182, 212, 0.05)" }}
              className="glass-card p-6 md:p-8 text-center rounded-[32px] border border-slate-200 dark:border-white/5 bg-slate-50/50 dark:bg-white/[0.02] backdrop-blur-md transition-all"
            >
              <item.icon className={`h-8 w-8 ${item.color} mx-auto mb-4`} />
              <h3 className="font-bold text-slate-900 dark:text-white uppercase tracking-tighter text-sm md:text-base">{item.title}</h3>
            </motion.div>
          ))}
        </div>

        {/* --- JOB LISTINGS --- */}
        <div className="space-y-4">
          {jobs.map((job, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 0.1}>
              <motion.div
                whileHover={{ x: 10 }}
                className="group relative rounded-[32px] bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 p-6 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 backdrop-blur-xl transition-all hover:border-cyan-500/50"
              >
                {/* Accent Line */}
                <div className={`absolute left-0 top-1/4 bottom-1/4 w-1 bg-gradient-to-b ${job.accent} rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity`} />
                
                <div className="max-w-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">{job.title}</h3>
                    <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-500 text-[10px] font-black uppercase tracking-widest">
                      {job.type}
                    </span>
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                    {job.description}
                  </p>
                </div>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={`mailto:info@grminds.tech?subject=Application: ${job.title}`}
                  className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-2xl font-black uppercase text-xs tracking-widest flex items-center justify-center gap-2 shadow-xl shadow-cyan-500/10"
                >
                  Apply Now <ArrowRight size={16} />
                </motion.a>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* --- FOOTER CTA --- */}
        <ScrollReveal direction="up">
          <div className="backdrop-blur-xl text-center mt-24 p-12 rounded-[40px] bg-slate-100 dark:bg-white/[0.03] border border-dashed border-slate-300 dark:border-white/10">
            <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-4">
              Don’t see your dream role?
            </h3>
            <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-xl mx-auto font-medium">
              We are always looking for exceptional talent. Send us your portfolio and let's start a conversation.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="mailto:info@grminds.tech?subject=General Application"
              className="text-cyan-500 font-black uppercase tracking-[0.2em] text-sm flex items-center justify-center gap-2 group hover:gap-4 transition-all"
            >
              Drop your CV <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default Career;