import fs from 'fs';
import path from 'path';

export const getImageSrcByDirectory = async (paths: string[]) => {
  const imagesDirectory = path.join(process.cwd(), 'public', ...paths);
  const filenames = fs.readdirSync(imagesDirectory);
  const images = filenames.map(name => '/' + path.join(...paths, name));
  return images.map((src: string) => ({ src }));
};
