import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './page.module.css';

export default function AcademicPage() {
  const highlights = [
    "Completed a BSc in Computer Science and Engineering with a major in Software Engineering.",
    "Completed the undergraduate graduation project, Emergency Medicare Website, under faculty supervision.",
    "Built academic and personal projects covering full-stack web development, databases, REST APIs, authentication, and responsive interfaces.",
    "Developed foundational exposure to software testing/SQA, Python data analysis, machine learning, and computer vision concepts."
  ];

  const projectTech = [
    "Django 5.2",
    "Python",
    "HTML5",
    "CSS3",
    "JavaScript",
    "Bootstrap 5",
    "MySQL",
    "Google Maps JavaScript API"
  ];

  const projectPoints = [
    "Developed a Django-based healthcare web application that helps authenticated users find hospitals, doctors, and ambulance services, with location-aware discovery based on the user’s coordinates.",
    "Implemented hospital/doctor/ambulance search, Haversine-distance sorting, interactive Google Maps hospital markers, password-hashed session login, contact messaging, and admin CRUD management for healthcare records."
  ];

  return (
    <>
      <Navbar />
      <main className={styles.academicSection}>
        <div className="container">
          <Link href="/#about-details" className={styles.backLink}>
            <span>←</span> Back to Portfolio
          </Link>

          <header className={styles.pageHeader}>
            <span className={styles.pageBadge}>Education & Research</span>
            <h1 className={styles.pageTitle}>Academic Highlights</h1>
            <p className={styles.pageSubtitle}>
              Detailed overview of undergraduate academic achievements, computer science coursework, and final-year graduation thesis project.
            </p>
          </header>

          <div className={styles.contentContainer}>
            {/* Section 1: Degree & Academic Highlights */}
            <section className={styles.cardSection}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionIcon}>🎓</span>
                <h2 className={styles.sectionTitle}>Academic Highlights</h2>
              </div>

              <div className={styles.degreeMeta}>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Degree</span>
                  <span className={styles.metaValue}>BSc in Computer Science & Engineering</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Major</span>
                  <span className={styles.metaValue}>Software Engineering</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Institution</span>
                  <span className={styles.metaValue}>East West University (EWU)</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Status</span>
                  <span className={styles.metaValue} style={{ color: 'var(--accent-primary)' }}>Completed</span>
                </div>
              </div>

              <ul className={styles.highlightList}>
                {highlights.map((item, idx) => (
                  <li key={idx} className={styles.highlightItem}>
                    <span className={styles.bulletDot}>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Section 2: Undergraduate Graduation Project */}
            <section className={styles.cardSection}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionIcon}>🏥</span>
                <div>
                  <h2 className={styles.sectionTitle}>Undergraduate Graduation Project</h2>
                  <div style={{ color: 'var(--accent-secondary)', fontWeight: 600, fontSize: '1.2rem', marginTop: '0.2rem' }}>
                    Emergency Medicare Website
                  </div>
                </div>
              </div>

              <div className={styles.supervisorBox}>
                <div className={styles.supervisorTitle}>Project Supervisor</div>
                <div className={styles.supervisorName}>Anika Tabassum</div>
                <div className={styles.supervisorRole}>Lecturer, Department of Computer Science and Engineering, East West University</div>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                  Technologies & Tools Used:
                </h3>
                <div className={styles.techGrid}>
                  {projectTech.map((tech, i) => (
                    <span key={i} className={styles.techBadge}>{tech}</span>
                  ))}
                </div>
              </div>

              <div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                  Key Implementations & Contributions:
                </h3>
                <ul className={styles.highlightList}>
                  {projectPoints.map((point, idx) => (
                    <li key={idx} className={styles.highlightItem}>
                      <span className={styles.bulletDot}>•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
