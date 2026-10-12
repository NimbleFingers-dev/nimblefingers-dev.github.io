import profile from '../data/profile.json';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import Reveal from './Reveal.jsx';
import Section from './Section.jsx';

export default function About() {
  const { t, tx } = useLanguage();
  const paragraphs = tx(profile.about);

  return (
    <Section id="sobre-mi" title={t.sections.about}>
      <Reveal className="space-y-4 text-base leading-relaxed text-muted">
        {paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 32)}>{paragraph}</p>
        ))}
        <p className="pt-2 text-lg font-semibold text-ink">
          <span className="text-accent-strong">{'{ '}</span>
          {tx(profile.tagline)}
          <span className="text-accent-strong">{' }'}</span>
        </p>
      </Reveal>
    </Section>
  );
}
