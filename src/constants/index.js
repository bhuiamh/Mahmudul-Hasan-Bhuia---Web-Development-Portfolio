import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  figma,
  tbootstrap,
  htmlcss,
  js,
  react,
  firebase,
  mongo,
  node,
  express,
  toylab,
  tuneTutore,
  kitchen,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: web,
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
    name: "React JS",
    icon: reactjs,
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
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "HTML & CSS",
    company_name: "html_css",
    icon: htmlcss,
    iconBg: "#383E56",
    date: "Web structure with Visual Design",
    points: [
      "Proficient in creating well-structured and semantically meaningful HTML5 documents.",
      "Experienced in crafting responsive and mobile-friendly web pages using CSS3 media queries and flexbox/grid layouts.",
      "Skilled in customizing and styling websites through CSS preprocessors like Sass or Less.",
      "Familiar with cross-browser compatibility issues and implementing CSS resets for consistent user experiences.",
    ],
  },
  {
    title: "Bootstrap & Tailwind",
    company_name: "html_css.png",
    icon: tbootstrap,
    iconBg: "#383E56",
    date: "Class-based CSS frameworks.",
    points: [
      "Proficient in developing responsive and user-friendly web interfaces using Bootstrap, utilizing its powerful grid system and components.",
      "Demonstrated expertise in creating modern and visually appealing UI designs with Tailwind CSS, leveraging its utility-first approach and extensive class library.",
      "Hands-on experience in customizing Bootstrap and Tailwind styles to match brand guidelines and project requirements.",
      "Implemented accessibility best practices with both Bootstrap and Tailwind, ensuring inclusive user experiences for all.",
    ],
  },
  {
    title: "JavaScript",
    company_name: "Tesla",
    icon: js,
    iconBg: "#E6DEDD",
    date: "Programming, Web Interactivity.",
    points: [
      "Developed interactive front-end features using JavaScript, HTML, and CSS.",
      "Utilized JavaScript to build responsive and mobile-friendly web applications.",
      "Implemented client-side validation and form handling for improved user experience.",
      "Collaborated with a cross-functional team to troubleshoot and debug JavaScript-related issues.",
    ],
  },
  {
    title: "React",
    company_name: "Shopify",
    icon: react,
    iconBg: "#383E56",
    date: "JavaScript user interfaces.",
    points: [
      "Proficient in building interactive user interfaces using React and its ecosystem.",
      "Extensive experience in creating reusable and modular components to streamline development.",
      "Skilled in state management with React hooks and Redux to maintain application state efficiently.",
      "Implemented responsive design and mobile optimization to ensure seamless user experiences across devices.",
    ],
  },
  {
    title: "Firebase",
    company_name: "Google",
    icon: firebase,
    iconBg: "#E6DEDD",
    date: "Real-time database platform.",
    points: [
      "Developed real-time applications using Firebase's Firestore and Realtime Database.",
      "Implemented Firebase Authentication for secure user sign-up and login functionalities.",
      "Utilized Firebase Cloud Functions to handle server-side logic and backend operations.",
      "Integrated Firebase Cloud Messaging for push notifications and user engagement.",
    ],
  },
  {
    title: "MongoDB",
    company_name: "Meta",
    icon: mongo,
    iconBg: "#E6DEDD",
    date: "NoSQL database system.",
    points: [
      "Proficient in designing and implementing MongoDB databases for scalable and high-performance applications.",
      "Extensive experience in querying and optimizing MongoDB databases to ensure efficient data retrieval.",
      "Hands-on expertise in setting up and managing MongoDB clusters for high availability and fault tolerance.",
      "Implemented robust security measures, including authentication and authorization, to safeguard MongoDB databases.",
    ],
  },
  {
    title: "Node.Js",
    company_name: "Meta",
    icon: node,
    iconBg: "#E6DEDD",
    date: "JavaScript runtime environment",
    points: [
      "Developed scalable and high-performance applications using Node.js.",
      "Utilized Node.js to build RESTful APIs for seamless client-server communication.",
      "Implemented real-time features with WebSockets in Node.js for enhanced user experience.",
      "Utilized npm packages to streamline development and enhance project efficiency.",
    ],
  },
  {
    title: "Express.Js",
    company_name: "Meta",
    icon: express,
    iconBg: "#E6DEDD",
    date: "Server-side JavaScript framework.",
    points: [
      "Developed and maintained RESTful APIs using Express.js to facilitate efficient communication between server and client.",
      "Implemented middleware functions for authentication, logging, and error handling to enhance application security and stability.",
      "Utilized Express.js to build scalable web applications, reducing response times and improving overall user experience.",
      "Worked with Node.js and Express.js to create real-time applications with WebSockets, enabling seamless bidirectional communication.",
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
    name: "TuneTutor",
    description:
      "It's a music instrument learning website where students can learn to play musical instruments during their summer break. It has separate dashboard for students, instructors and admin. TuneTutors is a interactive and responsive website .",
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
    image: tuneTutore,
    source_code_link: "https://github.com/bhuiamh/TuneTutors",
    demo_link: "https://tunetutors-bd41b.web.app/",
    server_link: "https://github.com/bhuiamh/TuneTutors-Server",
  },
  {
    name: "Kitchen Secret",
    description:
      "It's a Chefs booking website . Visitor can hire chefs from here for any kind of events. Visitor can explore different types of recipe from expert chefs. In there I was use MongoDB cloud store, Firebase for authentication and DaisyUI for design.",
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
    image: kitchen,
    source_code_link: "https://github.com/bhuiamh/kitchen-secret",
    demo_link: "https://asignment10-auth.web.app/",
    server_link: "https://github.com/bhuiamh/kitchen-secret-server",
  },
  {
    name: "The Toy Lab",
    description:
      "It's a toy selling website . The website was made for online shopping. People can buy educational toy from there . I use HTML, CSS, Tailwind , Firebases, ReactJS, MongoDB, Express, JWT and some technology to build this website .",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "mongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: toylab,

    source_code_link: "https://github.com/bhuiamh/The-Toy-Lab",
    demo_link: "https://the-toy-lab.web.app/",
    server_link: "https://github.com/bhuiamh/The-Toy-Lab-Server",
  },
];

export { services, technologies, experiences, testimonials, projects };
