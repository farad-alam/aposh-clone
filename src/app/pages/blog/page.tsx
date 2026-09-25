import type { Metadata } from 'next';
import styles from '../notice/page.module.css';

export const metadata: Metadata = {
  title: 'Events',
  description: 'Latest events and blog posts from APOSH.',
};

export default function BlogPage() {
  return (
    <div className="container">
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Latest Blog/News Post</h1>
        <p className={styles.pageSubtitle}>Stay updated with our recent activities and stories.</p>
      </div>

      <div className={styles.content}>
        <div className={styles.emptyState}>
          <i className="fas fa-calendar-times"></i>
          <p>No event news</p>
        </div>
      </div>
    </div>
  );
}
