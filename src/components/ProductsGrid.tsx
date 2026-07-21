import Image from 'next/image';

type Product = { src: string; w: number; h: number };

/** Masonry portfolio grid (varied heights, matching the design); each tile opens the full image. */
export default function ProductsGrid({ images }: { images: readonly Product[] }) {
  return (
    <div className="mx-auto max-w-6xl columns-2 gap-3 px-4 [column-fill:balance] sm:columns-3 lg:columns-4">
      {images.map((img, i) => (
        <a
          key={img.src}
          href={img.src}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-3 block break-inside-avoid overflow-hidden rounded-md"
        >
          <Image
            src={img.src}
            alt={`Ceramic piece ${i + 1} by Bev Silbermann`}
            width={img.w}
            height={img.h}
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="h-auto w-full object-cover transition-transform duration-300 hover:scale-[1.02]"
          />
        </a>
      ))}
    </div>
  );
}
