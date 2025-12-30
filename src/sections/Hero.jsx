import { motion } from "framer-motion";
import ProfileCard from "../components/ProfileCard";
import rizanImg from "../assets/RizanProfile.jpg";


function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-6 pt-32"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT — TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[#0f172a]">
            Hi, I’m <span className="text-blue-600">Rizan</span>
          </h1>

          <h2 className="text-xl md:text-2xl text-slate-600 mb-6">
            MERN Stack Developer
          </h2>

          <p className="text-slate-500 mb-8 leading-relaxed max-w-md">
            I build clean, scalable web applications with modern UI,
            real-world logic, and performance in mind.
          </p>

          <div className="flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              className="px-6 py-3 border border-slate-400 rounded-lg hover:bg-slate-100 transition"
            >
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* RIGHT — PROFILE CARD */}
        <div className="flex justify-center md:justify-end">
          <div className="scale-[0.85]">
            <ProfileCard
              avatarUrl={rizanImg}
              name="Rizan Mohammed"
              title="MERN Stack Developer"
              handle="rizan.dev"
              showUserInfo={false}
              enableTilt={true}
              enableMobileTilt={false}
              behindGlowEnabled={false}
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
