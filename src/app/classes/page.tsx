import classTimes from '@/app/classes/times.json';
import Gallery from '@/components/Gallery';
import styles from '@/styles/classes.module.css';
import { getImageSrcByDirectory } from '@/utils/get-image-src-by-directory';
import Image from 'next/image';

export const metadata = {
  title: 'Classes',
};

export default async function Classes() {
  const images = await getImageSrcByDirectory(['images', 'classes']);
  return (
    <div className="container">
      <h1 className="title">Pottery Classes</h1>
      <p className="description">
        Unleash your creativity at our weekly classes! Whether you’re a beginner
        or advanced, these classes are perfect for all skill levels. Use this
        opportunity to develop and perfect your hand-building clay skills to
        create anything you wish! With small class sizes, music and
        complimentary tea our studio guarantees the perfect environment to
        relax, create and inspire one another.
      </p>
      <p className="contactInfo">
        <a href="/contact" className={styles.contactLink}>
          Contact Bev
        </a>{' '}
        for class details and prices.
      </p>
      <h2 className="title" style={{ fontSize: '1.3rem' }}>
        Class Times
      </h2>
      <ul className={styles.classTimesList}>
        {classTimes.map((c, index) => (
          <li key={index} className={styles.classTimeItem}>
            {c.day} – {c.time}
          </li>
        ))}
      </ul>
      <Gallery images={images} />
      <h1 className="title">Taster Classes</h1>
      <p className="description">A Two Class Pass is available for $140.</p>
      <p className="description">
        Give your loved ones the gift of creativity with our vouchers for two
        class passes. It’s perfect for those wanting to give pottery classes a
        try and come along to make something special.
      </p>
      <Image
        src="/images/two-class-pass.jpg"
        alt="Two Class Pass"
        width={500}
        height={1}
      />
      <p className="description">
        (Subject to availability in one of the weekly classes above.)
      </p>
      <h1 className="title">Special Occasions</h1>
      <p className="description">
        Get in touch with us to plan your next kids or adults birthday party, or
        any other corporate or private event. Use this as an opportunity to
        relax and unwind with your friends, enjoy pottery and wine for someone’s
        birthday, or even as a teambuilding activity for your employees.
      </p>
      <ul>
        <li> Kids and Adult Birthday Parties</li>
        <li> Ladies Nights </li>
        <li> Hens Nights </li>
        <li> Couples Classes</li>
        <li> Corporate Team Building</li>
      </ul>
    </div>
  );
}
