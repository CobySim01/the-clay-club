import { contact, logos, nav } from '@/lib/site';
import { InstagramIcon, MailIcon, WhatsAppIcon } from '@/components/icons';
import Image from 'next/image';
import Link from 'next/link';

function FooterNav({ className = '' }: { className?: string }) {
  return (
    <nav className={className}>
      {nav.map(item => (
        <Link
          key={item.href}
          href={item.href}
          className="font-body text-base tracking-wide text-white/90 transition-colors hover:text-white sm:text-lg"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

function Socials() {
  const items = [
    { href: contact.emailHref, label: 'Email', Icon: MailIcon },
    { href: contact.whatsappHref, label: 'WhatsApp', Icon: WhatsAppIcon },
    { href: contact.instagramHref, label: 'Instagram', Icon: InstagramIcon },
  ];
  return (
    <div className="flex items-center gap-4">
      {items.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
          className="text-white transition-opacity hover:opacity-70"
        >
          <Icon className="h-7 w-7" />
        </a>
      ))}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-clay-brown text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8">
        <div className="flex flex-col items-center gap-10 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <div className="flex items-center gap-6">
            <div className="relative h-24 w-20 shrink-0">
              <Image
                src={logos.stacked}
                alt="The Clay Club"
                fill
                className="object-contain"
              />
            </div>
            <a
              href={contact.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-base leading-snug tracking-wide text-white/90 underline underline-offset-4 transition-colors hover:text-white"
            >
              {contact.addressLines.map(line => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </a>
          </div>

          <FooterNav className="flex items-center gap-8" />

          <Socials />
        </div>

        <div className="mt-10 flex flex-col items-center gap-6 border-t border-white/15 pt-8 sm:flex-row sm:justify-between">
          <div className="relative h-11 w-11">
            <Image
              src={logos.spiral}
              alt="The Clay Club"
              fill
              className="object-contain"
            />
          </div>
          <p className="order-last font-body text-sm text-white/60 sm:order-none">
            © {new Date().getFullYear()} The Clay Club. All rights reserved.
          </p>
          <FooterNav className="flex items-center gap-8" />
        </div>
      </div>
    </footer>
  );
}
