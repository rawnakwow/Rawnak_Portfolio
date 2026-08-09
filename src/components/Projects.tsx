import Link from 'next/link';
import ImageSlider from './ImageSlider';
import styles from './Projects.module.css';
import { projects } from '@/data/projects';

export default function Projects() {
  return (
    <section id="projects" className={`section ${styles.projectsSection}`}>
      <div className="container">
        <h2 className="heading-2">Featured Projects</h2>
        <p className="text-body" style={{ maxWidth: '600px' }}>
          Here are some of my recent works that showcase my skills in building 
          scalable, interactive, and user-centric applications.
        </p>

        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <div className={styles.projectImageWrapper}>
                <ImageSlider images={project.images} altPrefix={project.title} />
              </div>
              
              <div className={styles.projectInfo}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                
                <ul className={styles.featureList}>
                  {project.features.map((feature, i) => (
                    <li key={i} className={styles.featureItem}>{feature}</li>
                  ))}
                </ul>

                <div className={styles.projectTech}>
                  {project.tech.map((tech, i) => (
                    <span key={i} className={styles.techItem}>{tech}</span>
                  ))}
                </div>

                <div className={styles.projectLinks} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <Link href={`/projects/${project.id}`} className={`${styles.linkBtn} ${styles.primaryLink}`} style={{ justifyContent: 'center' }}>
                    🔍 View Details
                  </Link>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    {project.liveUrl !== "#" && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={`${styles.linkBtn} ${styles.secondaryLink}`} style={{ flex: 1, justifyContent: 'center' }}>
                        🌐 Live Demo
                      </a>
                    )}
                    {project.githubUrl !== "#" && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={`${styles.linkBtn} ${styles.secondaryLink}`} style={{ flex: 1, justifyContent: 'center' }}>
                        💻 GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
