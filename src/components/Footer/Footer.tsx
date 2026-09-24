import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* About Section */}
        <div className={styles.section}>
          <h3>About Us</h3>
          <p>
            Ashokta Punarbashan Sangstha (APOSH), is a non-government and non-profit organization, emerged in Rajshahi, Bangladesh as a SHG of ex-drug users in 1999 with legal affiliation of the government of Bangladesh. It has reputation in treatment and rehabilitation of the drug users.
          </p>
        </div>

        {/* Links Section */}
        <div className={styles.section}>
          <h3>Quick Links</h3>
          <ul className={styles.linksList}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/pages/project">Projects</Link></li>
            <li><Link href="/pages/notice">Notice</Link></li>
            <li><Link href="/pages/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className={styles.section}>
          <h3>Contact Us</h3>
          <div className={styles.contactItem}>
            <i className="fa-solid fa-location-dot"></i>
            <p>Address: Kashiadanga More (Beside Sonali Bank)<br/>Rajshahi Court, Rajshahi-6000</p>
          </div>
          <div className={styles.contactItem}>
            <i className="fa-solid fa-phone"></i>
            <p>Phone: <a href="tel:01723667373">01723667373</a></p>
          </div>
          <div className={styles.contactItem}>
            <i className="fa-solid fa-envelope"></i>
            <p>Email: <a href="mailto:info@aposhs.org">info@aposhs.org</a></p>
          </div>
        </div>

      </div>
      
      <div className={styles.bottomBar}>
        &copy; 2025 Ashokta Punarbashan Sangstha (APOSH). All rights reserved.
      </div>
    </footer>
  );
}
