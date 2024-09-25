import styles from '@/styles/contact.module.css';

export const metadata = {
  title: 'Contact',
};

export default function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.contactInfo}>
        <div className={styles.contactItem}>
          <h1 className={styles.heading}>Address</h1>
          <p className={styles.obfuscated}></p>
          <p>
            <a
              href="https://www.google.com/maps/place/13+Beresford+Rd,+Rose+Bay+NSW+2029"
              target="_blank"
            >
              13 Beresford Rd, <br /> Rose Bay NSW 2029
            </a>
          </p>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.contactItem}>
          <h1 className={styles.heading}>Phone</h1>
          <p className={styles.obfuscated}></p>
          <p>
            <a href="tel:+61421344111" target="_blank">
              +61 421 344 111
            </a>
          </p>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.contactItem}>
          <h1 className={styles.heading}>Email</h1>
          <p className={styles.obfuscated}></p>
          <p>
            <a href="mailto:bev@theclayclub.com.au" target="_blank">
              bev@theclayclub.com.au
            </a>
          </p>
        </div>
      </div>

      <div className={styles.mapContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6625.262112179092!2d151.25405227564795!3d-33.873397973224755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12adc77e943a91%3A0xb7205363674e85ac!2s13%20Beresford%20Rd%2C%20Rose%20Bay%20NSW%202029!5e0!3m2!1sen!2sau!4v1727242140999!5m2!1sen!2sau"
          width="600"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
