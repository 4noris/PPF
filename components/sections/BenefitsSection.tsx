'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

export function BenefitsSection() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const strengths = [
    {
      title: 'Managed broker setup according to broker requirements',
      description: 'Configured operational flows around the broker setup, trading platform needs, CRM workflows, bridge routing, and reporting requirements.',
    },
    {
      title: 'Reduced manual monitoring effort by 60%',
      description: 'Built real-time dashboards and operational reporting tools for broker-side risk monitoring and daily support work.',
    },
    {
      title: 'Toxic flow and account behavior analysis',
      description: 'Worked on detection for scalping, VPS usage, burst trading, grid, martingale, reversal strategies, IP tracking, and account scanning.',
    },
    {
      title: 'MT5 account and symbol operations',
      description: 'Built tools around balance, credit, leverage, trading permissions, swap configuration, batch symbol updates, validation checks, and audit logs.',
    },
    {
      title: 'Bridge and liquidity monitoring',
      description: 'Supported Centroid, FXCubic, TFB Trade Processor, liquidity routing, execution tracking, and connected broker workflows.',
    },
    {
      title: 'Back-office reporting automation',
      description: 'Developed brokerage calculation and operational reporting tools to improve processing time and workflow accuracy.',
    },
  ];

  return (
    <section id="strengths" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <div className={`border-t pt-8 ${isDark ? 'border-white/10' : 'border-black/10'}`}>
          <div className="grid gap-8 md:grid-cols-[0.65fr_1.35fr]">
            <div>
              <p className={`text-xs uppercase tracking-[0.24em] ${
                isDark ? 'text-white/45' : 'text-black/45'
              }`}>
                Operational Strengths
              </p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.04em]">
                Practical areas from broker infrastructure work.
              </h2>
            </div>
            <p className={`max-w-2xl text-lg leading-7 ${
              isDark ? 'text-white/58' : 'text-black/58'
            }`}>
              Focused on the pieces that matter inside brokerage operations: setup, monitoring, routing, reporting, controls, and risk visibility.
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {strengths.map((strength, index) => (
              <motion.div
                key={strength.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                viewport={{ once: true }}
                className={`rich-card rounded-2xl p-6 ${
                  isDark ? 'text-white' : 'text-black'
                }`}
              >
                <p className={`relative z-10 mb-8 font-mono text-xs ${isDark ? 'text-[#baf6cf]/55' : 'text-[#234f3b]/50'}`}>
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="relative z-10 text-lg font-semibold leading-snug tracking-[-0.02em]">
                  {strength.title}
                </h3>
                <p className={`relative z-10 mt-4 text-sm leading-6 ${isDark ? 'text-white/58' : 'text-black/58'}`}>
                  {strength.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
