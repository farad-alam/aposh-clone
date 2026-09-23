import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { notices } from '@/data/notices';
import { careers } from '@/data/careers';
import styles from './page.module.css';

// Combine both arrays since this route handles both notices and careers
const allItems = [...notices, ...careers];

export function generateStaticParams() {
  return allItems.map((item) => ({
    id: item.id.toString(),
  }));
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const item = allItems.find(i => i.id.toString() === params.id);
  
  if (!item) {
    return { title: 'Not Found' };
  }
  
  return {
    title: `${item.title} | APOSH`,
    description: item.excerpt,
  };
}

export default function NoticeDetail({ params }: { params: { id: string } }) {
  const item = allItems.find(i => i.id.toString() === params.id);

  if (!item) {
    notFound();
  }

  // Determine if it's a career or notice for the back button
  const isCareer = careers.some(c => c.id === item.id);
  const backLink = isCareer ? '/pages/career' : '/pages/notice';
  const backText = isCareer ? 'Back to Careers' : 'Back to Notices';

  return (
    <div className="container">
      <div className={styles.detailContainer}>
        <div className={styles.backLinkWrapper}>
          <Link href={backLink} className={styles.backLink}>
            <i className="fas fa-arrow-left"></i> {backText}
          </Link>
        </div>
        
        <div className={styles.header}>
          <h1 className={styles.title}>{item.title}</h1>
          <div className={styles.meta}>
            <span className={styles.date}>
              <i className="far fa-calendar-alt"></i> {item.date}
            </span>
          </div>
        </div>

        <div className={styles.imageWrapper}>
          <Image 
            src={item.image} 
            alt={item.title} 
            fill 
            style={{ objectFit: 'cover' }} 
            priority
          />
        </div>

        <div className={styles.content}>
          {/* We assume the body contains safe HTML as it's our own data file */}
          <div dangerouslySetInnerHTML={{ __html: item.body }} />
        </div>
      </div>
    </div>
  );
}
