import { useEffect, useRef } from "react";
import WAVES from "vanta/dist/vanta.waves.min";
import * as THREE from "three";
import StaggeredMenu from "../components/StaggeredMenu";

function Hero() {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    if (!vantaEffect.current && vantaRef.current) {
      vantaEffect.current = WAVES({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        scale: 1,
        scaleMobile: 1,
        color: 0x005588,
        shininess: 30,
        waveHeight: 15,
        waveSpeed: 1,
        zoom: 1,
      });
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* VANTA BACKGROUND */}
      <div ref={vantaRef} className="absolute inset-0 z-0" />

      {/* MENU (TEMP – FOR TESTING) */}
      <div className="absolute top-0 right-0 z-20">
        <StaggeredMenu
          position="right"
          items={[
            { label: "Home", ariaLabel: "Go to home page", link: "/" },
            { label: "About", ariaLabel: "Learn about me", link: "/about" },
            { label: "Contact", ariaLabel: "Get in touch", link: "#contact" },
          ]}
          socialItems={[
            { label: "GitHub", link: "https://github.com/Rizanmohd030" },
            { label: "LinkedIn", link: "https://www.linkedin.com/in/rizan-mohammed-ismail-b059b7269/" },
          ]}
          displaySocials={true}
          displayItemNumbering={true}
          menuButtonColor="#ffffff"
          openMenuButtonColor="#ffffff"
          changeMenuColorOnOpen={false}
          accentColor="#005588"
          colors={["#e6f4f8", "#cfeaf1"]}
        />
      </div>

      {/* HERO CONTENT */}
      <div className="relative z-10 min-h-screen flex items-center justify-center text-center">
        <div className="px-6">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-semibold text-white">
            Rizan
          </h1>

          <h2 className="mt-2 text-5xl md:text-6xl lg:text-7xl font-medium text-white/90">
            Mohammed Ismail
          </h2>

          <p className="mt-6 text-2xl md:text-3xl text-[#f6f0d7]">
            MERN Stack Developer
          </p>

          <a
            href="#contact"
            className="mt-10 inline-flex items-center gap-2 text-lg text-[#f6f0d7] hover:text-white transition"
          >
            Get in Touch <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
