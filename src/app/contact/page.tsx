import { MailIcon, MapPinIcon, WhatsAppIcon } from '@/components/icons';
import Button, { ButtonGroup } from '@/components/ui/Button';
import { ImageRow } from '@/components/ui/ImageRow';
import { Container, Heading, Prose, Section } from '@/components/ui/Section';
import { contact, images } from '@/lib/site';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Contact',
  description:
    'Get in touch with The Clay Club in Rose Bay, Sydney about pottery classes, private events, and ceramic commissions. Call, email, or message Bev.',
  path: '/contact',
});

function ContactItem({
  icon,
  href,
  children,
}: {
  icon: React.ReactNode;
  href: string;
  children: React.ReactNode;
}) {
  const isHttp = href.startsWith('http');
  return (
    <a
      href={href}
      target={isHttp ? '_blank' : undefined}
      rel={isHttp ? 'noopener noreferrer' : undefined}
      className="group flex items-center gap-4 text-left"
    >
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-clay-brown text-white">
        {icon}
      </span>
      <span className="font-body text-base leading-snug text-ink transition-colors group-hover:text-clay-orange sm:text-lg">
        {children}
      </span>
    </a>
  );
}

export default function Contact() {
  return (
    <>
      <Section className="pb-8">
        <Heading>Get In Touch</Heading>
        <Container className="mt-10">
          <Prose>
            Have a question about classes, events, or commissions? We&apos;d
            love to hear from you. Whether you&apos;re curious about joining a
            class, planning a special event, or after something from the shop,
            send us a message and we&apos;ll get back to you as soon as we can.
          </Prose>
        </Container>

        <div className="mx-auto mt-12 flex max-w-4xl flex-col flex-wrap items-center justify-center gap-8 px-6 sm:flex-row sm:gap-12">
          <ContactItem
            icon={<MapPinIcon className="h-6 w-6" />}
            href={contact.mapsUrl}
          >
            {contact.addressLines.map(line => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </ContactItem>
          <ContactItem
            icon={<WhatsAppIcon className="h-6 w-6" />}
            href={contact.whatsappHref}
          >
            {contact.whatsappDisplay}
            <span className="block text-sm text-ink/60">
              Message us on WhatsApp
            </span>
          </ContactItem>
          <ContactItem
            icon={<MailIcon className="h-6 w-6" />}
            href={contact.emailHref}
          >
            {contact.email}
          </ContactItem>
        </div>
      </Section>

      <ImageRow images={images.contact} />

      <Section>
        <ButtonGroup>
          <Button href={contact.whatsappHref}>Contact Bev on WhatsApp</Button>
          <Button href={contact.mailingListHref}>
            Sign Up For Our Mailing List
          </Button>
        </ButtonGroup>
      </Section>
    </>
  );
}
