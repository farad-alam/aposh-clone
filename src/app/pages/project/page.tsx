import type { Metadata } from 'next';
import ProjectCard from '@/components/ProjectCard/ProjectCard';
import { ongoingProjects, closedProjects } from '@/data/projects';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Projects | APOSH – Ashokta Punarbashan Sangstha',
  description: 'Ongoing and closed projects of APOSH, an NGO running drug rehabilitation programs in Rajshahi, Bangladesh.',
};

export default function ProjectsPage() {
  return (
    <div className="container">
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Our Projects</h1>
        <p className={styles.pageSubtitle}>A comprehensive overview of our ongoing and past initiatives in health and rehabilitation.</p>
      </div>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          <i className="fas fa-spinner fa-spin-pulse" style={{ color: 'var(--color-secondary)' }}></i> Recent/Ongoing Projects
        </h2>
        <div className={styles.grid}>
          {ongoingProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          <i className="fas fa-check-circle" style={{ color: 'var(--color-gray-medium)' }}></i> Closed Projects
        </h2>
        <div className={styles.grid}>
          {closedProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </section>
    </div>
  );
}
