'use client';

import styles from './Pagination.module.css';

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ totalItems, itemsPerPage, currentPage, onPageChange }: PaginationProps) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (totalPages <= 1) return null;

  return (
    <div className={styles.pagination}>
      <button 
        className={styles.pageBtn} 
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <i className="fas fa-chevron-left"></i> Prev
      </button>
      
      <div className={styles.pageNumbers}>
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i + 1}
            className={`${styles.pageNumberBtn} ${currentPage === i + 1 ? styles.active : ''}`}
            onClick={() => onPageChange(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>

      <button 
        className={styles.pageBtn} 
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
}
