// Símbolo de marca: llaves de código con una persona al centro.
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
    >
      <path
        d="M44 20 C32 20 32 28 32 38 L32 50 C32 56 28 60 21 60 C28 60 32 64 32 70 L32 82 C32 92 32 100 44 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M76 20 C88 20 88 28 88 38 L88 50 C88 56 92 60 99 60 C92 60 88 64 88 70 L88 82 C88 92 88 100 76 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="60" cy="46" r="11.5" fill="var(--accent)" />
      <path d="M41.5 84.5 C41.5 70.5 50 64 60 64 C70 64 78.5 70.5 78.5 84.5 Z" fill="var(--accent)" />
    </svg>
  );
}
