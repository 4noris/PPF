'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { ReactNode } from 'react';

interface MagneticButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function MagneticButton({
  children,
  onClick,
  href,
  target,
  rel,
  type = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
}: MagneticButtonProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-5 py-3 text-sm',
    lg: 'px-6 py-3 text-sm',
  };

  const variantClasses = {
    primary: isDark
      ? 'bg-[#f5f5f0] text-[#050505] hover:bg-[#baf6cf]'
      : 'bg-[#141414] text-white hover:bg-[#234f3b]',
    secondary: isDark
      ? 'border border-white/16 bg-white/[0.055] text-[#f5f5f0] hover:border-white/34 hover:bg-white/[0.11]'
      : 'border border-black/12 bg-white/60 text-[#141414] hover:border-black/28 hover:bg-white',
    tertiary: isDark
      ? 'text-[#f5f5f0]'
      : 'text-[#141414]',
  };

  const buttonClassName = `
    inline-flex items-center justify-center gap-2 rounded-full font-medium
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${className}
  `;

  const content = <span className="flex items-center justify-center gap-2">{children}</span>;

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        className={buttonClassName}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      type={type}
      className={buttonClassName}
    >
      {content}
    </motion.button>
  );
}
