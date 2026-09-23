'use client';

import { useState } from 'react';
import NoticeCard from '@/components/NoticeCard/NoticeCard';
import Pagination from '@/components/Pagination/Pagination';
import { careers } from '@/data/careers';
import styles from '../notice/page.module.css';

const ITEMS_PER_PAGE = 4;

export default function CareerPage() {
  const [currentPage, setCurrentPage] = useState(1);
  
  // Calculate indices for current items
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = careers.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="container">
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Career Opportunities</h1>
        <p className={styles.pageSubtitle}>Join our team and help make a difference in the community.</p>
      </div>

      <div className={styles.content}>
        <div className={styles.noticeList}>
          {currentItems.map((job) => (
            <NoticeCard key={job.id} {...job} />
          ))}
          
          {careers.length === 0 && (
            <div className={styles.emptyState}>
              <i className="fas fa-briefcase"></i>
              <p>No job openings available at the moment.</p>
            </div>
          )}
        </div>

        <Pagination 
          totalItems={careers.length} 
          itemsPerPage={ITEMS_PER_PAGE} 
          currentPage={currentPage} 
          onPageChange={handlePageChange} 
        />
      </div>
    </div>
  );
}
