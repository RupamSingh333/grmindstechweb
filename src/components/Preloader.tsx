import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "@/assets/logo-big-transparent.png";

const Preloader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time (e.g., 2.5 seconds)
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{
                        y: "-100%",
                        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
                    }}
                    className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-[#030712]"
                >
                    {/* Central Logo Animation */}
                    <div className="relative flex flex-col items-center">
                        {/* Liquid Glow behind logo */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: [0.8, 1.2, 1], opacity: [0, 0.3, 0.15] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute inset-0 bg-cyan-500 blur-[60px] rounded-full"
                        />

                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative z-10"
                        >
                            <img src={logo} alt="GR Minds" className="h-16 md:h-24 w-auto brightness-125" />
                        </motion.div>

                        {/* Progress Bar (Liquid Style) */}
                        <div className="mt-10 w-48 h-[2px] bg-white/5 rounded-full overflow-hidden relative">
                            <motion.div
                                initial={{ x: "-100%" }}
                                animate={{ x: "0%" }}
                                transition={{ duration: 2, ease: "easeInOut" }}
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
                            />
                        </div>

                        {/* Loading Text */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, 1, 0.5] }}
                            transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                            className="mt-4 text-[10px] font-black uppercase tracking-[0.5em] text-cyan-500"
                        >
                            Initialising Systems
                        </motion.p>
                    </div>

                    {/* Background Decorative Grid */}
                    <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;