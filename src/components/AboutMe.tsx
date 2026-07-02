import styles from './AboutMe.module.css';

export default function AboutMe() {
  return (
    <section id="about" className={styles.aboutMeSection}>
      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <span className={styles.sectionLabel}>ABOUT ME</span>
          <h2 className={styles.title}>
            Passionate about
            <span className={styles.highlight}>Problem Solving</span>
          </h2>
        </div>
        
        <div className={styles.rightColumn}>
          <p className={styles.paragraph}>
            I started my programming journey with C and Java, then moved into Android development using Java and XML. 
            Currently focusing on modern web development with React, Next.js, and Firebase.
          </p>
          <p className={styles.paragraph}>
            I enjoy solving real-world problems, especially in healthcare systems. 
            I am currently working on an Emergency Medical Service System to bridge the gap in rapid medical response.
          </p>
          <p className={styles.paragraph}>
            As I continue to hone my skills, my future goal is to grow into a highly proficient 
            Full Stack Developer, architecting scalable and impactful applications from the ground up.
          </p>
        </div>
      </div>
    </section>
  );
}
