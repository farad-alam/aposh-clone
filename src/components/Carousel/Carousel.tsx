'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './Carousel.module.css';

const TOTAL_SLIDES = 13;

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    if (!isHovered) {
      timeoutRef.current = setTimeout(
        () =>
          setCurrentIndex((prevIndex) =>
            prevIndex === TOTAL_SLIDES - 1 ? 0 : prevIndex + 1
          ),
        5000
      );
    }

    return () => {
      resetTimeout();
    };
  }, [currentIndex, isHovered]);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? TOTAL_SLIDES - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === TOTAL_SLIDES - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div 
      className={styles.carouselContainer}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={styles.slidesWrapper}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {Array.from({ length: TOTAL_SLIDES }).map((_, index) => (
          <div key={index} className={styles.slide}>
            <Image
              src={`/slide_images/slide_${index + 1}.jpg`}
              alt={`Slide ${index + 1}`}
              fill
              style={{ objectFit: 'cover' }}
              priority={index === 0}
            />
          </div>
        ))}
      </div>
      
      <button className={`${styles.arrow} ${styles.leftArrow}`} onClick={goToPrevious}>
        &#10094;
      </button>
      <button className={`${styles.arrow} ${styles.rightArrow}`} onClick={goToNext}>
        &#10095;
      </button>

      <div className={styles.dotsContainer}>
        {Array.from({ length: TOTAL_SLIDES }).map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${currentIndex === index ? styles.activeDot : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}
