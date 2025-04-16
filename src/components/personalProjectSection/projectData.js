import flixifyImg from "../../assets/project/flixify-project.png";
import lmsImg from "../../assets/project/lms-project.png";
import srdtImg from "../../assets/project/srdt-project.png";
import srmcemImg from "../../assets/project/srmcem-project.png"; // Make sure this image exists

export const projects = [
  {
    id: 0,
    title: "LearnSphere: LMS Platform",
    description:
      "A dynamic full-stack Learning Management System built with React, Redux Toolkit, Node.js, Express.js, and MongoDB. Features an intuitive Admin Portal where admins can create, upload, edit, and manage courses, including pricing and content updates. Razorpay integration enables secure payment for buying courses. Users have access to a personalized dashboard that shows enrolled courses, progress, and purchase history. Optimized backend APIs and database design improved response times by 30% and reduced maintenance by 65%.",
    image: lmsImg,
    tags: ["React JS", "Redux Toolkit", "Node.js", "Express", "MongoDB", "Razorpay","Tailwind"],
    github: "https://github.com/KAMRANANSARI01/Learning_Management_system", // Replace with your actual GitHub link
    webapp: "https://lms-kamran.vercel.app/", // Add deployed link if available
  },
  {
    id: 1,
    title: "Flixify: Video Streaming App",
    description:
      "A sleek video streaming platform built using React.js and Redux, featuring infinite scrolling , lazy loading , and dynamic API integration for real-time content delivery. Enhanced front-end proficiency and tackled key development challenges.",
    image: flixifyImg,
    tags: ["React JS", "Redux Toolkit", "HTML", "CSS", "Tailwind" , "JavaScript", "API Integration"],
    github: "https://github.com/KAMRANANSARI01/Flixify_streaming_website", // Replace with actual GitHub link
    webapp: "https://flixify-streaming-website-kamran.vercel.app/", // Add deployed link if available
  },
  {
    id: 2,
    title: "SRDT Website",
    description:
      "A comprehensive CRM and Student Portal system developed for SRDT. Includes lead management, sales tracking, student document uploads, inquiry forms, and admin panel for managing sales reps and managers.",
    image: srdtImg,
    tags: ["React JS", "Redux Toolkit", "HTML", "CSS", "JavaScript",  "Tailwind CSS"],
    github: "", // Private project, add if public
    webapp: "https://srdt.co.in/",
  },
  {
    id: 3,
    title: "SRMCEM University Website",
    description:
      "A fully responsive and dynamic website developed for SRMCEM to represent the university’s brand, departments, and offerings. Built using React.js and Tailwind CSS, the site includes detailed pages for courses, faculty, admissions, contact forms, and news updates. Delivered a modern UI with smooth navigation and optimized performance to enhance the digital presence of the institution.",
    image: srmcemImg,
    tags: ["React JS", "Tailwind CSS", "HTML", "CSS", "JavaScript"],
    github: "", // Add GitHub link if public
    webapp: "https://www.srmcem.ac.in/", // Add deployed link if available
  }
];
