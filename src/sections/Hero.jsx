import { useState, useRef, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DecryptedText from "../components/Decrypt";
import ScrollDino from "../components/ScrollDino";
import { BoxesCore } from "../components/ui/BackgroundBoxes";
import HeroContactButton from "../components/HeroContactButton";

gsap.registerPlugin(ScrollTrigger);

export default function Hero({ introComplete }) {
  const [decryptKey, setDecryptKey] = useState(0);
  const containerRef = useRef(null);
  const leftContentRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Pin the entire section while scrolling
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=300%", // Longer scroll for 3 sequential reveals
          pin: true,
          scrub: 1,
        },
      });

      // Subtle dimming of text at the very end to signal transition
      tl.to(leftContentRef.current, {
        opacity: 0.6,
        duration: 1,
      }, "+=0.5");

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="hero-section"
      className="h-screen flex items-center px-8 sm:px-16 lg:px-24 overflow-hidden relative"
    >
      {/* BACKGROUND BOXES (Interactive) - Hidden on mobile for performance */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none hidden md:block">
        <BoxesCore />
        {/* Subtle radial mask to fade the boxes into the existing dotted background */}
        <div className="pointer-events-none absolute inset-0 z-10 bg-[#F3F4F6] [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black_80%)]" />
      </div>

      <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-20 pointer-events-none">

        {/* LEFT SIDE (Content) */}
        <div ref={leftContentRef} className="lg:col-span-4 flex flex-col justify-center relative z-20 pointer-events-auto pt-16 sm:pt-20 lg:pt-0">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[25vw] sm:text-[18vw] lg:text-[120px] xl:text-[150px] font-black leading-[0.85] tracking-tight text-black drop-shadow-sm"
            style={{ fontFamily: "'Sungkem', sans-serif" }}
          >
            RIZAN
          </motion.h1>

          {introComplete && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="mt-6 sm:mt-8 cursor-pointer w-fit"
              onMouseEnter={() => setDecryptKey((prev) => prev + 1)}
            >
              <DecryptedText
                key={decryptKey}
                text="SOFTWARE DEVELOPER"
                characters="アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン"
                speed={130}
                maxIterations={35}
                sequential={true}
                revealDirection="start"
                animateOn="view"
                className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold tracking-[0.2em] drop-shadow-sm"
                encryptedClassName="text-black/30 text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold tracking-[0.2em]"
              />
            </motion.div>
          )}

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8 sm:mt-10 text-lg sm:text-xl text-black/60 max-w-[500px] leading-relaxed font-medium"
          >
           Bridging legacy systems and modern web{"\u2014"}<span className="border-b-4 border-yellow-400 pb-[1px]">ASP.NET</span> to <span className="border-b-4 border-yellow-400 pb-[1px]">MERN</span>, I build what{"\u2019"}s next. Driven to craft scalable, impactful applications while constantly leveling up my stack.

          </motion.p>

          <HeroContactButton />
        </div>

        {/* RIGHT SIDE (Dino Scroll) */}
        <div className="lg:col-span-8 flex flex-col justify-center items-center lg:items-end relative z-10 pointer-events-none pb-8 lg:pb-0">
          <ScrollDino />
        </div>

      </div>
    </section>
  );
}
