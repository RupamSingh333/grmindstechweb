import { motion } from 'framer-motion';
import { 
  Code2, Cloud, Smartphone, Database, Shield, Zap, 
  MessageCircle, Server, ArrowUpRight, Globe, Layers , Search, MessageSquare, Megaphone, PhoneCall, Mic2, Settings, LayoutDashboard, ShoppingBag, Share2
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import ScrollReveal from './ScrollReveal';

const services = [
  {
    icon: Globe,
    title: 'Website Design',
    description: 'Modern, high-converting UI/UX designs that reflect your brand identity perfectly.',
    accent: 'from-blue-600 to-cyan-500',
    tags: ['Figma', 'UI/UX', 'Modern'],
    isFeatured: true
  },
  {
    icon: Code2,
    title: 'Web Development',
    description: 'High-performance websites built with Next.js, React, and robust backend systems.',
    accent: 'from-cyan-500 to-blue-400',
    tags: ['Next.js', 'MERN', 'Speed'],
    isFeatured: true
  },
  {
    icon: Smartphone,
    title: 'App Development',
    description: 'Native-feel iOS and Android applications with seamless performance and Flutter.',
    accent: 'from-emerald-500 to-teal-400',
    tags: ['Flutter', 'iOS', 'Android'],
    isFeatured: true
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Dominate search results and drive organic traffic with elite SEO strategies.',
    accent: 'from-purple-500 to-indigo-400',
    tags: ['Ranking', 'Audit', 'Traffic']
  },
  {
    icon: MessageSquare,
    title: 'WhatsApp Marketing',
    description: 'Automated WhatsApp API solutions for broadcasting and AI-driven chatbots.',
    accent: 'from-green-500 to-emerald-400',
    tags: ['API', 'Automation', 'Bots']
  },
  {
    icon: Megaphone,
    title: 'Bulk SMS Services',
    description: 'Reliable transactional and promotional SMS gateways with high delivery rates.',
    accent: 'from-amber-500 to-orange-400',
    tags: ['Transactional', 'OTP', 'Scale']
  },
  {
    icon: Settings,
    title: 'Custom ERP Software',
    description: 'Fully tailored Enterprise Resource Planning systems to automate your operations.',
    accent: 'from-slate-700 to-slate-900',
    tags: ['Business', 'Scaling', 'Automation']
  },
  {
    icon: LayoutDashboard,
    title: 'Custom CRM Software',
    description: 'Manage leads and customer relationships with bespoke CRM dashboards.',
    accent: 'from-violet-600 to-purple-500',
    tags: ['Leads', 'Sales', 'Retention']
  },
  {
    icon: ShoppingBag,
    title: 'eCommerce Solutions',
    description: 'Complete online stores with secure payments and inventory management.',
    accent: 'from-red-500 to-orange-400',
    tags: ['Shopify', 'Stores', 'Payments']
  }
];

const Services = () => {
  return (
    <section id="services" className="inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] md:bg-[size:60px_60px] relative py-24 px-4 overflow-hidden bg-slate-50 dark:bg-[#030712]">
      {/* Background Grid & Glows */}
      <div className="absolute pointer-events-none" />
      <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-[10%] -left-[10%] w-[50%] h-[50%] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <ScrollReveal direction="up">
          <div className="text-center mb-20">
            <motion.span 
              className="px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-500 text-[10px] font-black uppercase tracking-[0.3em]"
            >
              Excellence in Execution
            </motion.span>
            <h2 className="mt-8 text-5xl md:text-8xl font-black tracking-tighter text-slate-900 dark:text-white leading-[0.9]">
              WE BUILD <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600">DIGITAL EMPIRES</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                className={`h-full group relative ${service.isFeatured ? 'md:col-span-1 lg:col-span-1' : ''}`}
              >
                {/* Neon Border Effect */}
                <div className={`absolute -inset-[1px] bg-gradient-to-br ${service.accent} rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[2px]`} />
                
                <Card className="h-full relative bg-white/70 dark:bg-slate-950/50 backdrop-blur-3xl border-slate-200 dark:border-white/5 rounded-[30px] overflow-hidden transition-all duration-500 group-hover:shadow-[0_20px_50px_rgba(8,112,184,0.1)]">
                  <CardHeader className="p-8">
                    <div className="flex justify-between items-start mb-6">
                      <div className={`p-4 rounded-2xl bg-gradient-to-br ${service.accent} text-white shadow-lg`}>
                        <service.icon className="h-6 w-6" />
                      </div>
                      <ArrowUpRight className="w-6 h-6 text-slate-300 dark:text-slate-700 group-hover:text-cyan-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                    </div>
                    
                    <CardTitle className="text-2xl font-black dark:text-white mb-3">
                      {service.title}
                    </CardTitle>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 uppercase tracking-tighter">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <CardDescription className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 font-medium">
                      {service.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="px-8 pb-8 flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-cyan-500 animate-pulse" />
                    <span className="text-[10px] font-bold text-cyan-500 uppercase tracking-[0.2em]">Live Solution</span>
                  </CardContent>

                  {/* Animated Background Shape */}
                  <div className={`absolute -right-4 -bottom-4 w-24 h-24 bg-gradient-to-br ${service.accent} opacity-[0.03] group-hover:opacity-10 rounded-full transition-all duration-700 blur-2xl group-hover:scale-150`} />
                </Card>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Minimal High-End CTA */}
        {/* <ScrollReveal direction="up">
          <div className="mt-32 text-center">
            <div className="inline-flex flex-col items-center">
               <h3 className="text-3xl md:text-5xl font-black dark:text-white mb-8 tracking-tighter">
                 HAVE A PROJECT IN MIND?
               </h3>
               <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-10 py-5 bg-slate-950 dark:bg-white rounded-2xl overflow-hidden"
               >
                 <div className="absolute inset-0 w-0 bg-cyan-500 group-hover:w-full transition-all duration-500 ease-out" />
                 <span className="relative z-10 text-white dark:text-black group-hover:text-white font-black uppercase tracking-widest text-sm flex items-center gap-3">
                    Launch Your Vision <ArrowUpRight className="w-5 h-5" />
                 </span>
               </motion.button>
            </div>
          </div>
        </ScrollReveal> */}
      </div>
    </section>
  );
};

export default Services;