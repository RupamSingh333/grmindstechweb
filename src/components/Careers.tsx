import { motion } from 'framer-motion';
import { Briefcase, Users, Rocket, Heart } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const jobs = [
    {
        title: 'Frontend Developer (React)',
        type: 'Remote / Freelance',
        description:
            'Looking for a React developer with good understanding of modern UI, Tailwind, and API integration.',
    },
    {
        title: 'Backend Developer (Node.js)',
        type: 'Remote',
        description:
            'Seeking a Node.js developer familiar with REST APIs, databases, and scalable backend architecture.',
    },
    {
        title: 'UI/UX Designer',
        type: 'Part-Time',
        description:
            'Creative designer needed to craft modern, user-friendly interfaces for web and mobile apps.',
    },
];

const Career = () => {
    return (
        <section className="py-24 px-4 bg-muted/5" id="careers">
            <div className="container mx-auto max-w-6xl">

                {/* Heading */}
                <ScrollReveal direction="up">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Join <span className="glow-text">Our Team</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            We are building a passionate team of developers and designers who love creating impactful digital products.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Why Join Us */}
                <div className="grid md:grid-cols-4 gap-6 mb-16">
                    {[
                        {
                            icon: Rocket,
                            title: 'Growth',
                            desc: 'Work on real projects and grow your skills.',
                        },
                        {
                            icon: Users,
                            title: 'Team Culture',
                            desc: 'Collaborative and supportive environment.',
                        },
                        {
                            icon: Briefcase,
                            title: 'Flexible Work',
                            desc: 'Remote-friendly and flexible hours.',
                        },
                        {
                            icon: Heart,
                            title: 'Passion',
                            desc: 'We value creativity and dedication.',
                        },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            className="glass-card p-6 text-center rounded-lg"
                        >
                            <item.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                            <h3 className="font-semibold mb-1">{item.title}</h3>
                            <p className="text-sm text-muted-foreground">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Job Listings */}
                <ScrollReveal direction="up">
                    <div className="space-y-6">
                        {jobs.map((job, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.02 }}
                                className="glass-card p-6 rounded-lg flex flex-col md:flex-row md:items-center md:justify-between gap-4"
                            >
                                <div>
                                    <h3 className="text-xl font-semibold">{job.title}</h3>
                                    <p className="text-sm text-primary mb-1">{job.type}</p>
                                    <p className="text-muted-foreground text-sm">
                                        {job.description}
                                    </p>
                                </div>

                                <button className="bg-primary text-background px-5 py-2 rounded-md hover:bg-primary/80 transition">
                                    Apply Now
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </ScrollReveal>

                {/* No Openings CTA */}
                <div className="text-center mt-16">
                    <p className="text-muted-foreground mb-4">
                        Don’t see a role that fits you?
                    </p>
                    <a
                        href="mailto:info@grminds.tech"
                        className="text-primary font-medium hover:underline"
                    >
                        Send us your resume
                    </a>
                </div>

            </div>
        </section>
    );
};

export default Career;