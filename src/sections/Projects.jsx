import { mainProjects } from "../data/mainProjects";

function Projects() {
  const project = mainProjects[0];

  return (
    <section className="py-32 bg-[#F3F3F4]">
      <div className="w-full mx-auto px-6">

        {/* Ultra-tight layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">

  {/* LEFT — Text */}
  <div className="lg:pr-[-120px]">

    <div className="flex items-center gap-6">
      <span className="w-10 h-10 rounded-full bg-orange-500" />
      <h2 className="text-4xl md:text-5xl font-semibold text-black leading-none">
        {project.title}
      </h2>
    </div>

    <p className="mt-5 text-gray-600 leading-relaxed max-w-lg">
      An AI-powered recipe discovery platform that turns food images into instant,
      relevant recipes.
    </p>

            {/* Catchphrase */}
            <p className="mt-2 text-gray-500 italic">
              “Powered by an intelligent food scanner.”
            </p>

            {/* CTAs */}
            <div className="mt-7 flex items-center gap-6">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1691DB] font-medium hover:underline"
              >
                ▶ Watch Live
              </a>

              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 font-medium hover:underline"
              >
                &lt;&gt; See Code
              </a>
            </div>
          </div>

        {/* RIGHT — Image */}
<div className="flex justify-start">
  <img
    src={project.heroImage}
    alt={`${project.title} showcase`}
    className="w-full max-w-[1800px] h-auto"
  />
</div>


        </div>
      </div>
    </section>
  );
}

export default Projects;
