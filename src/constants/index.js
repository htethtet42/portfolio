
import {
  backend,
  web,
  creator,
  mobile,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  figma,
  threejs,
} from "../assets";

// ==========================================
// NAVIGATION
// ==========================================

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "work",
    title: "Works",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

// ==========================================
// SERVICES
// ==========================================

const services = [
  {
    title: "Full-Stack Development",
    icon: web,
  },
  {
    title: "Frontend Development",
    icon: mobile,
  },
  {
    title: "Backend Development",
    icon: backend,
  },
  {
    title: "Database Integration",
    icon: creator,
  },
];

// ==========================================
// TECHNOLOGIES
// ==========================================

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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "PHP",
    icon: backend,
  },
  {
    name: "MySQL",
    icon: backend,
  },
  {
    name: "Go",
    icon: backend,
  },
  {
    name: "Supabase",
    icon: backend,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
];

// ==========================================
// EXPERIENCE
// No professional employment history added yet.
// ==========================================

const experiences = [];

// ==========================================
// TESTIMONIALS
// Add genuine testimonials when available.
// ==========================================

const testimonials = [];

// ==========================================
// PERSONAL PROJECTS
// ==========================================

const projects = [
  {
    name: "MTU Fresher Voting System",
    description:
      "A university voting platform developed to support MTU fresher welcome awards. It includes candidate management, voting functionality, election categories, administrative controls and result analytics, using React and a Go backend connected to Supabase (PostgreSQL 17).This project was developed by a team of five members. I was responsible for the frontend design and contributed to backend development, while the database was designed and implemented by our mentor.",

    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "golang",
        color: "green-text-gradient",
      },
      {
        name: "Supabase (PostgreSQL 17)",
        color: "pink-text-gradient",
      },
    ],

    image: "/projects/mtu-voting.png",

    source_code_link: "https://github.com/htethtet42/welcome-voting-mtu",
    live_demo_link: "https://welcome-voting-mtu-azure.vercel.app/",
  },

  {
  name: "PostFlow",
  description:
    "A PHP and MySQL-based content management and blogging platform that allows users to create, submit, edit, and manage their own posts. It features user registration, login and logout, and role-based access control with Guest, User, and Admin roles. Users can submit posts for review, edit their content, and track submission statuses such as Pending, Approved, and Rejected. Administrators can manage submissions through a centralized dashboard, review content, and approve or reject posts before publication. The platform also includes rich-text editing for content formatting and a responsive interface for a smooth experience across desktop and mobile devices.",

  tags: [
    {
      name: "php",
      color: "blue-text-gradient",
    },
    {
      name: "mysql",
      color: "green-text-gradient",
    },
    {
      name: "bootstrap",
      color: "pink-text-gradient",
    },
  ],

  image: "/projects/postflow.png",

  source_code_link: "https://github.com/htethtet42/phpProject",
  live_demo_link: "https://postflow-project.free.nf/",
},

  
{
  name: "Explore Mandalay",
  description:
    "A dynamic web application developed using JavaServer Pages (JSP) and Apache Tomcat. The project focuses on showcasing Mandalay and helping users explore information about the city through a Java-based web application.",

  tags: [
    {
      name: "java",
      color: "blue-text-gradient",
    },
    {
      name: "jsp",
      color: "green-text-gradient",
    },
    {
      name: "tomcat",
      color: "pink-text-gradient",
    },
  ],

  image: "/projects/mandalay.png",

  source_code_link: "https://github.com/htethtet42/MandalayProject",
  live_demo_link: "https://mandalayproject.dockhosting.cloud",
},

];

// ==========================================
// EXPORTS
// ==========================================

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
};
