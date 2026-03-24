import { motion } from 'framer-motion';
import { Code2, Cloud, Smartphone, Database, Shield, Zap, MessageCircle, DollarSign, Server } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import ScrollReveal from './ScrollReveal';
import ParallaxSection from './ParallaxSection';

const services = [
  {
    icon: Code2,
    title: 'Custom Software Development',
    description: 'Tailored software solutions built with modern technologies to meet your unique business needs at affordable prices.',
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure, migration, and management services for optimal performance and cost-efficiency.',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform apps that deliver exceptional user experiences on both Android and iOS platforms.',
  },
  {
    icon: Database,
    title: 'Data Analytics & AI',
    description: 'Transform your business data into actionable insights using advanced analytics and AI/ML solutions.',
  },
  {
    icon: Shield,
    title: 'Cybersecurity & Compliance',
    description: 'Protect your digital assets with robust security measures while ensuring industry compliance at low cost.',
  },
  {
    icon: Zap,
    title: 'IT Consulting',
    description: 'Strategic guidance to accelerate digital transformation, optimize processes, and reduce IT costs.',
  },
  {
    icon: MessageCircle,
    title: 'Bulk WhatsApp Messaging',
    description: 'Reach thousands of customers with automated WhatsApp messages for marketing, updates, or alerts at minimal cost.',
  },
  {
    icon: DollarSign,
    title: 'Affordable IT Solutions',
    description: 'Complete IT solutions for startups and SMEs, designed to maximize ROI without compromising quality.',
  },
  {
    icon: Server,
    title: 'Web Hosting & Server Management',
    description: 'Reliable and low-cost hosting with full server management, security, and backups included.',
  },
];

const Services = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="container mx-auto">
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive and affordable IT solutions to grow your business efficiently.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ParallaxSection key={index} offset={30}>
              <ScrollReveal direction="up" delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="h-full"
                >
                  <Card className="glass-card h-full group hover:glow-border transition-all duration-300">
                    <CardHeader>
                      <motion.div 
                        className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <service.icon className="h-6 w-6 text-primary" />
                      </motion.div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {service.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              </ScrollReveal>
            </ParallaxSection>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <ScrollReveal direction="up">
          <div className="text-center mt-20 max-w-3xl mx-auto">
            <h3 className="text-3xl font-semibold mb-4 glow-text">
              All-in-One IT Solutions for Your Business
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              From web and mobile apps to cloud, data analytics, and bulk messaging, we offer cost-effective solutions to help your business scale without breaking the bank.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-primary text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:bg-primary/90 transition-all"
            >
              Get a Free Consultation
            </motion.button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Services;