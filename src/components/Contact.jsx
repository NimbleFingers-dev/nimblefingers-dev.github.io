import { useEffect, useState } from 'react';
import profile from '../data/profile.json';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import Reveal from './Reveal.jsx';
import Section from './Section.jsx';
import { CheckIcon, CopyIcon, GitHubIcon, LinkedInIcon, MailIcon, WhatsAppIcon } from './Icons.jsx';

export default function Contact() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return undefined;
    const timer = window.setTimeout(() => setCopied(false), 2500);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const channels = [
    {
      label: t.contact.whatsapp,
      value: profile.phone,
      href: `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(t.contact.whatsappMessage)}`,
      Icon: WhatsAppIcon,
      external: true,
    },
    {
      label: t.contact.linkedin,
      value: 'jonathan-quintana-caro',
      href: profile.links.linkedin,
      Icon: LinkedInIcon,
      external: true,
    },
    {
      label: t.contact.github,
      value: 'ElCrack01-CPU',
      href: profile.links.github,
      Icon: GitHubIcon,
      external: true,
    },
  ];

  return (
    <Section id="contacto" title={t.sections.contact}>
      <Reveal>
        <p className="text-base leading-relaxed text-muted">{t.contact.intro}</p>

        <div className="mt-8 rounded-2xl border border-line bg-surface p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">{t.contact.email}</p>
          <div className="mt-2 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex min-h-11 min-w-0 items-center gap-2 break-all text-[15px] font-semibold text-ink underline-offset-4 hover:text-accent-strong hover:underline sm:text-xl"
            >
              <MailIcon className="hidden h-5 w-5 shrink-0 text-accent-strong sm:block" />
              {profile.email}
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line px-4 text-sm font-semibold text-ink transition-colors hover:border-accent-strong hover:text-accent-strong"
            >
              {copied ? <CheckIcon /> : <CopyIcon />}
              {copied ? t.contact.copied : t.contact.copy}
            </button>
            <span className="sr-only" role="status" aria-live="polite">
              {copied ? t.contact.copied : ''}
            </span>
          </div>
        </div>

        <ul className="mt-6 grid gap-4 sm:grid-cols-3">
          {channels.map(({ label, value, href, Icon, external }) => (
            <li key={label}>
              <a
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="flex min-h-11 items-center gap-3 rounded-2xl border border-line bg-surface p-4 transition-colors hover:border-accent-strong"
              >
                <Icon className="h-6 w-6 shrink-0 text-accent-strong" />
                <span className="min-w-0">
                  <span className="block text-sm font-semibold text-ink">{label}</span>
                  <span className="block truncate text-xs text-muted">{value}</span>
                </span>
                {external ? <span className="sr-only">{t.externalLink}</span> : null}
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
