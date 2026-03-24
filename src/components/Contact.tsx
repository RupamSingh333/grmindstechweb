import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import ScrollReveal from './ScrollReveal';
import ParallaxSection from './ParallaxSection';
import { useState } from 'react';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'info@grminds.tech',
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+91 75057 17444',
  },
  {
    icon: MapPin,
    title: 'Our Offices',
    value: 'addresses',
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
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    const mailtoLink = `mailto:info@grmindstech.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <section className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to start your next project? Let's discuss how we can help you
              achieve your goals.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* FORM */}
          <ParallaxSection offset={30}>
            <ScrollReveal direction="left">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Send us a message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Name
                        </label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Rohit Sharma"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="rohit@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Project inquiry"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full group">
                      Send Message
                      <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </ScrollReveal>
          </ParallaxSection>

          {/* CONTACT INFO */}
          <ParallaxSection offset={-30}>
            <ScrollReveal direction="right">
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="glass-card p-6 rounded-lg hover:bg-muted/20 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <motion.div
                        className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <info.icon className="h-6 w-6 text-primary" />
                      </motion.div>

                      <div>
                        <h3 className="text-lg font-semibold mb-2">
                          {info.title}
                        </h3>

                        {info.value === 'addresses' ? (
                          <div className="text-muted-foreground space-y-3">
                            <div>
                              <p className="font-medium text-foreground">
                                Uttar Pradesh Office
                              </p>
                              <p className="text-sm">
                                2.6/1-BM Raj Tower, Varanasi<br />
                                Uttar Pradesh - 221007
                              </p>
                            </div>

                            <div className="border-t pt-3">
                              <p className="font-medium text-foreground">
                                Bihar Office
                              </p>
                              <p className="text-sm">
                                Singh House, Kothwa Khagaul, Patna<br />
                                Bihar - 801105
                              </p>
                            </div>
                          </div>
                        ) : (
                          <p className="text-muted-foreground">
                            {info.value}
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}

                <Card className="glass-card mt-8">
                  <CardHeader>
                    <CardTitle>Office Hours</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9:00 AM - 6:00 PM
                    </p>
                    <p className="text-muted-foreground">
                      Saturday: 10:00 AM - 4:00 PM
                    </p>
                    <p className="text-muted-foreground">Sunday: Closed</p>
                  </CardContent>
                </Card>
              </div>
            </ScrollReveal>
          </ParallaxSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;