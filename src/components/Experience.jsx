import experience from '../data/experience.json';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import Chip from './Chip.jsx';
import Reveal from './Reveal.jsx';
import Section from './Section.jsx';
import { ExternalIcon } from './Icons.jsx';

function formatMonth(value, lang) {
  if (!value) return null;
  const [year, month] = value.split('-').map(Number);
  const date = new Date(Date.UTC(year, month - 1, 1));
  return new Intl.DateTimeFormat(lang === 'es' ? 'es-ES' : 'en-US', {
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}

export default function Experience() {
  const { t, tx, lang } = useLanguage();

  return (
    <Section id="experiencia" title={t.sections.experience}>
      <ol className="space-y-12">
        {experience.map((job) => {
          const start = formatMonth(job.start, lang);
          const end = job.end ? formatMonth(job.end, lang) : t.experience.present;
          const period = start ? `${start} — ${end}` : t.experience.volunteer;
          const company = tx(job.company);

          return (
            <Reveal as="li" key={job.id} className="grid gap-2 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-6">
              <p className="pt-1 text-xs font-semibold uppercase tracking-[0.1em] text-muted">
                {start ? (
                  <>
                    <time dateTime={job.start}>{start}</time> — {job.end ? <time dateTime={job.end}>{end}</time> : end}
                  </>
                ) : (
                  period
                )}
              </p>
              <div>
                <h3 className="text-base font-semibold leading-snug text-ink">
                  {tx(job.role)}
                  <span className="text-muted"> · </span>
                  {job.url ? (
                    <a
                      href={job.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-accent-strong underline-offset-4 hover:underline"
                    >
                      {company}
                      <ExternalIcon className="h-3.5 w-3.5" />
                      <span className="sr-only">{t.externalLink}</span>
                    </a>
                  ) : (
                    <span>{company}</span>
                  )}
                </h3>
                <p className="mt-1 text-sm text-muted">{tx(job.location)}</p>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
                  {tx(job.highlights).map((item) => (
                    <li key={item.slice(0, 40)} className="flex gap-2">
                      <span className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                {job.tech.length > 0 ? (
                  <ul className="mt-4 flex flex-wrap gap-2" aria-label="Stack">
                    {job.tech.map((tech) => (
                      <li key={tech}>
                        <Chip>{tech}</Chip>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </Reveal>
          );
        })}
      </ol>
    </Section>
  );
}
