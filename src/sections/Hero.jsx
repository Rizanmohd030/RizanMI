import ProfileCard from "../components/ProfileCard";

function Hero() {
  return (
    <section className="min-h-screen pt-28">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* LEFT: TEXT */}
        <div>
          <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
            Rizan <br /> Mohammed Ismail
          </h1>

          <p className="mt-4 text-xl text-[var(--text-muted)]">
            MERN Stack Developer
          </p>

          <p className="mt-6 max-w-md text-[var(--text-muted)] leading-relaxed">
            I build clean, scalable web applications with thoughtful design,
            real-world logic, and modern web technologies.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-black text-white rounded-full text-sm hover:opacity-90 transition"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              className="px-6 py-3 border border-black/20 rounded-full text-sm hover:bg-black hover:text-white transition"
            >
              Resume
            </a>
          </div>
        </div>

        {/* RIGHT: PROFILE CARD */}
        <div className="flex justify-center md:justify-end">
          <ProfileCard />
        </div>

      </div>
    </section>
  );
}

export default Hero;
