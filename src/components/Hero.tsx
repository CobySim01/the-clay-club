import { images, logos } from '@/lib/site';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[420px] w-full sm:h-[560px] lg:h-[620px]">
      <h1 className="sr-only">
        The Clay Club — Hand-Building Pottery Classes in Rose Bay, Sydney
      </h1>
      <Image
        src={images.hero}
        alt="Hands shaping clay in a hand-building pottery class"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/15" />
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <Image
          src={logos.horizontal}
          alt="The Clay Club"
          width={1055}
          height={208}
          priority
          className="h-auto w-[82%] max-w-[660px] drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]"
        />
      </div>
    </section>
  );
};

export default Hero;
