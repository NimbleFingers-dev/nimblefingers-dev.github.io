import profile from '../data/profile.json';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import { useActiveSection } from '../hooks/useActiveSection.js';
import LogoHorizontal from './LogoHorizontal.jsx';
import Toolbar from './Toolbar.jsx';
import { DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon, WhatsAppIcon } from './Icons.jsx';

export const SECTION_IDS = ['sobre-mi', 'proyectos', 'experiencia', 'habilidades', 'contacto'];
const NAV_KEYS = {
  'sobre-mi': 'about',
  proyectos: 'projects',
  experiencia: 'experience',
  habilidades: 'skills',
  contacto: 'contact',
};

export default function Sidebar({ theme, onToggleTheme }) {
  const { t, tx, lang } = useLanguage();
  const active = useActiveSection(SECTION_IDS);
  const cvIsOtherLanguage = profile.cvLanguage[lang] !== lang;

  const socials = [
    { href: profile.links.github, label: 'GitHub', Icon: GitHubIcon, external: true },
    { href: profile.links.linkedin, label: 'LinkedIn', Icon: LinkedInIcon, external: true },
    { href: `mailto:${profile.email}`, label: t.contact.email, Icon: MailIcon, external: false },
    {
      href: `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(t.contact.whatsappMessage)}`,
      label: 'WhatsApp',
      Icon: WhatsAppIcon,
      external: true,
    },
  ];

  return (
    <header className="pt-6 lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[46%] lg:flex-col lg:justify-between lg:py-20">
      <div>
        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-4">
          <a href="#top" className="inline-flex rounded-lg text-ink">
            <LogoHorizontal />
          </a>
          <Toolbar theme={theme} onToggleTheme={onToggleTheme} />
        </div>

        <h1 className="mt-10 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">{profile.name}</h1>
        <p className="mt-3 text-xl font-semibold text-accent-strong sm:text-2xl">{tx(profile.role)}</p>
        <p className="mt-5 max-w-md text-base leading-relaxed text-muted">{tx(profile.headline)}</p>
        <p className="mt-4 text-sm text-muted">{tx(profile.location)}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#proyectos"
            className="inline-flex min-h-11 items-center rounded-full bg-accent px-5 text-sm font-semibold text-on-accent transition-transform hover:-translate-y-0.5"
          >
            {t.cta.projects}
          </a>
          <a
            href="#contacto"
            className="inline-flex min-h-11 items-center rounded-full border border-line bg-surface px-5 text-sm font-semibold text-ink transition-colors hover:border-accent-strong hover:text-accent-strong"
          >
            {t.cta.contact}
          </a>
          <a
            href={tx(profile.cv)}
            download
            hrefLang={profile.cvLanguage[lang]}
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-surface px-5 text-sm font-semibold text-ink transition-colors hover:border-accent-strong hover:text-accent-strong"
          >
            <DownloadIcon className="h-4 w-4" />
            {cvIsOtherLanguage ? t.cta.cvOtherLanguage : t.cta.cv}
          </a>
        </div>

        <nav aria-label={t.navLabel} className="mt-14 hidden lg:block">
          <ul className="space-y-1">
            {SECTION_IDS.map((id) => {
              const isActive = active === id;
              return (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    aria-current={isActive ? 'true' : undefined}
                    className="group flex items-center gap-4 py-2 text-xs font-semibold uppercase tracking-[0.18em]"
                  >
                    <span
                      className={`h-px transition-all duration-300 ${
                        isActive ? 'w-16 bg-accent' : 'w-8 bg-muted group-hover:w-16 group-hover:bg-ink'
                      }`}
                      aria-hidden="true"
                    />
                    <span className={isActive ? 'text-ink' : 'text-muted group-hover:text-ink'}>
                      {t.nav[NAV_KEYS[id]]}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <ul className="mt-10 flex items-center gap-2 lg:mt-12" aria-label={t.sections.contact}>
        {socials.map(({ href, label, Icon, external }) => (
          <li key={label}>
            <a
              href={href}
              aria-label={external ? `${label} ${t.externalLink}` : label}
              title={label}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full text-muted transition-colors hover:bg-surface hover:text-accent-strong"
            >
              <Icon className="h-6 w-6" />
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}
