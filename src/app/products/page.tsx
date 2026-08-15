import Gallery from '@/components/Gallery';
import Button from '@/components/ui/Button';
import { Container, Heading, Prose, Section } from '@/components/ui/Section';
import { contact, images } from '@/lib/site';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Ceramics & Commissions',
  description:
    'Browse Bev Silbermann’s hand-built ceramic pieces — bowls, vases, tiles and sculptures made in her Rose Bay studio, plus work made by her students. Custom commissions available on request.',
  path: '/products',
});

export default function Products() {
  return (
    <>
      <Section className="pb-8">
        <Heading>Commissions</Heading>
        <Container className="mt-10 space-y-6">
          <Prose>
            Browse Bev&apos;s collection of hand built ceramic pieces, each made
            in her Rose Bay garden studio and inspired by natural forms,
            texture, and organic shape.
          </Prose>
          <Prose>
            If you&apos;d like something similar to a piece Bev has already
            created, commissions may be available — get in touch to discuss.
          </Prose>
          <Prose>Take a look through Bev&apos;s portfolio below.</Prose>
          <div className="flex justify-center pt-2">
            <Button href="/contact">Contact Bev</Button>
          </div>
        </Container>
      </Section>

      <Gallery rows={images.products} label="Ceramic piece by Bev Silbermann" />

      <Section className="pb-8">
        <Heading as="h2">Students Work</Heading>
        <Container className="mt-10">
          <Prose>Browse what my students have made in class</Prose>
        </Container>
      </Section>

      <Gallery
        rows={images.students}
        label="Piece made by a Clay Club student"
      />

      <Section>
        <div className="flex justify-center">
          <Button href={contact.mailingListHref}>
            Sign Up For Our Mailing List
          </Button>
        </div>
      </Section>
    </>
  );
}
