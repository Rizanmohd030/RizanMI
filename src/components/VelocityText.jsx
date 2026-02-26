import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function VelocityText({ className = "" }) {
    // Content as requested: First line is a 3-word sentence.
    const lines = [
        "CRAFTING DIGITAL EXPERIENCES", // Three words
        "BUILDING SCALABLE SOLUTIONS",
        "DESIGNING SEAMLESS INTERFACES"
    ];

    // Smaller, more balanced font sizes for right-column background
    const lineStyle = "whitespace-nowrap font-black italic uppercase leading-[1] text-black text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] opacity-0";

    return (
        <div className={`flex flex-col gap-6 sm:gap-8 w-full ${className}`}>
            {lines.map((text, i) => (
                <p
                    key={i}
                    id={`velocity-line-${i}`}
                    className={lineStyle}
                >
                    {text} • {text} •
                </p>
            ))}
        </div>
    );
}
