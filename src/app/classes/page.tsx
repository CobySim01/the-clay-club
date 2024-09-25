import classTimes from '@/app/classes/times.json';
import styles from '@/styles/classes.module.css';

export const metadata = {
  title: 'Classes',
};

export default function Classes() {
  return (
    <div className="container">
      <h1 className="title">Pottery Classes</h1>
      <p className="description">
        Bev Silbermann offers hand building pottery classes. Classes are for
        hand-building pottery only and all levels are welcome, including
        beginners.
      </p>
      <p className="contactInfo">
        <a href="/contact" className={styles.contactLink}>
          Contact Bev
        </a>{' '}
        for more information.
      </p>
      <h2 className="subheading">Class Times</h2>
      <ul className={styles.classTimesList}>
        {classTimes.map((c, index) => (
          <li key={index} className={styles.classTimeItem}>
            {c.day} – {c.time}
          </li>
        ))}
      </ul>
    </div>
  );
}
