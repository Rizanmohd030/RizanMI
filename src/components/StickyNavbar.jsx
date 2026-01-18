import { useState } from "react";

export default function StickyNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <nav
        className="
          bg-white/80
          backdrop-blur-md
          shadow-sm
          border-b
          border-black/5
        "
      >
        <div className="max-w-[1850px] mx-auto px-6 py-4 flex items-center justify-between">

          {/* LOGO */}
          <h1 className="text-xl font-semibold tracking-wide">
            RIZAN
          </h1>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex gap-10 text-lg font-medium">
            <li><a href="/" className="hover:opacity-60">Home</a></li>
            <li><a href="#projects" className="hover:opacity-60">Projects</a></li>
            <li><a href="/about" className="hover:opacity-60">About</a></li>
            <li><a href="#contact" className="hover:opacity-60">Contact</a></li>
          </ul>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden px-6 pb-6">
            <ul className="flex flex-col gap-4 text-lg">
              <li><a href="/" onClick={() => setOpen(false)}>Home</a></li>
              <li><a href="#projects" onClick={() => setOpen(false)}>Projects</a></li>
              <li><a href="/about" onClick={() => setOpen(false)}>About</a></li>
              <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
