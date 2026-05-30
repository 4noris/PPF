'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

export function TechStackSection() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const platformGroups = [
    {
      title: 'Trading Platforms',
      items: ['MT5 Manager', 'MT5 Admin', 'Match-Trader', 'TradeLocker'],
    },
    {
      title: 'Bridge & Execution',
      items: ['Centroid Bridge', 'FXCubic', 'Brokeree', 'TFB Trade Processor', 'TFB Tools'],
    },
    {
      title: 'CRM Platforms',
      items: ['Techysquad', 'Brocktagone', 'Fynxt'],
    },
    {
      title: 'Operations & Analysis',
      items: ['Trading Analytics', 'Back-Office Workflows', 'Automation Systems', 'Tools Development'],
    },
  ];

  return (
    <section id="stack" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <div className={`border-t pt-8 ${isDark ? 'border-white/10' : 'border-black/10'}`}>
          <div className="grid gap-8 md:grid-cols-[0.65fr_1.35fr]">
            <div>
              <p className={`text-xs uppercase tracking-[0.24em] ${
                isDark ? 'text-white/45' : 'text-black/45'
              }`}>
                Platforms Handled
              </p>
              <h2 className="premium-section-title mt-4 text-4xl font-semibold leading-tight tracking-[-0.045em]">
                Broker systems I have hands-on experience with.
              </h2>
            </div>
            <p className={`max-w-2xl text-lg leading-7 ${
              isDark ? 'text-white/58' : 'text-black/58'
            }`}>
              Experience across trading platform administration, bridge connectivity, CRM support, execution monitoring, reporting workflows, and broker-side automation.
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2">
            {platformGroups.map((group, index) => (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                viewport={{ once: true }}
                className={`rich-card relative min-h-52 rounded-2xl p-7 ${
                  isDark ? 'text-white' : 'text-black'
                }`}
              >
                <p className={`relative z-10 font-mono text-xs ${isDark ? 'text-[#baf6cf]/55' : 'text-[#234f3b]/50'}`}>
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="relative z-10 mt-8 text-2xl font-semibold tracking-[-0.035em]">
                  {group.title}
                </h3>
                <div className="relative z-10 mt-6 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className={`rich-chip rounded-full border px-3 py-1.5 text-sm ${
                        isDark ? 'text-white/68' : 'text-black/68'
                      }`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
