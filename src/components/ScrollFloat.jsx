import { useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollFloat = ({
  children,
  animationDuration = 1,
  ease = "back.inOut(2)",
  scrollStart = "center bottom+=50%",
  scrollEnd = "bottom bottom-=40%",
  stagger = 0.03,
  containerClassName = "",
  textClassName = "",
}) => {
  const containerRef = useRef(null);

  const splitText = useMemo(() => {
    if (typeof children !== "string") return children;
    return children.split("").map((char, i) => (
      <span key={i} className="inline-block">
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const chars = el.querySelectorAll(".inline-block");

    gsap.fromTo(
      chars,
      {
        opacity: 0,
        yPercent: 120,
        scaleY: 2.3,
        scaleX: 0.7,
        transformOrigin: "50% 0%",
      },
      {
        opacity: 1,
        yPercent: 0,
        scaleY: 1,
        scaleX: 1,
        duration: animationDuration,
        ease,
        stagger,
        scrollTrigger: {
          trigger: el,
          start: scrollStart,
          end: scrollEnd,
          scrub: true,
        },
      }
    );
  }, [animationDuration, ease, scrollStart, scrollEnd, stagger]);

  return (
    <h2
      ref={containerRef}
      className={`overflow-hidden text-center ${containerClassName}`}
    >
      <span
        className={`inline-block font-semibold text-[clamp(2.5rem,6vw,4.5rem)] ${textClassName}`}
      >
        {splitText}
      </span>
    </h2>
  );
};

export default ScrollFloat;
