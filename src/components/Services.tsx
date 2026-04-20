import { motion } from 'framer-motion';
import { 
  Code2, Cloud, Smartphone, Database, Shield, Zap, 
  MessageCircle, DollarSign, Server, ArrowUpRight 
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import ScrollReveal from './ScrollReveal';

const services = [
  {
    icon: Code2,
    title: 'Custom Development',
    description: 'High-performance software tailored for your specific scale and goals.',
    accent: 'from-blue-500 to-cyan-400'
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Optimize infrastructure with automated scaling and elite cost-efficiency.',
    accent: 'from-purple-500 to-indigo-400'
  },
  {
    icon: Smartphone,
    title: 'Mobile Ecosystems',
    description: 'Native-feel iOS and Android apps that users genuinely love to use.',
    accent: 'from-emerald-500 to-teal-400'
  },
  {
    icon: Database,
    title: 'AI & Data Science',
    description: 'Convert raw data into predictive intelligence with custom ML models.',
    accent: 'from-orange-500 to-red-400'
  },
  {
    icon: MessageCircle,
    title: 'Bulk WhatsApp',
    description: 'Enterprise-grade automation for marketing and real-time user alerts.',
    accent: 'from-green-500 to-emerald-400'
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Military-grade protection and compliance auditing for your assets.',
    accent: 'from-cyan-500 to-blue-400'
  },
  {
    icon: Zap,
    title: 'IT Consulting',
    description: 'Strategic roadmaps to modernize your legacy tech and cut overhead.',
    accent: 'from-yellow-400 to-orange-500'
  },
  {
    icon: Server,
    title: 'Managed Hosting',
    description: '99.9% uptime with fully managed high-speed server architecture.',
    accent: 'from-indigo-500 to-purple-400'
  },
  // {
  //   icon: DollarSign,
  //   title: 'SME Solutions',
  //   description: 'Budget-focused digital transformations designed for high ROI.',
  //   accent: 'from-pink-500 to-rose-400'
  // },
];

const Services = () => {
  return (
    <section id="services" className="inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] md:bg-[size:60px_60px] relative  overflow-hidden bg-slate-50 dark:bg-[#030712]">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 blur-[120px] rounded-full" />

      <div className="container mx-auto relative z-10">
        <ScrollReveal direction="up">
          <div className="text-center mb-24">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="inline-block px-4 py-1.5 mb-6 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-500 text-xs font-bold uppercase tracking-widest"
            >
              Our Expertise
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 text-slate-900 dark:text-white leading-none">
              PUSHING <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600 animate-gradient-x">BOUNDARIES</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium">
              We combine artistic design with engineering excellence to build the future of digital business.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 0.05}>
              <motion.div
                whileHover={{ y: -10 }}
                className="h-full group relative"
              >
                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500 rounded-3xl`} />
                
                <Card className="h-full bg-white/40 dark:bg-white/[0.03] backdrop-blur-xl border-slate-200/50 dark:border-white/10 rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/20 dark:shadow-none hover:border-cyan-500/50 transition-all duration-500">
                  <CardHeader className="relative p-8">
                    {/* Icon with Liquid Background */}
                    <div className="relative w-16 h-16 mb-6">
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-20 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-500`} />
                      <div className="absolute inset-0 bg-white dark:bg-slate-900 rounded-2xl shadow-sm flex items-center justify-center border border-slate-100 dark:border-white/10 group-hover:scale-110 transition-transform duration-500">
                        <service.icon className="h-7 w-7 text-slate-900 dark:text-white group-hover:text-cyan-500 transition-colors" />
                      </div>
                    </div>
                    
                    <CardTitle className="text-2xl font-bold dark:text-white flex items-center justify-between">
                      {service.title}
                      <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all text-cyan-500" />
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="px-8 pb-8">
                    <CardDescription className="text-base leading-relaxed text-slate-500 dark:text-slate-400 font-medium">
                      {service.description}
                    </CardDescription>
                  </CardContent>

                  {/* Bottom Decoration Bar */}
                  <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${service.accent} w-0 group-hover:w-full transition-all duration-700`} />
                </Card>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Dynamic CTA Tray */}
        <ScrollReveal direction="up">
          <div className="relative mt-32 p-1 md:p-2 rounded-[40px] bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 overflow-hidden group">
             <div className="bg-white dark:bg-[#030712] rounded-[38px] px-8 py-16 md:py-24 text-center">
                <h3 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter dark:text-white">
                  READY TO BUILD <br />
                  <span className="text-cyan-500 underline decoration-cyan-500/30 underline-offset-8">SOMETHING EPIC?</span>
                </h3>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-5 bg-slate-900 dark:bg-white text-white dark:text-black font-black uppercase text-lg rounded-2xl shadow-2xl shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all"
                >
                  Get A Free Quote
                </motion.button>
             </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Services;