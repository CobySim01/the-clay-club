import React from 'react';

const ContactPhone: React.FC = () => {
  return (
    <div style={styles.container}>
      Contact Bev
      <div style={styles.contactItem}>
        <span>📞</span>
        <span>
          <strong style={{ marginLeft: 8 }}>
            <a href="tel:+61421344111">+61 421 344 111</a>
          </strong>
        </span>
      </div>
      <div style={styles.contactItem}>
        <span>✉️</span>
        <span>
          <strong style={{ marginLeft: 8 }}>
            <a href="mailto:bev@theclayclub.com.au">bev@theclayclub.com.au</a>
          </strong>
        </span>
      </div>
    </div>
  );
};

const styles = {
  container: {
    marginRight: '8px',
    fontSize: '1.2rem',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
  },
  // Add a media query to stack items and reduce font size on mobile
  '@media (max-width: 600px)': {
    container: {
      fontSize: '1rem',
    },
    contactItem: {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  },
};

export default ContactPhone;
