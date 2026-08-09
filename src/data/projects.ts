export const projects = [
  {
    id: "skillsphere",
    title: "SkillSphere",
    description: "A highly interactive, full-stack online learning platform designed to connect students with industry experts. The application delivers robust form validations, seamless state routing, and dynamic data binding built for fast rendering cycles.",
    features: [
      "Advanced Authentication Flow: Integrated email/password registration alongside secure Google OAuth single sign-on handshakes.",
      "Compound Form Architectures: Leverages modern structural fields with absolute layer scaling to prevent transparent event-blocking bugs.",
      "Polymorphic Design Pattern Overhaul: Adheres to modern component specifications using utility hooks to maintain routing states.",
      "Context-Free Framework Foundations: Optimized architecture removing heavy structural root wrappers to minimize bundle footprint.",
      "Database State Resolution: Server-side engine utilizing persistent connection states to prevent multi-thread connection dropouts."
    ],
    tech: ["Next.js", "React", "MongoDB", "Better-Auth", "React-Toastify", "Tailwind CSS", "Framer Motion"],
    techStackDetails: [
      { category: "Core Framework Layout", items: ["Next.js v16 (Turbopack): App Router engine driving blazing fast client-side rendering.", "React v19: Modern layout architecture using hook-based element bindings."] },
      { category: "Interface & Animation UI", items: ["@heroui/react (v3): Primitive layout elements driving the core user field aesthetics.", "@heroui/styles: Custom variation hooks powering unified composition across standard HTML elements.", "Tailwind CSS: Utility-first CSS class structure driving custom dark-mode properties.", "Framer Motion: Lightweight animation pipeline managing page layout transitions.", "React Icons: Specialized asset sets (FaUser, FaEnvelope, FaLock, FaImage, FaGoogle)."] },
      { category: "Data Flow & Database Infrastructure", items: ["Better-Auth (v3): Lightweight security utility managing serverless cookie tracking profiles.", "@better-auth/mongo-adapter: High-performance translation layer mapping sessions onto storage.", "MongoDB: NoSQL cloud infrastructure engine tracking active workspace records.", "React-Toastify: Direct event toast notifications framework signaling authorization state shifts."] }
    ],
    installationSteps: [
      { step: "Clone the Repository", command: "git clone https://github.com/rawnakwow/skiilsphere.git\ncd skillsphere" },
      { step: "Install Project Dependencies", command: "npm install" },
      { step: "Configure the Environment File (.env)", command: `BETTER_AUTH_SECRET="your_32_character_random_string_here"
NEXT_PUBLIC_APP_URL="http://localhost:3000"
BETTER_AUTH_URL="http://localhost:3000"
MONGODB_URI="your_mongodb_atlas_connection_string"
GOOGLE_CLIENT_ID="your_google_oauth_client_id"
GOOGLE_CLIENT_SECRET="your_google_oauth_client_secret"` },
      { step: "Launch the Local Development Server", command: "npm run dev" }
    ],
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
    githubUrl: "https://github.com/rawnakwow/skiilsphere.git",
    challengesFaced: "Implementing a seamless authentication flow with Better-Auth while ensuring persistent connection states across various routes posed a significant challenge. Handling complex compound forms without transparent event-blocking bugs also required deep component restructuring.",
    futurePlans: "Plan to integrate AI-driven course recommendations, implement a real-time chat feature between instructors and students, and further optimize database querying for faster rendering speeds."
  },
  {
    id: "docqueue",
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
    githubUrl: "#",
    challengesFaced: "Maintaining real-time synchronization between multiple client dashboards and the server using WebSockets. Handling edge cases where clients lost connection or reconnected without corrupting the queue order.",
    futurePlans: "Introduce a mobile app version for patients to track their queue status on the go, and integrate automated SMS notifications for upcoming appointments."
  },
  {
    id: "healthflow-tracker",
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
    githubUrl: "#",
    challengesFaced: "Designing interactive and performant charts that could handle large sets of daily metric data without causing UI lag. Also, creating an intuitive layout that looked equally good on small mobile screens and large desktop displays.",
    futurePlans: "Add wearable device integration (like Apple Watch and Fitbit) to automatically sync health data, and include community leaderboards for motivation."
  }
];
