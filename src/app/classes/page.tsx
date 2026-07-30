import Button, { ButtonGroup } from '@/components/ui/Button';
import { ImageBanner, ImageRow } from '@/components/ui/ImageRow';
import { Container, Heading, Prose, Section } from '@/components/ui/Section';
import { contact, images } from '@/lib/site';
import { classesJsonLd, pageMetadata } from '@/lib/seo';
import JsonLd from '@/components/JsonLd';
import Image from 'next/image';

export const metadata = pageMetadata({
  title: 'Pottery Classes',
  description:
    'Weekly hand-building pottery classes for all skill levels in Rose Bay, Sydney. Small classes, taster passes, and private events — birthdays, hens nights, and corporate team building.',
  path: '/classes',
});

const occasions = [
  'Kids and Adult Birthday Parties',
  'Ladies Nights',
  'Hens Nights',
  'Bridal Shower',
  'Couples Classes',
  'Corporate Team Building',
  'Family or Group Event',
];

export default function Classes() {
  return (
    <>
      <JsonLd data={classesJsonLd} />
      <Section className="pb-8">
        <Heading>Classes</Heading>
        <Container className="mt-10 space-y-8">
          <Prose>
            Unleash your creativity at our weekly classes! Whether you’re a
            beginner or advanced, these classes are perfect for all skill
            levels. Use this opportunity to develop and perfect your
            hand-building clay skills to create anything you wish! With small
            class sizes, music and complimentary tea our studio guarantees the
            perfect environment to relax, create and inspire one another.
          </Prose>
          <div className="flex justify-center">
            <Button href="/contact">Contact Bev</Button>
          </div>
        </Container>
      </Section>

      <ImageBanner src={images.classesIntro} />

      <Section>
        <Heading as="h2">Times</Heading>
        <Container className="mt-8">
          <p className="prose-block">
            Tuesday evenings;
            <br />
            Wednesday or Thursday mornings
          </p>
        </Container>
      </Section>

      <ImageRow images={images.classesTimes} />

      <Section>
        <Heading as="h2">Special Occasions</Heading>
        <Container className="mt-10 space-y-8">
          <Prose>
            Get in touch with us to plan your next kids or adults birthday
            party, or any other corporate or private event. Use this as an
            opportunity to relax and unwind with your friends, enjoy pottery and
            wine for someone’s birthday, or even as a team building activity for
            your employees.
          </Prose>
          <ul className="mx-auto flex max-w-prose flex-col items-center gap-2 text-center font-body text-lg text-ink">
            {occasions.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Container>
      </Section>

      <ImageRow images={images.classesOccasions} />

      <Section>
        <Heading as="h2">Taster Classes</Heading>
        <Container className="mt-10 space-y-6">
          <p className="prose-block text-clay-brown">
            A Two Class Pass is available for $180
          </p>
          <Prose>
            Give your loved ones the gift of creativity with our vouchers for
            two class passes. It’s perfect for those wanting to give pottery
            classes a try and come along to make something special.
          </Prose>
        </Container>

        <div className="mt-10 flex justify-center px-6">
          <Image
            src={images.voucher}
            alt="The Clay Club — Two Class Pass voucher"
            width={0}
            height={0}
            sizes="(max-width: 640px) 100vw, 640px"
            className="h-auto w-full max-w-xl rounded-lg shadow-md"
          />
        </div>

        <div className="mt-12">
          <ImageRow images={images.classesTaster} />
        </div>

        <div className="mt-12">
          <ButtonGroup>
            <Button href="/contact">Contact Bev</Button>
            <Button href={contact.newsletterHref}>
              Sign Up For Newsletter
            </Button>
          </ButtonGroup>
        </div>
      </Section>
    </>
  );
}
