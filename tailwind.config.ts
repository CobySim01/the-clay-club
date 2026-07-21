import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // The Clay Club brand palette
        clay: {
          brown: '#391c18', // nav bar / footer / text box / headlines
          orange: '#9c400d', // buttons / accents
        },
        ink: '#000000', // body text
      },
      fontFamily: {
        // Akzidenz-Grotesk → Archivo (headlines), Garet → Poppins (body)
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        prose: '52rem',
      },
    },
  },
  plugins: [],
};

export default config;
