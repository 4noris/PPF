'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { certifications, education, expertise, languages, profile } from '@/lib/profile';

export function AboutSection() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="about" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <div className={`grid gap-10 border-t pt-8 lg:grid-cols-[0.8fr_1.2fr] ${
          isDark ? 'border-white/10' : 'border-black/10'
        }`}>
          <div>
            <p className={`text-xs uppercase tracking-[0.24em] ${
              isDark ? 'text-white/45' : 'text-black/45'
            }`}>
              About
            </p>
            <h2 className="mt-4 max-w-sm text-4xl font-semibold leading-tight tracking-[-0.04em]">
              Broker-side systems, operations, and automation.
            </h2>
          </div>

          <div>
            <p className={`max-w-3xl text-xl leading-8 tracking-[-0.015em] ${
              isDark ? 'text-white/76' : 'text-black/76'
            }`}>
              {profile.summary}
            </p>

            <div className="mt-10 grid gap-3 md:grid-cols-3">
              {expertise.map((item) => (
                <motion.div
                  key={item}
                  className={`rich-card rounded-xl p-4 text-sm ${
                    isDark ? 'text-white/76' : 'text-black/76'
                  }`}
                >
                  <span className="relative z-10">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-lg font-semibold tracking-[-0.02em]">Education</h3>
                <div className="mt-5 space-y-5">
                  {education.map((item) => (
                    <div key={`${item.title}-${item.year}`}>
                      <p className="font-medium">{item.title} / {item.year}</p>
                      <p className={`mt-1 text-sm leading-6 ${
                        isDark ? 'text-white/55' : 'text-black/55'
                      }`}>
                        {item.detail}, {item.institution}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold tracking-[-0.02em]">Credentials</h3>
                <div className={`mt-5 space-y-3 text-sm leading-6 ${
                  isDark ? 'text-white/60' : 'text-black/60'
                }`}>
                  <p>{certifications.join(' / ')}</p>
                  <p>{languages.join(' / ')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
