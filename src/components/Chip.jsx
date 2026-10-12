export default function Chip({ children, tone = 'neutral' }) {
  const tones = {
    neutral: 'bg-chip text-ink',
    accent: 'bg-accent text-on-accent',
    outline: 'border border-line text-muted',
  };
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${tones[tone]}`}>
      {children}
    </span>
  );
}
