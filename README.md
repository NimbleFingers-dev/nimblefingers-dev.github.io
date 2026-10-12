# NimbleFingers · Portafolio de Jonathan Quintana Caro

> **Tecnología con sentido humano.** Sitio personal de un desarrollador Full-Stack (Python · Django · React) en La Habana, Cuba.

🔗 **Sitio en vivo:** [nimblefingers-dev.github.io](https://nimblefingers-dev.github.io)

---

## Qué es

Portafolio estático y bilingüe (español / inglés) que muestra mi experiencia, mis proyectos y mis habilidades. Está pensado para cargar rápido incluso con conexiones lentas o inestables, como las de Cuba.

## Stack

| Capa | Tecnología |
| --- | --- |
| UI | React 19 |
| Build | Vite 8 |
| Estilos | Tailwind CSS 4 (tokens de marca en `src/index.css` con `@theme`) |
| Tipografía | Sora, autoalojada con `@fontsource` (sin peticiones a Google Fonts) |
| Hosting | GitHub Pages, desplegado con GitHub Actions |

Las únicas dependencias de producción son React, React DOM y la fuente. Los íconos son SVG en línea y las animaciones usan CSS y `IntersectionObserver`, sin librerías extra.

## Características

- **Bilingüe:** selector ES/EN; español por defecto. También acepta `?lang=en` en la URL.
- **Modo claro y oscuro:** respeta la preferencia del dispositivo y recuerda la elección del visitante.
- **Accesible:** HTML semántico, enlace para saltar al contenido, foco visible, contraste WCAG AA, objetivos táctiles de 44 px y respeto a `prefers-reduced-motion`.
- **SEO:** metadatos completos, Open Graph, Twitter Card, datos estructurados JSON-LD (`Person`), `sitemap.xml` y `robots.txt`.
- **Mobile-first:** diseño de una columna en el teléfono y de dos columnas con navegación fija en escritorio.

## Estructura

```
├── .github/workflows/deploy.yml   # Compila y publica en GitHub Pages en cada push a main
├── public/                        # Íconos, imagen social, CV en PDF, sitemap y robots
├── src/
│   ├── data/                      # Fuente única de contenido
│   │   ├── profile.json           # Datos personales, "Sobre mí", formación e idiomas
│   │   ├── projects.json          # Proyectos (problema → solución → resultados → stack)
│   │   ├── experience.json        # Experiencia laboral y voluntariado
│   │   └── skills.json            # Habilidades agrupadas por categoría
│   ├── i18n/                      # Textos de la interfaz y contexto de idioma
│   ├── hooks/                     # Tema claro/oscuro y sección activa
│   ├── components/                # Secciones y componentes de la página
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css                  # Tailwind + tokens de marca
└── index.html                     # Metadatos SEO y JSON-LD
```

## Cómo actualizar el contenido

Todo el contenido vive en `src/data/`. **Agregar un proyecto o un empleo solo requiere editar el JSON**, sin tocar componentes.

Ejemplo de proyecto nuevo en `src/data/projects.json`:

```json
{
  "id": "mi-proyecto",
  "status": "completed",
  "category": { "es": "Personal", "en": "Personal" },
  "period": "2026",
  "title": { "es": "Nombre del proyecto", "en": "Project name" },
  "summary": { "es": "Qué es en una frase.", "en": "What it is in one sentence." },
  "problem": { "es": "Qué problema resolvía.", "en": "What problem it solved." },
  "solution": { "es": ["Qué construí."], "en": ["What I built."] },
  "results": { "es": ["Resultado medible."], "en": ["Measurable result."] },
  "role": { "es": "Mi rol", "en": "My role" },
  "stack": ["React", "Django"],
  "links": { "live": "https://...", "repo": "https://github.com/..." },
  "badges": [],
  "images": []
}
```

Valores de `status`: `production`, `completed` o `in-development` (este último aparece en la sección "En desarrollo").

Para agregar capturas, coloca las imágenes WebP (800 px y 1600 px de ancho) en `public/projects/<id-del-proyecto>/` y añade una entrada por imagen en `images`. La primera se muestra destacada y el resto en una galería; el texto `alt` se usa también como pie de foto:

```json
{ "src800": "/projects/captura-800.webp", "src1600": "/projects/captura-1600.webp", "width": 1600, "height": 937, "alt": { "es": "Descripción", "en": "Description" } }
```

> El CV en PDF (`public/cv/`) debe mantenerse coherente con estos datos: mismas fechas, cargos, tecnologías y métricas.

## Desarrollo local

Requisitos: Node.js 22.12 o superior.

```bash
npm install
npm run dev       # servidor local en http://localhost:5173
npm run build     # compilación de producción en dist/
npm run preview   # sirve dist/ localmente
```

## Despliegue

Cada `push` a `main` ejecuta `.github/workflows/deploy.yml`, que instala dependencias, compila con Vite y publica `dist/` en GitHub Pages. En el repositorio, **Settings → Pages → Source** debe estar en **GitHub Actions**.

## Contacto

- Correo: [jonathan.quintana.caro@gmail.com](mailto:jonathan.quintana.caro@gmail.com)
- LinkedIn: [jonathan-quintana-caro](https://www.linkedin.com/in/jonathan-quintana-caro-8a6a03332)
- GitHub: [@ElCrack01-CPU](https://github.com/ElCrack01-CPU)

---

© Jonathan Quintana Caro. El código de este repositorio puede servirte de referencia; el contenido (textos, logo y CV) es personal y no debe reutilizarse.
