export interface Project {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  challenges: string;
  improvements: string;
}

export const projectsData: Project[] = [
  {
    id: 'ems',
    title: 'Emergency Medical Service System',
    category: 'Full Stack Web',
    shortDesc: 'A real-time medical dispatch and emergency responder coordination dashboard.',
    description: 'The Emergency Medical Service (EMS) system is designed to coordinate dispatchers, ambulance units, and emergency response teams. It tracks active vehicles, logs patient vitals, and computes response time metrics. Real-time WebSockets keep dispatchers informed of the exact status and location of ambulances, facilitating immediate, informed dispatch decisions.',
    image: '/projects/ems.jpg',
    tech: ['React', 'Firebase', 'Node.js', 'Express', 'WebSockets'],
    liveUrl: 'https://ems-dispatch.vercel.app/',
    githubUrl: 'https://github.com/rawnakwow/ems-dispatch.git',
    challenges: 'The main technical hurdle was maintaining a steady stream of GPS coordinate updates from ambulance vehicles back to the dispatcher dashboard over spotty cellular network connections. I solved this by designing an offline caching queue in the client application that buffers telemetry logs and sends them in batch diffs once standard connectivity is re-established.',
    improvements: 'Future iterations will integrate AI-powered routing calculations based on active traffic predictions and support automated emergency notifications linked directly with community smart wearables.'
  },
  {
    id: 'digital-tools',
    title: 'DigitalTools - Online Stationery Shop',
    category: 'Frontend Task (React)',
    shortDesc: 'A high-performance, responsive e-commerce storefront for office and writing supplies.',
    description: 'DigitalTools is an interactive e-commerce platform built for stationery enthusiasts. The store supports catalog filtering by brand and item type, features a responsive cart with dynamic price calculations, and displays details for special product configurations. It integrates with inventory endpoints for real-time stock status.',
    image: '/projects/stationery.jpg',
    tech: ['React', 'API', 'Tailwind CSS', 'DaisyUI', 'CSS Modules'],
    liveUrl: 'https://digitaltools.vercel.app/',
    githubUrl: 'https://github.com/rawnakwow/digitaltools.git',
    challenges: 'Preventing layout shifting during dynamic catalog searches and sorting operations was crucial. I solved this by implementing layout skeleton loaders and designing custom transition animations in React to guide user focus during slow asset fetch cycles.',
    improvements: 'We plan to add user profiles for saving order histories, implement international shipping rate calculators, and introduce local storage catalog caching for instant offline shop browsing.'
  },
  {
    id: 'job-tracker',
    title: 'Job Application Tracker',
    category: 'Frontend Task',
    shortDesc: 'A personal Kanban dashboard designed to manage job search pipelines and interview reminders.',
    description: 'Job Application Tracker helps developers organize their career applications in a visual Kanban board structure. It tracks application statuses (Applied, Interviewing, Offered, Rejected) and integrates with Google Calendar to send notification reminders for upcoming interviews.',
    image: '/projects/jobtracker.jpg',
    tech: ['React', 'Firebase', 'CSS Modules', 'Context API'],
    liveUrl: 'https://job-tracker-rawnak.vercel.app/',
    githubUrl: 'https://github.com/rawnakwow/job-tracker.git',
    challenges: 'Implementing drag-and-drop mechanics that render smoothly on mobile browsers without transparent overlay blocking issues. Resolved using simple React pointer events and structural layout configurations.',
    improvements: 'Parse CV files automatically to auto-fill application logs using an AI extraction endpoint, and add automated daily progress metrics email bulletins.'
  },
  {
    id: 'skillsphere',
    title: 'SkillSphere Learning Platform',
    category: 'Full Stack Web',
    shortDesc: 'A highly interactive online learning platform designed to connect students with industry experts.',
    description: 'SkillSphere is a full-stack educational community linking mentors and pupils. The application delivers robust form validations, seamless state routing, and dynamic data binding built for fast rendering cycles. Supports email registration, secure Google OAuth handles, serverless connection caching, and custom cookies tracking profiles.',
    image: '/projects/skillsphere.jpg',
    tech: ['Next.js v16', 'React v19', 'Better-Auth', 'MongoDB', 'Tailwind CSS'],
    liveUrl: 'https://skiilsphere.vercel.app/',
    githubUrl: 'https://github.com/rawnakwow/skiilsphere.git',
    challenges: 'Database state resolution under serverless cold spins resulting in multi-thread connection dropouts, resolved via custom persistent client connection caches.',
    improvements: 'Direct face-to-face video consultation feeds using WebRTC, and automated course syllabus outlines generation using LLM assistants.'
  }
];
