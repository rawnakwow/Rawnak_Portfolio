import styles from './Skills.module.css';

const skillCategories = [
  {
    title: "Frontend Development",
    icon: "🎨",
    skills: ["React", "Next.js", "HTML", "CSS", "JavaScript", "Tailwind CSS", "DaisyUI", "HeroUI"]
  },
  {
    title: "Backend Development",
    icon: "⚙️",
    skills: ["MongoDB", "Express.js"]
  },
  {
    title: "Programming Languages",
    icon: "💻",
    skills: ["TypeScript", "Java", "C", "Python"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className={`section ${styles.skillsSection}`}>
      <div className={styles.glowBlob}></div>
      <div className={`container ${styles.skillsContainer}`}>
        <h2 className="heading-2">Technical Arsenal</h2>
        <p className="text-body" style={{ maxWidth: '600px', margin: '0 auto' }}>
          My comprehensive toolkit for building full-stack applications, from responsive 
          interfaces to robust backend architectures.
        </p>

        <div className={styles.categoryGrid}>
          {skillCategories.map((category, index) => (
            <div key={index} className={`glass-card ${styles.skillCategory}`}>
              <h3 className={styles.categoryTitle}>
                <span>{category.icon}</span> {category.title}
              </h3>
              <div className={styles.skillsList}>
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className={styles.skillItem}>
                    <span className={styles.icon}>⚡</span> {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
