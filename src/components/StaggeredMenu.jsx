import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const StaggeredMenu = ({
  items = [],
  socialItems = [],
  accentColor = "#005588",
  layerColors = ["#e6f4f8", "#1691DB", "#1691DB"]

}) => {
  const [open, setOpen] = useState(false);

  const buttonRef = useRef(null);
  const panelRef = useRef(null);
  const layersRef = useRef([]);

  useLayoutEffect(() => {
    gsap.set([panelRef.current, ...layersRef.current], {
      xPercent: 100,
    });
  }, []);

  const openMenu = useCallback(() => {
    setOpen(true);

    gsap.timeline()
      .to(layersRef.current, {
        xPercent: 0,
        duration: 0.45,
        stagger: 0.06,
        ease: "power4.out",
      })
      .to(
        panelRef.current,
        {
          xPercent: 0,
          duration: 0.6,
          ease: "power4.out",
        },
        "-=0.25"
      );
  }, []);

  const closeMenu = useCallback(() => {
    gsap.timeline()
      .to(panelRef.current, {
        xPercent: 100,
        duration: 0.35,
        ease: "power3.in",
      })
      .to(
        layersRef.current,
        {
          xPercent: 100,
          duration: 0.35,
          stagger: 0.05,
          ease: "power3.in",
        },
        "-=0.25"
      )
      .add(() => setOpen(false));
  }, []);

  const toggleMenu = () => {
    open ? closeMenu() : openMenu();
  };

  // Click-away close
  useEffect(() => {
    if (!open) return;

    const handleClick = (e) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open, closeMenu]);

  return (
    <>
      {/* MENU BUTTON */}
     <button
  ref={buttonRef}
  onClick={toggleMenu}
  className={`fixed top-6 right-6 z-50 text-lg md:text-xl uppercase tracking-widest transition-colors ${
    open ? "text-[#1691DB]" : "text-white"
  }`}
>
  {open ? "Close" : "Menu"}
</button>



      {/* PRE-LAYERS */}
      {layerColors.map((color, i) => (
        <div
          key={i}
          ref={(el) => (layersRef.current[i] = el)}
          className="fixed top-0 right-0 h-screen w-[420px] z-30"
          style={{ background: color }}
        />
      ))}

      {/* MENU PANEL */}
      <aside
        ref={panelRef}
        className="fixed top-0 right-0 h-screen w-full md:w-[420px] bg-white z-40 px-12 py-24"
      >
        <nav className="flex flex-col gap-6">
          {items.map((item, i) => (
            <a
              key={i}
              href={item.link}
              className="text-4xl font-semibold text-black hover:opacity-70 transition"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {socialItems.length > 0 && (
          <div className="mt-16">
            <p
              className="mb-4 text-sm uppercase tracking-widest"
              style={{ color: accentColor }}
            >
              Socials
            </p>
            <div className="flex gap-6">
              {socialItems.map((s, i) => (
                <a
                  key={i}
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:opacity-60 transition"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </aside>
    </>
  );
};

export default StaggeredMenu;
