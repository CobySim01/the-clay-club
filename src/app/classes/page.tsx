import classTimes from '@/app/classes/times.json';

export const metadata = {
  title: 'Classes',
};

export default function Classes() {
  return (
    <div>
      <h1>Pottery Classes</h1>
      <p>
        Bev Silbermann offers hand building pottery classes. Classes are for
        hand-building pottery only and all levels are welcome, including
        beginners.Contact Bev for more information
      </p>
      <ul>
        {classTimes.map((c, index) => (
          <li key={index}>
            {c.day} - {c.time}
          </li>
        ))}
      </ul>
    </div>
  );
}
