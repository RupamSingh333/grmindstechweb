import { motion } from "framer-motion";
import { 
  Lightbulb, // Discovery
  BarChart3, // Planning
  Palette,   // Design
  Terminal,  // Development
  FlaskConical, // Testing
  Send       // Deployment
} from "lucide-react";

const steps = [
  { title: "Discovery", desc: "Aapke business goals aur user needs ka gehra analysis.", icon: Lightbulb, color: "text-amber-400" },
  { title: "Planning", desc: "Technical roadmap aur scalable architecture ka nirman.", icon: BarChart3, color: "text-blue-500" },
  { title: "Design", desc: "Modern UI/UX prototypes jo brand value ko increase karein.", icon: Palette, color: "text-purple-500" },
  { title: "Development", desc: "Next-gen technologies ke saath clean aur optimized coding.", icon: Terminal, color: "text-cyan-500" },
  { title: "Testing", desc: "Rigorous QA testing taaki bug-free experience mil sake.", icon: FlaskConical, color: "text-emerald-500" },
  { title: "Deployment", desc: "Live launch ke saath continuous cloud monitoring support.", icon: Send, color: "text-indigo-500" },
];

const ElectricSDLC = () => {
  return (
    <section className="inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] md:bg-[size:60px_60px] overflow-hidden bg-slate-50 dark:bg-[#030712] py-10 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* HEADER */}
        <div className="mb-16 text-left md:text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-cyan-500 text-[10px] font-black uppercase tracking-[0.5em] block mb-2"
          >
            Phase-wise Execution
          </motion.span>
          <h2 className="text-4xl md:text-7xl font-black dark:text-white tracking-tighter uppercase italic">
            DIGITAL <span className="text-cyan-500">FLOW</span>
          </h2>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* RESPONSIVE ELECTRIC PATH */}
          {/* This path now works on both mobile (vertical) and desktop (grid) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" fill="none">
            <motion.path
              // Simplified path logic that stays visible
              d="M 50 0 V 1000" 
              stroke="url(#electric-glow)"
              strokeWidth="2"
              strokeDasharray="20 40"
              className="md:hidden" // Only shows vertical line on mobile
              animate={{ strokeDashoffset: [0, -100] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
            
            <motion.path
              d="M 100 150 H 900 V 450 H 100 V 750 H 900"
              stroke="url(#electric-glow)"
              strokeWidth="2"
              strokeDasharray="30 60"
              className="hidden lg:block" // Desktop weaving path
              animate={{ strokeDashoffset: [0, -200] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />

            <defs>
              <linearGradient id="electric-glow" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
                <stop offset="50%" stopColor="#06b6d4" stopOpacity="1" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className=" group relative z-10 p-8 rounded-[2rem] bg-white/70 dark:bg-slate-950/50 backdrop-blur-3xl border border-slate-100 dark:border-white/5 backdrop-blur-xl hover:border-cyan-500/50 transition-all duration-500"
            >
              {/* ICON AREA */}
              <div className="flex items-center justify-between mb-8">
                <div className="relative">
                   <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                   <div className="relative p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 group-hover:text-cyan-500 transition-colors">
                     <step.icon className={`w-7 h-7 ${step.color} group-hover:text-cyan-500`} />
                   </div>
                </div>
                <div className="text-5xl font-black text-slate-100 dark:text-white/[0.03] group-hover:text-cyan-500/10 transition-colors italic">
                  0{index + 1}
                </div>
              </div>

              {/* CONTENT */}
              <h3 className="text-2xl font-black dark:text-white uppercase tracking-tight mb-4 italic">
                {step.title}
              </h3>
              
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium mb-6">
                {step.desc}
              </p>

              {/* CONNECTION NODE */}
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-cyan-500 shadow-[0_0_10px_#06b6d4] animate-pulse" />
                <span className="text-[9px] font-black text-cyan-500 uppercase tracking-[0.2em]">System Active</span>
              </div>

              {/* HOVER GLOW BAR */}
              <motion.div 
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 bg-cyan-500 rounded-t-full"
                initial={{ width: 0 }}
                whileHover={{ width: "60%" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ElectricSDLC;