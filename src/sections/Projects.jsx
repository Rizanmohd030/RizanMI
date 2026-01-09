import { mainProjects } from "../data/mainProjects";

function Projects() {
  const project = mainProjects[0];

  return (
    <section className="py-32 bg-[#F3F3F4]">
  <div className="w-full mx-auto lg:px-0 px-6">  {/* Remove padding on desktop */}

    {/* Ultra-tight layout */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center lg:gap-x-[-200px]">
      
      {/* LEFT — Text */}
      <div className="lg:ml-auto lg:max-w lg:pr-32 lg:-mt-64">  {/* Push right & limit width */}

        <div className="flex items-center gap-6">
            <span className="w-10 h-10 rounded-full bg-orange-500" />
          <h2 className="text-8xl md:text-9xl font-bold text-black leading-tight tracking-wider" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
  {project.title}
      </h2>
      </div>

          <p className="mt-5 text-gray-600 leading-relaxed">
          An AI-powered recipe discovery platform that turns food images into instant,
          relevant recipes.
</p>

<p className="mt-2 text-gray-500 italic font-bold">
  "Powered by an intelligent food scanner."
</p>


        <div className="mt-7 flex items-center gap-6">
          <a href={project.live} target="_blank" rel="noopener noreferrer" 
             className="text-[#1691DB] font-medium hover:underline">
            ▶ Watch Live
          </a>
          <a href={project.code} target="_blank" rel="noopener noreferrer"
             className="text-gray-600 font-medium hover:underline">
            &lt;&gt; See Code
          </a>
        </div>
      </div>

      {/* RIGHT — Image */}
      <div className="flex justify-start lg:-ml-32">
        <img src={project.heroImage} alt={`${project.title} showcase`}
             className="w-full h-auto" />
      </div>

    </div>
  </div>
</section>
  );
}

export default Projects;
