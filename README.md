# Portafolio — Jorge Armando Martínez Maldonado

Sitio web personal para presentar proyectos, habilidades y experiencia como desarrollador front-end. Construido con React 19 y Tailwind CSS v4, sigue una arquitectura de componentes desacoplada y diseño responsivo.

## Tecnologías

- **React 19** — Library UI con JSX
- **Vite 8** — Bundler con HMR
- **Tailwind CSS v4** — Utility-first CSS
- **PostCSS** — Procesamiento de estilos
- **ESLint** — Linting y buenas prácticas

## Estructura del proyecto

```
src/
├── assets/              Imágenes y recursos estáticos
├── components/
│   ├── Navbar.jsx       Navegación fija con scrollspy
│   ├── Hero.jsx         Sección principal con foto de perfil
│   ├── About.jsx        Intereses, áreas de aprendizaje y habilidades
│   ├── Projects.jsx     Grid de proyectos con enlaces a despliegues
│   ├── SpaProject.jsx   Detalle del proyecto PitLane SPA
│   └── Contact.jsx      Información de contacto y redes sociales
├── portfolioData.js     Datos centralizados del portafolio
├── App.jsx              Componente raíz
├── main.jsx             Punto de entrada
└── index.css            Estilos globales con Tailwind
```

## Proyectos destacados

| Proyecto | Descripción | Despliegue |
|----------|-------------|------------|
| **SafeNet** | Plataforma de diagnóstico de seguridad digital | [Enlace](https://jormartinez03.github.io/SAFENET/) |
| **ElicitApp** | Simulador de ingeniería de requerimientos con IA | [Enlace](https://elicit-app.vercel.app/) |
| **Spotify Clone** | Clon funcional de Spotify (reproducción musical) | [Enlace](https://music-app-clone-tau.vercel.app/) |
| **SCRUMVERSO** | Espacio informativo sobre metodologías ágiles | [Enlace](https://jormartinez03.github.io/SCRUMVERSO/) |
| **PitLane SPA** | Calendario y clasificaciones de 7 categorías de motorsport | [Enlace](https://pit-lane-spa.vercel.app/) |

## Instalación y ejecución local

```bash
# Clonar el repositorio
git clone https://github.com/JorMartinez03/Portafolio-Jorge-Martinez.git
cd Portafolio-Jorge-Martinez

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El servidor estará disponible en `http://localhost:5173`.

## Scripts disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo con HMR |
| `npm run build` | Build de producción en `dist/` |
| `npm run preview` | Vista previa del build de producción |
| `npm run lint` | Análisis de código con ESLint |

## Contacto

- **Email:** jorge.martinezmld@gmail.com
- **GitHub:** [JorMartinez03](https://github.com/JorMartinez03)
- **LinkedIn:** [Jorge Armando Martínez Maldonado](https://www.linkedin.com/in/jorge-armando-martinez-maldonado-0482913a9/)
