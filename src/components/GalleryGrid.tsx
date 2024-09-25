import React from 'react';

interface GalleryGridProps {
  children: React.ReactNode;
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ children }) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridGap: '15px',
      }}
    >
      {children}
    </div>
  );
};

export default GalleryGrid;
