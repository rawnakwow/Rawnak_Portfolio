import styles from './About.module.css';

export default function About() {
  return (
    <section id="about-details" className={`section ${styles.aboutSection}`}>
      <div className={`container ${styles.aboutContainer}`}>
        
        {/* Top Info Grid */}
        <div className={styles.infoGrid}>
          <div className={styles.infoCard}>
            <div className={styles.cardHeader}>
              <span className={styles.iconWorking}>🔍</span>
              <h3 className={styles.cardTitle}>Working On</h3>
            </div>
            <p className={styles.cardText}>Emergency Medical Service System</p>
          </div>
          
          <div className={styles.infoCard}>
            <div className={styles.cardHeader}>
              <span className={styles.iconLearning}>🌱</span>
              <h3 className={styles.cardTitle}>Learning</h3>
            </div>
            <p className={styles.cardText}>Next.js, Firebase, Advanced Android Development, System Design</p>
          </div>
          
          <div className={styles.infoCard}>
            <div className={styles.cardHeader}>
              <span className={styles.iconSkills}>💬</span>
              <h3 className={styles.cardTitle}>Skills Focus</h3>
            </div>
            <p className={styles.cardText}>Java, Android, React, Firebase, Web Development</p>
          </div>
          
          <div className={styles.infoCard}>
            <div className={styles.cardHeader}>
              <span className={styles.iconFact}>⚡</span>
              <h3 className={styles.cardTitle}>Fun Fact</h3>
            </div>
            <p className={styles.cardText}>I love building useful applications from simple ideas</p>
          </div>
        </div>

        {/* Lower Section (Personality & Education) */}
        <div className={styles.lowerSection}>
          <div>
            <h3 className={styles.sectionTitle}>Personality</h3>
            <ul className={styles.personalityList}>
              <li className={styles.personalityItem}>Problem-solving skills</li>
              <li className={styles.personalityItem}>Passionate learner</li>
              <li className={styles.personalityItem}>Loves building useful applications from simple ideas</li>
              <li className={styles.personalityItem}>Quick learner and adaptable</li>
              <li className={styles.personalityItem}>Good communication and collaboration</li>
              <li className={styles.personalityItem}>Negotiation skills</li>
              <li className={styles.personalityItem}>Organization and time management skills</li>
            </ul>
          </div>

          <div>
            <h3 className={styles.sectionTitle}>Education</h3>
            <div className={styles.educationCard}>
              <h4 className={styles.eduTitle}>BSc in Computer Science & Engineering</h4>
              <p className={styles.eduLocation}>Location: Bangladesh</p>
              <p className={styles.eduUni}>East West University (EWU)</p>
              <span className={styles.badge}>Completed</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
