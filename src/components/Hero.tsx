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
        {/* Mobile: the compact stacked mark (footer size) fits a narrow screen
            far better than the wide wordmark. */}
        <div className="relative h-24 w-20 drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)] sm:hidden">
          <Image
            src={logos.stacked}
            alt="The Clay Club"
            fill
            sizes="80px"
            priority
            className="object-contain"
          />
        </div>
        <Image
          src={logos.horizontal}
          alt="The Clay Club"
          width={1055}
          height={208}
          priority
          sizes="(max-width: 640px) 0px, 660px"
          className="hidden h-auto w-[82%] max-w-[660px] drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)] sm:block"
        />
      </div>
    </section>
  );
};

export default Hero;
