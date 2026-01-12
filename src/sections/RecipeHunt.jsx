import { useEffect } from "react";
import { mainProjects } from "../data/mainProjects";

function RecipeHunt() {

  const data = mainProjects.find(p => p.id === "recipehunt");
  if (!data) return null;

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
    <section className="py-16 bg-[#F3F3F4] overflow-hidden">
      <div className="w-full mx-auto lg:px-0 px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center lg:gap-x-[-200px]">

          {/* LEFT */}
          <div className="lg:ml-auto lg:w-[850px] lg:pr-32 lg:-mt-64">

            <div className="flex items-center gap-6">
              <span className="w-10 h-10 rounded-full bg-orange-500" />
              <h2 
                className="text-8xl md:text-8xl font-bold text-black"
                style={{ fontFamily: "Bebas Neue, sans-serif" }}
              >
                {data.title}
              </h2>
            </div>

            <p className="mt-5 text-3xl text-gray-600">
              An AI-powered recipe discovery platform that turns food images into instant,
              relevant recipes.
            </p>

            {/* Highlight */}
            <p className="mt-10 italic text-3xl md:text-4xl  whitespace-nowrap">

              <span className="text-black">
                "Powered by an intelligent{" "}
              </span>

              <span className="relative inline-block text-white px-3 py-1 z-10">
                food scanner .
                <span
                  id="highlight-bg"
                  className="
                    absolute left-0 bottom-1 w-full h-[85%]
                    bg-orange-500 -z-10 skew-x-[-12deg]
                  "
                ></span>
              </span>

              <span className="text-black">"</span>
            </p>

            <div className="mt-16 flex gap-6">
              <a
                href={data.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-[#1691DB] font-medium hover:underline"
              >
                ▶ Watch Live
              </a>

              <a
                href={data.git}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-600 font-medium hover:underline"
              >
                &lt;&gt; See Code
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-start lg:-ml-32">
            <img
              src={data.heroImage}
              alt={data.title}
              className="w-full h-auto"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default RecipeHunt;
