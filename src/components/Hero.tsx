"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css';

const designations = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "Android Developer"
];

export default function Hero() {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    const tick = () => {
      const fullText = designations[currentIndex];
      
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }

      let typeSpeed = 100;
      if (isDeleting) typeSpeed /= 2;

      if (!isDeleting && currentText === fullText) {
        typeSpeed = 2000; // Pause at end
        setIsDeleting(true);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % designations.length);
        typeSpeed = 500; // Pause before typing next
      }

      timeout = setTimeout(tick, typeSpeed);
    };

    timeout = setTimeout(tick, 100);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentIndex]);

  return (
    <section id="about" className={styles.heroSection}>
      <div className={styles.glowBlob}></div>
      <div className="container">
        <div className={styles.heroContent}>
          {/* Image Content First on Mobile, Last on Desktop (handled via CSS flex-direction) */}
          <div className={styles.imageContent}>
            <div className={styles.imageWrapper}>
              <div className={styles.imageInner}>
                {/* Note: photo is placed in public/photo/profile.jpeg */}
                <Image 
                  src="/photo/profile.jpeg" 
                  alt="Rawnak" 
                  fill
                  priority
                  className={styles.profileImage}
                />
              </div>
            </div>
          </div>
          
          <div className={styles.textContent}>
            <span className={styles.greeting}>Hi 👋, I'm</span>
            <h1 className={styles.name}>Rawnak</h1>
            
            <div className={styles.designationWrapper}>
              <span>I am a </span>
              <span className={styles.designation}>
                {currentText}
                <span className={styles.cursor}></span>
              </span>
            </div>
            
            <p className={styles.description}>
              Passionate developer dedicated to building elegant, high-performance applications. 
              I specialize in creating seamless user experiences across web and mobile platforms 
              using modern technologies and best practices.
            </p>
            
            <div className={styles.actionButtons}>
              <a href="/Rawnak_Resume.pdf" download="Rawnak_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Download Resume
              </a>
              <Link href="#projects" className="btn btn-outline">
                View My Work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
