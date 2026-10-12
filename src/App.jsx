import { useLanguage } from './i18n/LanguageContext.jsx';
import { useTheme } from './hooks/useTheme.js';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Experience from './components/Experience.jsx';
import Footer from './components/Footer.jsx';
import Projects from './components/Projects.jsx';
import Sidebar from './components/Sidebar.jsx';
import Skills from './components/Skills.jsx';

export default function App() {
  const { t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  return (
    <div id="top" className="min-h-screen">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-accent focus:px-5 focus:py-3 focus:font-semibold focus:text-on-accent"
      >
        {t.skipToContent}
      </a>

      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:flex lg:justify-between lg:gap-12 lg:px-12">
        <Sidebar theme={theme} onToggleTheme={toggleTheme} />

        <main id="contenido" tabIndex={-1} className="pt-16 outline-none lg:w-[52%] lg:py-20">
          <About />
          <Projects />
          <Experience />
          <Skills />
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  );
}
