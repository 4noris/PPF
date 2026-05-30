'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/lib/profile';

export function ProductsSection() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="projects" className="px-5 py-16">
      <div className="mx-auto max-w-6xl">
        <div className={`border-t pt-6 ${isDark ? 'border-white/10' : 'border-black/10'}`}>
          <div className="grid gap-6 md:grid-cols-[0.7fr_1fr] md:items-start">
            <div>
              <p className={`text-xs uppercase tracking-[0.24em] ${
                isDark ? 'text-white/45' : 'text-black/45'
              }`}>
                Selected Work
              </p>
              <h2 className="premium-section-title mt-3 text-3xl font-semibold leading-tight md:text-4xl">
                <motion.span
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, ease: 'easeOut' }}
                  viewport={{ once: true }}
                  className="block"
                >
                  Personal Tools for broker
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.08, ease: 'easeOut' }}
                  viewport={{ once: true }}
                  className="block"
                >
                  operations.
                </motion.span>
              </h2>
            </div>
            <p className={`max-w-3xl text-lg leading-7 ${
              isDark ? 'text-white/58' : 'text-black/58'
            }`}>
              Built tools for copy trading, toxic trading checks, brokerage reports, credit management, MT5 web operations, and swap charging.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.03 }}
                viewport={{ once: true }}
                className={`rich-card rich-project-card project-row group relative flex min-h-[300px] flex-col rounded-2xl p-6 ${
                  isDark
                    ? 'text-white'
                    : 'text-black'
                }`}
              >
                <div className="relative z-10 flex items-start justify-between gap-4">
                  <p className={`font-mono text-xs ${isDark ? 'text-[#baf6cf]/60' : 'text-[#234f3b]/55'}`}>
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <div
                    className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-colors ${
                      isDark
                        ? 'border-white/14 bg-white/[0.04] text-white/52'
                        : 'border-black/10 bg-white/70 text-black/42'
                    }`}
                  >
                    <ArrowUpRight size={18} />
                  </div>
                </div>

                <div className="relative z-10 mt-10 flex flex-1 flex-col">
                  <h3 className="text-2xl font-semibold leading-tight tracking-[-0.03em]">
                    {project.title}
                  </h3>
                  <p className={`mt-5 text-sm leading-6 ${isDark ? 'text-white/58' : 'text-black/58'}`}>
                    {project.description}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2 pt-8">
                    {project.features.map((feature) => (
                      <span
                        key={feature}
                        className={`rich-chip rounded-full border px-3 py-1 text-xs transition-colors duration-300 ${
                          isDark ? 'text-white/62' : 'text-black/62'
                        }`}
                      >
                        {feature}
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
