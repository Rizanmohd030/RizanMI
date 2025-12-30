import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PillNav from "./PillNav";
import { NAV_ITEMS } from "../constants/navItems";

export default function Navbar() {
  const [time, setTime] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
          timeZone: "Asia/Kolkata",
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* TOP BAR */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#0f172a] px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* LEFT — TIME */}
          <div className="text-white font-bold tracking-wide">
            IST · {time}
          </div>

          {/* RIGHT — HAMBURGER */}
          <button
            className="text-white text-3xl"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>
      </header>

      {/* FULLSCREEN MENU */}
      {open && (
        <div className="fixed inset-0 z-40 bg-[#c8d8e4] flex flex-col justify-center items-center relative">
          
          {/* CLOSE */}
          <button
            className="absolute top-6 right-6 text-4xl text-[#0f172a]"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>

          {/* PILL NAV (ALL CONTENT HERE) */}
          <div className="mb-16">
            <PillNav
              items={NAV_ITEMS}
              baseColor="#0f172a"
              pillColor="#ffffff"
              pillTextColor="#0f172a"
              hoveredPillTextColor="#ffffff"
            />
          </div>

          {/* FALLBACK / OPTIONAL TEXT LINKS (optional) */}
          <nav className="hidden">
            {NAV_ITEMS.map(item => (
              <Link key={item.href} to={item.href} />
            ))}
          </nav>

          {/* TIME — BIG */}
          <div className="absolute bottom-6 left-6 text-5xl font-bold uppercase text-[#0f172a]">
            IST · {time}
          </div>
        </div>
      )}
    </>
  );
}
