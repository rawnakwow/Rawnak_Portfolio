"use client";

import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
          Rawnak.
        </Link>
        
        <button className={styles.mobileMenuBtn} onClick={toggleMobileMenu}>
          {isMobileOpen ? '✕' : '☰'}
        </button>

        <ul className={`${styles.navLinks} ${isMobileOpen ? styles.mobileOpen : ''}`}>
          <li><Link href="#about" className={styles.navLink} onClick={() => setIsMobileOpen(false)}>About</Link></li>
          <li><Link href="#skills" className={styles.navLink} onClick={() => setIsMobileOpen(false)}>Skills</Link></li>
          <li><Link href="#projects" className={styles.navLink} onClick={() => setIsMobileOpen(false)}>Projects</Link></li>
          <li><Link href="#contact" className={styles.navLink} onClick={() => setIsMobileOpen(false)}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
