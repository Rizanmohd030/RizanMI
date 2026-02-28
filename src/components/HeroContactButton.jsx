import { motion } from "framer-motion";

export default function HeroContactButton() {
    const scrollToContact = () => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <motion.button
            onClick={scrollToContact}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
            whileHover="hover"
            className="mt-8 sm:mt-12 flex items-center gap-3 text-black/50 hover:text-black transition-colors duration-300 font-bold tracking-widest text-sm sm:text-base group"
            style={{ fontFamily: "'Futura PT', Futura, sans-serif" }}
        >
            <span className="border-b-2 border-transparent group-hover:border-black/20 pb-1 transition-colors duration-300">CONTACT ME</span>
            <motion.span
                variants={{
                    hover: { x: 5 },
                }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="text-lg"
            >
                →
            </motion.span>
        </motion.button>
    );
}
