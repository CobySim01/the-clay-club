'use client';

import styles from '@/styles/navbar.module.css';
import Link from 'next/link';
import { useState } from 'react';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/classes', label: 'Classes' },
  { path: '/commission', label: 'Commission Bev' },
  { path: '/contact', label: 'Contact' },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <button className={styles.hamburger} onClick={toggleMenu}>
        ☰
      </button>
      <div className={`${styles.navlinks} ${isMenuOpen ? styles.show : ''}`}>
        {navItems.map(item => (
          <Link key={item.path} href={item.path}>
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
