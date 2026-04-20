import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import ScrollReveal from './ScrollReveal';
import { useState } from 'react';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    value: 'info@grminds.tech',
  },
  {
    icon: Phone,
    title: 'Call Support',
    value: '+91 75057 17444',
    value2: '+91 85389 45025',
  },
  {
    icon: MapPin,
    title: 'Our Offices',
    value: 'UP & Bihar, India',
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const mailtoLink = `mailto:info@grminds.tech?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="relative py-20 md:py-20 px-4 md:px-6 overflow-hidden bg-slate-50 dark:bg-[#030712] inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] md:bg-[size:60px_60px] ">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="container mx-auto max-w-8xl relative z-10">
        
        {/* --- HEADER --- */}
        <ScrollReveal direction="up">
          <div className="text-center mb-12 md:mb-20">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 md:mb-6 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-500 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]"
            >
              <Sparkles className="w-3 h-3 md:w-4 h-4" />
              <span>Let's Build Something Great</span>
            </motion.div>
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-4 md:mb-6 text-slate-900 dark:text-white leading-tight">
              GET IN <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600 animate-gradient-x">TOUCH</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
          
          {/* --- CONTACT INFO PANEL (LEFT) --- */}
          <div className="lg:col-span-5 space-y-4 md:space-y-6 order-2 lg:order-1">
            <ScrollReveal direction="left">
              <div className="space-y-4 md:space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="p-5 md:p-8 rounded-[24px] md:rounded-[32px] bg-white/50 dark:bg-white/[0.02] border border-slate-200/50 dark:border-white/10 backdrop-blur-xl transition-all group"
                  >
                    <div className="flex items-center gap-4 md:gap-6">
                      <div className="w-10 h-10 md:w-14 md:h-14 shrink-0 rounded-xl md:rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-500">
                        <info.icon className="w-5 h-5 md:w-7 md:h-7" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-[10px] md:text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">{info.title}</h3>
                        <p className="text-sm md:text-lg font-bold text-slate-900 dark:text-white truncate md:whitespace-normal">{info.value}</p>
                        {info.value2 && <p className="text-sm md:text-lg font-bold text-slate-900 dark:text-white truncate md:whitespace-normal">{info.value2}</p>}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Office Locations Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 md:mt-8">
                <div className="p-5 md:p-6 rounded-[24px] md:rounded-[32px] bg-slate-900 dark:bg-white text-white dark:text-slate-900">
                  <p className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-2">Uttar Pradesh</p>
                  <p className="text-[11px] md:text-xs font-medium leading-relaxed">BM Raj Tower, Varanasi, UP - 221007</p>
                </div>
                <div className="p-5 md:p-6 rounded-[24px] md:rounded-[32px] bg-cyan-500 text-white">
                  <p className="text-[10px] font-black uppercase tracking-widest opacity-80 mb-2">Bihar Office</p>
                  <p className="text-[11px] md:text-xs font-medium leading-relaxed">Kothwa Khagaul, Patna, BR - 801105</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* --- CONTACT FORM (RIGHT) --- */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <ScrollReveal direction="right">
              <Card className="rounded-[30px] md:rounded-[40px] border-slate-200/50 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-2xl overflow-hidden shadow-xl">
                <CardHeader className="p-6 md:p-12 pb-0 text-center lg:text-left">
                  <CardTitle className="text-2xl md:text-3xl font-black tracking-tight dark:text-white uppercase">Send a Message</CardTitle>
                </CardHeader>
                <CardContent className="p-6 md:p-12 pt-6 md:pt-8">
                  <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Name</label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="h-12 md:h-14 rounded-xl md:rounded-2xl bg-white/50 dark:bg-white/5 border-slate-200 dark:border-white/10 focus:ring-2 ring-cyan-500/50 transition-all text-sm"
                          placeholder="Your Name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Email</label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="h-12 md:h-14 rounded-xl md:rounded-2xl bg-white/50 dark:bg-white/5 border-slate-200 dark:border-white/10 focus:ring-2 ring-cyan-500/50 transition-all text-sm"
                          placeholder="Email Address"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Subject</label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="h-12 md:h-14 rounded-xl md:rounded-2xl bg-white/50 dark:bg-white/5 border-slate-200 dark:border-white/10 focus:ring-2 ring-cyan-500/50 transition-all text-sm"
                        placeholder="Project Inquiry"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Message</label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="rounded-2xl md:rounded-3xl bg-white/50 dark:bg-white/5 border-slate-200 dark:border-white/10 focus:ring-2 ring-cyan-500/50 transition-all p-4 text-sm"
                        placeholder="Tell us about your digital vision..."
                        rows={4}
                        required
                      />
                    </div>

                    <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                      <Button type="submit" className="w-full h-14 md:h-16 bg-cyan-500 hover:bg-cyan-600 text-white font-black uppercase tracking-widest rounded-xl md:rounded-2xl shadow-lg shadow-cyan-500/20 transition-all text-sm">
                        Dispatch Message
                        <Send className="ml-2 h-4 w-4 md:ml-3 md:h-5 md:w-5" />
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>

        {/* --- OFFICE HOURS TRAY --- */}
        <ScrollReveal direction="up">
          <div className="mt-12 md:mt-20 p-6 md:p-8 rounded-[30px] md:rounded-[40px] border border-slate-200/50 dark:border-white/10 bg-white/30 dark:bg-white/[0.02] backdrop-blur-md flex flex-col md:flex-row items-center justify-center gap-4 md:gap-16 text-center">
            <div className="flex items-center gap-3">
              <Clock className="text-cyan-500 w-5 h-5" />
              <span className="text-[10px] md:text-sm font-bold dark:text-slate-300 uppercase tracking-widest">Mon - Fri: 9AM - 6PM</span>
            </div>
            <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700" />
            <div className="flex items-center gap-3">
              <Clock className="text-cyan-500 w-5 h-5" />
              <span className="text-[10px] md:text-sm font-bold dark:text-slate-300 uppercase tracking-widest">Sat: 10AM - 4PM</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Contact;