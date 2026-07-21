import Hero from '@/components/Hero';
import Button, { ButtonGroup } from '@/components/ui/Button';
import { ImageRow } from '@/components/ui/ImageRow';
import { Container, Heading, Prose, Section } from '@/components/ui/Section';
import { QuoteBox } from '@/components/ui/QuoteBox';
import { contact, images } from '@/lib/site';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Hand-Building Pottery Classes in Rose Bay, Sydney',
  description:
    'Ceramic artist Bev Silbermann teaches small-group hand-building pottery classes and creates custom ceramics from her garden studio in Rose Bay, Sydney. Beginners welcome.',
  path: '/',
});

export default function Home() {
  return (
    <>
      <Hero />

      <Section>
        <Container className="space-y-8">
          <h2 className="mx-auto max-w-3xl text-center font-display text-3xl font-semibold leading-tight text-clay-brown sm:text-4xl">
            Clay nurtures our sense of touch and nourishes the soul
          </h2>
          <Prose>
            Ceramic artist and teacher Bev Silbermann offers hand building
            pottery classes and designs custom pieces for indoor and outdoor
            spaces.
          </Prose>
          <ButtonGroup>
            <Button href="/classes">Our Classes</Button>
            <Button href={contact.newsletterHref}>
              Sign Up For Newsletter
            </Button>
          </ButtonGroup>
        </Container>
      </Section>

      <Section className="pt-0">
        <Heading as="h2">Our Story</Heading>
        <Container className="mt-10 space-y-6">
          <Prose>
            The Clay Club began with a simple belief — that working with clay is
            about so much more than making pottery. It’s about slowing down,
            switching off, and discovering the joy of creating something with
            your own hands.
          </Prose>
          <Prose>
            For over 15 years, I’ve been teaching handbuilding from my garden
            studio in Rose Bay. Every student follows their own creative
            journey, and I work alongside each person to help them build the
            skills and confidence to bring their own vision to life.
          </Prose>
        </Container>
      </Section>

      <ImageRow images={images.homeStory} />

      <Section>
        <Container className="space-y-6">
          <Prose>
            The Clay Club is more than a pottery studio — it’s a welcoming
            creative community, filled with music, conversation, and plenty of
            laughter. Beginners and experienced makers work side by side,
            encouraging one another every step of the way.
          </Prose>
          <Prose>
            My greatest joy is watching people discover abilities they never
            knew they had. I hope everyone who walks through my studio leaves
            feeling calmer, more confident, and already looking forward to their
            next class.
          </Prose>
        </Container>

        <div className="mt-12">
          <QuoteBox>
            “I enjoy guiding each student’s inner artist to plan, shape and
            create something beautiful. Clay is a forgiving medium with unique
            properties that inspires the creation of pieces that are both
            beautiful and practical. Working with clay is sensational,
            satisfying and fun!” — Bev
          </QuoteBox>
        </div>

        <Container className="mt-12">
          <Prose>
            Bev is a ceramic artist whose passion is both for the environment
            and promoting individual well-being. Bev has a great love for
            creativity and nature and their merging in the process of pottery.
            She is deeply invested in supporting the innate creativity in others
            by teaching the skill involved in working with clay and exploring
            its endless possibilities. Bev has been working with clay since age
            12 and wants to share her passion with others so that even the less
            talented can flourish and enjoy art.
          </Prose>
        </Container>
      </Section>

      <Section className="pt-0">
        <Heading as="h2">The Studio</Heading>
        <Container className="mt-10">
          <Prose>
            Our pottery studio is situated in an accessible and relaxed location
            in Rose Bay, NSW. The beautiful garden outlook is the perfect
            environment to be creative and it’s known to be a relaxed and happy
            space. Clay therapy – just what we all need!
          </Prose>
        </Container>
      </Section>

      <ImageRow images={images.homeStudio} />

      <Section>
        <div className="flex justify-center">
          <Button href="/contact">Contact Bev</Button>
        </div>
      </Section>
    </>
  );
}
