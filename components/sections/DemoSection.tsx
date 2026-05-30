'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { MagneticButton } from '../ui/MagneticButton';
import { useState } from 'react';
import { ExternalLink, Mail, Phone, Send } from 'lucide-react';
import { profile } from '@/lib/profile';

export function DemoSection() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    whatsapp: '',
    message: '',
  });

  const fieldClassName = `w-full rounded-lg border px-4 py-3 text-sm transition-colors ${
    isDark
      ? 'border-white/12 bg-white/[0.045] text-white placeholder:text-white/34 focus:border-[#baf6cf]/45'
      : 'border-black/12 bg-white/72 text-black placeholder:text-black/36 focus:border-[#4d8063]/35'
  }`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Portfolio inquiry - ${profile.name}`);
    const body = encodeURIComponent(
      [
        `Name: ${formData.name}`,
        `Company / Organization: ${formData.company}`,
        `Email: ${formData.email}`,
        `WhatsApp: ${formData.whatsapp || 'Not provided'}`,
        '',
        formData.message,
      ].join('\n'),
    );

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <div className={`border-t pt-8 ${isDark ? 'border-white/10' : 'border-black/10'}`}>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className={`text-xs uppercase tracking-[0.24em] ${
                isDark ? 'text-white/45' : 'text-black/45'
              }`}>
                Contact
              </p>
              <h2 className="mt-4 text-5xl font-semibold leading-[0.95] tracking-[-0.055em]">
                Tell me about the broker setup, role, or system you need built.
              </h2>

              <div className="mt-10 space-y-4">
                {[
                  { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
                  { icon: Phone, label: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
                  { icon: ExternalLink, label: profile.linkedinLabel, href: profile.linkedin, external: true },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                      className={`flex items-center gap-3 text-sm ${
                        isDark ? 'text-white/60' : 'text-black/60'
                      }`}
                    >
                      <Icon size={16} />
                      {item.label}
                    </a>
                  );
                })}
              </div>
            </div>

            <motion.form
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className={`rich-card grid gap-4 rounded-2xl p-5 ${
                isDark ? 'text-white' : 'text-black'
              }`}
            >
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={fieldClassName}
                  placeholder="Full name"
                />
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className={fieldClassName}
                  placeholder="Company / organization"
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={fieldClassName}
                  placeholder="Email"
                />
                <input
                  type="tel"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  className={fieldClassName}
                  placeholder="WhatsApp"
                />
              </div>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className={fieldClassName}
                placeholder="Short context"
              />

              <div className="pt-3">
                <MagneticButton type="submit" variant="primary" size="lg">
                  Send Email
                  <Send size={16} />
                </MagneticButton>
              </div>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}
