// Símbolo de marca NimbleFingers: [ o / _ \ (@) _|_|_| => )
// Persona en silla de ruedas (rueda = @) frente a una escalera, con una flecha de subida, dentro de un
// intervalo semiabierto [inicio, límite): el punto de partida está incluido y el límite nunca se alcanza.
// Corchete, paréntesis y escalera usan el color del texto (currentColor); persona y flecha usan el acento de marca.
// Proporción 3:2 (lienzo 180x120): dale siempre alto y ancho en esa relación, por ejemplo h-16 w-24.
export default function Logo({ className = 'h-16 w-24', title }) {
  const labelled = Boolean(title);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 180 120"
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
        d="M37 20 H23 V100 H37"
        stroke="currentColor"
        strokeWidth="9"
      />
      <path
        d="M135 20 C157 38 157 82 135 100"
        stroke="currentColor"
        strokeWidth="9"
      />
      <g stroke="currentColor" strokeWidth="4.5">
        <path d="M100 99 H106 V90" />
        <path d="M111 85 H117 V76" />
        <path d="M122 71 H128 V62" />
      </g>
      <g transform="translate(111 43) rotate(-48)" stroke="var(--accent)" strokeWidth="4.5">
        <path d="M-14 -4 H-3" />
        <path d="M-14 4 H-3" />
        <path d="M2 -9 L10 0 L2 9" />
      </g>
      <g transform="translate(7 0)" stroke="var(--accent)">
        <circle cx="72" cy="29" r="5" strokeWidth="4.5" />
        <g strokeWidth="5.5">
          <path d="M58 60 L67 42" />
          <path d="M67 64 H80" />
          <path d="M88 67 L93 80" />
        </g>
        <g strokeWidth="4">
          <path d="M51 73 Q39 87 51 101" />
          <path d="M75 73 Q87 87 75 101" />
          <circle cx="63" cy="87" r="4" />
          <path d="M67 82.5 V89 Q67 92.5 70.5 92.5 Q72.5 92.5 73.3 90.8 A11 11 0 1 0 66.8 97.3" />
        </g>
      </g>
    </svg>
  );
}
