import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

// Images
import personImage from "../assets/images/person-image.PNG";
import footerQuoteImage from "../assets/images/footer-quote.png";
import bgNews from "../assets/images/japnews.jpg"; 

import HeroVelocity from "../components/HeroVelocity";

export default function Hero() {
  const [time, setTime] = useState("");
  const heroRef = useRef(null);

  // TIME
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hrs = now.getHours().toString().padStart(2, "0");
      const mins = now.getMinutes().toString().padStart(2, "0");
      setTime(`${hrs}:${mins}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={heroRef} className="h-screen relative overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgNews})` }}
      />

      {/* Soft overlay */}
      <div className="absolute inset-0 -z-10 bg-white/80" />

      {/* Main Container */}
      <div className="relative h-full max-w-[1853px] mx-auto -mt-20">

        {/* FLOATING RIZAN */}
        <motion.div
          className="absolute top-[100px] left-4 md:left-8 lg:left-[16px]"
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <h1 className="text-[18vw] md:text-[15vw] lg:text-[12vw] xl:text-[280px] 2xl:text-[310.69px] font-black leading-none tracking-tight text-black">
            RIZAN
          </h1>
        </motion.div>

        {/* Subtitle */}
        <div
          className="absolute z-30"
          style={{ top: "420px", left: "650px" }} // moved UP slightly
        >
          <p className="text-2xl md:text-3xl lg:text-[36px] font-semibold text-black whitespace-nowrap">
            ( SOFTWARE DEVELOPER )*
          </p>
        </div>

        {/* Color Box */}
<div
  className="absolute left-4 right-4 md:left-8 md:right-8 lg:left-[16px] lg:right-[16px]"
  style={{ top: "480px", height: "485px" }}
>
  <div className="relative w-full h-full rounded-[13px] overflow-hidden">

    {/* COLORS */}
    <div className="absolute inset-0 bg-[#B50106]" />
    <div className="absolute inset-0 left-1/2 bg-[#F96314]" />

   {/* SCROLL CONTROLLER */}
<div className="absolute inset-0 z-30 pointer-events-none">
  <HeroVelocity />
</div>

    {/* Quote */}
    <div
      className="absolute"
      style={{
        left: "16px",
        bottom: "90px",
        width: "min(863px, 50%)",
      }}
    >
      <img
        src={footerQuoteImage}
        alt="quote"
        className="w-full h-auto object-contain"
      />
    </div>

  </div>
</div>
        {/* Person */}
        <div
          className="absolute pointer-events-none z-20"
          style={{
            right: "80px",
            top: "80px", // slightly higher
            width: "min(950px, 48vw)",
          }}
        >
          <img
            src={personImage}
            alt="Rizan"
            className="w-full h-auto object-contain"
          />
        </div>

      </div>

      {/* Scroll */}
      

    </section>
  );
}
