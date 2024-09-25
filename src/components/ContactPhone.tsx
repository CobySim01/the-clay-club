import React from 'react';

const ContactPhone: React.FC = () => {
  return (
    <>
      <span style={{ marginRight: '8px', fontSize: '1.2rem' }}>📞</span>
      <span>
        Call Us{' '}
        <strong>
          <a href="tel:+61421344111">+61 421 344 111</a>
        </strong>
      </span>
    </>
  );
};

export default ContactPhone;
