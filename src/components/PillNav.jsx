import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import "./PillNav.css";

export default function PillNav({
  items = [],
  baseColor = "#0f172a",
  pillColor = "#ffffff",
  pillTextColor = "#0f172a",
  hoveredPillTextColor = "#ffffff",
  ease = "power3.out",
}) {
  const circleRefs = useRef([]);
  const timelines = useRef([]);
  const location = useLocation();

  useEffect(() => {
    circleRefs.current.forEach((circle, i) => {
      if (!circle?.parentElement) return;

      const pill = circle.parentElement;
      const rect = pill.getBoundingClientRect();
      const h = rect.height;
      const w = rect.width;

      const R = ((w * w) / 4 + h * h) / (2 * h);
      const D = Math.ceil(2 * R);
      const delta = Math.ceil(R - Math.sqrt(R * R - (w * w) / 4));

      circle.style.width = `${D}px`;
      circle.style.height = `${D}px`;
      circle.style.bottom = `-${delta}px`;

      gsap.set(circle, {
        xPercent: -50,
        scale: 0,
        transformOrigin: `50% ${D - delta}px`,
      });

      const label = pill.querySelector(".pill-label");
      const hoverLabel = pill.querySelector(".pill-label-hover");

      gsap.set(label, { y: 0 });
      gsap.set(hoverLabel, { y: h + 10, opacity: 0 });

      const tl = gsap.timeline({ paused: true });

      tl.to(circle, { scale: 1.15, duration: 0.4, ease }, 0);
      tl.to(label, { y: -(h + 8), duration: 0.4, ease }, 0);
      tl.to(hoverLabel, { y: 0, opacity: 1, duration: 0.4, ease }, 0);

      timelines.current[i] = tl;
    });
  }, [items, ease]);

  const handleEnter = i => timelines.current[i]?.play();
  const handleLeave = i => timelines.current[i]?.reverse();

  return (
    <div
      className="pill-nav-container"
      style={{
        "--base": baseColor,
        "--pill-bg": pillColor,
        "--pill-text": pillTextColor,
        "--hover-text": hoveredPillTextColor,
      }}
    >
      <ul className="pill-list">
        {items.map((item, i) => {
          const isActive = location.pathname === item.href;

          return (
            <li key={item.href}>
              <Link
                to={item.href}
                className={`pill ${isActive ? "is-active" : ""}`}
                onMouseEnter={() => handleEnter(i)}
                onMouseLeave={() => handleLeave(i)}
              >
                <span
                  className="hover-circle"
                  ref={el => (circleRefs.current[i] = el)}
                />
                <span className="label-stack">
                  <span className="pill-label">{item.label}</span>
                  <span className="pill-label-hover">{item.label}</span>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
