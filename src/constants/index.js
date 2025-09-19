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
  airbnb,
  hackathon,
  office,
  school,
  carrent,
  jobit,
  tripguide,
  threejs,
  airbnbclone,
  weatherapp,
  tictactoe,
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
    title: "MongoDB",
    icon: web,
  },
  {
    title: "Express",
    icon: mobile,
  },
  {
    title: "React",
    icon: backend,
  },
  {
    title: "NodeJs",
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
    title: "Full Stack Teaching Assistant Intern",
    company_name: "Jainemo Pvt. Ltd.",
    icon: office,
    iconBg: "#383E56",
    date: "Jan 2025 - May 2025",
    points: [
      "Mentored over 5,000 students in MERN stack technologies with a focus on frontend and backend development.",
      "Resolved 112+ technical queries, guiding students through debugging and project building.",
      "Facilitated collaborative learning using Discord and interactive sessions.",
      "Maintained a strong learner satisfaction rating of 4.3/5 based on feedback.",
    ],
  },
  {
    title: "Hackathon Participant",
    company_name: "Sristi & Wave 2.0 (State-Level Hackathons)",
    icon: hackathon,
    iconBg: "#E6DEDD",
    date: "2024",
    points: [
      "Collaborated with peers to design and develop innovative web solutions under strict time constraints.",
      "Applied problem-solving skills to create functional prototypes using React.js, Node.js, and MongoDB.",
      "Focused on delivering responsive and user-friendly UIs for hackathon projects.",
    ],
  },
  {
    title: "Full Stack Web Development Certification",
    company_name: "Apna College",
    icon: school,
    iconBg: "#383E56",
    date: "2025",
    points: [
      "Completed professional certification in MERN stack covering frontend, backend, and database technologies.",
      "Built multiple real-world projects including CRUD applications, authentication systems, and API integrations.",
      "Deployed applications on platforms like Render and Netlify for live usage.",
    ],
  },
  {
    title: "Personal Projects (Airbnb Clone & Others)",
    company_name: "Self-Learning / Freelance",
    icon: airbnb,
    iconBg: "#E6DEDD",
    date: "2025",
    points: [
      "Developed a full-stack Airbnb Clone with Google OAuth, secure sessions, and Razorpay integration.",
      "Implemented Cloudinary for image uploads and integrated AI-powered chatbot for property assistance.",
      "Designed and deployed responsive applications using React.js, Node.js, Express, and MongoDB.",
    ],
  },
];


const achievements = [
{
    title: "Full Stack Teaching Assistant Intern",
    organization: "Jainemo Pvt. Ltd.",
    date: "Jan 2025 - May 2025",
    description:
      "Mentored over 5,000 students, resolved 112+ technical queries, and maintained a 4.3/5 rating based on feedback.",
    icon: office, // use your existing office icon
    proof_link: "https://drive.google.com/file/d/1dXF_bphDUkBb_sKfZVIEUckrwiw8qI6_/view?usp=drive_link",
  },
  {
    title: "Full Stack Web Development Certification",
    organization: "Apna College",
    date: "2025",
    description:
      "Completed a comprehensive MERN stack certification covering frontend, backend, and deployment with hands-on projects.",
    icon: school, // use your existing school icon
    proof_link: "https://drive.google.com/file/d/1eEVI8m40-KXiFhPKkhz-QR-mWKOhDKCg/view?usp=sharing",
  },
  {
    title: "Hackathon Participation",
    organization: "Sristi & Wave 2.0 (State-Level Hackathons)",
    date: "2024",
    description:
      "Collaborated with peers to design and build innovative solutions during hackathons, focusing on MERN stack and responsive UI.",
    icon: hackathon, // use your existing hackathon icon
    proof_link: "https://drive.google.com/file/d/17GDRJe4tSmOCxUYTrMj9gCIpaECiqvID/view?usp=drive_link",
  },
];

const projects = [
  {
    name: "Airbnb Clone",
    description:
      "A full-stack booking platform with authentication, secure sessions, and CRUD property listings. Features include Google OAuth 2.0, Razorpay payment integration, Cloudinary image uploads, and an AI-powered chatbot to guide users in property searches and bookings.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "ejs",
        color: "orange-text-gradient",
      },
    ],
    image: airbnbclone, // add an Airbnb project screenshot in your assets
    source_code_link: "https://github.com/Ganeshjh2004/Airbnb",
    live_demo_link: "https://sigma-project-vgid.onrender.com",
  },
  {
    name: "Weather App",
    description:
      "A weather forecasting application that fetches real-time weather data using APIs. Displays temperature, humidity, and condition details in a clean and user-friendly interface.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: weatherapp, // screenshot of your WeatherApp
    source_code_link: "https://github.com/Ganeshjh2004/WeatherApp",
  },
  {
    name: "Tic-Tac-Toe",
    description:
      "A simple and interactive Tic-Tac-Toe game built with JavaScript. Features two-player functionality, game status updates, and win/draw detection.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tictactoe, // screenshot of your Tic-Tac-Toe app
    source_code_link: "https://github.com/Ganeshjh2004/tic-tac-toe",
  },
 
];


export { services, technologies, experiences, achievements, projects };
