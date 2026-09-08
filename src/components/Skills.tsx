import styles from './Skills.module.css';

const skillCategories = [
  {
    title: "Programming Languages",
    icon: "💻",
    skills: [
      { name: "JavaScript (ES6+)", symbol: "🟨" },
      { name: "Java", symbol: "☕" },
      { name: "C", symbol: "🔷" },
      { name: "C++", symbol: "⚡" },
      { name: "Python", symbol: "🐍" },
      { name: "PHP", symbol: "🐘" }
    ]
  },
  {
    title: "Frontend Engineering",
    icon: "🎨",
    skills: [
      { name: "HTML5", symbol: "🌐" },
      { name: "CSS3", symbol: "🎨" },
      { name: "React.js", symbol: "⚛️" },
      { name: "Next.js 16", symbol: "▲" },
      { name: "Tailwind CSS 4", symbol: "💨" },
      { name: "Bootstrap 5", symbol: "🟪" },
      { name: "HeroUI 3", symbol: "✨" },
      { name: "React Router", symbol: "🔀" },
      { name: "DaisyUI", symbol: "🌼" }
    ]
  },
  {
    title: "Backend & REST APIs",
    icon: "⚙️",
    skills: [
      { name: "Node.js", symbol: "🟢" },
      { name: "Express.js 5", symbol: "🚂" },
      { name: "Django 5.2", symbol: "🎯" },
      { name: "Django REST Framework", symbol: "🔌" },
      { name: "REST APIs", symbol: "📡" },
      { name: "JSON Handling", symbol: "📄" }
    ]
  },
  {
    title: "Databases & Storage",
    icon: "🗄️",
    skills: [
      { name: "MongoDB", symbol: "🍃" },
      { name: "MySQL", symbol: "🐬" },
      { name: "PostgreSQL", symbol: "🐘" },
      { name: "SQLite", symbol: "💾" },
      { name: "Firebase Realtime DB", symbol: "🔥" }
    ]
  },
  {
    title: "Auth & Security",
    icon: "🔐",
    skills: [
      { name: "Better Auth", symbol: "🛡️" },
      { name: "Email/Password Auth", symbol: "🔑" },
      { name: "Google OAuth 2.0", symbol: "🌐" },
      { name: "JWT / JWKS", symbol: "🔒" },
      { name: "Protected Routes", symbol: "🚧" },
      { name: "Role-Based Access (RBAC)", symbol: "🛂" }
    ]
  },
  {
    title: "Payments, Media & Reporting",
    icon: "💳",
    skills: [
      { name: "Stripe Checkout (BDT)", symbol: "💳" },
      { name: "ImgBB API", symbol: "🖼️" },
      { name: "jsPDF", symbol: "📑" },
      { name: "Recharts", symbol: "📊" }
    ]
  },
  {
    title: "Testing & Software QA",
    icon: "🧪",
    skills: [
      { name: "JUnit 4", symbol: "🧪" },
      { name: "Unit & Integration Testing", symbol: "🔬" },
      { name: "SQA Fundamentals", symbol: "📋" },
      { name: "Test Plans & Cases", symbol: "📝" },
      { name: "Bug Reporting", symbol: "🐛" },
      { name: "Black-Box & White-Box", symbol: "🔳" }
    ]
  },
  {
    title: "Data & Machine Learning",
    icon: "📊",
    skills: [
      { name: "NumPy", symbol: "🧮" },
      { name: "pandas", symbol: "🐼" },
      { name: "Data Cleaning", symbol: "🧹" },
      { name: "Feature Engineering", symbol: "⚙️" },
      { name: "Logistic Regression", symbol: "📈" },
      { name: "k-NN", symbol: "📐" },
      { name: "Decision Trees", symbol: "🌳" },
      { name: "Model Evaluation", symbol: "🎯" }
    ]
  },
  {
    title: "Computer Vision (CV)",
    icon: "👁️",
    skills: [
      { name: "Supervised Image Classification", symbol: "🖼️" },
      { name: "CNN Fine-Tuning", symbol: "🧠" },
      { name: "SimCLR", symbol: "✨" },
      { name: "BYOL", symbol: "🔬" },
      { name: "MoCo Concepts", symbol: "👁️" }
    ]
  },
  {
    title: "Tools & OS Environments",
    icon: "🛠️",
    skills: [
      { name: "Git", symbol: "🌿" },
      { name: "GitHub", symbol: "🐙" },
      { name: "VS Code", symbol: "💻" },
      { name: "Vercel", symbol: "▲" },
      { name: "Eclipse", symbol: "🌙" },
      { name: "NetBeans", symbol: "📦" },
      { name: "Code::Blocks", symbol: "🧱" },
      { name: "Windows", symbol: "🪟" },
      { name: "Linux (basic)", symbol: "🐧" }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className={`section ${styles.skillsSection}`}>
      <div className={styles.glowBlob}></div>
      <div className={`container ${styles.skillsContainer}`}>
        <h2 className="heading-2">Technical Arsenal</h2>
        <p className="text-body" style={{ maxWidth: '650px', margin: '0 auto' }}>
          My comprehensive technical stack spanning full-stack web development, backend REST APIs, 
          databases, authentication, software testing, data analysis, and machine learning.
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
                    <span className={styles.icon}>{skill.symbol}</span> {skill.name}
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
