'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { MagneticButton } from '../ui/MagneticButton';
import { ArrowDownRight } from 'lucide-react';
import { AbstractHeroVisual } from '../visuals/AbstractHeroVisual';
import { profile } from '@/lib/profile';

export function HeroSection() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const titleLetters = ['N', 'O', 'R', 'I', 'S'];

  return (
    <section id="home" className="hero-rich-surface relative min-h-screen overflow-hidden px-4 pb-8 pt-24 md:pt-28">
      <div className={`hero-frame mx-auto flex min-h-[calc(100vh-8rem)] max-w-[92rem] flex-col justify-between overflow-hidden ${
        isDark ? 'hero-frame-dark' : 'hero-frame-light'
      }`}>
        <AbstractHeroVisual />

        <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-5 py-16 text-center md:px-10">
          <motion.div
            className="hero-title-stage group flex w-full justify-center"
          >
            <motion.div className="hero-title-3d relative w-full">
              <h1
                aria-label="Noris"
                className={`hero-name relative mx-auto max-w-6xl text-[5.2rem] font-normal uppercase leading-[0.8] sm:text-[7rem] md:text-[10rem] lg:text-[12rem] xl:text-[14rem] ${
                  isDark ? 'hero-name-dark' : 'hero-name-light'
                }`}
              >
                <motion.span
                  initial={{ opacity: 0, y: 52 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.85, delay: 0.08, ease: 'easeOut' }}
                  className="hero-lettermark"
                  aria-hidden="true"
                >
                  {titleLetters.map((letter) => (
                    <span key={letter}>{letter}</span>
                  ))}
                </motion.span>
              </h1>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              opacity: { duration: 0.65, delay: 0.36, ease: 'easeOut' },
              y: { duration: 0.65, delay: 0.36, ease: 'easeOut' },
            }}
            className="mt-7 flex max-w-4xl flex-col items-center sm:mt-8"
          >
            <p className={`hero-subtitle text-balance text-base leading-7 sm:text-lg ${
              isDark ? 'text-white/78' : 'text-black/74'
            }`}>
              {profile.summary}
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <MagneticButton href="#projects" variant="primary" size="md">
                See Projects
                <ArrowDownRight size={15} />
              </MagneticButton>
              <MagneticButton href="#contact" variant="secondary" size="md">
                Book a Call
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
