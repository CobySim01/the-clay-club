import Gallery from '@/components/Gallery';
import { getImageSrcByDirectory } from '@/utils/get-image-src-by-directory';

export const metadata = {
  title: 'Commission Bev',
};

export default async function Commission() {
  const images = await getImageSrcByDirectory(['images', 'bevs-work']);
  return (
    <div className="container">
      <h1 className="title">Commission Bev</h1>
      <p className="description">
        Commission Bev to make an artwork for your home. You can see some of her
        portfolio below.
      </p>
      <Gallery images={images} />
    </div>
  );
}
