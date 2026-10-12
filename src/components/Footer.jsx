import profile from '../data/profile.json';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import { ArrowUpIcon } from './Icons.jsx';

export default function Footer() {
  const { t, tx } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line pb-16 pt-8 text-sm text-muted">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <p>
          © {year} {profile.name} · {tx(profile.tagline)}
        </p>
        <a
          href="#top"
          className="inline-flex min-h-11 items-center gap-1 font-semibold text-ink underline-offset-4 hover:text-accent-strong hover:underline"
        >
          <ArrowUpIcon />
          {t.footer.backToTop}
        </a>
      </div>
      <p className="mt-2">{t.footer.built}</p>
    </footer>
  );
}
