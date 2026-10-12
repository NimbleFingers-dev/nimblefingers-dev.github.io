import profile from '../data/profile.json';
import skills from '../data/skills.json';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import Chip from './Chip.jsx';
import Reveal from './Reveal.jsx';
import Section from './Section.jsx';

export default function Skills() {
  const { t, tx } = useLanguage();

  return (
    <Section id="habilidades" title={t.sections.skills}>
      <div className="grid gap-8 sm:grid-cols-2">
        {skills.map((group) => (
          <Reveal key={group.id}>
            <h3 className="text-sm font-semibold text-ink">{tx(group.title)}</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => {
                const label = tx(item);
                return (
                  <li key={label}>
                    <Chip>{label}</Chip>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-14 grid gap-8 rounded-2xl border border-line bg-surface p-6 sm:grid-cols-2 sm:p-8">
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-ink">{t.sections.education}</h3>
          {profile.education.map((item) => (
            <div key={item.institution} className="mt-3">
              <p className="text-base font-semibold text-ink">{tx(item.degree)}</p>
              <p className="mt-1 text-sm text-muted">{item.institution}</p>
              <p className="mt-1 text-sm text-muted">{tx(item.period)}</p>
            </div>
          ))}
          <p className="mt-4 text-sm text-muted">{tx(profile.courses)}</p>
        </div>
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-ink">{t.languagesTitle}</h3>
          <ul className="mt-3 space-y-1 text-sm text-muted">
            {profile.languages.map((language) => (
              <li key={language.es}>{tx(language)}</li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
