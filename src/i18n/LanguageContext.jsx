import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { ui } from './ui.js';

const SUPPORTED = ['es', 'en'];
const DEFAULT_LANG = 'es';
const STORAGE_KEY = 'lang';

const LanguageContext = createContext(null);

function readInitialLang() {
  try {
    const fromUrl = new URLSearchParams(window.location.search).get('lang');
    if (SUPPORTED.includes(fromUrl)) return fromUrl;
    const stored = localStorage.getItem(STORAGE_KEY);
    if (SUPPORTED.includes(stored)) return stored;
  } catch {
    // Almacenamiento no disponible (modo privado o bloqueado): se usa el idioma por defecto.
  }
  return DEFAULT_LANG;
}

const META = {
  es: {
    title: 'Jonathan Quintana Caro · Desarrollador Full-Stack',
    description:
      'Desarrollador Full-Stack en La Habana, Cuba. Construyo aplicaciones web con Python, Django, React y PostgreSQL, desde la arquitectura hasta el despliegue. Disponible para trabajo remoto.',
  },
  en: {
    title: 'Jonathan Quintana Caro · Full-Stack Developer',
    description:
      'Full-Stack Developer based in Havana, Cuba. I build web applications with Python, Django, React and PostgreSQL, from architecture to deployment. Available for remote work.',
  },
};

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(readInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = META[lang].title;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute('content', META[lang].description);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Sin almacenamiento: el idioma se mantiene solo durante la visita.
    }
  }, [lang]);

  const setLang = useCallback((next) => {
    if (SUPPORTED.includes(next)) setLangState(next);
  }, []);

  const toggleLang = useCallback(() => {
    setLangState((current) => (current === 'es' ? 'en' : 'es'));
  }, []);

  // tx: resuelve un valor que puede ser texto plano o un objeto { es, en }.
  const tx = useCallback(
    (value) => {
      if (value === null || value === undefined) return '';
      if (typeof value === 'string') return value;
      return value[lang] ?? value[DEFAULT_LANG] ?? '';
    },
    [lang],
  );

  const value = useMemo(() => ({ lang, setLang, toggleLang, t: ui[lang], tx }), [lang, setLang, toggleLang, tx]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage debe usarse dentro de <LanguageProvider>.');
  return context;
}
