'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          <Image src="/logos/aposh_logo.png" alt="APOSH Logo" width={60} height={60} />
        </Link>

        <button 
          className={styles.menuToggle} 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
        </button>

        <nav className={`${styles.navLinks} ${isOpen ? styles.show : ''}`}>
          <Link 
            href="/" 
            className={`${styles.navLink} ${pathname === '/' ? styles.active : ''}`}
            onClick={closeMenu}
          >
            <i className="fas fa-home"></i> Home
          </Link>
          
          <Link 
            href="/pages/project" 
            className={`${styles.navLink} ${pathname === '/pages/project' ? styles.active : ''}`}
            onClick={closeMenu}
          >
            <i className="fas fa-briefcase"></i> Projects
          </Link>
          
          <Link 
            href="/pages/service" 
            className={`${styles.navLink} ${pathname === '/pages/service' ? styles.active : ''}`}
            onClick={closeMenu}
          >
            <i className="fas fa-handshake"></i> Services
          </Link>

          <div className={styles.navItemDropdown}>
            <button 
              className={`${styles.navLink} ${styles.dropdownToggle} ${pathname.startsWith('/pages/notice') || pathname.startsWith('/pages/career') || pathname.startsWith('/pages/blog') ? styles.active : ''}`}
              onClick={(e) => {
                e.preventDefault();
                setIsDropdownOpen(!isDropdownOpen);
              }}
            >
              <i className="fas fa-bullhorn"></i> Notice <i className="fas fa-caret-down"></i>
            </button>
            <div className={`${styles.dropdownMenu} ${isDropdownOpen ? styles.dropdownShow : ''}`}>
              <Link href="/pages/notice" className={styles.dropdownLink} onClick={closeMenu}>
                <i className="fas fa-bell"></i> Notice
              </Link>
              <Link href="/pages/career" className={styles.dropdownLink} onClick={closeMenu}>
                <i className="fas fa-user-tie"></i> Career
              </Link>
              <Link href="/pages/blog" className={styles.dropdownLink} onClick={closeMenu}>
                <i className="fas fa-calendar-alt"></i> Events
              </Link>
            </div>
          </div>

          <Link 
            href="/pages/contact" 
            className={`${styles.navLink} ${pathname === '/pages/contact' ? styles.active : ''}`}
            onClick={closeMenu}
          >
            <i className="fas fa-envelope"></i> Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
