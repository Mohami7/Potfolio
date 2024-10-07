import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import YouShop from "../assets/projects/YouShop.png"
import Movie from "../assets/projects/Movie.png"

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Mai-2024(1mois)",
    role: "Stagiaire en développement web ",
    company: "Centre de Santé - Tafraout",
    description: ["Collaboration avec les écoles pour concevoir des solutions pédagogiques.",
      " Participation à la conception du système de gestion des vaccins.",
      "Collaboration avec l'équipe médicale pour définir les exigences et les fonctionnalités du système.",
      "Utilisation de la méthodologie Agile (Scrum) avec des livraisons hebdomadaires.",
      "Front-end : ReactJS, JavaScript, Redux Toolkit/Thunk, HTML, CSS, TailwindCSS.",
      "Back-end : Node.js, Express.js, MongoDB, Docker.",
      "Gestion de projet : Jira, Git/GitHub."
    ]
  },
  
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: YouShop,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "MOvie Set Web",
    image: Movie,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["React", "TailwinCss", "Redux"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
