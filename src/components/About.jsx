import portfolioData from "../portfolioData";

function About() {
  const { about, skills } = portfolioData;

  return (
    <section id="sobre-mi" className="py-20 px-4 bg-[#010c15]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-slate-100">
          Sobre <span className="text-emerald-400">mí</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="bg-[#011627] border border-slate-800 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-emerald-400 mb-3 flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
                Intereses
              </h3>
              <div className="flex flex-wrap gap-2">
                {about.interests.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 bg-[#011221] text-slate-300 rounded-lg text-sm border border-slate-800"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-[#011627] border border-slate-800 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-emerald-400 mb-3 flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                Áreas por aprender
              </h3>
              <div className="flex flex-wrap gap-2">
                {about.learningAreas.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 bg-[#011221] text-slate-300 rounded-lg text-sm border border-slate-800"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-[#011627] border border-slate-800 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-emerald-400 mb-5 flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
              Habilidades
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-[#011221] text-slate-300 font-medium rounded-full text-sm border border-slate-800"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
