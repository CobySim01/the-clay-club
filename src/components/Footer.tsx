import ContactPhone from './ContactPhone';

export default function Footer() {
  return (
    <div
      style={{
        backgroundColor: '#333',
        color: 'white',
        padding: '20px',
        textAlign: 'center',
      }}
    >
      <p>&copy; 2024 The Clay Club. All rights reserved.</p>
      <p>
        Contact us: <ContactPhone />
      </p>
    </div>
  );
}
