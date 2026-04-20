import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Linkedin, Mail, ExternalLink, ShieldCheck } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import profile1 from '@/assets/rupamsingh.png';
import profile2 from '@/assets/gauravsir.jpeg';

const teamMembers = [
    {
        name: 'Gaurav Upadhyay',
        role: 'Founder & Senior Software Engineer',
        experience: '8+ Years in Enterprise Architecture',
        image: profile2,
        accent: 'from-cyan-500 to-blue-600',
        description:
            'A visionary leader specializing in scalable systems and backend architecture. Gaurav drives the technical strategy, ensuring every solution is built for future-ready performance.',
        linkedin: "https://www.linkedin.com/in/gaurav-upadhyay312",
        mail: "gauravupadhyaycool8@gmail.com",
        portfolio: "#"
    },
    {
        name: 'Rupam Singh',
        role: 'Co-Founder & Full Stack Developer',
        experience: '5+ Years in Web & Mobile Systems',
        image: profile1,
        accent: 'from-purple-500 to-indigo-600',
        description:
            'A versatile developer focused on high-performance applications and modern UI/UX. Rupam bridges the gap between complex logic and seamless user experience.',
        linkedin: "https://www.linkedin.com/in/rupam-kumar-1061321b2",
        mail: "rupamkumar333@gmail.com",
        portfolio: "https://rupamsingh333.github.io/rupam-kumar-portfolio-pulse"
    },
];

const Team = () => {
    return (
        <section className="py-16 md:py-20 px-6 relative overflow-hidden bg-slate-50 dark:bg-[#030712] inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] md:bg-[size:60px_60px]" id="teams">

            {/* Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-cyan-500/5 blur-[120px] rounded-full rotate-12 pointer-events-none" />

            <div className="container mx-auto max-w-8xl relative z-10">

                {/* HEADING */}
                <ScrollReveal direction="up">
                    <div className="text-center mb-12 md:mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 md:mb-6 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-500 text-xs font-bold uppercase tracking-[0.2em]"
                        >
                            <ShieldCheck className="w-4 h-4" />
                            <span>Expert Leadership</span>
                        </motion.div>

                        <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-4 md:mb-6 text-slate-900 dark:text-white leading-[0.9]">
                            THE MINDS <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600">
                                BEHIND THE TECH
                            </span>
                        </h2>
                    </div>
                </ScrollReveal>

                {/* TEAM CARDS */}
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
                    {teamMembers.map((member, index) => (
                        <ScrollReveal key={index} direction={index === 0 ? "left" : "right"}>
                            <motion.div whileHover={{ y: -10 }} className="group relative">

                                <div className={`absolute inset-0 bg-gradient-to-br ${member.accent} opacity-0 group-hover:opacity-10 blur-[80px] transition-all duration-700 rounded-[40px]`} />

                                <Card className="glass-card border-slate-200/50 dark:border-white/10 rounded-[40px] overflow-hidden p-6 md:p-10 transition-all duration-500 hover:border-cyan-500/50">

                                    <div className="flex flex-col items-center text-center">

                                        {/* IMAGE */}
                                        <div className="relative mb-6 md:mb-8">
                                            <div className={`absolute inset-0 bg-gradient-to-br ${member.accent} rounded-full blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-500`} />
                                            <div className="relative w-28 h-28 md:w-40 md:h-40 rounded-full p-1 bg-gradient-to-br from-slate-200 to-slate-100 dark:from-white/10 dark:to-white/5 shadow-2xl overflow-hidden">
                                                <img
                                                    src={member.image}
                                                    alt={member.name}
                                                    className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-700"
                                                />
                                            </div>
                                            <div className="absolute bottom-2 right-2 w-4 h-4 bg-emerald-500 border-3 border-white dark:border-[#030712] rounded-full animate-pulse" />
                                        </div>

                                        <CardContent className="p-0">

                                            <h3 className="text-xl md:text-3xl font-black text-slate-900 dark:text-white mb-2 uppercase tracking-tight">
                                                {member.name}
                                            </h3>

                                            <div className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-3 md:mb-4 inline-block">
                                                {member.role}
                                            </div>

                                            <p className="text-xs md:text-sm font-bold text-slate-400 mb-4 md:mb-6 italic tracking-wide">
                                                {member.experience}
                                            </p>

                                            <p className="text-sm md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed mb-6 md:mb-8 font-medium">
                                                {member.description}
                                            </p>

                                            {/* SOCIAL */}
                                            <div className="flex items-center justify-center gap-3 md:gap-4">
                                                <motion.a href={member.linkedin} target="_blank" whileHover={{ scale: 1.1 }} className="p-2.5 md:p-3 rounded-full bg-slate-100 dark:bg-white/5">
                                                    <Linkedin size={18} />
                                                </motion.a>
                                                <motion.a href={`mailto:${member.mail}`} whileHover={{ scale: 1.1 }} className="p-2.5 md:p-3 rounded-full bg-slate-100 dark:bg-white/5">
                                                    <Mail size={18} />
                                                </motion.a>
                                                <motion.a href={member.portfolio} target="_blank" whileHover={{ scale: 1.1 }} className="p-2.5 md:p-3 rounded-full bg-slate-100 dark:bg-white/5">
                                                    <ExternalLink size={18} />
                                                </motion.a>
                                            </div>

                                        </CardContent>
                                    </div>
                                </Card>
                            </motion.div>
                        </ScrollReveal>
                    ))}
                </div>

                {/* BOTTOM */}
                <ScrollReveal direction="up">
                    <div className="backdrop-blur-xl mt-16 md:mt-24 p-6 md:p-12 rounded-[40px] bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 text-center relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500" />
                        <h3 className="text-xl md:text-4xl font-black text-slate-900 dark:text-white mb-4 md:mb-6">
                            "WE BUILD SYSTEMS THAT SCALE WITH YOUR AMBITION"
                        </h3>
                        <p className="text-sm md:text-lg text-slate-500 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
                            Our leadership combines years of deep technical expertise with a commitment to
                            long-term partnerships. We don't just deliver products; we build the future of your business.
                        </p>
                    </div>
                </ScrollReveal>

            </div>
        </section>
    );
};

export default Team;