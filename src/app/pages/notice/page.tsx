'use client';

import { useState } from 'react';
import NoticeCard from '@/components/NoticeCard/NoticeCard';
import Pagination from '@/components/Pagination/Pagination';
import { notices } from '@/data/notices';
import styles from './page.module.css';

const ITEMS_PER_PAGE = 4;

export default function NoticePage() {
  const [currentPage, setCurrentPage] = useState(1);
  
  // Calculate indices for current items
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = notices.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="container">
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Notice & Announcements</h1>
        <p className={styles.pageSubtitle}>Stay updated with the latest news, notices, and events from APOSH.</p>
      </div>

      <div className={styles.content}>
        <div className={styles.noticeList}>
          {currentItems.map((notice) => (
            <NoticeCard key={notice.id} {...notice} />
          ))}
          
          {notices.length === 0 && (
            <div className={styles.emptyState}>
              <i className="fas fa-inbox"></i>
              <p>No notices available at the moment.</p>
            </div>
          )}
        </div>

        <Pagination 
          totalItems={notices.length} 
          itemsPerPage={ITEMS_PER_PAGE} 
          currentPage={currentPage} 
          onPageChange={handlePageChange} 
        />
      </div>
    </div>
  );
}
