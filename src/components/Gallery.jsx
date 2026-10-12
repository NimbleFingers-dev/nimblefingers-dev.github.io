import { useLanguage } from '../i18n/LanguageContext.jsx';

// Galería de capturas: la primera imagen va destacada y el resto en una cuadrícula.
// Cada imagen abre su versión de 1600 px en una pestaña nueva. Todas cargan en diferido.
function Shot({ image, featured }) {
  const { t, tx } = useLanguage();
  const alt = tx(image.alt);

  return (
    <figure className="min-w-0">
      <a
        href={image.src1600}
        target="_blank"
        rel="noopener noreferrer"
        className="block overflow-hidden rounded-xl border border-line bg-chip transition-colors hover:border-accent-strong"
      >
        <img
          src={image.src800}
          srcSet={`${image.src800} 800w, ${image.src1600} 1600w`}
          sizes={featured ? '(min-width: 1024px) 560px, 100vw' : '(min-width: 1024px) 270px, (min-width: 640px) 50vw, 100vw'}
          width={image.width}
          height={image.height}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="h-auto w-full"
        />
        <span className="sr-only">
          {t.project.viewLarge} {t.externalLink}
        </span>
      </a>
      <figcaption className={`mt-2 text-muted ${featured ? 'text-sm' : 'text-xs'} leading-snug`}>{alt}</figcaption>
    </figure>
  );
}

export default function Gallery({ images }) {
  const { t } = useLanguage();
  if (!images || images.length === 0) return null;
  const [first, ...rest] = images;

  return (
    <div className="mt-6" role="group" aria-label={t.project.gallery}>
      <Shot image={first} featured />
      {rest.length > 0 ? (
        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {rest.map((image) => (
            <Shot key={image.src800} image={image} featured={false} />
          ))}
        </div>
      ) : null}
    </div>
  );
}
