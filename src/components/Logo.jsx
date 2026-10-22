// Símbolo de marca, versión compacta para tamaños pequeños (barra lateral, 44 px).
// Llaves { } y escalera _| en el color del texto; persona en silla de ruedas y flecha => en el acento.
// El símbolo completo con la rueda (@) está en assets/logo/logo-simbolo.svg y se usa a partir de ~120 px.
export default function Logo({ className = 'h-10 w-10', title }) {
  const labelled = Boolean(title);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120 120"
      className={className}
      role={labelled ? 'img' : undefined}
      aria-label={labelled ? title : undefined}
      aria-hidden={labelled ? undefined : 'true'}
      focusable="false"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        d="M30 22 C21 22 21 29 21 37 L21 52 C21 57 18 60 13 60 C18 60 21 63 21 68 L21 83 C21 91 21 98 30 98"
        stroke="currentColor"
        strokeWidth="9"
      />
      <path
        d="M90 22 C99 22 99 29 99 37 L99 52 C99 57 102 60 107 60 C102 60 99 63 99 68 L99 83 C99 91 99 98 90 98"
        stroke="currentColor"
        strokeWidth="9"
      />
      <path d="M70 92 H76 V80 H84 V68 H90" stroke="currentColor" strokeWidth="7" />
      <circle cx="50" cy="32" r="7" fill="var(--accent)" />
      <path d="M38 62 L46 44" stroke="var(--accent)" strokeWidth="9" />
      <path d="M38 62 H57 L62 76 H66" stroke="var(--accent)" strokeWidth="9" />
      <circle cx="44" cy="80" r="14" stroke="var(--accent)" strokeWidth="8" />
      <g transform="translate(75 41) rotate(-48)" stroke="var(--accent)" strokeWidth="7">
        <path d="M-7 -4 H3" />
        <path d="M-7 4 H3" />
        <path d="M1 -9 L9 0 L1 9" />
      </g>
    </svg>
  );
}
