'use client';

import { useState } from 'react';
import styles from './FaqAccordion.module.css';

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
  language: 'en' | 'bn';
}

export default function FaqAccordion({ items, language }: FaqAccordionProps) {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className={`${styles.accordion} ${language === 'bn' ? styles.bengaliFont : ''}`}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id} className={`${styles.accordionItem} ${isOpen ? styles.open : ''}`}>
            <button
              className={styles.accordionHeader}
              onClick={() => toggleAccordion(item.id)}
              aria-expanded={isOpen}
            >
              <span className={styles.questionText}>{item.question}</span>
              <span className={styles.icon}>
                <i className={`fas fa-chevron-${isOpen ? 'up' : 'down'}`}></i>
              </span>
            </button>
            <div 
              className={styles.accordionBody}
              style={{ maxHeight: isOpen ? '1000px' : '0' }}
            >
              <div className={styles.answerContent}>
                {/* Use dangerouslySetInnerHTML if we have HTML in the answer, but plain text is safer if possible. We will assume HTML from the CMS/scraper */}
                <div dangerouslySetInnerHTML={{ __html: item.answer }} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
