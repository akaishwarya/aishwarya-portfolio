// 👉 To use your own photo: put the image file inside src/assets/
//    and change ONLY the file name in the line below.
// import profileImage from "../assets/profile.svg";
import profileImage from "../assets/profile8.jpg";

export const profile = {
  image: profileImage,
  name: "Aishwarya AK",
  role: "Software Engineer",
  phone: "8883928248",
  email: "akaishwarya88@gmail.com",
  linkedin: "https://linkedin.com/in/aishwarya-ak-98780a2ba",
  github: "https://github.com/akaishwarya",
  summary:
    "Software Engineer with 1.5+ years of experience developing and managing frontend and backend functionality for web applications. Skilled in building responsive user interfaces, handling application workflows, integrating REST APIs, and delivering solutions aligned with business requirements. Committed to writing clean, scalable code and continuously learning modern technologies to improve development efficiency and user experience.",
};

export const stats = [
  { value: "1.5+", label: "Years experience" },
  { value: "2", label: "Companies" },
];

export const skills = [
  {
    icon: "code",
    title: "Languages",
    items: ["JavaScript", "C#"],
  },
  {
    icon: "layout",
    title: "Frontend",
    items: ["React.js", "HTML", "CSS", "Bootstrap"],
  },
  {
    icon: "server",
    title: "Backend",
    items: [".NET", "REST API integration"],
  },
  {
    icon: "database",
    title: "Database",
    items: ["SQL"],
  },
  {
    icon: "git-branch",
    title: "Tools & version control",
    items: ["Git", "GitHub"],
  },
];

export const experience = [
  {
    role: "Software Engineer",
    company: "Zenova Tech Labs Pvt Ltd",
    location: "Chennai",
    period: "Sept 2025 — Present",
    current: true,
    points: [
      "Develop and maintain frontend modules for a Club Management web application, contributing to backend tasks as needed.",
      "Build and enhance features for room booking, food ordering, and event booking within the club management platform.",
      "Develop new application screens using React.js and .NET technologies.",
      "Implement new features, handle change requests, and improve existing functionalities based on client requirements and business needs.",
    ],
  },
  {
    role: "Web Developer",
    company: "Sarvodaya Foundation",
    location: "Ramanathapuram",
    period: "Jun 2024 — Jan 2025",
    current: false,
    points: [
      "Designed and developed the organization's official website.",
      "Built responsive and user-friendly web interfaces based on project requirements.",
    ],
  },
];

export const projects = [
  {
    title: "Club Management web application",
    featured: true,
    description:
      "Frontend modules for room booking, food ordering and event booking, plus backend tasks, built as part of a team.",
    stack: "React.js · JavaScript · HTML · CSS · .NET (C#)",
    link: null,
  },
  {
    title: "Student Management System",
    featured: false,
    description: "A management system built with React.js.",
    stack: "React.js",
    link: "https://www.linkedin.com/posts/aishwarya-ak-98780a2ba_reactjs-webdevelopment-frontend-activity-7280164941087625216-4V-0",
  },
  {
    title: "QR code generator",
    featured: false,
    description: "A QR code generator tool.",
    stack: "React.js · HTML · CSS",
    link: "https://akaishwarya.github.io/GenerateQRCode/",
  },
  {
    title: "Restoran website",
    featured: false,
    description: "A restaurant website built with Bootstrap.",
    stack: "Bootstrap",
    link: "https://akaishwarya.github.io/Restoran-website/",
  },
  {
    title: "Plant website",
    featured: false,
    description: "A plant store website built with Tailwind CSS.",
    stack: "Tailwind CSS",
    link: "https://akaishwarya.github.io/IndorePlants/",
  },
  {
    title: "Dog salon website",
    featured: false,
    description: "A dog salon website built with Bootstrap.",
    stack: "Bootstrap",
    link: "https://akaishwarya.github.io/Dog-Salon/",
  },
  // {
  //   title: "Burger mobile UI design",
  //   featured: false,
  //   description:
  //     "Mobile UI design for a burger website, optimized for iPhone 16 Plus.",
  //   stack: "Figma",
  //   link: null,
  // },
];

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    school: "Alagappa University — Distance Education",
    period: "2024 — 2026 · First class",
  },
  {
    degree: "B.Sc. Information Technology",
    school: "Mohamed Sathak Hamid College of Arts and Science",
    period: "2021 — 2024 · First class",
  },
  {
    degree: "XII",
    school: "St. Andrews Girls Higher Secondary School",
    period: "2020 — 2021 · 70%",
  },
];

export const certifications = [
  {
    title: "Full Stack Developer Certification",
    issuer: "KodNest, Bangalore",
    period: "Feb 2025 — Jul 2025",
  },
  {
    title: "Frontend Developer Certification",
    issuer: "SRM Institution",
    period: "2024",
  },
];
