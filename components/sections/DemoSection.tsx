'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { MagneticButton } from '../ui/MagneticButton';
import { useState } from 'react';
import { ExternalLink, Mail, MessageCircle, Send } from 'lucide-react';
import { profile } from '@/lib/profile';

export function DemoSection() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const whatsappHref = `https://wa.me/${profile.phone.replace(/\D/g, '')}`;
  const contactMethods = [
    { icon: Mail, name: 'Email', detail: 'Project inquiry', href: `mailto:${profile.email}` },
    { icon: MessageCircle, name: 'WhatsApp', detail: 'Fast availability check', href: whatsappHref, external: true },
    { icon: ExternalLink, name: 'LinkedIn', detail: 'Professional profile', href: profile.linkedin, external: true },
  ];

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    whatsapp: '',
    message: '',
  });

  const fieldClassName = `w-full rounded-lg border px-4 py-3 text-sm transition-colors ${
    isDark
      ? 'border-white/12 bg-[#12081f]/50 text-white placeholder:text-white/34 focus:border-[#d8b4fe]/50'
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
              <h2 className="mt-4 text-4xl font-semibold leading-[0.98] tracking-[-0.045em] sm:text-5xl">
                Tell me about the broker setup, role, or system you need built.
              </h2>

              <div className="contact-method-grid mt-10">
                {contactMethods.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.28, delay: index * 0.04 }}
                      viewport={{ once: true }}
                      className="contact-method-card"
                      aria-label={item.name}
                    >
                      <span className="contact-method-icon" aria-hidden="true">
                        <Icon size={17} />
                      </span>
                      <span>
                        <span className="contact-method-name">{item.name}</span>
                        <span className="contact-method-detail">{item.detail}</span>
                      </span>
                    </motion.a>
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
              className={`rich-card contact-form-panel grid gap-4 rounded-2xl p-5 ${
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
