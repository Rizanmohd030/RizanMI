import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function VelocityText({ className = "" }) {
    const lines = [
        "DESIGNING...",
        "CODING!",
        "BUILDING..."
    ];

    // Smaller, more balanced font sizes for right-column background
    const lineStyle = "whitespace-nowrap font-black italic uppercase leading-[1] text-black text-[36px] sm:text-[44px] md:text-[52px] lg:text-[62px] opacity-0";

    return (
        <div className={`flex flex-col gap-6 sm:gap-8 w-full items-end ${className}`}>
            {lines.map((text, i) => (
                <p
                    key={i}
                    id={`velocity-line-${i}`}
                    className={lineStyle}
                >
                    {text}
                </p>
            ))
            }
        </div >
    );
}
