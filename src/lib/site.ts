// Central site configuration: contact details, navigation, socials, images.

export const contact = {
  addressLines: ['13 Beresford Rd,', 'Rose Bay NSW 2029'],
  addressOneLine: '13 Beresford Rd, Rose Bay NSW 2029',
  mapsUrl:
    'https://www.google.com/maps/place/13+Beresford+Rd,+Rose+Bay+NSW+2029',
  phoneDisplay: '042 134 4111',
  phoneHref: 'tel:+61421344111',
  email: 'bev@theclayclub.com.au',
  emailHref: 'mailto:bev@theclayclub.com.au',
  whatsappHref: 'https://wa.me/61421344111',
  // NOTE: update to the real Instagram handle when confirmed.
  instagramHref: 'https://www.instagram.com/theclayclub/',
  // "Sign Up For Newsletter" has no backend — opens a pre-filled email.
  newsletterHref:
    'mailto:bev@theclayclub.com.au?subject=Newsletter%20Sign%20Up&body=Hi%20Bev%2C%20please%20add%20me%20to%20The%20Clay%20Club%20newsletter.',
} as const;

export const nav = [
  { label: 'Classes', href: '/classes' },
  { label: 'Products', href: '/products' },
  { label: 'Contact', href: '/contact' },
] as const;

export const images = {
  hero: '/images/site/home/hero.jpg',
  // Home: two rows of three (person / class / product, then studio scenes)
  homeStory: [
    '/images/site/home/home-4.jpg',
    '/images/site/classes/classes-1.jpg',
    '/images/site/home/home-3.jpg',
  ],
  homeStudio: [
    '/images/site/home/home-6.jpg',
    '/images/site/home/home-5.jpg',
    '/images/site/home/home-2.jpg',
  ],
  // Classes (order matches the Canva design)
  classesIntro: '/images/site/classes/classes-9.jpg',
  classesTimes: [
    '/images/site/classes/classes-1.jpg',
    '/images/site/classes/classes-5.jpg',
  ],
  classesOccasions: [
    '/images/site/classes/classes-7.jpg',
    '/images/site/classes/classes-3.jpg',
    '/images/site/home/home-1.jpg',
  ],
  classesTaster: [
    '/images/site/classes/classes-6.jpg',
    '/images/site/classes/classes-8.jpg',
    '/images/site/classes/classes-4.jpg',
  ],
  voucher: '/images/site/classes/two-class-pass.png',
  // Products portfolio grid (dimensions baked in so the masonry reserves space)
  products: [
    { src: '/images/site/products/products-1.jpg', w: 1874, h: 2000 },
    { src: '/images/site/products/products-2.jpg', w: 2000, h: 1500 },
    { src: '/images/site/products/products-3.jpg', w: 2000, h: 2000 },
    { src: '/images/site/products/products-4.jpg', w: 2000, h: 2000 },
    { src: '/images/site/products/products-5.jpg', w: 2000, h: 1500 },
    { src: '/images/site/products/products-6.jpg', w: 1830, h: 2000 },
    { src: '/images/site/products/products-7.jpg', w: 1541, h: 2000 },
    { src: '/images/site/products/products-8.jpg', w: 2000, h: 1500 },
    { src: '/images/site/products/products-9.jpg', w: 1272, h: 2000 },
    { src: '/images/site/products/products-10.jpg', w: 2000, h: 1347 },
    { src: '/images/site/products/products-11.jpg', w: 1259, h: 2000 },
    { src: '/images/site/products/products-12.jpg', w: 2000, h: 1500 },
    { src: '/images/site/products/products-13.jpg', w: 2000, h: 2000 },
    { src: '/images/site/products/products-14.jpg', w: 2000, h: 1500 },
    { src: '/images/site/products/products-15.jpg', w: 2000, h: 2000 },
    { src: '/images/site/products/products-16.jpg', w: 1500, h: 2000 },
    { src: '/images/site/products/products-17.jpg', w: 2000, h: 1499 },
    { src: '/images/site/products/products-18.jpg', w: 2000, h: 1623 },
    { src: '/images/site/products/products-19.jpg', w: 2000, h: 1333 },
  ],
  // Contact (order matches the Canva design)
  contact: [
    '/images/site/contact/contact-3.jpg',
    '/images/site/contact/contact-1.jpg',
    '/images/site/contact/contact-2.jpg',
  ],
} as const;

export const logos = {
  spiral: '/images/logo/spiral-white.png',
  horizontal: '/images/logo/horizontal-white.png',
  stacked: '/images/logo/stacked-white.png',
} as const;
