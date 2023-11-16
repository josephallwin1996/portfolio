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
  squad,
  squad1,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

const navLinks = [
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
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
];

const experiences = [
  {
    title: "Jr.Developer (PHP)",
    company_name: "Squad Technologies",
    icon: squad,
    iconBg: "#383E56",
    date: "Oct 2019 - Nov 2021",
    points: [
      "Developing and enhancing dynamic web applications using PHP to meet project requirements.",
      "Creating and maintaining database-driven applications, leveraging MySQL for seamless data management.",
      "Collaborating with cross-functional teams, including designers and product managers, to contribute to the overall success of projects.",
      "Actively participating in code reviews, providing constructive feedback to peers, and continuously improving code quality.",
      "Following coding standards and best practices to maintain clean, readable, and efficient PHP code.",
      "Creating and maintaining documentation for PHP code, ensuring clarity for other developers and future maintainers.",
    ],
  },
  {
    title: "Sr. Developer (Shopify and MERN stack developer)",
    company_name: "Squad Technologies",
    icon: squad,
    iconBg: "#E6DEDD",
    date: "Dec 2021 - Nov 2022",
    points: [
      "Developing and customizing e-commerce solutions on the Shopify platform, ensuring a seamless and user-friendly shopping experience.",
      "Building interactive and high-performance web applications using React.js and related technologies.",
      "Implementing robust server-side solutions with Node.js, handling data processing, and ensuring efficient backend functionality.",
      "Collaborating with cross-functional teams, including designers and product managers, to translate project requirements into effective technical solutions.",
      "Identifying and resolving issues within Shopify, React, and Node.js code through effective debugging and troubleshooting practices.",
      "Utilizing version control systems, such as Git, to manage and track changes in collaborative development environments.",
      "Integrating third-party APIs with Shopify and implementing API solutions in Node.js for enhanced functionality.",
    ],
  },
  {
    title: "Team Leader",
    company_name: "Squad Technologies",
    icon: squad,
    iconBg: "#383E56",
    date: "Dec 2022 - Present",
    points: [
      "Spearheaded and led a dynamic development team, fostering a collaborative and innovative work environment.",
      "Orchestrated project workflows, ensuring seamless coordination between team members, designers, and stakeholders for successful project delivery.",
      "Effectively delegated tasks based on team members' strengths and skill sets, overseeing the execution and ensuring timely completion.",
      "Conducted regular performance evaluations, recognizing achievements, and identifying areas for improvement to enhance overall team effectiveness.",
      "Demonstrated strong interpersonal skills in resolving conflicts, fostering a positive team dynamic, and maintaining a cohesive work atmosphere.",
      "Organized team-building activities and events to strengthen team cohesion and boost morale.",
      "Encouraged an adaptive and innovative mindset within the team, fostering a culture of continuous learning and staying abreast of industry trends.",
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  navLinks,
};
