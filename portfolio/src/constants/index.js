import YouShop from "../assets/projects/YouShop.png"
import Movie from "../assets/projects/Movie.png"
import Edusys from "../assets/projects/Edusys.png"
import Portfolio from "../assets/projects/Portfolio.png"
import ibnzohr from "../assets/projects/ibnzohr.png"
import Ofppt from "../assets/projects/Ofppt.png"
import Lmajd from "../assets/projects/Lmajd.png"

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `Développeur Full Stack avec une maîtrise approfondie des technologies front-end et back-end, spécialisé dans la conception d'applications web et mobiles. Passionné par l'innovation technologique, je m'investis également dans l'optimisation des systèmes et la gestion des infrastructures, offrant ainsi des solutions robustes et évolutives.`;

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
    title: "Movie Website",
    image: Movie,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["React", "TailwinCss", "Redux"],
  },
  {
    title: "Edusys",
    image: Edusys,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Portfolio",
    image: Portfolio,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const EDUCATION = [
  {
    year: "2022 - 2024",
    role: "Technicien spécialisé en développement digital",
    company: "Institut Spécialisé de Technologie Appliquée Tafraout",
    img: Ofppt,
    description: "Formation axée sur le développement d'applications web et mobiles, avec une solide compréhension des technologies front-end et back-end. Réalisation de projets collaboratifs avec des partenaires académiques pour créer des solutions numériques innovantes."
  },
  {
    year: "2022",
    role: "Sciences physiques",
    company: "Université Ibn Zohr",
    img: ibnzohr,
    description: "Étude approfondie des principes fondamentaux de la physique, en particulier en mécanique, thermodynamique et électricité. Développement de compétences analytiques à travers des expériences et des travaux pratiques au sein de l'université."
  },
  {
    year: "2021",
    role: "Baccalauréat en sciences de la vie et de la terre",
    company: "Lycée Al Majd Azrou Ait Melloul",
    img: Lmajd,
    description: "Acquisition d'une connaissance globale en biologie et géologie. Participation à des projets scolaires axés sur la recherche scientifique et les méthodes d'apprentissage basées sur l'exploration des phénomènes naturels."
  }
];

export const CONTACT = {
  address: "Morocco, Agadir ",
  phoneNo: "+212 64 34 98 91 ",
  email: "mohamedibaroui@gmail.com",
};
