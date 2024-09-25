import Gallery from '@/components/Gallery';
import images from './images.json';

const GalleryPage = () => {
  return (
    <div>
      <Gallery images={images} />
    </div>
  );
};

export default GalleryPage;
