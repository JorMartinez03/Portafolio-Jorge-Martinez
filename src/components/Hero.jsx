import portfolioData from "../portfolioData";
import PerfilImg from "../assets/Perfil.png";

function Hero() {
  const { name, role, description } = portfolioData.hero;

  const scrollToProjects = () => {
    document
      .getElementById("proyectos")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 bg-[#010c15]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-3/5">
            <p className="text-emerald-400 font-mono text-sm sm:text-base tracking-widest uppercase mb-4">
              {role}
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
              {name}
            </h1>

            <p className="text-slate-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
              {description}
            </p>

            <button
              onClick={scrollToProjects}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-100 font-semibold rounded-xl text-lg hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 cursor-pointer"
            >
              Ver proyectos
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
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </button>
          </div>

          <div className="md:w-2/5 md:pl-12 flex justify-center md:justify-end">
            <img
              src={PerfilImg}
              alt="Profile"
              className="w-56 h-56 md:w-72 md:h-72 rounded-full border-2 border-emerald-400 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
