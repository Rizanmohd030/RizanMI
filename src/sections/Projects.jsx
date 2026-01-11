import { useEffect } from "react";
import { mainProjects } from "../data/mainProjects";

function Projects() {
  const project = mainProjects[0];

  useEffect(() => {
    const el = document.getElementById("highlight-bg");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove("animate-highlight");
          void el.offsetWidth; // reset animation
          el.classList.add("animate-highlight");
        }
      },
      { threshold: 0.6 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-32 bg-[#F3F3F4]">
      <div className="w-full mx-auto lg:px-0 px-6">

        {/* Ultra-tight layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center lg:gap-x-[-200px]">

          {/* LEFT — Text */}
          <div className="lg:ml-auto lg:w-[850px] lg:pr-32 lg:-mt-64 lg:flex-shrink-0">

            <div className="flex items-center gap-6">
              <span className="w-10 h-10 rounded-full bg-orange-500" />
              <h2 
                className=" text-8xl md:text-9xl font-bold text-black leading-tight tracking-wider"
                style={{ fontFamily: "Bebas Neue, sans-serif" }}
              >
                {project.title}
              </h2>
            </div>

            <p className="mt-5 text-4xl text-gray-600 leading-relaxed">
              An AI-powered recipe discovery platform that turns food images into instant,
              relevant recipes.
            </p>

            {/* Highlight text */}
            <p className="mt-10 italic text-3xl md:text-4xl font-bold whitespace-nowrap">

  <span className="text-black">
    "Powered by an intelligent{" "}
  </span>

  <span className="relative inline-block text-white px-3 py-1 z-10">
    food scanner .

    <span id="highlight-bg" 
    className="absolute left-0 bottom-1 w-full h-[85%] bg-orange-500 -z-10 skew-x-[-12deg]"
    ></span>
  </span>

  <span className="text-black">"</span>

</p>

            <div className="mt-16 flex items-center gap-6">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-[#1691DB] font-medium hover:underline"
              >
                ▶ Watch Live
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-600 font-medium hover:underline"
              >
                &lt;&gt; See Code
              </a>
            </div>
          </div>

          {/* RIGHT — Image */}
          <div className="flex justify-start lg:-ml-32">
            <img
              src={project.heroImage}
              alt={`${project.title} showcase`}
              className="w-full h-auto"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Projects;
