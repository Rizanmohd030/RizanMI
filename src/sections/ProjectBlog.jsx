import { useEffect } from "react";
import { mainProjects } from "../data/mainProjects";
import PrimaryButton from "../components/PrimaryButton";

function ProjectBlog() {

  const blog = mainProjects.find(p => p.id === "blog");
  if (!blog) return null;

  useEffect(() => {
    const el = document.getElementById("blog-highlight");
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
    <section className="py-16  overflow-hidden">
      <div className="w-full mx-auto lg:px-0 px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center lg:gap-x-[-200px]">

          {/* LEFT */}
          <div className="lg:ml-auto lg:w-[850px] lg:pr-32 lg:-mt-64">

            <div className="flex items-center gap-6">
              <span className="w-10 h-10 rounded-full bg-purple-600" />
              <h2 
                className="text-8xl md:text-8xl font-bold text-black"
                style={{ fontFamily: "Bebas Neue, sans-serif" }}
              >
                MY BLOG PLATFORM
              </h2>
            </div>

            <p className="mt-8 text-3xl text-gray-600">
              A full-stack blogging platform with{" "}

              <span className="relative inline-block text-white px-3 py-1 z-10">
                admin authentication
                <span
                  id="blog-highlight"
                  className="
                    absolute left-0 bottom-1 w-full h-[85%]
                    bg-purple-600 -z-10 skew-x-[-12deg]
                  "
                ></span>
              </span>

              {" "}and complete content management capabilities.
            </p>

            <p className="mt-12 italic text-3xl font-bold text-black">
              "Manage posts, images, and edits — all in one place."
            </p>

            <div className="mt-16 flex gap-8">
              <PrimaryButton href={blog.live}>
                Watch Live
              </PrimaryButton>

              <PrimaryButton href={blog.git} variant="dark">
                See Code
              </PrimaryButton>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-start lg:-ml-32">
            <img
              src={blog.heroImage}
              alt={blog.title}
              className="w-full h-auto scale-95"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default ProjectBlog;
