import { contact, logos, nav } from '@/lib/site';
import { InstagramIcon, MailIcon, WhatsAppIcon } from '@/components/icons';
import LogoLink from '@/components/LogoLink';
import Image from 'next/image';
import Link from 'next/link';

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

/** Single footer row: logo, address, nav, socials. */
export default function Footer() {
  return (
    <footer className="bg-clay-brown text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8">
        <div className="flex flex-col items-center gap-10 text-center md:flex-row md:justify-between md:text-left">
          <div className="flex items-center gap-6">
            <LogoLink className="relative block h-24 w-20 shrink-0 transition-opacity hover:opacity-80">
              <Image
                src={logos.stacked}
                alt="The Clay Club"
                fill
                sizes="80px"
                className="object-contain"
              />
            </LogoLink>
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

          <nav className="flex items-center gap-8">
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
          <Socials />
        </div>
      </div>
    </footer>
  );
}
