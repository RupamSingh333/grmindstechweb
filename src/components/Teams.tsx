import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import ScrollReveal from './ScrollReveal';
import profile1 from '@/assets/rupamsingh.png';
import profile2 from '@/assets/gauravsir.jpeg';
const teamMembers = [
    {
        name: 'Gaurav Upadhyay',
        role: 'Founder & Senior Software Engineer',
        experience: '8+ Years Experience in IT Development',
        image: profile2, // 👉 add your image here
        description:
            'A visionary leader with over 8 years of experience in IT development, specializing in scalable systems, backend architecture, and enterprise solutions. Passionate about building reliable and future-ready technology.',
    },
    {
        name: 'Rupam Singh',
        role: 'Co-Founder & Full Stack Developer',
        experience: '5+ Years Experience in Web & Mobile Development',
        image: profile1, // 👉 add your image here
        description:
            'A versatile developer with expertise in web and mobile technologies. Focused on creating high-performance applications, modern UI/UX, and delivering complete digital solutions from idea to execution.',
    },
];

const Team = () => {
    return (
        <section className="py-24 px-4 relative" id="teams">
            <div className="container mx-auto max-w-6xl">

                {/* Heading */}
                <ScrollReveal direction="up">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
                            Meet Our Leadership
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Driven by innovation and experience, our leadership team is committed
                            to delivering powerful and scalable digital solutions that help businesses grow.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Team Cards */}
                <div className="grid md:grid-cols-2 gap-10">
                    {teamMembers.map((member, index) => (
                        <ScrollReveal key={index} direction="up">
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.03 }}
                            >
                                <Card className="glass-card rounded-xl hover:bg-muted/20 transition-all p-6 text-center">

                                    {/* Profile Image */}
                                    <div className="flex justify-center mb-4">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-28 h-28 object-cover rounded-full border-4 border-primary/20 shadow-md hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>

                                    <CardContent className="space-y-3 p-0">
                                        {/* Name */}
                                        <h3 className="text-xl font-semibold">
                                            {member.name}
                                        </h3>

                                        {/* Role */}
                                        <p className="text-primary font-medium text-sm">
                                            {member.role}
                                        </p>

                                        {/* Experience */}
                                        <p className="text-xs text-muted-foreground">
                                            {member.experience}
                                        </p>

                                        {/* Description */}
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {member.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </ScrollReveal>
                    ))}
                </div>

                {/* Bottom Section */}
                <ScrollReveal direction="up">
                    <div className="text-center mt-20">
                        <h3 className="text-2xl font-semibold mb-4">
                            Building the Future Together
                        </h3>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            With a strong foundation in technology and innovation, our team combines
                            experience, creativity, and dedication to deliver impactful digital products.
                            We believe in long-term partnerships, continuous growth, and turning ideas
                            into successful realities.
                        </p>
                    </div>
                </ScrollReveal>

            </div>
        </section>
    );
};

export default Team;