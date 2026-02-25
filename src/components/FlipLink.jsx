import { motion } from "framer-motion";

const DURATION = 0.25;
const STAGGER = 0.025;

export default function FlipLink({ children, href, onClick, className = "" }) {
    return (
        <motion.a
            initial="initial"
            whileHover="hovered"
            href={href}
            onClick={onClick}
            className={`relative block overflow-hidden whitespace-nowrap font-black uppercase ${className}`}
            style={{ lineHeight: 0.75 }}
        >
            <div>
                {children.split("").map((l, i) => (
                    <motion.span
                        variants={{
                            initial: { y: 0 },
                            hovered: { y: "-100%" },
                        }}
                        transition={{
                            duration: DURATION,
                            ease: "easeInOut",
                            delay: STAGGER * i,
                        }}
                        className="inline-block"
                        key={i}
                    >
                        {l === " " ? "\u00A0" : l}
                    </motion.span>
                ))}
            </div>
            <div className="absolute inset-0">
                {children.split("").map((l, i) => (
                    <motion.span
                        variants={{
                            initial: { y: "100%" },
                            hovered: { y: 0 },
                        }}
                        transition={{
                            duration: DURATION,
                            ease: "easeInOut",
                            delay: STAGGER * i,
                        }}
                        className="inline-block"
                        key={i}
                    >
                        {l === " " ? "\u00A0" : l}
                    </motion.span>
                ))}
            </div>
        </motion.a>
    );
}
