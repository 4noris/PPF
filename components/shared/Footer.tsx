'use client';

import { useTheme } from '@/context/ThemeContext';
import { profile } from '@/lib/profile';
import { BrandMark } from './BrandMark';

export function Footer() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <footer className="px-5 pb-10 pt-20">
      <div className={`mx-auto flex max-w-[96rem] flex-col gap-4 border-t pt-6 text-sm md:flex-row md:items-center md:justify-between ${
        isDark ? 'border-white/10 text-white/45' : 'border-black/10 text-black/45'
      }`}>
        <div className="flex items-center gap-4">
          <BrandMark compact />
          <p>Copyright 2026 {profile.name}</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <a href={`mailto:${profile.email}`}>
            Email
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
