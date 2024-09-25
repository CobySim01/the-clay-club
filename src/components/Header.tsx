import styles from '@/styles/header.module.css';
import React from 'react';
import ContactPhone from './ContactPhone';
import Logo from './Logo';
import Navbar from './Navbar';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div className={styles.callInfo}>
          <ContactPhone />
        </div>
        <div className={styles.logoContainer}>
          <Logo />
        </div>
        <div className={styles.cartInfo}></div>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
