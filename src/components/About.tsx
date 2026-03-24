import { motion } from 'framer-motion';
import { Target, Users, Lightbulb, TrendingUp, Award, Globe, Heart, Rocket } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import ParallaxSection from './ParallaxSection';

const values = [
  {
    icon: Target,
    title: 'Mission-Driven',
    description: 'Committed to delivering excellence in every project with clear objectives.',
  },
  {
    icon: Users,
    title: 'Client-Focused',
    description: 'Your success is our top priority; we build solutions that meet your needs.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description: 'Leveraging cutting-edge technologies to create next-gen digital solutions.',
  },
  {
    icon: TrendingUp,
    title: 'Growth Oriented',
    description: 'Scaling solutions for future growth and sustainable business impact.',
  },
  {
    icon: Rocket,
    title: 'Agile Approach',
    description: 'Delivering projects quickly with iterative improvements for maximum efficiency.',
  },
  {
    icon: Heart,
    title: 'Passion & Dedication',
    description: 'Driven by passion for technology and commitment to client satisfaction.',
  },
  {
    icon: Award,
    title: 'Quality Assured',
    description: 'Every project follows strict quality standards to ensure excellence.',
  },
  {
    icon: Globe,
    title: 'Global Perspective',
    description: 'We combine local expertise with global trends for innovative solutions.',
  },
];

const stats = [
  { value: '100+', label: 'Projects Delivered' },
  { value: '50+', label: 'Happy Clients' },
  { value: '15+', label: 'Team Members' },
  { value: '5+', label: 'Years Experience' },
  { value: '200K+', label: 'Lines of Code Written' },
  { value: '30+', label: 'Industries Served' },
];

const About = () => {
  return (
    <section className="py-24 px-4 relative bg-muted/5">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Content */}
          <ParallaxSection offset={40}>
            <ScrollReveal direction="left">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  About <span className="glow-text">G.R. Minds</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-4">
                  At G.R. Minds, we are a forward-thinking IT company transforming businesses through innovative technology. 
                  Our team of skilled developers, designers, and consultants is passionate about building scalable and secure digital solutions.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  From startups to large enterprises, we partner with organizations across industries to deliver sustainable, high-quality software that drives measurable results.
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  Our approach combines creativity, technical expertise, and a client-first mindset to ensure every project exceeds expectations.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-8">
                  {stats.map((stat, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: idx * 0.1, type: 'spring' }}
                      viewport={{ once: true }}
                      className="text-center"
                    >
                      <div className="text-4xl font-bold text-primary mb-1">{stat.value}</div>
                      <div className="text-muted-foreground text-sm">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </ParallaxSection>

          {/* Right Values */}
          <ParallaxSection offset={-40}>
            <ScrollReveal direction="right">
              <div className="grid grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.15 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.05,
                      rotateZ: [0, -2, 2, 0],
                      transition: { duration: 0.3 }
                    }}
                    className="glass-card p-6 rounded-lg text-center"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="flex justify-center mb-3"
                    >
                      <value.icon className="h-8 w-8 text-primary" />
                    </motion.div>
                    <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>
          </ParallaxSection>
        </div>

        {/* CTA Section */}
        <ScrollReveal direction="up">
          <div className="text-center mt-20">
            <h3 className="text-3xl font-semibold mb-4 glow-text">
              Partner with G.R. Minds
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Whether you are a startup or an established business, we provide end-to-end IT solutions to transform your ideas into impactful digital products. 
              Let’s innovate together and take your business to the next level.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-primary text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:bg-primary/90 transition-all"
            >
              Contact Us Today
            </motion.button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default About;