'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { Send } from 'lucide-react';
import { BrandMark } from './BrandMark';

export function Navbar() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const menuItems = [
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#projects' },
    { label: 'Systems', href: '#stack' },
    { label: 'Experience', href: '#experience' },
  ];

  return (
    <motion.nav
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35 }}
      className="rich-navbar fixed inset-x-0 top-0 z-50 px-4 py-4"
    >
      <div className={`nav-panel mx-auto flex h-16 max-w-[92rem] items-center justify-between px-4 ${
        isDark ? 'nav-panel-dark' : 'nav-panel-light'
      }`}>
        <BrandMark />

        <div className="hidden items-center gap-7 lg:flex">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`rich-nav-link text-sm transition-colors ${
                isDark ? 'text-white/58 hover:text-white' : 'text-black/58 hover:text-black'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            aria-label="Contact"
            title="Contact"
            className={`icon-button nav-contact-button ${
              isDark
                ? 'border-white/12 bg-white/[0.04] text-white/74 hover:border-[#c084fc]/45 hover:bg-[#8b5cf6]/15 hover:text-white'
                : 'border-black/12 bg-white/70 text-black/70 hover:text-black'
            }`}
          >
            <Send size={16} />
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
