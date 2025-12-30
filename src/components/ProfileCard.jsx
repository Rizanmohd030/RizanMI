import React, { useEffect, useRef, useCallback, useMemo } from "react";
import "./ProfileCard.css";

const DEFAULT_INNER_GRADIENT =
  "linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)";

const clamp = (v, min = 0, max = 100) => Math.min(Math.max(v, min), max);

const ProfileCard = ({
avatarUrl="/RizanProfile.jpg",
  name = "Rizan Mohammed",
  title = "MERN Stack Developer",
  handle = "rizan.dev",
  showUserInfo = false,
  enableTilt = true,
  enableMobileTilt = false,
  behindGlowEnabled = false,
}) => {
  const wrapRef = useRef(null);
  const shellRef = useRef(null);

  const tiltEngine = useMemo(() => {
    if (!enableTilt) return null;

    let rafId = null;
    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;

    const setVars = (x, y) => {
      const wrap = wrapRef.current;
      const shell = shellRef.current;
      if (!wrap || !shell) return;

      const w = shell.clientWidth || 1;
      const h = shell.clientHeight || 1;

      const px = clamp((100 / w) * x);
      const py = clamp((100 / h) * y);

      wrap.style.setProperty("--pointer-x", `${px}%`);
      wrap.style.setProperty("--pointer-y", `${py}%`);
      wrap.style.setProperty("--rotate-x", `${-(px - 50) / 5}deg`);
      wrap.style.setProperty("--rotate-y", `${(py - 50) / 4}deg`);
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;
      setVars(currentX, currentY);

      if (
        Math.abs(targetX - currentX) > 0.1 ||
        Math.abs(targetY - currentY) > 0.1
      ) {
        rafId = requestAnimationFrame(animate);
      }
    };

    return {
      setTarget(x, y) {
        targetX = x;
        targetY = y;
        if (!rafId) rafId = requestAnimationFrame(animate);
      },
      reset() {
        const shell = shellRef.current;
        if (!shell) return;
        this.setTarget(shell.clientWidth / 2, shell.clientHeight / 2);
      },
      destroy() {
        if (rafId) cancelAnimationFrame(rafId);
      },
    };
  }, [enableTilt]);

  const onMove = useCallback(
    e => {
      if (!tiltEngine) return;
      const rect = shellRef.current.getBoundingClientRect();
      tiltEngine.setTarget(e.clientX - rect.left, e.clientY - rect.top);
    },
    [tiltEngine]
  );

  const onLeave = useCallback(() => {
    tiltEngine?.reset();
  }, [tiltEngine]);

  useEffect(() => {
    if (!enableTilt) return;
    tiltEngine?.reset();
    return () => tiltEngine?.destroy();
  }, [enableTilt, tiltEngine]);

  return (
    <div
      ref={wrapRef}
      className="pc-card-wrapper"
      style={{
        "--inner-gradient": DEFAULT_INNER_GRADIENT,
      }}
    >
      {behindGlowEnabled && <div className="pc-behind" />}

      <div
        ref={shellRef}
        className="pc-card-shell"
        onMouseMove={onMove}
        onMouseLeave={onLeave}
      >
        <div className="pc-card">
          <div className="pc-inside">
            <img className="pc-avatar" src={avatarUrl} alt={name} />

            <div className="pc-details">
              <h3>{name}</h3>
              <p>{title}</p>
            </div>

            {showUserInfo && (
              <div className="pc-user">
                <span>@{handle}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
