'use client';

import { useTheme } from '@/context/ThemeContext';
import { certifications, education, expertise, languages, profile } from '@/lib/profile';

export function AboutSection() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const expertiseLoops = [expertise, expertise];

  return (
    <section id="about" className="px-4 py-20 sm:px-5 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className={`border-t pt-8 ${
          isDark ? 'border-white/10' : 'border-black/10'
        }`}>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className={`text-xs uppercase tracking-[0.24em] ${
                isDark ? 'text-white/45' : 'text-black/45'
              }`}>
                About
              </p>
              <h2 className="mt-4 max-w-sm text-3xl font-semibold leading-tight sm:text-4xl">
                Broker-side systems, operations, and automation.
              </h2>
            </div>

            <p className={`max-w-3xl text-lg leading-8 sm:text-xl ${
              isDark ? 'text-white/76' : 'text-black/76'
            }`}>
              {profile.summary}
            </p>
          </div>

          <div className="expertise-marquee mt-10" aria-label="Broker systems and operations expertise">
            <div className="expertise-marquee-track">
              {expertiseLoops.map((loop, loopIndex) => (
                <div
                  key={`expertise-loop-${loopIndex}`}
                  className="expertise-marquee-set"
                  aria-hidden={loopIndex > 0}
                >
                  {loop.map((item) => (
                    <div
                      key={`${item}-${loopIndex}`}
                      className={`rich-card expertise-card flex flex-none items-center p-4 text-sm font-medium sm:text-base ${
                        isDark ? 'text-white/76' : 'text-black/76'
                      }`}
                    >
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="hidden lg:block" />

            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-lg font-semibold">Education</h3>
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
                <h3 className="text-lg font-semibold">Credentials</h3>
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
