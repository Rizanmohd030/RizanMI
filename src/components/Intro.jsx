import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Intro({ onComplete }) {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const t = setTimeout(() => {
            setVisible(false);
            onComplete?.();
        }, 2200);
        return () => clearTimeout(t);
    }, []);

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    key="intro"
                    className="fixed inset-0 z-[999] bg-black flex items-center justify-center"
                    initial={{ opacity: 1 }}
                    exit={{ y: "-100%", transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } }}
                >
                    {/* Name reveal */}
                    <div className="overflow-hidden px-6 w-full flex justify-center">
                        <motion.h1
                            className="text-white font-black tracking-tight select-none text-center whitespace-nowrap"
                            style={{ fontSize: "clamp(1.6rem, 8vw, 6rem)", fontFamily: "'Futura PT', Futura, sans-serif" }}
                            initial={{ y: "100%" }}
                            animate={{ y: "0%", transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: 0.2 } }}
                        >
                            мой portfolio
                        </motion.h1>
                    </div>

                    {/* Subtle subtitle */}
                    <motion.p
                        className="absolute bottom-10 left-0 right-0 text-center text-white/30 text-xs uppercase tracking-[0.4em]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { delay: 0.7, duration: 0.5 } }}
                    >
                        Software Developer
                    </motion.p>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
