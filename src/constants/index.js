import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  marketplace,
  jobportal,
  news,
  whiteboard,
  pfm,
  jobp,
  emb,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Open Source Contributor",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Project",
    
    company_name: "Job Portal",
    icon: jobportal,
    iconBg: "#383E56",
    date: "Jan 2024 – Mar 2024",
    points: [
      "Developed a full-featured job portal with user authentication, recruiter dashboards, and role-based access.",
      "Implemented job listings, filtering, and application tracking using React, Node.js, and MongoDB.",
      "Integrated JWT for secure login and authorization.",
      "Collaborated closely with UI/UX designers to ensure responsive and intuitive interfaces.",
    ],
  },
  {
    title: "Full Stack project",
    company_name: "Collaborative Drawing App",
    icon: whiteboard,
    iconBg: "#E6DEDD",
    date: "Jul 2023 – Sep 2023",
    points: [
   "A collaborative whiteboard where multiple users draw simultaneously in real-time.",

"Developed with React, Node.js, and Socket.IO for fast WebSocket communication.",

"Separate pages for Admin, Users, and Room Filtering with modular UI.",

"Live updates are synced across clients using broadcasted socket events." ,

"Dockerized for deployment and tested on Vercel with legacy Webpack support enabled.",
    ],
  },
  {
    title: "Frontend Project",
    company_name: "Embroidery App",
    icon: marketplace,
    iconBg: "#383E56",
    date: "Oct 2023 – Dec 2023",
    points: [
      "A print-on-demand embroidery store where users can upload their own designs (PNG, JPG, etc.).",

"Choose from our collection of products like T-shirts, shirts, lehengas, chundadis, jeans, skirts, etc.",

"We handle embroidery processing, product customization, and delivery – you just upload & relax.",

"Optionally, users can also shop from our pre-designed embroidery collection.",

"Built using Lit Web Components, deployed on Cloudflare Pages, with a responsive and sleek UI.",
    ],
  },
  {
    title: "Full Stack Project",
    company_name: "News Aggregator App",
    icon: news,
    iconBg: "#E6DEDD",
    date: " May 2023 – Jun 2023",
    points: [
      "Created a responsive SPA that fetches and displays top headlines using News API.",
"Implemented category-wise browsing, search, and infinite scrolling using React Query.",
"Designed light/dark modes and theme persistence with local storage." ,
"Used Tailwind CSS and React Router for clean, fast navigation.",
"Added bookmark/save feature and offline caching using service workers.",
    ],
  },
];



const projects = [
  {
    name: "Job-portal",
    description:
      "A responsive job portal for users to browse, filter, and apply for jobs, while companies can post openings, manage applications, and track hiring efficiently.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: jobp,
    source_code_link: "https://github.com/priyanka0123456/job-portal",
  },
  {
    name: "Embroidery POD App",
    description:
      "Web-based platform allowing users to upload custom embroidery designs or choose from our collection, and order them on various apparel including shirts, lehengas, and more.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: emb,
    source_code_link: "https://github.com/priyanka0123456/Embroidery-react-app",
  },
  {
    name: "Personal Portfolio Manager",
    description:
      "An intuitive dashboard to manage personal projects, finances, and achievements in one place, built with modern UI and focused on self-branding and visibility.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "recharts",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    image: pfm,
    source_code_link: "https://github.com/priyanka0123456/personal-finance-tracker-react-app",
  },
];

export { services, technologies, experiences,  projects };
