import Link from 'next/link';

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

const baseClass =
  'inline-flex items-center justify-center rounded-full bg-clay-orange px-9 py-3.5 text-center font-body text-base font-medium tracking-wide text-white shadow-sm transition-colors hover:bg-[#7d330a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay-orange';

export default function Button({
  href,
  children,
  className = '',
}: ButtonProps) {
  const cls = `${baseClass} ${className}`.trim();
  const isExternal = /^(https?:|mailto:|tel:)/.test(href);

  if (isExternal) {
    const isHttp = href.startsWith('http');
    return (
      <a
        href={href}
        className={cls}
        target={isHttp ? '_blank' : undefined}
        rel={isHttp ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function ButtonGroup({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col flex-wrap items-center justify-center gap-4 sm:flex-row">
      {children}
    </div>
  );
}
