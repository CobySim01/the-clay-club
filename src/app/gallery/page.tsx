import Gallery from '@/components/Gallery';
import { getImageSrcByDirectory } from '@/utils/get-image-src-by-directory';

const GalleryPage = async () => {
  const bevImages = await getImageSrcByDirectory(['images', 'bevs-work']);
  const classImages = await getImageSrcByDirectory(['images', 'classes']);
  return (
    <div className="flex justify-between space-x-8 px-10 py-6">
      <div className="w-1/2">
        <h2 className="title mb-4">Bev’s Work</h2>
        <Gallery images={bevImages} />
      </div>
      <div className="w-1/2">
        <h2 className="title mb-4">Photos from Our Classes</h2>
        <Gallery images={classImages} />
      </div>
    </div>
  );
};

export default GalleryPage;
