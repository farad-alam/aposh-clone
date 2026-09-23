import Image from 'next/image';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  image: string;
  title: string;
  focus: string;
  area: string;
  donor: string;
  period: string;
  status: 'ongoing' | 'closed';
}

export default function ProjectCard({ image, title, focus, area, donor, period, status }: ProjectCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image src={image} alt={title} fill style={{ objectFit: 'cover' }} />
        <span className={`${styles.statusBadge} ${status === 'ongoing' ? styles.ongoing : styles.closed}`}>
          {status === 'ongoing' ? 'Ongoing' : 'Closed'}
        </span>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <ul className={styles.detailsList}>
          <li><strong>Focus:</strong> {focus}</li>
          <li><strong>Working Area:</strong> {area}</li>
          <li><strong>Donor:</strong> {donor}</li>
          <li><strong>Period:</strong> {period}</li>
        </ul>
      </div>
    </div>
  );
}
