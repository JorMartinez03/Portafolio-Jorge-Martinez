import safenetImg from "./assets/Safenet1.png";
import scrumversoImg from "./assets/Scrumverso.webp";
import elicitAppImg from "./assets/ElicitApp.svg";

const portfolioData = {
  hero: {
    name: "Jorge Armando Martínez Maldonado",
    role: "Estudiante de Ingeniería de Software y Sistemas Computacionales",
    description:
      "Desarrollador front-end apasionado por crear interfaces modernas, accesibles y responsivas. " +
      "Especializado en React.js y Tailwind CSS para construir experiencias de usuario intuitivas. " +
      "Enfoque en código limpio, componentización y buenas prácticas de desarrollo web. " +
      "Comprometido con el aprendizaje continuo y la resolución creativa de problemas.",
  },

  about: {
    interests: [
      "Mi enfoque principal está en el desarrollo web Front-End, la arquitectura limpia de componentes, el diseño responsivo y la lógica de programación aplicada. También me apasiona la automatización, los sistemas basados en hardware/software como Arduino y la optimización de flujos de información en entornos dinámicos.",
    ],
    learningAreas: [
      "En el corto plazo, busco profundizar en el desarrollo Back-End utilizando entornos como Node.js, la gestión avanzada y optimización de bases de datos relacionales y no relacionales.",
    ],
  },

  skills: [
    "React.js",
    "JavaScript (ES6+)",
    "Tailwind CSS",
    "HTML5 & CSS3",
    "Git & GitHub",
    "Vite",
    "Lógica de Programación",
    "Estructuras de Control",
    "Visual Studio Code (VS Code)",
    "Bases de Datos (SQL & NoSQL)",
    "NPM (Node Package Manager)",
    "Arquitectura Single Page Application (SPA)",
  ],

  projects: [
    {
      title: "SafeNet | Diagnóstico de Seguridad Digital",
      description:
        "Plataforma web para evaluar y concientizar sobre seguridad digital. " +
        "Realiza diagnósticos interactivos y proporciona recomendaciones personalizadas para mejorar la protección en línea.",
      tags: ["React.js", "Tailwind CSS", "JavaScript"],
      images: [safenetImg],
      link: "https://jormartinez03.github.io/SAFENET/",
    },
    {
      title: "ElicitApp | Simulador de ingeniería de requerimientos",
      description:
        "Plataforma interactiva diseñada para simular entornos reales de elicitación de requerimientos. Permite al usuario actuar como analista de sistemas a través de casos de estudio como gestión de inventarios, apps de delivery y plataformas escolares.",
      tags: ["React.js", "Vite", "Tailwind CSS", "Cohere AI SDK", "JavaScript"],
      images: [elicitAppImg],
      link: "https://elicit-app.vercel.app/",
    },
    {
      title: "Clones Educativos",
      description:
        "Colección de proyectos recreativos con fines educativos: clon funcional de Spotify para explorar conceptos de reproducción musical.",
      tags: ["React.js", "Tailwind CSS", "JavaScript", "API REST"],
      images: [
        "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1504711434969-e33886168d6c?w=600&h=400&fit=crop",
      ],
      link: "https://music-app-clone-tau.vercel.app/",
    },
    {
      title: "SCRUMVERSO | Metodologías Ágiles",
      description:
        "Espacio colaborativo e informativo diseñado para desmitificar y profundizar en los marcos de trabajo ágiles y tradicionales (Scrum, Kanban, XP y Cascada), impulsando la eficiencia y la calidad en la ingeniería de software.",
      tags: ["HTML5 & CSS3", "JavaScript"],
      images: [scrumversoImg],
      link: "https://jormartinez03.github.io/SCRUMVERSO/",
    },
  ],

  spaProject: {
    title: "PitLane",
    problem:
      "La dispersión y falta de centralización de los horarios, resultados y clasificaciones de las 7 categorías principales del automovilismo (F1, F2, F3, IndyCar, NASCAR, WEC y MotoGP), dificultando el seguimiento continuo para aficionados y la gestión de audiencias para creadores de contenido.",
    target:
      "Entusiastas y aficionados del deporte motor de las 7 categorías (F1, F2, F3, IndyCar, NASCAR, WEC, MotoGP), creadores de contenido especializados y marcas que buscan pautar en el sector de automovilismo.",
    features: [
      "Calendario web interactivo con 115 carreras reales de la temporada 2026, cubriendo 7 categorías: F1, F2, F3, IndyCar, NASCAR, WEC y MotoGP.",
      "Arquitectura SPA desacoplada en 3 capas (datos, lógica y presentación) con React 19, Vite 8, Tailwind CSS v4 y React Router.",
      "Detección dinámica de la próxima carrera con countdown en vivo y estados past/next/upcoming calculados a partir de la fecha del sistema.",
      "Sistema de autenticación con registro, login y muro de pago (paywall) para acceder a clasificaciones premium.",
      "Diseño responsivo de 1 a 4 columnas con animaciones hover, skeleton de carga y estética oscura inspirada en F1.",
    ],
    status:
      "Fase alpha desplegada en Vercel (pit-lane-spa.vercel.app). Arquitectura preparada para migrar datos locales a una API real. Mejoras previstas: estado persistente con Zustand, páginas de detalle de carrera y pruebas con Vitest.",
  },

  contact: {
    email: "jorge.martinezmld@gmail.com",
    github: "https://github.com/JorMartinez03",
    linkedin:
      "https://www.linkedin.com/in/jorge-armando-martinez-maldonado-0482913a9/",
  },
};

export default portfolioData;
