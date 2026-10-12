import { useLanguage } from '../i18n/LanguageContext.jsx';
import Chip from './Chip.jsx';
import Gallery from './Gallery.jsx';
import Reveal from './Reveal.jsx';
import { ExternalIcon, GitHubIcon, LockIcon } from './Icons.jsx';

function DetailList({ title, items }) {
  if (!items || items.length === 0) return null;
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-ink">{title}</h4>
      <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-muted">
        {items.map((item) => (
          <li key={item.slice(0, 40)} className="flex gap-2">
            <span className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ProjectCard({ project }) {
  const { t, tx } = useLanguage();
  const title = tx(project.title);
  const solutionTitle = project.status === 'in-development' ? t.project.plan : t.project.solution;

  return (
    <Reveal as="article" className="rounded-2xl border border-line bg-surface p-6 sm:p-8" aria-label={title}>
      <div className="flex flex-wrap items-center gap-2">
        <Chip tone={project.status === 'production' ? 'accent' : 'neutral'}>{t.project.status[project.status]}</Chip>
        <Chip tone="outline">{tx(project.category)}</Chip>
        {project.badges.map((badge) => (
          <Chip key={tx(badge)} tone="outline">
            {badge.icon === 'lock' ? <LockIcon /> : null}
            {tx(badge)}
          </Chip>
        ))}
        {project.period ? <span className="ml-auto text-xs font-semibold text-muted">{tx(project.period)}</span> : null}
      </div>

      <h3 className="mt-5 text-xl font-semibold leading-snug text-ink">{title}</h3>
      <p className="mt-3 text-base leading-relaxed text-muted">{tx(project.summary)}</p>
      <p className="mt-3 text-sm text-muted">
        <span className="font-semibold text-ink">{t.project.role}: </span>
        {tx(project.role)}
      </p>

      <div className="mt-6 grid gap-6">
        {project.problem ? (
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-ink">{t.project.problem}</h4>
            <p className="mt-2 text-sm leading-relaxed text-muted">{tx(project.problem)}</p>
          </div>
        ) : null}
        <DetailList title={solutionTitle} items={project.solution ? tx(project.solution) : null} />
        <DetailList title={t.project.results} items={project.results ? tx(project.results) : null} />
      </div>

      <Gallery images={project.images} />

      {project.stack.length > 0 ? (
        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Stack">
          {project.stack.map((tech) => (
            <li key={tech}>
              <Chip>{tech}</Chip>
            </li>
          ))}
        </ul>
      ) : null}

      {project.links.live || project.links.repo ? (
        <div className="mt-6 flex flex-wrap gap-4">
          {project.links.live ? (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-accent-strong underline-offset-4 hover:underline"
            >
              {t.project.live}
              <ExternalIcon />
              <span className="sr-only">{t.externalLink}</span>
            </a>
          ) : null}
          {project.links.repo ? (
            <a
              href={project.links.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-accent-strong underline-offset-4 hover:underline"
            >
              <GitHubIcon className="h-4 w-4" />
              {t.project.repo}
              <span className="sr-only">{t.externalLink}</span>
            </a>
          ) : null}
        </div>
      ) : null}
    </Reveal>
  );
}
