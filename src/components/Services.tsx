import { motion } from 'framer-motion';
import { 
  Code2, Cloud, Smartphone, Database, Shield, Zap, 
  MessageCircle, Server, ArrowUpRight, Globe, Layers , Search, MessageSquare, Megaphone, PhoneCall, Mic2, Settings, LayoutDashboard, ShoppingBag, Share2, Brain, Cpu, Bot
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import ScrollReveal from './ScrollReveal';
import AntigravityWrapper from './AntigravityWrapper';
import AIFloatingNodes from './AIFloatingNodes';

const services = [
  {
    icon: Brain,
    title: 'AI Integration',
    description: 'Custom AI solutions, LLM fine-tuning, and automated intelligent workflows for modern enterprises.',
    accent: 'from-cyan-500 to-blue-600',
    tags: ['GPT-4', 'LLMs', 'AI Ops'],
    isFeatured: true
  },
  {
    icon: Code2,
    title: 'Web Engineering',
    description: 'High-performance, scalable web architectures built with React, Next.js and secure cloud cores.',
    accent: 'from-blue-500 to-indigo-600',
    tags: ['FullStack', 'Performance', 'Cloud'],
    isFeatured: true
  },
  {
    icon: Bot,
    title: 'Intelligent Bots',
    description: 'AI-driven conversational agents and automation bots that handle complex customer interactions.',
    accent: 'from-indigo-500 to-purple-600',
    tags: ['Chatbots', 'Automation', 'Voice'],
    isFeatured: true
  },
  {
    icon: Smartphone,
    title: 'Mobile Ecosystems',
    description: 'Premium iOS and Android experiences with native performance and AI-enhanced features.',
    accent: 'from-purple-500 to-pink-500',
    tags: ['iOS', 'Android', 'Flutter']
  },
  {
    icon: Database,
    title: 'Data Intelligence',
    description: 'Advanced data analytics, warehousing and real-time visualization for data-driven decisions.',
    accent: 'from-emerald-500 to-cyan-500',
    tags: ['Analytics', 'SQL', 'BigData']
  },
  {
    icon: Shield,
    title: 'Cyber Security',
    description: 'End-to-end security audits, encryption, and AI-powered threat detection systems.',
    accent: 'from-red-500 to-rose-600',
    tags: ['Audit', 'SecOps', 'Privacy']
  }
];

const Services = () => {
  return (
    <section id="services" className="relative py-24 px-4 overflow-hidden bg-white dark:bg-[#030712]">
      {/* Background Grid & AI Nodes */}
      <div className="absolute inset-0 z-0 opacity-40">
        <AIFloatingNodes />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="container mx-auto relative z-10">
        <ScrollReveal direction="up">
          <div className="text-center mb-24">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-500 text-[10px] font-black uppercase tracking-[0.4em]"
            >
              <Cpu className="w-3 h-3" />
              <span>Core Capabilities</span>
            </motion.div>
            <h2 className="mt-8 text-5xl md:text-9xl font-black tracking-tighter text-slate-900 dark:text-white leading-[0.85] italic uppercase">
              Future <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600">Forged</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 0.1}>
              <AntigravityWrapper parallaxStrength={20 + index * 5} floatRange={[-5, 5]}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="h-full group relative"
                >
                  {/* Neon Glow Border */}
                  <div className={`absolute -inset-[2px] bg-gradient-to-br ${service.accent} rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-[4px]`} />
                  
                  <Card className="h-full relative bg-white/80 dark:bg-slate-950/80 backdrop-blur-3xl border-slate-200 dark:border-white/5 rounded-[2.4rem] overflow-hidden transition-all duration-500 group-hover:shadow-[0_0_50px_rgba(6,182,212,0.15)]">
                    
                    {/* Scanner Effect */}
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-y-[400px] transition-all duration-[2s] linear" />

                    <CardHeader className="p-10">
                      <div className="flex justify-between items-start mb-10">
                        <div className={`p-5 rounded-2xl bg-gradient-to-br ${service.accent} text-white shadow-2xl relative overflow-hidden group-hover:scale-110 transition-transform duration-500`}>
                          <div className="absolute inset-0 bg-white/20 animate-pulse" />
                          <service.icon className="h-8 w-8 relative z-10" />
                        </div>
                        <div className="h-12 w-12 rounded-full border border-slate-100 dark:border-white/10 flex items-center justify-center group-hover:bg-cyan-500 group-hover:border-cyan-500 transition-all duration-500">
                          <ArrowUpRight className="w-6 h-6 text-slate-300 group-hover:text-white transition-colors" />
                        </div>
                      </div>
                      
                      <CardTitle className="text-3xl font-black dark:text-white mb-4 uppercase tracking-tighter italic">
                        {service.title}
                      </CardTitle>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {service.tags.map(tag => (
                          <span key={tag} className="text-[10px] font-black px-3 py-1 rounded-lg bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 uppercase tracking-widest border border-transparent group-hover:border-cyan-500/20 transition-colors">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <CardDescription className="text-base leading-relaxed text-slate-600 dark:text-slate-400 font-medium">
                        {service.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="px-10 pb-10 mt-auto">
                      <div className="flex items-center gap-3 py-4 border-t border-slate-100 dark:border-white/5">
                        <div className="h-2 w-2 rounded-full bg-cyan-500 shadow-[0_0_10px_#06b6d4] animate-pulse" />
                        <span className="text-[10px] font-black text-cyan-500 uppercase tracking-[0.3em]">Module Optimized</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </AntigravityWrapper>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;