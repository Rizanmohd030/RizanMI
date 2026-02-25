import { motion, useScroll, useVelocity, useTransform, useSpring } from "framer-motion";

export default function VelocityText({ className = "" }) {
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);

    const skewXRaw = useTransform(scrollVelocity, [-0.5, 0.5], ["15deg", "-15deg"]);
    const skewX = useSpring(skewXRaw, { mass: 3, stiffness: 400, damping: 50 });

    // Opposite moving lines based on normal page scroll
    const x1 = useSpring(useTransform(scrollY, [0, 1500], [0, -600]), { mass: 3, stiffness: 400, damping: 50 });
    const x2 = useSpring(useTransform(scrollY, [0, 1500], [-600, 0]), { mass: 3, stiffness: 400, damping: 50 });

    return (
        <div className={`flex flex-col gap-2 sm:gap-4 overflow-hidden w-[150%] -ml-[25%] lg:w-full lg:ml-0 ${className}`}>
            <motion.p
                style={{ skewX, x: x1 }}
                className="whitespace-nowrap text-[50px] sm:text-[70px] md:text-[90px] lg:text-[110px] font-black uppercase leading-[0.85] text-black/5"
            >
                AIM HIGH • BUILD FAST • CREATE •
            </motion.p>
            <motion.p
                style={{ skewX, x: x2 }}
                className="whitespace-nowrap text-[50px] sm:text-[70px] md:text-[90px] lg:text-[110px] font-black uppercase leading-[0.85] text-black/5"
            >
                KEEP LEARNING • KEEP BUILDING •
            </motion.p>
            <motion.p
                style={{ skewX, x: x1 }}
                className="whitespace-nowrap text-[50px] sm:text-[70px] md:text-[90px] lg:text-[110px] font-black uppercase leading-[0.85] text-black/5"
            >
                WRITE CLEAN CODE • FIX BUGS •
            </motion.p>
            <motion.p
                style={{ skewX, x: x2 }}
                className="whitespace-nowrap text-[50px] sm:text-[70px] md:text-[90px] lg:text-[110px] font-black uppercase leading-[0.85] text-black/5 hidden sm:block"
            >
                SOLVE PROBLEMS • BUILD THE FUTURE •
            </motion.p>
        </div>
    );
}
