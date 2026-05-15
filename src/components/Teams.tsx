import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Linkedin, Mail, ExternalLink, ShieldCheck, Cpu, Brain } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import AntigravityWrapper from './AntigravityWrapper';
import profile1 from '@/assets/rupamsingh.png';
import profile2 from '@/assets/gauravsir.jpeg';

const teamMembers = [
    {
        name: 'Gaurav Upadhyay',
        role: 'Founder & Chief Architect',
        experience: '8+ Years in AI & Enterprise Systems',
        image: profile2,
        accent: 'from-cyan-500 to-blue-600',
        description:
            'A visionary leader specializing in neural architectures and scalable backend systems. Gaurav drives the technical strategy for next-gen AI deployment.',
        linkedin: "https://www.linkedin.com/in/gaurav-upadhyay312",
        mail: "gauravupadhyaycool8@gmail.com",
    },
    {
        name: 'Rupam Singh',
        role: 'Co-Founder & Lead Engineer',
        experience: '5+ Years in Full Stack Intelligence',
        image: profile1,
        accent: 'from-purple-500 to-indigo-600',
        description:
            'A versatile engineer focused on high-performance interfaces and AI-driven user experiences. Rupam bridges the gap between complex logic and seamless UI.',
        linkedin: "https://www.linkedin.com/in/rupam-kumar-1061321b2",
        mail: "rupamkumar333@gmail.com",
    },
];

const Team = () => {
    return (
        <section className="py-32 px-6 relative overflow-hidden bg-white dark:bg-[#030712]" id="teams">
            {/* Background Grid */}
            <div className="absolute inset-0 z-0 opacity-10 dark:opacity-30">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
            </div>

            {/* Glowing Orbs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-500/5 blur-[150px] rounded-full rotate-12 pointer-events-none" />

            <div className="container mx-auto max-w-7xl relative z-10">

                {/* HEADING */}
                <ScrollReveal direction="up">
                    <div className="text-center mb-24">
                        <motion.div
                            className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-500 text-[10px] font-black uppercase tracking-[0.4em]"
                        >
                            <Brain className="w-3 h-3" />
                            <span>Core Intelligence</span>
                        </motion.div>

                        <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 text-slate-900 dark:text-white leading-[0.85] italic uppercase">
                            The Minds <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600">
                                Behind the Machine
                            </span>
                        </h2>
                    </div>
                </ScrollReveal>

                {/* TEAM CARDS */}
                <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
                    {teamMembers.map((member, index) => (
                        <ScrollReveal key={index} direction={index === 0 ? "left" : "right"}>
                            <AntigravityWrapper floatRange={[-10, 10]} parallaxStrength={30}>
                                <motion.div whileHover={{ scale: 1.02 }} className="group relative">

                                    <div className={`absolute -inset-[2px] bg-gradient-to-br ${member.accent} opacity-0 group-hover:opacity-100 transition-all duration-700 blur-[8px] rounded-[3rem]`} />

                                    <Card className="glass-card relative bg-white/80 dark:bg-slate-950/80 backdrop-blur-3xl border-slate-200 dark:border-white/5 rounded-[2.8rem] overflow-hidden p-8 md:p-12 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(6,182,212,0.1)]">

                                        <div className="flex flex-col items-center text-center">

                                            {/* IMAGE */}
                                            <div className="relative mb-10">
                                                <div className={`absolute inset-0 bg-gradient-to-br ${member.accent} rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-700`} />
                                                <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full p-1.5 bg-gradient-to-br from-slate-200 to-slate-100 dark:from-white/10 dark:to-white/5 shadow-2xl overflow-hidden">
                                                    <img
                                                        src={member.image}
                                                        alt={member.name}
                                                        className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                                                    />
                                                </div>
                                                <div className="absolute bottom-4 right-4 w-5 h-5 bg-emerald-500 border-4 border-white dark:border-[#030712] rounded-full animate-pulse shadow-[0_0_15px_#10b981]" />
                                            </div>

                                            <CardContent className="p-0">

                                                <h3 className="text-2xl md:text-4xl font-black text-slate-900 dark:text-white mb-3 uppercase tracking-tighter italic">
                                                    {member.name}
                                                </h3>

                                                <div className="px-4 py-1 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-[10px] md:text-xs font-black uppercase tracking-[0.3em] mb-4 inline-block border border-cyan-500/10 group-hover:border-cyan-500/30 transition-colors">
                                                    {member.role}
                                                </div>

                                                <p className="text-xs md:text-sm font-bold text-slate-400 mb-6 italic tracking-widest uppercase">
                                                    {member.experience}
                                                </p>

                                                <p className="text-base md:text-xl text-slate-500 dark:text-slate-400 leading-relaxed mb-8 font-medium">
                                                    {member.description}
                                                </p>

                                                {/* SOCIAL */}
                                                <div className="flex items-center justify-center gap-4">
                                                    <motion.a href={member.linkedin} target="_blank" whileHover={{ scale: 1.2, rotate: 5 }} className="p-4 rounded-2xl bg-slate-100 dark:bg-white/5 hover:bg-cyan-500 hover:text-white transition-all">
                                                        <Linkedin size={20} />
                                                    </motion.a>
                                                    <motion.a href={`mailto:${member.mail}`} whileHover={{ scale: 1.2, rotate: -5 }} className="p-4 rounded-2xl bg-slate-100 dark:bg-white/5 hover:bg-cyan-500 hover:text-white transition-all">
                                                        <Mail size={20} />
                                                    </motion.a>
                                                </div>

                                            </CardContent>
                                        </div>
                                    </Card>
                                </motion.div>
                            </AntigravityWrapper>
                        </ScrollReveal>
                    ))}
                </div>

                {/* BOTTOM BANNER */}
                <ScrollReveal direction="up">
                    <div className="backdrop-blur-3xl mt-24 p-12 md:p-20 rounded-[4rem] bg-slate-950 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 text-center relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
                        <h3 className="text-2xl md:text-5xl font-black text-white dark:text-white mb-6 tracking-tighter italic uppercase leading-[0.9]">
                            "Architecting <span className="text-cyan-500">Autonomous</span> Systems for Global Ambition"
                        </h3>
                        <p className="text-sm md:text-xl text-slate-400 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed font-medium">
                            Our leadership converges deep neural expertise with uncompromising code quality. We don't just ship products; we engineer the cognitive foundation of your business.
                        </p>
                    </div>
                </ScrollReveal>

            </div>
        </section>
    );
};

export default Team;