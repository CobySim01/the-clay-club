import styles from '@/styles/navbar.module.css';
import Link from 'next/link';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/classes', label: 'Classes' },
  { path: '/commission', label: 'Commission Bev' },
  { path: '/contact', label: 'Contact' },
];

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navlinks}>
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
