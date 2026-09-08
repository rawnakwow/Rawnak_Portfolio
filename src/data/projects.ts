export const projects = [
  {
    id: "letstravel",
    title: "Let'sTravel",
    description: "A modern and responsive online ticket booking platform for Bus, Plane, Train, and Cruise/Launch services. Features role-based dashboards (User, Vendor, Admin), dynamic seat/cabin maps, Stripe BDT payments, PDF ticket generation, and automated seat release.",
    features: [
      "Multi-Role Authorization: Role-based access control with distinct dashboards and permissions for User, Vendor, and Admin roles via Better Auth.",
      "Transport-Specific Seat & Cabin Maps: Realistic interactive seat layouts tailored for Bus (HD/LD/DD, 2+2, 2+1, Sleeper), Plane (3+3, 2+2, Exit/Window/Aisle), Train (Shovon/Snigdha/AC/Berth), and Cruise/Launch (Single/Double/Family Cabins).",
      "Stripe BDT Payment & PDF Ticket Download: Secure checkout processing in Bangladeshi Taka (৳) with instant downloadable PDF ticket receipts.",
      "Vendor Management & Revenue Analytics: Vendors can create tickets with automatic seat calculation, live image preview, manage booking requests, and view monthly revenue charts.",
      "Admin Moderation & Fraud Protection: Admins can approve/reject tickets, promote user roles, manage homepage advertisement slots (max 6), and mark suspicious vendors as Fraud to restrict operations."
    ],
    tech: ["Next.js", "React 19", "JavaScript", "Express.js", "MongoDB", "Better Auth", "Stripe", "HeroUI", "Recharts", "jsPDF"],
    techStackDetails: [
      { category: "Frontend & UI Engineering", items: ["Next.js (App Router): Modular client and server page routing built with JavaScript and JSX.", "HeroUI & Tailwind CSS: Responsive design system supporting custom Dark and Light theme toggling.", "Recharts: Responsive visual analytics rendering vendor monthly revenue charts.", "jsPDF: Client-side PDF generator crafting formatted travel ticket receipts."] },
      { category: "Authentication & Role Security", items: ["Better Auth & @better-auth/mongo-adapter: Multi-role authentication engine handling Users, Vendors, and Admins.", "Protected Dashboard Routes: Authorization guards restricting access based on user role and fraud status."] },
      { category: "Backend API & Payment Processing", items: ["Express.js & MongoDB: RESTful API managing ticket inventory, transport seat layouts, and booking status transitions.", "Stripe Checkout (BDT): Payment gateway integration processing transactions in Bangladeshi Taka.", "ImgBB Integration: Live image URL preview and cloud asset hosting pipeline."] }
    ],
    installationSteps: [
      { step: "Clone Frontend & Backend Repositories", command: `git clone https://github.com/rawnakwow/Let-sTravel-website-client.git
git clone https://github.com/rawnakwow/Let-sTravel-website-server.git` },
      { step: "Install Dependencies", command: `cd Let-sTravel-website-client && npm install
cd ../Let-sTravel-website-server && npm install` },
      { step: "Configure Environment Variables (.env.local & .env)", command: `# Client (.env.local)
NEXT_PUBLIC_API_URL="http://localhost:5000/api"
NEXT_PUBLIC_APP_URL="http://localhost:3000"
BETTER_AUTH_URL="http://localhost:3000"
BETTER_AUTH_SECRET="YOUR_BETTER_AUTH_SECRET"
MONGODB_URI="YOUR_MONGODB_CONNECTION_STRING"
DB_NAME="letstravel"
GOOGLE_CLIENT_ID="YOUR_GOOGLE_CLIENT_ID"
GOOGLE_CLIENT_SECRET="YOUR_GOOGLE_CLIENT_SECRET"
NEXT_PUBLIC_IMGBB_API_KEY="YOUR_IMGBB_API_KEY"

# Server (.env)
PORT=5000
MONGODB_URI="YOUR_MONGODB_CONNECTION_STRING"
DB_NAME="letstravel"
CLIENT_URL="http://localhost:3000"` },
      { step: "Run Local Development Servers", command: `# Server
npm run dev

# Client
npm run dev` }
    ],
    images: [
      "/projects/Let'sTravel/vendor_home_page.jpg",
      "/projects/Let'sTravel/Screenshot 2026-09-09 003200.jpg",
      "/projects/Let'sTravel/Screenshot 2026-09-09 003228.jpg",
      "/projects/Let'sTravel/Screenshot 2026-09-09 003245.jpg",
      "/projects/Let'sTravel/Screenshot 2026-09-09 003301.jpg",
      "/projects/Let'sTravel/Screenshot 2026-09-09 003316.jpg",
      "/projects/Let'sTravel/Screenshot 2026-09-09 003339.jpg",
      "/projects/Let'sTravel/Screenshot 2026-09-09 003359.jpg",
      "/projects/Let'sTravel/Screenshot 2026-09-09 003426.jpg",
      "/projects/Let'sTravel/Screenshot 2026-09-09 003448.jpg",
      "/projects/Let'sTravel/Screenshot 2026-09-09 003508.jpg",
      "/projects/Let'sTravel/Screenshot 2026-09-09 003524.jpg",
      "/projects/Let'sTravel/Screenshot 2026-09-09 003544.jpg",
      "/projects/Let'sTravel/Screenshot 2026-09-09 003607.jpg",
      "/projects/Let'sTravel/Screenshot 2026-09-09 003627.jpg",
      "/projects/Let'sTravel/Screenshot 2026-09-09 003713.jpg",
      "/projects/Let'sTravel/Screenshot 2026-09-09 003749.jpg",
      "/projects/Let'sTravel/Screenshot 2026-09-09 003925.jpg",
      "/projects/Let'sTravel/Screenshot 2026-09-09 003946.jpg",
      "/projects/Let'sTravel/Screenshot 2026-09-09 004022.jpg",
      "/projects/Let'sTravel/Screenshot 2026-09-09 004051.jpg",
      "/projects/Let'sTravel/Screenshot 2026-09-09 004102.jpg",
      "/projects/Let'sTravel/Screenshot 2026-09-09 004124.jpg",
      "/projects/Let'sTravel/Screenshot 2026-09-09 004155.jpg",
      "/projects/Let'sTravel/Screenshot 2026-09-09 004243.jpg",
      "/projects/Let'sTravel/Screenshot 2026-09-09 004325.jpg",
      "/projects/Let'sTravel/Screenshot 2026-09-09 004347.jpg",
      "/projects/Let'sTravel/Screenshot 2026-09-09 004508.jpg",
      "/projects/Let'sTravel/Screenshot 2026-09-09 004617.jpg",
      "/projects/Let'sTravel/Screenshot 2026-09-09 004741.jpg"
    ],
    liveUrl: "https://let-s-travel-website-client.vercel.app/",
    githubUrl: "https://github.com/rawnakwow/Let-sTravel-website-client.git",
    githubServerUrl: "https://github.com/rawnakwow/Let-sTravel-website-server.git",
    challengesFaced: "Designing dynamic, transport-specific seat mapping engines for four distinct transport modes (Bus, Plane, Train, Cruise) with live seat availability states. Implementing automated seat release mechanics on cancellation or rejection while maintaining atomic booking integrity during Stripe payments.",
    futurePlans: "Implement real-time seat reservation locks using WebSockets, integrate multi-currency support, and build an automated flight & train schedule tracking system."
  },
  {
    id: "mediqueue",
    title: "MediQueue Client & Server",
    description: "A full-stack online tutor-booking platform with Express 5 REST API and Next.js frontend. Features tutor discovery, subject/date filtering, session bookings with unique MQ token generation, Better Auth JWT verification via JWKS, and MongoDB atomic slot management.",
    features: [
      "Advanced Authentication Flow: Integrated email/password registration alongside Google OAuth single sign-on using Better Auth and remote JWKS JWT token verification.",
      "Tutor Discovery & Filtering: Search tutors by name, subject, and date filtering with featured tutor API endpoints.",
      "Tutor Management Dashboard: Authenticated users can add, update, and delete their own tutor profiles with ImgBB photo upload support.",
      "Atomic Booking Engine: Book learning sessions with slot validation, date validation, atomic slot reduction, unique session token (MQ-...) generation, and automatic slot restoration upon cancellation.",
      "Theme & UI Customization: Built with HeroUI 3 and Tailwind CSS 4, featuring light/dark mode switching, animated banners, and toast notifications."
    ],
    tech: ["Next.js 16", "React 19", "Express 5", "MongoDB 7", "Better Auth", "JOSE 6", "HeroUI 3", "Tailwind CSS 4"],
    techStackDetails: [
      { category: "Frontend Framework & Styling", items: ["Next.js 16 (App Router): Client-side and server-side rendering architecture utilizing JavaScript and JSX.", "React 19: Dynamic state management and reactive layout components.", "HeroUI 3 & Tailwind CSS 4: Utility-first layout system with light/dark theme toggles.", "Lucide React & React Hot Toast: Modern SVG icons and interactive toast notification overlays."] },
      { category: "Authentication & Authorization", items: ["Better Auth: Email/password authentication and Google OAuth single sign-on integration.", "JOSE 6 JWT Verification: Server verifies Better Auth JWT access tokens via the client's public JWKS endpoint.", "Protected Client Routes: Route guards restricting access to profile, booking, and tutor management pages."] },
      { category: "Express 5 REST API Backend & Database", items: ["Express 5 REST API: Modular backend server handling tutor management, booking transactions, and health checks.", "MongoDB 7 Native Driver: Cloud database managing users, tutor listings, and session bookings with atomic updates.", "ImgBB API Integration: Cloud photo upload pipeline for tutor profile image hosting."] }
    ],
    installationSteps: [
      { step: "Clone Frontend & Backend Repositories", command: `git clone https://github.com/rawnakwow/Website-Mediqueue-Client-Next.js.git
git clone https://github.com/rawnakwow/Website-Mediqueue-Server-Next.js.git` },
      { step: "Install Dependencies for Both Apps", command: `cd Website-Mediqueue-Client-Next.js && npm install
cd ../Website-Mediqueue-Server-Next.js && npm install` },
      { step: "Configure Client (.env.local) & Server (.env)", command: `# Client (.env.local)
NEXT_PUBLIC_API_URL="http://localhost:5000/api"
NEXT_PUBLIC_APP_URL="http://localhost:3000"
BETTER_AUTH_URL="http://localhost:3000"
BETTER_AUTH_SECRET="your-32-character-random-string"
MONGODB_URI="your-mongodb-atlas-uri"
DB_NAME="mediqueue"

# Server (.env)
PORT=5000
MONGODB_URI="your-mongodb-atlas-uri"
DB_NAME="mediqueue"
CLIENT_URL="http://localhost:3000"
BETTER_AUTH_JWKS_URL="http://localhost:3000/api/auth/jwks"` },
      { step: "Seed Demo Data & Run Services", command: `# Server
npm run seed
npm run dev

# Client
npm run dev` }
    ],
    images: [
      "/projects/mediqueue/1.jpg",
      "/projects/mediqueue/2.jpg",
      "/projects/mediqueue/dark_mood .jpg",
      "/projects/mediqueue/Screenshot 2026-09-08 234941.jpg",
      "/projects/mediqueue/Screenshot 2026-09-08 235043.jpg",
      "/projects/mediqueue/Screenshot 2026-09-08 235104.jpg",
      "/projects/mediqueue/Screenshot 2026-09-08 235122.jpg",
      "/projects/mediqueue/Screenshot 2026-09-08 235139.jpg",
      "/projects/mediqueue/Screenshot 2026-09-08 235214.jpg",
      "/projects/mediqueue/Screenshot 2026-09-08 235232.jpg",
      "/projects/mediqueue/Screenshot 2026-09-08 235303.jpg"
    ],
    liveUrl: "https://website-mediqueue-online-tutor-book-alpha.vercel.app",
    githubUrl: "https://github.com/rawnakwow/Website-Mediqueue-Client-Next.js.git",
    githubServerUrl: "https://github.com/rawnakwow/Website-Mediqueue-Server-Next.js.git",
    challengesFaced: "Integrating Better Auth JWT authentication with JOSE remote JWKS verification between the Next.js frontend and separate Express REST backend, ensuring seamless token validation. Implementing atomic MongoDB slot reduction and restoration logic to prevent race conditions during peak booking requests.",
    futurePlans: "Implement real-time messaging between students and tutors, integrate Stripe payment gateway for booking transactions, and introduce automated email reminders for upcoming study sessions."
  },
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
  }
];
