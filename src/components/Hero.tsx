import styles from '@/styles/hero.module.css';
import Image from 'next/image';

const buttonNavigation = [
  { label: 'Learn More About Us', path: '/about' },
  { label: 'Class Information', path: '/classes' },
  { label: 'Gallery', path: '/gallery' },
];

const Hero: React.FC = () => {
  return (
    <div className={styles.heroContainer}>
      <Image
        src="/images/hero.png"
        alt="background"
        layout="fill"
        className={styles.backgroundImage}
      />
      <div className={styles.textContainer}>
        <h1>Clay nurtures our sense of touch and nourishes the soul</h1>
        <p>
          Ceramic artist and teacher Bev Silbermann offers hand building pottery
          classes and designs custom pieces for indoor and outdoor spaces.
        </p>
        <div className={styles.buttonContainer}>
          {buttonNavigation.map(({ label, path }) => (
            <button key={path} className={styles.button}>
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
