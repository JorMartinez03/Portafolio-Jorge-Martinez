import portfolioData from "../portfolioData";

function SpaProject() {
  const { spaProject } = portfolioData;

  return (
    <section id="spa-final" className="py-20 px-4 bg-[#010c15]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-slate-100">
          Proyecto <span className="text-emerald-400">SPA Final</span>
        </h2>

        <div className="bg-[#011627] rounded-3xl border border-slate-800 p-8 sm:p-10 space-y-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-emerald-400 text-center mb-8">
            {spaProject.title}
          </h3>

          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-2">
                Problema
              </h3>
              <p className="text-slate-300 leading-relaxed">
                {spaProject.problem}
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-2">
                Público objetivo
              </h3>
              <p className="text-slate-300 leading-relaxed">
                {spaProject.target}
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-4">
              Características principales
            </h3>
            <ul className="space-y-3">
              {spaProject.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-slate-300"
                >
                  <svg
                    className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4"
                    />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <div>
              <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                Estado actual
              </span>
              <p className="text-slate-300 text-sm">{spaProject.status}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SpaProject;
