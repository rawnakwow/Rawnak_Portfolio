# Rawnak's Personal Portfolio

A sleek, premium, and highly interactive personal developer portfolio built with modern web technologies. This portfolio showcases my skills, featured projects (like SkillSphere), education, and personality, wrapped in a beautiful dark-themed UI with glassmorphism effects and custom animations.

## 🌟 Key Features

- **Custom Smooth Cursor**: A custom-built, lag-free cursor that smoothly follows user interactions.
- **Dynamic Typewriter Effect**: Engaging hero section highlighting my various development designations.
- **Interactive Project Carousel**: Auto-playing image slider with manual dot/arrow navigation for showcasing project screenshots (e.g., SkillSphere).
- **Responsive Design**: Flawless experience across mobile, tablet, and desktop devices, including a smart mobile navigation menu.
- **Glassmorphism Aesthetics**: Premium dark-mode styling utilizing blurred backdrops and neon gradients.

## 🚀 Tech Stack

- **Framework**: [Next.js (App Router)](https://nextjs.org/)
- **Library**: [React 18](https://reactjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: Vanilla CSS Modules (Custom Design System, variables, and animations)
- **Deployment**: Ready for Vercel/Netlify

## 🛠️ Getting Started

First, clone the repository and install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```text
src/
├── app/
│   ├── globals.css      # Core design system (variables, custom cursor, base styles)
│   ├── layout.tsx       # Root layout injecting custom cursor & fonts
│   └── page.tsx         # Main landing page assembling all components
├── components/
│   ├── About.tsx        # Education, Personality, & Info Cards
│   ├── AboutMe.tsx      # Developer story & future goals
│   ├── Contact.tsx      # Contact form & social links
│   ├── Cursor.tsx       # Custom smooth-following cursor logic
│   ├── Footer.tsx       # Footer with SVG social icons
│   ├── Hero.tsx         # Hero section with typewriter effect
│   ├── ImageSlider.tsx  # Custom image carousel for projects
│   ├── Navbar.tsx       # Sticky navigation with mobile menu
│   ├── Projects.tsx     # Featured projects grid
│   └── Skills.tsx       # Technical skills categorization
```

## 📬 Contact

- **GitHub**: [github.com/rawnakwow](https://github.com/rawnakwow)
- **LinkedIn**: [linkedin.com/in/rawnak-rawnak](https://www.linkedin.com/in/rawnak-rawnak)
- **WhatsApp**: +880 124131344
