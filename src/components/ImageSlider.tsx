"use client";

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import styles from './ImageSlider.module.css';

interface ImageSliderProps {
  images: string[];
  altPrefix: string;
}

export default function ImageSlider({ images, altPrefix }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // If there's only one image, just render a static image to avoid slider overhead
  if (images.length === 1) {
    return (
      <div className={styles.sliderContainer}>
        <Image 
          src={images[0]} 
          alt={altPrefix}
          fill
          className={styles.slideImage}
        />
      </div>
    );
  }

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  }, [images.length]);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-play feature
  useEffect(() => {
    const timer = setInterval(() => {
      goToNext();
    }, 4000);
    return () => clearInterval(timer);
  }, [goToNext]);

  return (
    <div className={styles.sliderContainer}>
      {images.map((img, index) => (
        <div 
          key={index} 
          className={`${styles.slide} ${index === currentIndex ? styles.activeSlide : ''}`}
        >
          <Image 
            src={img} 
            alt={`${altPrefix} screenshot ${index + 1}`}
            fill
            className={styles.slideImage}
            sizes="(max-width: 968px) 100vw, 50vw"
          />
        </div>
      ))}
      
      {/* Navigation Buttons */}
      <button 
        className={`${styles.navButton} ${styles.prevButton}`} 
        onClick={(e) => { e.preventDefault(); goToPrev(); }}
        aria-label="Previous slide"
      >
        ❮
      </button>
      <button 
        className={`${styles.navButton} ${styles.nextButton}`} 
        onClick={(e) => { e.preventDefault(); goToNext(); }}
        aria-label="Next slide"
      >
        ❯
      </button>

      {/* Navigation Dots */}
      <div className={styles.dotsContainer}>
        {images.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
            onClick={(e) => { e.preventDefault(); goToSlide(index); }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
