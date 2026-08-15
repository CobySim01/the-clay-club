// Central site configuration: contact details, navigation, socials, images.

export const contact = {
  addressLines: ['13 Beresford Rd,', 'Rose Bay NSW 2029'],
  addressOneLine: '13 Beresford Rd, Rose Bay NSW 2029',
  mapsUrl:
    'https://www.google.com/maps/place/13+Beresford+Rd,+Rose+Bay+NSW+2029',
  // Kept for LocalBusiness structured data; the contact page links WhatsApp
  // instead of a call, since messaging is easier for most people.
  phoneDisplay: '0421 344 111',
  phoneHref: 'tel:+61421344111',
  email: 'bev@theclayclub.com.au',
  emailHref: 'mailto:bev@theclayclub.com.au',
  whatsappDisplay: '0421 344 111',
  whatsappHref: 'https://wa.me/61421344111',
  instagramHref: 'https://www.instagram.com/the_clay_club',
  // "Sign Up For Our Mailing List" has no backend — opens a pre-filled email.
  mailingListHref:
    'mailto:bev@theclayclub.com.au?subject=Mailing%20List%20Sign%20Up&body=Hi%20Bev%2C%20please%20add%20me%20to%20The%20Clay%20Club%20mailing%20list.',
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
  // Special Occasions — the designer's "Special Events Updated" set (events-*)
  // plus two studio event shots (hens night, family group) to fill the row of four.
  classesOccasions: [
    '/images/site/classes/classes-3.jpg',
    '/images/site/classes/events-2.jpg',
    '/images/site/classes/events-1.jpg',
    '/images/site/classes/classes-7.jpg',
  ],
  classesTaster: [
    '/images/site/classes/classes-6.jpg',
    '/images/site/classes/classes-8.jpg',
    '/images/site/classes/classes-4.jpg',
  ],
  voucher: '/images/site/classes/two-class-pass.png',
  // Commissions + Students mosaics. Both reproduce the Canva design exactly: the
  // design is a 1366px-wide flush mosaic of fixed rows, so each row carries its
  // design height and each tile the design width it spans (both in design px).
  // Reading order is row-major, matching the design top-to-bottom, left-to-right.
  //
  // `fit` is [width%, height%, left%, top%] of the tile — the photo's placement
  // inside its frame, measured off the design render rather than assumed. Nearly
  // every tile works out to a plain cover crop, but the design pans most of them
  // off-centre, and two (products-17, products-18) are also zoomed, which
  // object-fit alone can't express.
  products: [
    {
      h: 435,
      tiles: [
        {
          src: '/images/site/products/products-1.jpg',
          w: 1500,
          h: 2000,
          span: 325,
          fit: [100.033, 99.65, -0.013, 0.374],
        },
        {
          src: '/images/site/products/products-2.jpg',
          w: 1333,
          h: 2000,
          span: 281,
          fit: [103.149, 99.973, 0.163, -0.065],
        },
        {
          src: '/images/site/products/products-3.jpg',
          w: 1500,
          h: 2000,
          span: 325,
          fit: [100.368, 99.983, -0.167, 0.325],
        },
        {
          src: '/images/site/products/products-4.jpg',
          w: 2000,
          h: 2000,
          span: 435,
          fit: [100.01, 100.01, -0.1, 0.315],
        },
      ],
    },
    {
      h: 504,
      tiles: [
        {
          src: '/images/site/products/products-5.jpg',
          w: 2000,
          h: 1749,
          span: 576,
          fit: [100.045, 99.988, 0.005, -0.2],
        },
        {
          src: '/images/site/products/products-6.jpg',
          w: 1841,
          h: 2000,
          span: 464,
          fit: [100.011, 100.026, 0.076, -0.255],
        },
        {
          src: '/images/site/products/products-7.jpg',
          w: 1333,
          h: 2000,
          span: 326,
          fit: [102.982, 99.942, 0.131, -0.215],
        },
      ],
    },
    {
      h: 316,
      tiles: [
        {
          src: '/images/site/products/products-8.jpg',
          w: 1500,
          h: 2000,
          span: 225,
          fit: [105.337, 100.004, -5.485, -0.405],
        },
        {
          src: '/images/site/products/products-9.jpg',
          w: 2000,
          h: 1500,
          span: 422,
          fit: [99.965, 100.123, 0.01, -0.427],
        },
        {
          src: '/images/site/products/products-10.jpg',
          w: 2000,
          h: 2000,
          span: 314,
          fit: [100.624, 99.987, -0.558, -0.39],
        },
        {
          src: '/images/site/products/products-11.jpg',
          w: 2000,
          h: 1499,
          span: 405,
          fit: [104.156, 100.051, -1.177, -0.38],
        },
      ],
    },
    {
      h: 380,
      tiles: [
        {
          src: '/images/site/products/products-12.jpg',
          w: 2000,
          h: 1333,
          span: 560,
          fit: [102.15, 100.333, -2.176, -0.188],
        },
        {
          src: '/images/site/products/products-13.jpg',
          w: 2000,
          h: 1623,
          span: 470,
          fit: [99.965, 100.335, -0.135, -0.198],
        },
        {
          src: '/images/site/products/products-14.jpg',
          w: 1830,
          h: 2000,
          span: 336,
          fit: [103.8, 100.307, -0.261, -0.221],
        },
      ],
    },
    {
      h: 459,
      tiles: [
        {
          src: '/images/site/products/products-15.jpg',
          w: 1600,
          h: 2000,
          span: 310,
          fit: [117.994, 99.614, -6.246, 0.115],
        },
        {
          src: '/images/site/products/products-16.jpg',
          w: 1600,
          h: 2000,
          span: 352,
          fit: [104.411, 100.089, -3.818, 0.12],
        },
        {
          src: '/images/site/products/products-17.jpg',
          w: 1600,
          h: 2000,
          span: 316,
          fit: [119.074, 102.471, -13.947, -1.537],
        },
        {
          src: '/images/site/products/products-18.jpg',
          w: 1600,
          h: 2000,
          span: 388,
          fit: [94.451, 99.801, 8.188, 0.269],
        },
      ],
    },
    {
      h: 311,
      tiles: [
        {
          src: '/images/site/products/products-19.jpg',
          w: 2000,
          h: 2000,
          span: 297,
          fit: [104.39, 99.69, -4.311, -0.04],
        },
        {
          src: '/images/site/products/products-20.jpg',
          w: 2000,
          h: 2000,
          span: 310,
          fit: [99.86, 99.539, 0.1, 0.289],
        },
        {
          src: '/images/site/products/products-21.jpg',
          w: 2000,
          h: 1347,
          span: 460,
          fit: [99.96, 99.578, -0.025, 0.355],
        },
        {
          src: '/images/site/products/products-22.jpg',
          w: 2000,
          h: 2000,
          span: 299,
          fit: [103.579, 99.582, -0.176, 0.274],
        },
      ],
    },
    {
      h: 401,
      tiles: [
        {
          src: '/images/site/products/products-23.jpg',
          w: 1500,
          h: 2000,
          span: 298,
          fit: [100.942, 100.019, 0.054, -0.125],
        },
        {
          src: '/images/site/products/products-24.jpg',
          w: 2000,
          h: 1713,
          span: 468,
          fit: [100.286, 100.246, -0.14, -0.217],
        },
        {
          src: '/images/site/products/products-25.jpg',
          w: 1500,
          h: 2000,
          span: 300,
          fit: [100.294, 100.044, -0.535, -0.14],
        },
        {
          src: '/images/site/products/products-26.jpg',
          w: 1500,
          h: 2000,
          span: 300,
          fit: [100.254, 100.004, -0.254, -0.26],
        },
      ],
    },
  ],
  students: [
    {
      h: 462,
      tiles: [
        {
          src: '/images/site/students/students-1.jpg',
          w: 1500,
          h: 2000,
          span: 343,
          fit: [100.996, 99.976, -0.902, 0.1],
        },
        {
          src: '/images/site/students/students-2.jpg',
          w: 1500,
          h: 2000,
          span: 347,
          fit: [99.807, 99.951, 0.047, 0.105],
        },
        {
          src: '/images/site/students/students-3.jpg',
          w: 1500,
          h: 2000,
          span: 346,
          fit: [100.154, 100.009, -0.22, 0.08],
        },
        {
          src: '/images/site/students/students-4.jpg',
          w: 1500,
          h: 2000,
          span: 330,
          fit: [104.976, 99.977, -0.189, 0.095],
        },
      ],
    },
    {
      h: 333,
      tiles: [
        {
          src: '/images/site/students/students-5.jpg',
          w: 2000,
          h: 1500,
          span: 443,
          fit: [100.251, 100.025, -0.236, -0.027],
        },
        {
          src: '/images/site/students/students-6.jpg',
          w: 1500,
          h: 2000,
          span: 249,
          fit: [100.395, 100.093, -0.127, -0.065],
        },
        {
          src: '/images/site/students/students-7.jpg',
          w: 2000,
          h: 1500,
          span: 444,
          fit: [100.0, 100.0, 0.0, 0.0],
        },
        {
          src: '/images/site/students/students-8.jpg',
          w: 1500,
          h: 2000,
          span: 230,
          fit: [108.515, 99.934, 0.101, -0.005],
        },
      ],
    },
    {
      h: 472,
      tiles: [
        {
          src: '/images/site/students/students-9.jpg',
          w: 1500,
          h: 2000,
          span: 340,
          fit: [104.131, 100.012, -3.061, -0.06],
        },
        {
          src: '/images/site/students/students-10.jpg',
          w: 1389,
          h: 2000,
          span: 327,
          fit: [100.0, 99.755, 0.094, 0.055],
        },
        {
          src: '/images/site/students/students-11.jpg',
          w: 1500,
          h: 2000,
          span: 354,
          fit: [100.0, 100.0, 0.18, -0.05],
        },
        {
          src: '/images/site/students/students-12.jpg',
          w: 1500,
          h: 2000,
          span: 345,
          fit: [102.613, 100.004, 0.26, -0.06],
        },
      ],
    },
    {
      h: 361,
      tiles: [
        {
          src: '/images/site/students/students-13.jpg',
          w: 2000,
          h: 1968,
          span: 357,
          fit: [102.78, 100.015, -2.826, 0.01],
        },
        {
          src: '/images/site/students/students-14.jpg',
          w: 1500,
          h: 2000,
          span: 269,
          fit: [100.516, 99.866, -0.315, 0.08],
        },
        {
          src: '/images/site/students/students-15.jpg',
          w: 2000,
          h: 1500,
          span: 471,
          fit: [102.155, 99.962, 0.174, 0.06],
        },
        {
          src: '/images/site/students/students-16.jpg',
          w: 1500,
          h: 2000,
          span: 269,
          fit: [100.516, 99.866, -0.107, 0.07],
        },
      ],
    },
    {
      h: 379,
      tiles: [
        {
          src: '/images/site/students/students-17.jpg',
          w: 1500,
          h: 2000,
          span: 273,
          fit: [103.993, 99.878, -3.813, -0.03],
        },
        {
          src: '/images/site/students/students-18.jpg',
          w: 2000,
          h: 1412,
          span: 537,
          fit: [99.87, 99.902, 0.1, -0.021],
        },
        {
          src: '/images/site/students/students-19.jpg',
          w: 1500,
          h: 2000,
          span: 284,
          fit: [100.033, 99.945, -0.06, -0.08],
        },
        {
          src: '/images/site/students/students-20.jpg',
          w: 1500,
          h: 2000,
          span: 272,
          fit: [104.515, 100.011, -0.028, -0.105],
        },
      ],
    },
    {
      h: 493,
      tiles: [
        {
          src: '/images/site/students/students-21.jpg',
          w: 1500,
          h: 2000,
          span: 358,
          fit: [103.292, 100.009, -3.388, -0.115],
        },
        {
          src: '/images/site/students/students-22.jpg',
          w: 1500,
          h: 2000,
          span: 370,
          fit: [99.987, 100.054, -0.147, -0.135],
        },
        {
          src: '/images/site/students/students-23.jpg',
          w: 1500,
          h: 2000,
          span: 369,
          fit: [100.241, 100.037, -0.187, -0.13],
        },
        {
          src: '/images/site/students/students-24.jpg',
          w: 1125,
          h: 2000,
          span: 269,
          fit: [103.041, 99.952, -0.018, -0.105],
        },
      ],
    },
    {
      h: 616,
      tiles: [
        {
          src: '/images/site/students/students-25.jpg',
          w: 1500,
          h: 2000,
          span: 449,
          fit: [102.923, 100.027, -2.745, -0.095],
        },
        {
          src: '/images/site/students/students-26.jpg',
          w: 1500,
          h: 2000,
          span: 464,
          fit: [99.588, 100.019, 0.206, -0.09],
        },
        {
          src: '/images/site/students/students-27.jpg',
          w: 1500,
          h: 2000,
          span: 453,
          fit: [102.013, 100.026, -0.211, -0.095],
        },
      ],
    },
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
