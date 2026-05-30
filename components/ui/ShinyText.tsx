'use client';

import { CSSProperties } from 'react';

interface ShinyTextProps {
  text: string;
  speed?: number;
  delay?: number;
  color?: string;
  shineColor?: string;
  spread?: number;
  direction?: 'left' | 'right';
  yoyo?: boolean;
  pauseOnHover?: boolean;
  disabled?: boolean;
  className?: string;
}

type ShinyStyle = CSSProperties & {
  '--shiny-speed': string;
  '--shiny-delay': string;
  '--shiny-color': string;
  '--shiny-shine-color': string;
  '--shiny-spread': string;
};

export function ShinyText({
  text,
  speed = 2,
  delay = 0,
  color = '#b5b5b5',
  shineColor = '#ffffff',
  spread = 120,
  direction = 'left',
  yoyo = false,
  pauseOnHover = false,
  disabled = false,
  className = '',
}: ShinyTextProps) {
  const animationDirection = yoyo
    ? direction === 'right'
      ? 'alternate-reverse'
      : 'alternate'
    : direction === 'right'
      ? 'reverse'
      : 'normal';

  const style: ShinyStyle = {
    '--shiny-speed': `${speed}s`,
    '--shiny-delay': `${delay}s`,
    '--shiny-color': color,
    '--shiny-shine-color': shineColor,
    '--shiny-spread': `${spread}px`,
    animationDirection,
  };

  return (
    <span
      className={`shiny-text ${pauseOnHover ? 'shiny-text-pause' : ''} ${disabled ? 'shiny-text-disabled' : ''} ${className}`}
      style={style}
    >
      {text}
    </span>
  );
}
