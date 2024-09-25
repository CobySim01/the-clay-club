'use client';
import styles from '@/styles/gallery.module.css';
import Image from 'next/image';
import { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

type GalleryProps = {
  images: {
    src: string;
    title?: string;
    caption?: string;
  }[];
};

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <div className={styles.gallery}>
      {images.map(({ src }, index) => (
        <div key={index} className={styles.imageWrapper}>
          <Image
            src={src}
            alt={`Photo ${index + 1}`}
            width={800}
            height={600}
            onClick={() => {
              setIsOpen(true);
              setPhotoIndex(index);
            }}
          />
        </div>
      ))}
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex].src}
          nextSrc={images[(photoIndex + 1) % images.length].src}
          prevSrc={images[(photoIndex + images.length - 1) % images.length].src}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
          imageTitle={images[photoIndex].title}
          imageCaption={images[photoIndex].caption}
        />
      )}
    </div>
  );
};

export default Gallery;
