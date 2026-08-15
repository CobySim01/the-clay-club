import Image from 'next/image';
import { cn } from '@/lib/cn';

/** Full-bleed row of equal-height images butted together (stacks on mobile). */
export function ImageRow({ images }: { images: readonly string[] }) {
  const cols =
    images.length === 2
      ? 'sm:grid-cols-2'
      : images.length === 4
        ? 'sm:grid-cols-2 lg:grid-cols-4'
        : images.length >= 3
          ? 'sm:grid-cols-2 lg:grid-cols-3'
          : '';
  const wide = images.length === 4 ? '25vw' : '33vw';
  // Four-up tiles are narrow, so 4:3 crops portrait shots through people's
  // heads — give that row a taller frame.
  const aspect = images.length === 4 ? 'aspect-[9/8]' : 'aspect-[4/3]';
  return (
    <div className={cn('grid w-full grid-cols-1', cols)}>
      {images.map(src => (
        <div key={src} className={cn('relative', aspect)}>
          <Image
            src={src}
            alt=""
            fill
            sizes={`(max-width: 640px) 100vw, (max-width: 1024px) 50vw, ${wide}`}
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}

/** Full-bleed single wide banner image. */
export function ImageBanner({ src }: { src: string }) {
  return (
    <div className="relative aspect-[16/9] w-full sm:aspect-[16/7]">
      <Image src={src} alt="" fill sizes="100vw" className="object-cover" />
    </div>
  );
}
