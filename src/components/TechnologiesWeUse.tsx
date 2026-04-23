import { motion } from "framer-motion";
import {
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiTypescript,
    SiFramer,
    SiNodedotjs,
    SiMongodb,
    SiFlutter,
    SiFirebase,
    SiPostgresql,
    SiDocker,
    SiOpenai,
    SiGooglecloud,
    SiPython
} from "react-icons/si";
import { BsAmazon } from "react-icons/bs";
const techStack = [
    { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-black dark:text-white" },
    { name: "AI Automation", icon: SiOpenai, color: "text-[#10a37f]" }, // OpenAI
    { name: "Tailwind", icon: SiTailwindcss, color: "text-[#06B6D4]" },
    { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
    { name: "Gemini AI", icon: SiGooglecloud, color: "text-[#4285F4]" }, // Gemini/Google AI
    { name: "Framer", icon: SiFramer, color: "text-[#0055FF]" },
    { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]" },
    { name: "Python", icon: SiPython, color: "text-[#3776AB]" }, // Python for AI/ML
    { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
    { name: "Flutter", icon: SiFlutter, color: "text-[#02569B]" },
    { name: "Firebase", icon: SiFirebase, color: "text-[#FFCA28]" },
    { name: "Postgres", icon: SiPostgresql, color: "text-[#4169E1]" },
    { name: "Docker", icon: SiDocker, color: "text-[#2496ED]" },
    { name: "AWS", icon: BsAmazon, color: "text-[#FF9900]" }
];

const TechStack = () => {

    return (
        <section className="py-24 bg-white dark:bg-[#030712] overflow-hidden relative bg-slate-50 inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] md:bg-[size:60px_60px]">
            <div className="container mx-auto px-4 mb-16 text-center">
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="px-4 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-500 text-[10px] font-black uppercase tracking-[0.4em]"
                >
                    Cutting-Edge Arsenal
                </motion.span>
                <h2 className="text-5xl md:text-7xl font-black mt-6 dark:text-white tracking-tighter uppercase italic">
                    Powering <span className="text-slate-400">Innovation</span>
                </h2>
            </div>

            <div className="relative flex overflow-hidden">
                {/* Shadow Gradients for Fade Effect */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white dark:from-[#030712] to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white dark:from-[#030712] to-transparent z-10" />

                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ ease: "linear", duration: 35, repeat: Infinity }}
                    className="flex whitespace-nowrap gap-6 py-4"
                >
                    {techStack.map((tech, index) => (
                        <div
                            key={index}
                            className="bg-white/40 dark:bg-white/5  flex items-center gap-4 px-10 py-6 rounded-[2rem] bg-slate-50  border border-slate-100 dark:border-white/5 backdrop-blur-sm group hover:border-cyan-500/40 transition-all duration-500"
                        >
                            <tech.icon className={`text-4xl ${tech.color} group-hover:scale-110 transition-transform duration-500`} />
                            <span className="text-xl font-black text-slate-800 dark:text-slate-200 tracking-tighter uppercase">
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Background Decorative Blur */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-full max-w-4xl h-32 bg-cyan-500/10 blur-[120px] pointer-events-none" />
        </section>
    );
};

export default TechStack;