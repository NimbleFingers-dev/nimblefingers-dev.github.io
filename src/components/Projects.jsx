import projects from '../data/projects.json';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import ProjectCard from './ProjectCard.jsx';
import Section from './Section.jsx';

export default function Projects() {
  const { t } = useLanguage();
  const shipped = projects.filter((project) => project.status !== 'in-development');
  const inProgress = projects.filter((project) => project.status === 'in-development');

  return (
    <Section id="proyectos" title={t.sections.projects}>
      <div className="space-y-6">
        {shipped.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {inProgress.length > 0 ? (
        <div className="mt-14">
          <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-muted">{t.sections.inProgress}</h3>
          <div className="space-y-6">
            {inProgress.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      ) : null}
    </Section>
  );
}
