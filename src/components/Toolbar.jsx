import { useLanguage } from '../i18n/LanguageContext.jsx';
import { MoonIcon, SunIcon } from './Icons.jsx';

const buttonClass =
  'inline-flex h-11 min-w-11 items-center justify-center rounded-full border border-line bg-surface px-3 text-sm font-semibold text-ink transition-colors hover:border-accent-strong hover:text-accent-strong';

export default function Toolbar({ theme, onToggleTheme }) {
  const { t, toggleLang } = useLanguage();
  const isDark = theme === 'dark';

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={toggleLang}
        className={buttonClass}
        aria-label={t.language.switchTo}
        title={t.language.switchTo}
      >
        {t.language.short}
      </button>
      <button
        type="button"
        onClick={onToggleTheme}
        className={buttonClass}
        aria-label={isDark ? t.theme.toLight : t.theme.toDark}
        title={isDark ? t.theme.toLight : t.theme.toDark}
      >
        {isDark ? <SunIcon /> : <MoonIcon />}
      </button>
    </div>
  );
}
