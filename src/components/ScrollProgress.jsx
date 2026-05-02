import { useScrollProgress } from '../useScrollProgress';

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div
      className="fixed top-0 left-0 z-[9999] h-[3px] transition-all duration-100"
      style={{
        width: `${progress}%`,
        background: 'linear-gradient(90deg, #6c63ff, #00d4ff)',
      }}
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Page scroll progress"
    />
  );
}
