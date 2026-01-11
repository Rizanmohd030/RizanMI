import { useEffect } from "react";
import { mainProjects } from "../data/mainProjects";

function Projects() {

  const recipe = mainProjects[0];
  const genai = mainProjects[1];

  useEffect(() => {
    const el = document.getElementById("highlight-bg");

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
    <>
      {/* ===================== */}
      {/* PROJECT 1 - RECIPEHUNT */}
      {/* ===================== */}

      <section className="py-32 bg-[#F3F3F4]">
        <div className="w-full mx-auto lg:px-0 px-6">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center lg:gap-x-[-200px]">

            {/* LEFT */}
            <div className="lg:ml-auto lg:w-[850px] lg:pr-32 lg:-mt-64 lg:flex-shrink-0">

              <div className="flex items-center gap-6">
                <span className="w-10 h-10 rounded-full bg-orange-500" />
                <h2 
                  className="text-8xl md:text-9xl font-bold text-black"
                  style={{ fontFamily: "Bebas Neue, sans-serif" }}
                >
                  {recipe.title}
                </h2>
              </div>

              <p className="mt-5 text-4xl text-gray-600">
                {recipe.description1}
              </p>

              <p className="mt-4 text-xl text-gray-500">
                {recipe.description2}
              </p>

              {/* Highlight */}
              <p className="mt-10 italic text-3xl md:text-4xl font-bold whitespace-nowrap">
                <span className="text-black">
                  "Powered by an intelligent{" "}
                </span>

                <span className="relative inline-block text-white px-3 py-1 z-10">
                  food scanner .
                  <span 
                    id="highlight-bg"
                    className="absolute left-0 bottom-1 w-full h-[85%] bg-orange-500 -z-10 skew-x-[-12deg]"
                  ></span>
                </span>

                <span className="text-black">"</span>
              </p>

              <div className="mt-16 flex gap-6">
                <a
                  href={recipe.live}
                  target="_blank"
                  className="text-2xl text-[#1691DB] font-medium hover:underline"
                >
                  ▶ Watch Live
                </a>

                <a
                  href={recipe.github}
                  target="_blank"
                  className="text-2xl text-gray-600 font-medium hover:underline"
                >
                  &lt;&gt; See Code
                </a>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex justify-start lg:-ml-32">
              <img
                src={recipe.heroImage}
                alt={recipe.title}
                className="w-full h-auto"
              />
            </div>

          </div>
        </div>
      </section>


  {/* ===================== */}
{/* PROJECT 2 - GENAI */}
{/* ===================== */}

<section className="py-32 bg-[#F3F3F4]">
  <div className="w-full mx-auto lg:px-0 px-6">

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center lg:gap-x-[-200px]">

      {/* LEFT — IMAGE */}
      <div className="flex justify-end lg:-mr-32 order-2 lg:order-1">
        <img
          src={genai.heroImage}
          alt={genai.title}
          className="w-full h-auto"
        />
      </div>

      {/* RIGHT — TEXT */}
      <div 
        className="
          lg:mr-auto 
          lg:w-[850px] 
          lg:pl-32 
          lg:mt-32   /* pushes content DOWN */
          lg:flex-shrink-0 
          order-1 lg:order-2
        "
      >

        {/* BULLET + TITLE (same style as RecipeHunt) */}
        <div className="flex items-center gap-4">
  {/* PERFECT CIRCLE BULLET */}
  <span className="w-4 h-4 rounded-full bg-[#1691DB]" />

  <h2 
    className="text-8xl md:text-7xl font-bold text-black leading-tight tracking-wider"
    style={{ fontFamily: "Bebas Neue, sans-serif" }}
  >
    GENAI INTERVIEW ASSISTANT
  </h2>
</div>

        <p className="mt-5 text-4xl text-gray-600">
          {genai.description1}
        </p>

        <p className="mt-4 text-xl text-gray-500">
          {genai.description2}
        </p>

        <div className="mt-16 flex gap-6">
          <a
            href={genai.live}
            target="_blank"
            className="text-2xl text-[#1691DB] font-medium hover:underline"
          >
            ▶ Watch Live
          </a>

          <a
            href={genai.github}
            target="_blank"
            className="text-2xl text-gray-600 font-medium hover:underline"
          >
            &lt;&gt; See Code
          </a>
        </div>

      </div>

    </div>
  </div>
</section>


    </>
  );
}

export default Projects;
