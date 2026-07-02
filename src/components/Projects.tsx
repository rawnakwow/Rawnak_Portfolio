import ImageSlider from './ImageSlider';
import styles from './Projects.module.css';

const projects = [
  {
    title: "SkillSphere",
    description: "A highly interactive, full-stack online learning platform designed to connect students with industry experts. Delivers robust form validations, seamless state routing, and dynamic data binding built for fast rendering cycles.",
    features: [
      "Advanced Auth Flow: Email/password & Google OAuth SSO",
      "Compound Form Architectures: Prevents transparent event-blocking bugs",
      "Polymorphic Design Pattern: Modern component specs with utility hooks",
      "Database State Resolution: Persistent connection states preventing dropouts"
    ],
    tech: ["Next.js", "React", "MongoDB", "Better-Auth", "React-Toastify"],
    images: [
      "/projects/SkillSphere_SS/Login_After_Dashboard.jpg",
      "/projects/SkillSphere_SS/Popular Courses Part in home page.jpg",
      "/projects/SkillSphere_SS/Trending Part in home page.jpg",
      "/projects/SkillSphere_SS/all Courese Page.jpg",
      "/projects/SkillSphere_SS/google login profile.jpg",
      "/projects/SkillSphere_SS/instructor part home page.jpg",
      "/projects/SkillSphere_SS/last part home page.jpg",
      "/projects/SkillSphere_SS/my_profile_page.jpg"
    ],
    liveUrl: "https://skiilsphere.vercel.app/",
    githubUrl: "https://github.com/rawnakwow/skiilsphere.git"
  },
  {
    title: "DocQueue",
    description: "Real-time medical clinic dashboard and patient queue management system. Streamlines doctor appointments and provides live wait-time tracking to improve clinic efficiency and patient experience.",
    features: [
      "Real-time Queue Updates: WebSocket integrated live status board",
      "Doctor Availability: Instant status toggles and schedule management",
      "Patient Dashboard: Track current ticket and estimated wait times"
    ],
    tech: ["React", "Express", "Socket.io", "PostgreSQL", "TailwindCSS"],
    images: ["/projects/docqueue.jpg"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "HealthFlow Tracker",
    description: "A comprehensive health and fitness companion web application. Allows users to track daily metrics, visualize progress through interactive charts, and maintain a consistent wellness routine.",
    features: [
      "Interactive Dashboards: Visualize steps, hydration, and sleep data",
      "Custom Goals: Set and track personal fitness milestones",
      "Responsive Design: Seamless experience across mobile and desktop"
    ],
    tech: ["Next.js", "TypeScript", "Chart.js", "Firebase"],
    images: ["/projects/healthflow.jpg"],
    liveUrl: "#",
    githubUrl: "#"
  }
];

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

                <div className={styles.projectLinks}>
                  {project.liveUrl !== "#" && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={`${styles.linkBtn} ${styles.primaryLink}`}>
                      <span aria-hidden="true">🌐</span> Live Demo
                    </a>
                  )}
                  {project.githubUrl !== "#" && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={`${styles.linkBtn} ${styles.secondaryLink}`}>
                      <span aria-hidden="true">💻</span> Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
