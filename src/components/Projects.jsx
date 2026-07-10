import portfolioData from "../portfolioData";

function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="proyectos" className="py-20 px-4 bg-[#010c15]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-slate-100">
          Mis <span className="text-emerald-400">proyectos</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-[#011627] border border-slate-800 rounded-2xl overflow-hidden flex flex-col"
            >
              <div className="overflow-hidden">
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                    />
                  </a>
                ) : (
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                )}
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-slate-100 mb-2">
                  {project.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-[#011221] text-slate-300 text-xs font-medium rounded-full border border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
