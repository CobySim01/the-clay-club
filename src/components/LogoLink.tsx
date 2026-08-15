'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

/**
 * The logo always goes home. When the reader is already on the home page it
 * scrolls back to the top instead of re-navigating.
 */
export default function LogoLink({
  children,
  className,
  onNavigate,
}: {
  children: React.ReactNode;
  className?: string;
  /** Extra work on click, e.g. closing the mobile menu. */
  onNavigate?: () => void;
}) {
  const pathname = usePathname();

  return (
    <Link
      href="/"
      aria-label="The Clay Club — home"
      className={className}
      onClick={e => {
        onNavigate?.();
        if (pathname !== '/') return;
        e.preventDefault();
        const reduceMotion = window.matchMedia(
          '(prefers-reduced-motion: reduce)'
        ).matches;
        window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
      }}
    >
      {children}
    </Link>
  );
}
