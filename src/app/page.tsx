import Hero from '@/components/Hero';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Hero />
      <section>
        <div className="container">
          <h1 className="title">Our Story</h1>
          <p>
            The Clay Club is Bev Silbermann’s beautiful homely garden studio in
            Rose Bay. Come and experience the fulfilment and joy working with
            clay can bring. This is a space where you get to have the freedom to
            create something personal, from the heart, with your own hands. You
            will walk out of the studio with a new found friend or two, a sense
            of accomplishment and respect for your unique creative abilities.
            Join us... it is a magical journey! Unique homewares, vases and
            sculptural pieces for your home are created in a relaxed environment
            perfect for beginners as well and more advanced students.
            Environment and kindness to our planet is key at The Clay Club and
            every bit of clay is recycled and reused.
          </p>
          <h1 className="title">Bev Silbermann</h1>
          <div className="relative transform -translate-x-100">
            <Image
              src="/images/bev.png"
              alt="Bev Silbermann"
              width={200}
              height={200}
              className="rounded-full object-cover"
            />
          </div>
          <p className="description" style={{ marginTop: '10px' }}>
            Bev is a ceramic artist whose passion is both for the environment
            and promoting individual well-being. Bev has a great love for
            creativity and nature and their merging in the process of pottery.
            She is deeply invested in supporting the innate creativity in others
            by teaching the skill involved in working with clay and exploring
            its endless possibilities. Bev has been working with clay since age
            12 and wants to share her passion with others so that even the less
            talented can flourish and enjoy art.
          </p>
          <blockquote>
            I enjoy guiding each student’s inner artist to plan, shape and
            create something beautiful. Clay is a forgiving medium with unique
            properties that inspires the creation of pieces that are both
            beautiful and practical. Working with clay is sensational,
            satisfying and fun!”
            <p style={{ textAlign: 'right' }}>~ Bev</p>
          </blockquote>
          <h1 className="title">Our Rose Bay Studio</h1>
          <Image
            src="/images/studio.jpg"
            alt="Studio"
            width={500}
            height={400}
          />
          <p>
            <br />
            Our pottery studio is situated in an accessible and relaxed location
            in Rose Bay, NSW. The beautiful garden outlook is the perfect
            environment to be creative and it’s known to be a relaxed and happy
            space. Clay therapy – just what we all need!
          </p>
        </div>
      </section>
    </div>
  );
}
