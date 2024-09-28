import styles from '@/styles/gallery.module.css';
import Image from 'next/image';

type GalleryProps = {
  images: {
    src: string;
    title?: string;
    caption?: string;
  }[];
};

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <div className={styles.gallery}>
      {images.map(({ src }, index) => (
        <a key={index} href={src} target="_blank" rel="noopener noreferrer">
          <div className={styles.imageWrapper}>
            <Image
              src={src}
              alt={`Photo ${index + 1}`}
              className={styles.thumbnail}
              fill
            />
          </div>
        </a>
      ))}
    </div>
  );
};

export default Gallery;
