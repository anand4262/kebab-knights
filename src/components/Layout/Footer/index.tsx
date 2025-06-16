'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '@iconify/react';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-offwhite pt-12 pb-6">
      <div className="container mx-auto px-4 text-center">
        {/* Logo in white background */}
        <div className="inline-flex items-center justify-center bg-white rounded-xl p-2 w-fit mx-auto mb-6">
          <Image
            src="/images/logo/kebab-knights-logo-t.png"
            alt="Kebab Knights Logo"
            width={160}
            height={50}
            className="object-contain"
            priority
          />
        </div>

        {/* Tagline */}
        <p className="text-sm text-white/60 mb-6">
          Melbourne’s favorite late-night kebab stop — bold, fresh, unforgettable.
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-6">
          <Link href="#" aria-label="Facebook" className="hover:text-primary transition">
            <Icon icon="fa6-brands:facebook-f" width={20} height={20} />
          </Link>
          <Link href="#" aria-label="Instagram" className="hover:text-primary transition">
            <Icon icon="fa6-brands:instagram" width={20} height={20} />
          </Link>
          <Link href="#" aria-label="Twitter" className="hover:text-primary transition">
            <Icon icon="fa6-brands:x-twitter" width={20} height={20} />
          </Link>
        </div>

        {/* Footer Links */}
        <div className="flex justify-center gap-6 text-xs text-white/50 mb-4">
          <Link href="#contact" className="hover:text-primary">Contact</Link>
          <Link href="#" className="hover:text-primary">Privacy</Link>
          <Link href="#" className="hover:text-primary">Terms</Link>
        </div>

        {/* Copyright */}
        <p className="text-xs text-white/40">
          &copy; 2025 Kebab Knights. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
