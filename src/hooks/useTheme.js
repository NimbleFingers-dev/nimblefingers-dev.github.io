import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'theme';

function systemPrefersDark() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function readStored() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === 'dark' || stored === 'light' ? stored : null;
  } catch {
    return null;
  }
}

// Tema claro/oscuro: por defecto sigue al dispositivo; si el visitante elige uno, se recuerda.
export function useTheme() {
  const [theme, setTheme] = useState(() => readStored() ?? (systemPrefersDark() ? 'dark' : 'light'));

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = (event) => {
      if (!readStored()) setTheme(event.matches ? 'dark' : 'light');
    };
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((current) => {
      const next = current === 'dark' ? 'light' : 'dark';
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // Sin almacenamiento: el cambio dura solo esta visita.
      }
      return next;
    });
  }, []);

  return { theme, toggleTheme };
}
