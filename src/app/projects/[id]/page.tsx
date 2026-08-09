import { notFound } from 'next/navigation';
import Link from 'next/link';
import { projects } from '@/data/projects';
import ImageSlider from '@/components/ImageSlider';
import styles from './page.module.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className={styles.projectDetailSection}>
        <div className="container">
          <Link href="/#projects" className={styles.backLink}>
            <span>←</span> Back to Portfolio
          </Link>

          <header className={styles.projectHeader}>
            <h1 className={styles.projectTitle}>{project.title}</h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
              {project.description}
            </p>
            <div className={styles.projectTech}>
              {project.tech.map((tech, i) => (
                <span key={i} className={styles.techBadge}>{tech}</span>
              ))}
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1.5rem' }}>
              {project.liveUrl !== "#" && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={`${styles.linkBtn} ${styles.primaryLink}`} style={{ width: 'auto', padding: '0.6rem 1.5rem' }}>
                  🌐 Live Project Link
                </a>
              )}
              {project.githubUrl !== "#" && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={`${styles.linkBtn} ${styles.secondaryLink}`} style={{ width: 'auto', padding: '0.6rem 1.5rem' }}>
                  💻 GitHub Repository
                </a>
              )}
            </div>
          </header>

          <div className={styles.imageContainer}>
            <ImageSlider images={project.images} altPrefix={project.title} />
          </div>

          <div className={styles.contentGrid}>
            <div className={styles.mainContent}>
              <h3>Brief Description</h3>
              <p>{project.description}</p>

              <h3>Main Technology Stack Used</h3>
              <div className={styles.projectTech} style={{ justifyContent: 'flex-start', marginBottom: '2rem' }}>
                {project.tech.map((tech, i) => (
                  <span key={i} className={styles.techBadge}>{tech}</span>
                ))}
              </div>
              
              <h3>Key Features</h3>
              <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '2rem', paddingLeft: '1.5rem' }}>
                {project.features.map((feature, idx) => (
                  <li key={idx} style={{ marginBottom: '0.5rem' }}>
                    {feature.includes(':') ? (
                      <>
                        <strong style={{ color: 'var(--text-primary)' }}>{feature.split(':')[0]}:</strong>
                        {feature.split(':')[1]}
                      </>
                    ) : (
                      feature
                    )}
                  </li>
                ))}
              </ul>

              {project.techStackDetails && (
                <>
                  <hr style={{ borderColor: 'rgba(255,255,255,0.1)', margin: '2rem 0' }} />
                  <h3>Detailed Tech Stack Breakdown</h3>
                  {project.techStackDetails.map((group: any, idx: number) => (
                    <div key={idx} style={{ marginBottom: '1.5rem' }}>
                      <h4 className={styles.techCategory}>{group.category}</h4>
                      <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.6', paddingLeft: '1.5rem' }}>
                        {group.items.map((item: string, i: number) => (
                          <li key={i} style={{ marginBottom: '0.3rem' }}>
                            {item.includes(':') ? (
                              <>
                                <strong style={{ color: 'var(--text-primary)' }}>{item.split(':')[0]}:</strong>
                                {item.split(':')[1]}
                              </>
                            ) : (
                              item
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </>
              )}

              {project.installationSteps && (
                <>
                  <hr style={{ borderColor: 'rgba(255,255,255,0.1)', margin: '2rem 0' }} />
                  <h3>Local Installation & Deployment</h3>
                  {project.installationSteps.map((stepInfo: any, idx: number) => (
                    <div key={idx} style={{ marginBottom: '1.5rem' }}>
                      <div style={{ color: 'var(--text-primary)', fontWeight: '500', marginBottom: '0.5rem' }}>
                        {idx + 1}. {stepInfo.step}
                      </div>
                      <div className={styles.codeBlock}>
                        {stepInfo.command}
                      </div>
                    </div>
                  ))}
                </>
              )}

              <hr style={{ borderColor: 'rgba(255,255,255,0.1)', margin: '2rem 0' }} />
              <h3>Challenges Faced While Developing the Project</h3>
              <p>{project.challengesFaced}</p>

              <h3>Potential Improvements & Future Plans for the Project</h3>
              <p>{project.futurePlans}</p>
            </div>

            <aside className={styles.sidebar}>
              <div style={{ position: 'sticky', top: '100px' }}>
                <h4>Project Links</h4>
                <div className={styles.actionLinks}>
                  {project.liveUrl !== "#" && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={`${styles.linkBtn} ${styles.primaryLink}`}>
                      <span>🌐</span> Live Project Link
                    </a>
                  )}
                  {project.githubUrl !== "#" && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={`${styles.linkBtn} ${styles.secondaryLink}`}>
                      <span>💻</span> GitHub Repository (Client)
                    </a>
                  )}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
