'use client';

import { useState } from 'react';
import FaqAccordion from '@/components/FaqAccordion/FaqAccordion';
import { faqs } from '@/data/faq';
import styles from './page.module.css';

export default function ServicesPage() {
  const [language, setLanguage] = useState<'en' | 'bn'>('en');

  const handleLanguageToggle = (lang: 'en' | 'bn') => {
    setLanguage(lang);
  };

  const faqItems = faqs.map(faq => ({
    id: faq.id,
    question: language === 'en' ? faq.questionEn : faq.questionBn,
    answer: language === 'en' ? faq.answerEn : faq.answerBn,
  }));

  return (
    <div className="container">
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Detoxification Services (FAQ)</h1>
        <p className={styles.pageSubtitle}>Frequently asked questions about our treatment, admission, and rehabilitation programs.</p>
        
        <div className={styles.languageToggle}>
          <button 
            className={`${styles.toggleBtn} ${language === 'en' ? styles.active : ''}`}
            onClick={() => handleLanguageToggle('en')}
          >
            English
          </button>
          <button 
            className={`${styles.toggleBtn} ${language === 'bn' ? styles.active : ''}`}
            onClick={() => handleLanguageToggle('bn')}
          >
            বাংলা
          </button>
        </div>
      </div>

      <section className={styles.faqSection}>
        <FaqAccordion items={faqItems} language={language} />
      </section>
    </div>
  );
}
