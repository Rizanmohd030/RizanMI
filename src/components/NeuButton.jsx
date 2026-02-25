import { motion } from "framer-motion";

const DURATION = 0.2;
const STAGGER = 0.02;

export default function NeuButton({ children, href, onClick, variant = "default" }) {
    const isLink = !!href;

    const flipContent = (
        <motion.span
            initial="initial"
            whileHover="hovered"
            className="relative block overflow-hidden font-bold uppercase tracking-wider text-sm sm:text-base"
            style={{ lineHeight: 1 }}
        >
            <div className="flex items-center gap-2">
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
                        key={`top-${i}`}
                    >
                        {l === " " ? "\u00A0" : l}
                    </motion.span>
                ))}
            </div>
            <div className="absolute inset-0 flex items-center gap-2">
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
                        key={`bot-${i}`}
                    >
                        {l === " " ? "\u00A0" : l}
                    </motion.span>
                ))}
            </div>
        </motion.span>
    );

    const buttonClasses = `
    relative px-6 py-3 sm:px-10 sm:py-4
    border-2 border-black bg-white text-black
    transition-transform duration-200
    -translate-x-0 -translate-y-0
    hover:-translate-x-[3px] hover:-translate-y-[3px]
    active:translate-x-0 active:translate-y-0
    cursor-pointer
    flex items-center gap-3
  `;

    const content = (
        <div className="bg-black w-fit">
            <button className={buttonClasses} onClick={!isLink ? onClick : undefined}>
                {flipContent}
                <motion.span
                    className="text-lg"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                >
                    →
                </motion.span>
            </button>
        </div>
    );

    if (isLink) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer">
                {content}
            </a>
        );
    }

    return content;
}
