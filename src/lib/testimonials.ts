// Student testimonials, shown on the home and classes pages.
// Source: "Clay Club Website Copy" doc.

export type Testimonial = {
  quote: string;
  name: string;
  detail?: string;
};

export const testimonials: readonly Testimonial[] = [
  {
    quote:
      'I was in Bev’s very first class and can’t think of EVER leaving. I love her creativity, her love for pottery, her patience and her amazing skill at making my pieces look good. Bev has created a wonderful atmosphere in her class with light banter, soothing music and great pottery tutoring. LOVE my Tuesday nights!',
    name: 'Carolyn Lipman',
  },
  {
    quote:
      'The Clay Club is my happy place. A tranquil space, filled with creative and inspiring ideas, and a kind and caring Bev our teacher and mentor, who allows individual creativity while gently guiding, encouraging and teaching new techniques. After so many years there I still look forward to each lesson with great enthusiasm.',
    name: 'Bertha Milner',
    detail: 'Student for 5 years',
  },
  {
    quote:
      'I look forward to Bev’s classes every week. Bev has created a special community of people who are so warm and welcoming. All levels are supported and Bev helps everyone achieve their creative ideas. It’s a time to relax, chat, just switch off.',
    name: 'Sam Michel',
  },
  {
    quote:
      'Four years on, I continue to have a wonderful experience at Clay Club! Bev is a fantastic teacher — really knowledgeable and generous with her guidance, whether you’re hand building or sculpting. What I love most is the relaxed environment: there’s genuinely no pressure to “produce”, so you can just enjoy the process and get creative. The atmosphere is fun and welcoming, and the setting itself is beautiful, which makes every session feel like a bit of an escape. Firing turnaround is impressively quick too, so you’re not left waiting ages to see your pieces finished. Highly recommended for anyone wanting to explore clay work in a genuinely enjoyable, low-stress setting.',
    name: 'Mel Lindenberg',
    detail: 'Student of 4 years',
  },
  {
    quote:
      'I love my weekly pottery classes. I started just after Covid and have not stopped since. Bev is so patient and supportive. Her teaching style is very practical and hands on. I have created various pieces that have been much admired by my family and friends.',
    name: 'Suzie Spira',
  },
  {
    quote:
      'I’ve been going to the Clay Club for about 4 years and I couldn’t think of a better way to spend my Tuesday nights. I love how we are all free to make our own projects, and Bev helps us with whatever we need. I love getting my hands dirty and making something from scratch. A great wind-down from the work day!',
    name: 'Holly Lipman',
  },
];
