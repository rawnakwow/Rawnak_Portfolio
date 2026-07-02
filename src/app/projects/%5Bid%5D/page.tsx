import { projectsData } from '@/data/projectsData';
import styles from './projectPage.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowLeft, FiExternalLink, FiGithub } from 'react-icons/fi';
import { Metadata } from 'next';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id);
  return {
    title: project ? `${project.title} | Rawnak Portfolio` : 'Project Not Found | Rawnak Portfolio',
    description: project ? project.shortDesc : 'Project detail view',
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return (
      <div className={styles.notFoundContainer}>
        <h1 className={styles.notFoundTitle}>Project Not Found</h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>
          The project you are looking for does not exist or has been removed.
        </p>
        <Link href="/" className="btn btn-primary">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.pageWrapper}>
      <div className="glow-bg glow-blue" style={{ top: '10%', left: '5%' }}></div>
      <div className="glow-bg glow-purple" style={{ bottom: '20%', right: '5%' }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Back Link */}
        <Link href="/#projects" className={styles.backLink}>
          <FiArrowLeft /> Back to Projects
        </Link>

        {/* Title */}
        <h1 className={`${styles.title} gradient-text`}>{project.title}</h1>

        {/* Tech Stack */}
        <ul className={styles.techList}>
          {project.tech.map((techItem, index) => (
            <li key={index} className={styles.techBadge}>
              {techItem}
            </li>
          ))}
        </ul>

        {/* Image Display */}
        <div className={styles.imageFrame}>
          <Image
            src={project.image}
            alt={project.title}
            width={1200}
            height={675}
            priority
            className={styles.projectImage}
          />
        </div>

        {/* Call to Actions */}
        <div className={styles.actions}>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <FiExternalLink /> Live Project Link
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            <FiGithub /> GitHub Repository (Client)
          </a>
        </div>

        {/* Details Content Block */}
        <div className={styles.contentGrid}>
          <section className={styles.sectionBlock}>
            <h3>About the Project</h3>
            <p>{project.description}</p>
          </section>

          <section className={styles.sectionBlock}>
            <h3>🛠️ Challenges Faced</h3>
            <p>{project.challenges}</p>
          </section>

          <section className={styles.sectionBlock}>
            <h3>⚡ Future Plans & Potential Improvements</h3>
            <p>{project.improvements}</p>
          </section>
        </div>
      </div>
    </div>
  );
}
