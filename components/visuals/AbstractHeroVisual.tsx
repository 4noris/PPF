interface AbstractHeroVisualProps {
  className?: string;
}

export function AbstractHeroVisual({ className = '' }: AbstractHeroVisualProps) {
  return (
    <div className={`abstract-hero-visual ${className}`} aria-hidden="true">
      <svg viewBox="0 0 1200 760" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="micro-grid" width="72" height="72" patternUnits="userSpaceOnUse">
            <path d="M72 0H0V72" />
          </pattern>
          <linearGradient id="line-fade" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
            <stop offset="42%" stopColor="currentColor" stopOpacity="0.24" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="quiet-light" cx="50%" cy="44%" r="56%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.82" />
            <stop offset="64%" stopColor="#f2f0e8" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#ece9df" stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect className="minimal-glow" width="1200" height="760" fill="url(#quiet-light)" />
        <rect className="minimal-grid" width="1200" height="760" fill="url(#micro-grid)" />
        <g className="minimal-lines">
          <path d="M-40 505C166 406 326 392 468 462C616 535 746 536 904 448C1031 377 1122 369 1260 416" />
          <path d="M118 250C274 196 410 204 536 274C682 356 812 352 982 250C1084 188 1168 180 1260 205" />
          <path d="M258 660C392 608 520 604 638 641C776 684 914 669 1082 590" />
        </g>
        <g className="minimal-anchors">
          <circle cx="256" cy="208" r="2" />
          <circle cx="936" cy="260" r="2" />
          <circle cx="706" cy="608" r="2" />
        </g>
      </svg>
    </div>
  );
}
