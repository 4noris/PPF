'use client';

import { motion } from 'framer-motion';
import { Fragment } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { MagneticButton } from '../ui/MagneticButton';
import { Activity, ArrowDownRight, Network, ShieldCheck } from 'lucide-react';
import { profile } from '@/lib/profile';

export function HeroSection() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const titleLetters = ['M', 'E', 'T', 'A', 'F', 'I', 'V', 'E'];
  const summaryWords = profile.summary.split(' ');
  const desktopLineBreakAfterWord = 11;
  const heroSignals = [
    { label: 'MT5 Ops', icon: Activity },
    { label: 'Bridge Routing', icon: Network },
    { label: 'Risk Controls', icon: ShieldCheck },
  ];

  return (
    <section id="home" className="hero-rich-surface relative min-h-screen overflow-hidden px-4 pb-8 pt-24 md:pt-28">
      <div className={`hero-frame mx-auto flex min-h-[calc(100vh-8rem)] max-w-[92rem] flex-col justify-between overflow-hidden ${
        isDark ? 'hero-frame-dark' : 'hero-frame-light'
      }`}>
        <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-5 py-16 text-center md:px-10">
          <motion.div
            className="hero-title-stage group flex w-full justify-center"
          >
            <motion.div className="hero-title-3d relative w-full">
              <h1
                aria-label="MetaFive"
                className={`hero-name relative mx-auto max-w-7xl text-[3.7rem] font-normal uppercase leading-[0.8] sm:text-[5.4rem] md:text-[7.4rem] lg:text-[8.8rem] xl:text-[10.2rem] ${
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
            className="mt-7 flex max-w-6xl flex-col items-center sm:mt-8"
          >
            <motion.p
              aria-label={profile.summary}
              className={`hero-subtitle text-base leading-7 sm:text-lg ${
                isDark ? 'text-white/78' : 'text-black/74'
              }`}
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.018,
                    delayChildren: 0.42,
                  },
                },
              }}
            >
              {summaryWords.map((word, index) => (
                <Fragment key={`${word}-${index}`}>
                  <motion.span
                    aria-hidden="true"
                    className="animated-summary-word"
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: 10,
                        filter: 'blur(8px)',
                      },
                      visible: {
                        opacity: 1,
                        y: 0,
                        filter: 'blur(0px)',
                        transition: {
                          duration: 0.38,
                          ease: 'easeOut',
                        },
                      },
                    }}
                  >
                    {word}
                  </motion.span>
                  {index < summaryWords.length - 1 ? ' ' : null}
                  {index === desktopLineBreakAfterWord ? (
                    <br className="hero-summary-break" aria-hidden="true" />
                  ) : null}
                </Fragment>
              ))}
            </motion.p>

            <div className="hero-signal-strip mt-6" aria-label="Core operating areas">
              {heroSignals.map((signal) => {
                const Icon = signal.icon;

                return (
                  <span key={signal.label} className="hero-signal-chip">
                    <Icon size={14} />
                    {signal.label}
                  </span>
                );
              })}
            </div>

            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <MagneticButton href="#projects" variant="primary" size="md">
                See Projects
                <ArrowDownRight size={15} />
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
