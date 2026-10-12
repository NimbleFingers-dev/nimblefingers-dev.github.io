// Contenedor de sección con título accesible. En móvil el título queda fijo arriba al hacer scroll.
export default function Section({ id, title, children }) {
  const headingId = `${id}-title`;
  return (
    <section id={id} aria-labelledby={headingId} className="mb-20 scroll-mt-20 lg:mb-28 lg:scroll-mt-24">
      <div className="sticky top-0 z-10 -mx-5 mb-6 bg-page/90 px-5 py-4 backdrop-blur sm:-mx-8 sm:px-8 lg:static lg:mx-0 lg:mb-8 lg:bg-transparent lg:p-0 lg:backdrop-blur-none">
        <h2 id={headingId} className="text-sm font-semibold uppercase tracking-[0.18em] text-ink">
          <span className="mr-2 text-accent-strong" aria-hidden="true">
            {'{'}
          </span>
          {title}
          <span className="ml-2 text-accent-strong" aria-hidden="true">
            {'}'}
          </span>
        </h2>
      </div>
      {children}
    </section>
  );
}
