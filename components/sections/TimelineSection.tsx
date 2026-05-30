'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { education, experience } from '@/lib/profile';

export function TimelineSection() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const timeline = [
    ...experience.map((item) => ({ ...item, type: 'Experience' })),
    ...education.map((item) => ({
      title: item.title,
      organization: item.institution,
      period: item.year,
      description: item.detail,
      highlights: [item.detail],
      type: 'Education',
    })),
  ];

  return (
    <section id="experience" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <div className={`border-t pt-8 ${isDark ? 'border-white/10' : 'border-black/10'}`}>
          <div className="grid gap-8 md:grid-cols-[0.65fr_1.35fr]">
            <div>
              <p className={`text-xs uppercase tracking-[0.24em] ${
                isDark ? 'text-white/45' : 'text-black/45'
              }`}>
                Experience
              </p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.04em]">
                Work history and education.
              </h2>
            </div>
            <p className={`max-w-2xl text-lg leading-7 ${
              isDark ? 'text-white/58' : 'text-black/58'
            }`}>
              Systems engineering experience supported by Java training and a computer engineering background.
            </p>
          </div>

          <div className="mt-14 grid gap-4">
            {timeline.map((item, index) => (
              <motion.article
                key={`${item.title}-${item.period}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                viewport={{ once: true }}
                className={`rich-card grid gap-5 rounded-2xl p-6 md:grid-cols-[150px_1fr_1fr] ${
                  isDark ? 'text-white' : 'text-black'
                }`}
              >
                <div className="relative z-10">
                  <p className={`font-mono text-xs ${isDark ? 'text-[#baf6cf]/55' : 'text-[#234f3b]/50'}`}>
                    {item.period}
                  </p>
                  <p className={`mt-2 text-xs uppercase tracking-[0.18em] ${
                    isDark ? 'text-white/42' : 'text-black/42'
                  }`}>
                    {item.type}
                  </p>
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold tracking-[-0.025em]">{item.title}</h3>
                  <p className={`mt-2 text-sm ${isDark ? 'text-white/52' : 'text-black/52'}`}>
                    {item.organization}
                  </p>
                </div>
                <div className="relative z-10">
                  <p className={`text-sm leading-6 ${isDark ? 'text-white/58' : 'text-black/58'}`}>
                    {item.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className={`rich-chip rounded-full border px-3 py-1 text-xs ${
                          isDark ? 'text-white/56' : 'text-black/56'
                        }`}
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
