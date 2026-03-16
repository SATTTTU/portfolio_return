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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  mannkokura,
  khanabox,
  ecom,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
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
    title: "Machine Learning & AI developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
  // {
  //   name:'NET',
  //   icon:net,
  // },
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

const techStack = [
  {
    title: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "C#"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "Angular", "Three.js"],
  },
  {
    title: "Backend",
    items: [".NET", "Django", "Node.js", "Flask", "ABP Framework"],
  },
  {
    title: "Data & ML",
    items: ["TensorFlow", "NumPy", "Matplotlib"],
  },
  {
    title: "Messaging",
    items: ["RabbitMQ", "gRPC"],
  },
  {
    title: "Caching",
    items: ["Redis"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MongoDB", "MySQL"],
  },
  {
    title: "ORM / Query",
    items: ["Prisma", "Dapper", "Entity Framework"],
  },
  {
    title: "DevOps & Infra",
    items: ["Docker", "Jenkins", "Portainer"],
  },
  {
    title: "Tools",
    items: ["Git", "VS Code", "Visual Studio", "DBeaver", "Prettier", "Figma"],
  },
];

const experiences = [
  {
    title: "Frontend  Developer",
    company_name: "TAI",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Janaury 2025 - April 2025",
    points: [
      "Built a real-time multi-vendor tracking system using React.js integrated with Google Maps API and WebSockets for live location updates.",
      "Worked closely with UI/UX designers to implement interactive and user-friendly map views for different user roles (cook, customer, admin and rider)",
      "Reviewed pull requests on GitHub, focusing on readability, performance optimization, and adherence to project coding standards.",
      "Participated in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Freelancing ",
    company_name: "Upwork",
    icon: shopify,
    iconBg: "#383E56",
    date: "August 2025 - Present",
    points: [
      "Designing and developing end-to-end full-stack web applications for diverse client needs",
      "Managing entire project lifecycle – from requirement gathering to deployment",
      "Implementing responsive UI and seamless UX across all platforms.",
      " Building secure, scalable, and real-time backend systems",
    ],
  },
  {
    title: "Junior Fullstack Developer (MERN & Next.js)",
    company_name: "Personal & Freelance Projects",
    icon: tesla,
    iconBg: "#232931",
    date: "June 2025 - August 2025",
    points: [
      "Developing fullstack web applications using MongoDB, Express.js, React, and Node.js.",
      "Building SEO-friendly and performant frontends with Next.js and modern UI libraries.",
      "Implementing authentication, authorization, and RESTful APIs for production-ready apps.",
      "Collaborating with designers and stakeholders to deliver user-centric experiences.",
    ],
  },
  {
    title: "Associate Fullstack Developer (.NET & Angular)",
    company_name: "Personal & Freelance Projects",
    icon: meta,
    iconBg: "#1f2833",
    date: "August 2025 - Present",
    points: [
      "Building scalable backend services using ASP.NET Core and clean architecture principles.",
      "Creating responsive, component-based frontends with Angular and TypeScript.",
      "Integrating SQL/NoSQL databases and optimizing queries for performance and reliability.",
      "Implementing role-based access control, validation, and error handling across the stack.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
  name: "Maanko Saathi",
  description:
    "An AI-powered mental health companion web app that enables users to record their thoughts via voice using Vosk, transcribes them in real-time, and provides emotional insights using TensorFlow, NLTK, and Scikit-learn. The system integrates a Flask and .NET backend with real-time interactions via SignalR and a modern React + Tailwind CSS frontend.",
  tags: [
    {
      name: "react",
      color: "blue-text-gradient"
    },
    {
      name: "tailwind",
      color: "pink-text-gradient"
    },
    {
      name: "signalr",
      color: "red-text-gradient"
    },
    {
      name: "vosk",
      color: "orange-text-gradient"
    },
    {
      name: "flask",
      color: "yellow-text-gradient"
    },
    {
      name: ".NET",
      color: "purple-text-gradient"
    },
    {
      name: "tensorflow",
      color: "green-text-gradient"
    },
    {
      name: "nltk",
      color: "teal-text-gradient"
    },
    {
      name: "scikit-learn",
      color: "indigo-text-gradient"
    }
  ],
  image: mannkokura, // Replace with your actual image import reference
  source_code_link: "https://github.com/SATTTTU/overall-frontend" // Replace with actual GitHub repo
},

  {
  name: "KhajaBox",
  description:
    "A cloud kitchen management and food delivery platform enabling real-time order tracking with Socket.IO, interactive map-based delivery updates, and role-based dashboards for customers, cooks, drivers, and admins. Built with React, ShadCN UI, and a Laravel PHP backend.",
  tags: [
    {
      name: "react",
      color: "blue-text-gradient"
    },
    {
      name: "shadcn/ui",
      color: "green-text-gradient"
    },
    {
      name: "socket.io",
      color: "orange-text-gradient"
    },
    {
      name: "laravel",
      color: "red-text-gradient"
    },
    {
      name: "php",
      color: "purple-text-gradient"
    },
    {
      name: "leaflet",
      color: "teal-text-gradient"
    }
  ],
  image: khanabox, // Replace with your actual image import reference
  source_code_link: "https://github.com/SATTTTU/project1" // Replace with your GitHub repo if available
},

  {
  name: "E-Commerce Platform",
  description:
    "A full-featured e-commerce web application built with the MERN stack, offering product browsing, cart management, order processing, and admin dashboard functionalities. Supports user authentication, responsive design, and RESTful API architecture.",
  tags: [
    {
      name: "mongodb",
      color: "green-text-gradient"
    },
    {
      name: "express",
      color: "gray-text-gradient"
    },
    {
      name: "react",
      color: "blue-text-gradient"
    },
    {
      name: "node.js",
      color: "yellow-text-gradient"
    },
    {
      name: "jwt auth",
      color: "red-text-gradient"
    },
    {
      name: "rest api",
      color: "orange-text-gradient"
    }
  ],
  image: ecom, // Replace with your actual image import reference
  source_code_link: "https://github.com/SATTTTU/ecommerce_fullstack" 
}

];

export { services, technologies, techStack, experiences, testimonials, projects };
