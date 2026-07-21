'use client';

import { logos, nav } from '@/lib/site';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-clay-brown text-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:h-20 sm:px-8">
        <Link
          href="/"
          aria-label="The Clay Club — home"
          onClick={() => setOpen(false)}
          className="relative block h-10 w-10 shrink-0 sm:h-12 sm:w-12"
        >
          <Image
            src={logos.spiral}
            alt="The Clay Club"
            fill
            className="object-contain"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex lg:gap-12">
          {nav.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className="font-body text-lg tracking-wide text-white/90 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen(v => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="-mr-2 inline-flex h-10 w-10 items-center justify-center rounded-md text-white md:hidden"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
          >
            {open ? (
              <path d="M6 6l12 12M18 6 6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 md:hidden">
          <ul className="flex flex-col px-5 py-2">
            {nav.map(item => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-body text-lg tracking-wide text-white/90 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
