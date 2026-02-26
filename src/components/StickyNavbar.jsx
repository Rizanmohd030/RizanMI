import React, { useCallback, useLayoutEffect, useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';

export default function StickyNavbar({
  position = 'right',
  colors = ['#e6e7f0', '#5b5f8a', '#3f436d'],
  menuButtonColor = '#000',
  openMenuButtonColor = '#000',
  changeMenuColorOnOpen = true,
  accentColor = '#3f436d',
  closeOnClickAway = true,
}) {
  const items = [
    { label: 'Work', link: '#projects' },
    { label: 'About', link: '#about' },
    { label: 'Contact', link: '#contact' }
  ];

  const socialItems = [
    { label: 'LinkedIn', link: 'https://www.linkedin.com/in/rizanmohd030/' },
    { label: 'GitHub', link: 'https://github.com/Rizanmohd030' },
  ];
  const displaySocials = true;
  const displayItemNumbering = true;

  const [open, setOpen] = useState(false);
  const openRef = useRef(false);

  const panelRef = useRef(null);
  const preLayersRef = useRef(null);
  const preLayerElsRef = useRef([]);

  const plusHRef = useRef(null);
  const plusVRef = useRef(null);
  const iconRef = useRef(null);

  const textInnerRef = useRef(null);
  const textWrapRef = useRef(null);
  const [textLines, setTextLines] = useState(['Menu', 'Close']);

  const openTlRef = useRef(null);
  const closeTweenRef = useRef(null);
  const spinTweenRef = useRef(null);
  const textCycleAnimRef = useRef(null);
  const colorTweenRef = useRef(null);

  const toggleBtnRef = useRef(null);
  const busyRef = useRef(false);

  const itemEntranceTweenRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const panel = panelRef.current;
      const preContainer = preLayersRef.current;

      const plusH = plusHRef.current;
      const plusV = plusVRef.current;
      const icon = iconRef.current;
      const textInner = textInnerRef.current;

      if (!panel || !plusH || !plusV || !icon || !textInner) return;

      let preLayers = [];
      if (preContainer) {
        preLayers = Array.from(preContainer.querySelectorAll('.sm-prelayer'));
      }
      preLayerElsRef.current = preLayers;

      const offscreen = position === 'left' ? -100 : 100;
      gsap.set([panel, ...preLayers], { xPercent: offscreen });

      gsap.set(plusH, { transformOrigin: '50% 50%', rotate: 0 });
      gsap.set(plusV, { transformOrigin: '50% 50%', rotate: 90 });
      gsap.set(icon, { rotate: 0, transformOrigin: '50% 50%' });

      gsap.set(textInner, { yPercent: 0 });

      if (toggleBtnRef.current) gsap.set(toggleBtnRef.current, { color: menuButtonColor });
    });
    return () => ctx.revert();
  }, [menuButtonColor, position]);

  const buildOpenTimeline = useCallback(() => {
    const panel = panelRef.current;
    const layers = preLayerElsRef.current;
    if (!panel) return null;

    openTlRef.current?.kill();
    if (closeTweenRef.current) {
      closeTweenRef.current.kill();
      closeTweenRef.current = null;
    }
    itemEntranceTweenRef.current?.kill();

    const itemEls = Array.from(panel.querySelectorAll('.sm-panel-itemLabel'));
    const numberEls = Array.from(panel.querySelectorAll('.sm-panel-list[data-numbering] .sm-panel-item'));
    const socialTitle = panel.querySelector('.sm-socials-title');
    const socialLinks = Array.from(panel.querySelectorAll('.sm-socials-link'));

    const layerStates = layers.map(el => ({ el, start: Number(gsap.getProperty(el, 'xPercent')) }));
    const panelStart = Number(gsap.getProperty(panel, 'xPercent'));

    if (itemEls.length) gsap.set(itemEls, { yPercent: 140, rotate: 10 });
    if (numberEls.length) gsap.set(numberEls, { ['--sm-num-opacity']: 0 });
    if (socialTitle) gsap.set(socialTitle, { opacity: 0 });
    if (socialLinks.length) gsap.set(socialLinks, { y: 25, opacity: 0 });

    const tl = gsap.timeline({ paused: true });

    layerStates.forEach((ls, i) => {
      tl.fromTo(ls.el, { xPercent: ls.start }, { xPercent: 0, duration: 0.5, ease: 'power4.out' }, i * 0.07);
    });

    const lastTime = layerStates.length ? (layerStates.length - 1) * 0.07 : 0;
    const panelInsertTime = lastTime + (layerStates.length ? 0.08 : 0);
    const panelDuration = 0.65;

    tl.fromTo(
      panel,
      { xPercent: panelStart },
      { xPercent: 0, duration: panelDuration, ease: 'power4.out' },
      panelInsertTime
    );

    if (itemEls.length) {
      const itemsStartRatio = 0.15;
      const itemsStart = panelInsertTime + panelDuration * itemsStartRatio;

      tl.to(
        itemEls,
        { yPercent: 0, rotate: 0, duration: 1, ease: 'power4.out', stagger: { each: 0.1, from: 'start' } },
        itemsStart
      );

      if (numberEls.length) {
        tl.to(
          numberEls,
          { duration: 0.6, ease: 'power2.out', ['--sm-num-opacity']: 1, stagger: { each: 0.08, from: 'start' } },
          itemsStart + 0.1
        );
      }
    }

    if (socialTitle || socialLinks.length) {
      const socialsStart = panelInsertTime + panelDuration * 0.4;

      if (socialTitle) tl.to(socialTitle, { opacity: 1, duration: 0.5, ease: 'power2.out' }, socialsStart);
      if (socialLinks.length) {
        tl.to(
          socialLinks,
          {
            y: 0,
            opacity: 1,
            duration: 0.55,
            ease: 'power3.out',
            stagger: { each: 0.08, from: 'start' },
            onComplete: () => gsap.set(socialLinks, { clearProps: 'opacity' })
          },
          socialsStart + 0.04
        );
      }
    }

    openTlRef.current = tl;
    return tl;
  }, []);

  const playOpen = useCallback(() => {
    if (busyRef.current) return;
    busyRef.current = true;
    const tl = buildOpenTimeline();
    if (tl) {
      tl.eventCallback('onComplete', () => {
        busyRef.current = false;
      });
      tl.play(0);
    } else {
      busyRef.current = false;
    }
  }, [buildOpenTimeline]);

  const playClose = useCallback(() => {
    openTlRef.current?.kill();
    openTlRef.current = null;
    itemEntranceTweenRef.current?.kill();

    const panel = panelRef.current;
    const layers = preLayerElsRef.current;
    if (!panel) return;

    const all = [...layers, panel];
    closeTweenRef.current?.kill();

    const offscreen = position === 'left' ? -100 : 100;

    closeTweenRef.current = gsap.to(all, {
      xPercent: offscreen,
      duration: 0.32,
      ease: 'power3.in',
      overwrite: 'auto',
      onComplete: () => {
        const itemEls = Array.from(panel.querySelectorAll('.sm-panel-itemLabel'));
        if (itemEls.length) gsap.set(itemEls, { yPercent: 140, rotate: 10 });

        const numberEls = Array.from(panel.querySelectorAll('.sm-panel-list[data-numbering] .sm-panel-item'));
        if (numberEls.length) gsap.set(numberEls, { ['--sm-num-opacity']: 0 });

        const socialTitle = panel.querySelector('.sm-socials-title');
        const socialLinks = Array.from(panel.querySelectorAll('.sm-socials-link'));
        if (socialTitle) gsap.set(socialTitle, { opacity: 0 });
        if (socialLinks.length) gsap.set(socialLinks, { y: 25, opacity: 0 });

        busyRef.current = false;
      }
    });
  }, [position]);

  const animateIcon = useCallback(opening => {
    const icon = iconRef.current;
    const h = plusHRef.current;
    const v = plusVRef.current;
    if (!icon || !h || !v) return;

    spinTweenRef.current?.kill();

    if (opening) {
      gsap.set(icon, { rotate: 0, transformOrigin: '50% 50%' });
      spinTweenRef.current = gsap
        .timeline({ defaults: { ease: 'power4.out' } })
        .to(h, { rotate: 45, duration: 0.5 }, 0)
        .to(v, { rotate: -45, duration: 0.5 }, 0);
    } else {
      spinTweenRef.current = gsap
        .timeline({ defaults: { ease: 'power3.inOut' } })
        .to(h, { rotate: 0, duration: 0.35 }, 0)
        .to(v, { rotate: 90, duration: 0.35 }, 0)
        .to(icon, { rotate: 0, duration: 0.001 }, 0);
    }
  }, []);

  const animateColor = useCallback(
    opening => {
      const btn = toggleBtnRef.current;
      if (!btn) return;
      colorTweenRef.current?.kill();
      if (changeMenuColorOnOpen) {
        const targetColor = opening ? openMenuButtonColor : menuButtonColor;
        colorTweenRef.current = gsap.to(btn, { color: targetColor, delay: 0.18, duration: 0.3, ease: 'power2.out' });
      } else {
        gsap.set(btn, { color: menuButtonColor });
      }
    },
    [openMenuButtonColor, menuButtonColor, changeMenuColorOnOpen]
  );

  useEffect(() => {
    if (toggleBtnRef.current) {
      if (changeMenuColorOnOpen) {
        const targetColor = openRef.current ? openMenuButtonColor : menuButtonColor;
        gsap.set(toggleBtnRef.current, { color: targetColor });
      } else {
        gsap.set(toggleBtnRef.current, { color: menuButtonColor });
      }
    }
  }, [changeMenuColorOnOpen, menuButtonColor, openMenuButtonColor]);

  const animateText = useCallback(opening => {
    const inner = textInnerRef.current;
    if (!inner) return;

    textCycleAnimRef.current?.kill();

    const currentLabel = opening ? 'Menu' : 'Close';
    const targetLabel = opening ? 'Close' : 'Menu';
    const cycles = 3;

    const seq = [currentLabel];
    let last = currentLabel;
    for (let i = 0; i < cycles; i++) {
      last = last === 'Menu' ? 'Close' : 'Menu';
      seq.push(last);
    }
    if (last !== targetLabel) seq.push(targetLabel);
    seq.push(targetLabel);

    setTextLines(seq);
    gsap.set(inner, { yPercent: 0 });

    const lineCount = seq.length;
    const finalShift = ((lineCount - 1) / lineCount) * 100;

    textCycleAnimRef.current = gsap.to(inner, {
      yPercent: -finalShift,
      duration: 0.5 + lineCount * 0.07,
      ease: 'power4.out'
    });
  }, []);

  const toggleMenu = useCallback(() => {
    const target = !openRef.current;
    openRef.current = target;
    setOpen(target);

    if (target) {
      playOpen();
    } else {
      playClose();
    }

    animateIcon(target);
    animateColor(target);
    animateText(target);
  }, [playOpen, playClose, animateIcon, animateColor, animateText]);

  const closeMenu = useCallback(() => {
    if (openRef.current) {
      openRef.current = false;
      setOpen(false);
      playClose();
      animateIcon(false);
      animateColor(false);
      animateText(false);
    }
  }, [playClose, animateIcon, animateColor, animateText]);

  useEffect(() => {
    if (!closeOnClickAway || !open) return;

    const handleClickOutside = event => {
      if (
        panelRef.current &&
        !panelRef.current.contains(event.target) &&
        toggleBtnRef.current &&
        !toggleBtnRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [closeOnClickAway, open, closeMenu]);

  // Smooth scroll click handler
  const handleNavClick = (e, targetSelector) => {
    e.preventDefault();
    closeMenu();
    setTimeout(() => {
      const el = document.querySelector(targetSelector);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 400); // Wait for close animation
  };

  return (
    <>
      {/* BACKGROUND STICKY BLUR NAVBAR */}
      <header className="fixed top-0 left-0 w-full flex items-center justify-between px-8 py-5 sm:px-16 sm:py-6 bg-white/70 backdrop-blur-md border-b border-black/10 pointer-events-auto z-40 transition-all">
        <div className="text-xl sm:text-2xl font-black uppercase tracking-[0.1em] text-black">
          Bangalore, India
        </div>

        <button
          ref={toggleBtnRef}
          className="sm-toggle relative inline-flex items-center gap-[0.5rem] bg-transparent border-0 cursor-pointer text-black font-semibold text-lg sm:text-xl uppercase tracking-widest leading-none overflow-visible pointer-events-auto"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="staggered-menu-panel"
          onClick={toggleMenu}
          type="button"
        >
          <span
            ref={textWrapRef}
            className="sm-toggle-textWrap relative inline-block h-[1em] overflow-hidden whitespace-nowrap w-[var(--sm-toggle-width,auto)] min-w-[var(--sm-toggle-width,auto)]"
            aria-hidden="true"
          >
            <span ref={textInnerRef} className="sm-toggle-textInner flex flex-col leading-none">
              {textLines.map((l, i) => (
                <span className="sm-toggle-line block h-[1em] leading-none text-current" key={i}>
                  {l}
                </span>
              ))}
            </span>
          </span>

          <span
            ref={iconRef}
            className="sm-icon relative w-[18px] h-[18px] shrink-0 inline-flex items-center justify-center [will-change:transform]"
            aria-hidden="true"
          >
            <span
              ref={plusHRef}
              className="sm-icon-line absolute left-1/2 top-1/2 w-full h-[2px] bg-current rounded-[2px] -translate-x-1/2 -translate-y-1/2 [will-change:transform]"
            />
            <span
              ref={plusVRef}
              className="sm-icon-line sm-icon-line-v absolute left-1/2 top-1/2 w-full h-[2px] bg-current rounded-[2px] -translate-x-1/2 -translate-y-1/2 [will-change:transform]"
            />
          </span>
        </button>
      </header>

      {/* OVERLAY WRAPPER */}
      <div className="sm-scope fixed top-0 left-0 w-screen h-screen pointer-events-none z-50">
        <div
          className="staggered-menu-wrapper pointer-events-none relative w-full h-full"
          style={accentColor ? { ['--sm-accent']: accentColor } : undefined}
          data-position={position}
          data-open={open || undefined}
        >
          {/* PRE-LAYERS */}
          <div
            ref={preLayersRef}
            className="sm-prelayers absolute top-0 right-0 bottom-0 pointer-events-none z-[5]"
            aria-hidden="true"
          >
            {colors.slice().reverse().map((c, i) => (
              <div
                key={i}
                className="sm-prelayer absolute top-0 right-0 h-full w-full translate-x-0"
                style={{ background: c }}
              />
            ))}
          </div>

          {/* PANEL */}
          <aside
            id="staggered-menu-panel"
            ref={panelRef}
            className="staggered-menu-panel absolute top-0 right-0 h-full bg-white flex flex-col p-[6em_3em_2em_3em] md:p-[8em_4em_2em_4em] overflow-y-auto z-10 pointer-events-auto border-l border-black/10"
            aria-hidden={!open}
          >
            {/* Explicit Close Button inside the panel */}
            <button
              onClick={closeMenu}
              className="absolute top-6 right-6 p-4 text-black/40 hover:text-black font-bold uppercase tracking-widest text-sm transition-colors z-20 flex items-center gap-2"
            >
              Close ✕
            </button>

            <div className="sm-panel-inner flex-1 flex flex-col gap-6 md:gap-8 mt-10">
              <ul
                className="sm-panel-list list-none m-0 p-0 flex flex-col gap-2 md:gap-4"
                role="list"
                data-numbering={displayItemNumbering || undefined}
              >
                {items.map((it, idx) => (
                  <li className="sm-panel-itemWrap relative overflow-hidden leading-none" key={idx}>
                    <a
                      className="sm-panel-item relative text-black font-black text-4xl md:text-6xl cursor-pointer leading-tight tracking-tight uppercase transition-[color] duration-150 ease-linear inline-block no-underline pr-8"
                      href={it.link}
                      onClick={(e) => handleNavClick(e, it.link)}
                      data-index={idx + 1}
                    >
                      <span className="sm-panel-itemLabel inline-block [transform-origin:50%_100%] will-change-transform">
                        {it.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>

              {displaySocials && socialItems.length > 0 && (
                <div className="sm-socials mt-6 pt-6 md:pt-8 flex flex-col gap-4 md:gap-6 border-t border-black/10">
                  <h3 className="sm-socials-title m-0 text-sm md:text-base font-bold uppercase tracking-[0.2em] text-black/50">
                    Socials
                  </h3>
                  <ul className="sm-socials-list list-none m-0 p-0 flex flex-col gap-2">
                    {socialItems.map((s, i) => (
                      <li key={i} className="sm-socials-item">
                        <a
                          href={s.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="sm-socials-link text-xl md:text-2xl font-bold text-black no-underline relative inline-block py-1 transition-colors duration-300 ease-linear hover:text-accent group flex items-center gap-2"
                        >
                          {s.label}
                          <span className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">
                            →
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </aside>
        </div>

        <style>{`
          .sm-scope .staggered-menu-wrapper { position: relative; width: 100%; height: 100%; z-index: 50; }
          .sm-toggle:focus-visible { outline: 2px solid #000; outline-offset: 4px; border-radius: 4px; }
          .sm-scope .staggered-menu-panel { width: clamp(320px, 40vw, 480px); }
          .sm-scope .sm-prelayers { width: clamp(320px, 40vw, 480px); }
          .sm-panel-item:hover { color: var(--sm-accent); }
          .sm-socials-link:hover { color: var(--sm-accent); }
          .sm-scope .sm-panel-list[data-numbering] { counter-reset: smItem; }
          .sm-scope .sm-panel-list[data-numbering] .sm-panel-item::after { 
            counter-increment: smItem; 
            content: "0" counter(smItem, decimal); 
            position: absolute; 
            top: 0.25em; 
            right: 0; 
            font-size: 16px; 
            font-weight: 700; 
            color: var(--sm-accent); 
            opacity: var(--sm-num-opacity, 0); 
          }
          @media (max-width: 768px) {
            .sm-scope .staggered-menu-panel { width: 100%; }
            .sm-scope .sm-prelayers { width: 100%; }
          }
        `}</style>
      </div>
    </>
  );
}
