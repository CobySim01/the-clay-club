import Image from 'next/image';
import React from 'react';

const Logo: React.FC = () => {
  return (
    <div>
      <Image
        src="/images/logo/transparent-background.png"
        alt="logo"
        width={300}
        height={300}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
    </div>
  );
};

export default Logo;
