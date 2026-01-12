import { useEffect } from "react";
import { mainProjects } from "../data/mainProjects";

function GenAI() {

  const genai = mainProjects.find(p => p.id === "genai");
  if (!genai) return null;

  useEffect(() => {
    const el = document.getElementById("genai-highlight");
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove("animate-highlight");
          void el.offsetWidth;
          el.classList.add("animate-highlight");
        }
      },
      { threshold: 0.6 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 bg-[#F3F3F4] overflow-hidden">
      <div className="w-full mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* LEFT — IMAGE */}
          <div className="flex justify-end">
            <img
              src={genai.heroImage}
              alt={genai.title}
              className="w-full max-w-[900px] h-auto"
            />
          </div>

          {/* RIGHT — TEXT */}
          <div className="lg:w-[700px]  lg:mt-24">

            {/* BULLET + TITLE */}
            <div className="flex items-center gap-5">

              {/* Bullet */}
              <span className="w-10 h-10 rounded-full bg-[#1691DB]" />

              {/* Title */}
              <h2
                className="text-6xl md:text-7xl font-bold text-black tracking-wide"
                style={{ fontFamily: "Bebas Neue, sans-serif" }}
              >
               INTERVIEW-ASSISTANT
              </h2>

            </div>

            {/* Highlight sentence */}
            <p className="mt-6 text-4xl text-gray-600 leading-snug">

              Generates personalized{" "}

              <span className="relative inline-block text-white px-3 py-1 z-10">
                1 to 1 interview questions
                <span
                  id="genai-highlight"
                  className="
                    absolute left-0 bottom-1 w-full h-[85%]
                    bg-[#1691DB] -z-10 skew-x-[-12deg]
                  "
                ></span>
              </span>

              {" "}based on your role and skills.
            </p>

            <p className="mt-8 text-3xl text-gray-500 leading-relaxed">
              Helps you build resumes, practice real scenarios
              and crack tech interviews.
            </p>

            {/* Links */}
            <div className="mt-14 flex gap-8">
              <a
                href={genai.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-[#1691DB] font-medium hover:underline"
              >
                ▶ Watch Live
              </a>

              <a
                href={genai.git}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-600 font-medium hover:underline"
              >
                &lt;&gt; See Code
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default GenAI;