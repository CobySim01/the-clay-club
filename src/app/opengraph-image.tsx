import { ImageResponse } from 'next/og';

// Site-wide default Open Graph / Twitter card image (used when a page does
// not define its own). Rendered dynamically, so there is no binary asset.
export const alt =
  'The Clay Club — Hand-Building Pottery Classes in Rose Bay, Sydney';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          backgroundColor: '#391c18',
          color: '#ffffff',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            width: 90,
            height: 10,
            borderRadius: 9999,
            backgroundColor: '#9c400d',
            marginBottom: 48,
          }}
        />
        <div
          style={{
            fontSize: 96,
            fontWeight: 800,
            letterSpacing: '-0.03em',
            lineHeight: 1,
          }}
        >
          The Clay Club
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 40,
            color: 'rgba(255,255,255,0.85)',
            lineHeight: 1.25,
          }}
        >
          Hand-Building Pottery Classes · Rose Bay, Sydney
        </div>
      </div>
    ),
    { ...size }
  );
}
