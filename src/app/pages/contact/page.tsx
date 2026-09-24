'use client';

import Image from 'next/image';
import { siteConfig } from '@/data/siteConfig';
import styles from './page.module.css';

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message. We will get back to you soon! (This is a demo)');
  };

  return (
    <div className="container">
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Contact Us</h1>
        <p className={styles.pageSubtitle}>Get in touch with us for any inquiries, support, or collaboration opportunities.</p>
      </div>

      <div className={styles.contactContainer}>
        {/* Contact Info Block */}
        <div className={styles.contactInfo}>
          <div className={styles.imageWrapper}>
            <Image 
              src="/uploads/page_images/image_1.jpg" 
              alt="APOSH Headquarters" 
              fill 
              style={{ objectFit: 'cover' }} 
            />
          </div>
          
          <div className={styles.infoDetails}>
            <h3>Our Office</h3>
            <div className={styles.infoItem}>
              <i className="fa-solid fa-location-dot"></i>
              <p><strong>Address:</strong><br/>{siteConfig.address}</p>
            </div>
            <div className={styles.infoItem}>
              <i className="fa-solid fa-phone"></i>
              <p><strong>Phone:</strong><br/><a href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, '')}`}>{siteConfig.phone}</a></p>
            </div>
            <div className={styles.infoItem}>
              <i className="fa-solid fa-envelope"></i>
              <p><strong>Email:</strong><br/><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></p>
            </div>

          </div>
        </div>

        {/* Contact Form Block */}
        <div className={styles.contactFormWrapper}>
          <h3>Send a Message</h3>
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" required placeholder="John Doe" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" required placeholder="john@example.com" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" required placeholder="How can we help?" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea id="message" rows={5} required placeholder="Write your message here..."></textarea>
            </div>
            <button type="submit" className="btn">Send Message <i className="fas fa-paper-plane"></i></button>
          </form>
        </div>
      </div>

      {/* Map Block */}
      <div className={styles.mapContainer}>
        <iframe 
          src={`https://maps.google.com/maps?q=${siteConfig.mapLat},${siteConfig.mapLng}&z=15&output=embed`} 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="APOSH Location Map"
        ></iframe>
      </div>
    </div>
  );
}
