import Image from 'next/image';
import Link from 'next/link';
import styles from './NoticeCard.module.css';

interface NoticeCardProps {
  id: number;
  image: string;
  title: string;
  date: string;
  excerpt: string;
}

export default function NoticeCard({ id, image, title, date, excerpt }: NoticeCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image src={image} alt={title} fill style={{ objectFit: 'cover' }} />
      </div>
      <div className={styles.content}>
        <div className={styles.date}>
          <i className="far fa-calendar-alt"></i> {date}
        </div>
        <h3 className={styles.title}>
          <Link href={`/pages/notice_view/${id}`}>{title}</Link>
        </h3>
        <p className={styles.excerpt}>{excerpt}</p>
        <Link href={`/pages/notice_view/${id}`} className={styles.readMore}>
          View Details <i className="fas fa-arrow-right"></i>
        </Link>
      </div>
    </div>
  );
}
