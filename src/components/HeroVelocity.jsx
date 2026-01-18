import {
  motion,
  useScroll,
  useTransform,
  useSpring
} from "framer-motion";
import { useRef } from "react";

export default function HeroVelocity() {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const xRaw = useTransform(
    scrollYProgress,
    [0, 1],
    [800, 0] // RIGHT -> CUT
  );

  const x = useSpring(xRaw, {
    stiffness: 150,
    damping: 25
  });

  return (
   <section
  ref={targetRef}
  className="absolute top-0 left-0 w-full h-[250vh] relative"
>

      {/* Sticky Layer */}
      <div className="sticky top-0 h-screen flex items-center">
        <motion.p
          style={{ x }}
          className="
            text-5xl
            md:text-7xl
            font-black
            uppercase
            tracking-tight
            text-white
            pl-[52%]
            whitespace-nowrap
          "
        >
          Don't waste it. It's time to SHIFT.
        </motion.p>
      </div>
    </section>
  );
}
