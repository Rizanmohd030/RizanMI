import { useState } from "react";
import { motion } from "framer-motion";
import DecryptedText from "../components/Decrypt";
import VelocityText from "../components/VelocityText";

export default function Hero() {
  const [decryptKey, setDecryptKey] = useState(0);

  return (
    <section className="min-h-screen flex items-center pt-24 pb-16 px-8 sm:px-16 lg:px-24 overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center relative">

        {/* LEFT SIDE (Content) */}
        <div className="lg:col-span-6 z-20 flex flex-col justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[25vw] sm:text-[18vw] lg:text-[140px] xl:text-[180px] font-black leading-[0.85] tracking-tight text-black"
          >
            RIZAN
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-4 sm:mt-6 cursor-pointer w-fit"
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
              className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-[0.2em]"
              encryptedClassName="text-black/30 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-[0.2em]"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-6 sm:mt-10 text-lg sm:text-xl md:text-2xl text-black/60 max-w-[500px] leading-relaxed font-medium"
          >
            Building scalable, high-performance web applications with clean architecture and smooth interactions.
          </motion.p>
        </div>

        {/* RIGHT SIDE (VelocityText Background) */}
        <div className="lg:col-span-6 absolute lg:relative inset-0 lg:inset-auto w-full h-[60vh] lg:h-[80vh] flex items-center justify-center lg:justify-end opacity-40 lg:opacity-100 z-10 pointer-events-none mt-32 lg:mt-0">
          <VelocityText />
        </div>

      </div>
    </section>
  );
}
