import React from 'react';
import { NewsletterForm } from '../molecules/NewsletterForm';
import { Text } from '../atoms/Text';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    telusuri: [
      { label: 'Beranda', href: '/' },
      { label: 'Kategori', href: '#kategori' },
      { label: 'Kebijakan', href: '#kebijakan' },
    ],
    bantuan: [
      { label: 'Hubungi Kami', href: '#hubungi' },
      { label: 'Karir', href: '#karir' },
      { label: 'Laporan Pembajakan', href: '#laporan' },
    ],
    kategori: [
      { label: 'Otomotif', href: '#otomotif' },
      { label: 'Olahraga', href: '#olahraga' },
      { label: 'Hiburan', href: '#hiburan' },
    ],
    informasi: [
      { label: 'Kebijakan', href: '#kebijakan' },
      { label: 'Internasional', href: '#internasional' },
      { label: 'Nasional', href: '#nasional' },
    ],
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-2xl">
            <Text variant="h3" className="text-white mb-4">
              Berlanggan Berita Terbaru
            </Text>
            <NewsletterForm
              placeholder="Masukkan email Anda"
              buttonLabel="Langganan"
            />
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Logo and description */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">B</span>
            </div>
            <span className="text-lg font-bold">Berita Kini</span>
          </div>
          <p className="text-gray-400 text-sm">
            Platform berita terpercaya untuk informasi terkini dan terlengkap.
          </p>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="font-semibold text-white mb-4 capitalize">
                {section === 'telusuri'
                  ? 'Telusuri'
                  : section === 'kategori'
                  ? 'Kategori'
                  : 'Informasi'}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-gray-400 text-sm">
            © {currentYear} Berita Kini. All Rights Reserved.
          </div>

          {/* Social Media Links */}
          <div className="flex items-center gap-4">
            {[
              { icon: '📘', label: 'Facebook', href: '#facebook' },
              { icon: '📷', label: 'Instagram', href: '#instagram' },
              { icon: '𝕏', label: 'Twitter', href: '#twitter' },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-accent transition-colors flex items-center justify-center text-lg"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
