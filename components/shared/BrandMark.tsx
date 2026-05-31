import { profile } from '@/lib/profile';

interface BrandMarkProps {
  compact?: boolean;
  className?: string;
}

export function BrandMark({ compact = false, className = '' }: BrandMarkProps) {
  return (
    <a
      href="#home"
      aria-label={`${profile.name} home`}
      className={`brand-lockup inline-flex items-center gap-3 ${className}`}
    >
      <span className="brand-mark" aria-hidden="true">
        <span className="brand-mark-line" />
        <span className="brand-mark-line" />
        <span className="brand-mark-line" />
      </span>
      {!compact && (
        <span className="brand-wordmark">
          MetaFive
        </span>
      )}
    </a>
  );
}
