'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  glowIntensity?: 'low' | 'medium' | 'high';
}

export function GlassCard({
  children,
  className = '',
}: GlassCardProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.div
      transition={{ duration: 0.2 }}
      className={`
        rich-card rounded-lg
        ${isDark ? 'text-white' : 'text-black'}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}
