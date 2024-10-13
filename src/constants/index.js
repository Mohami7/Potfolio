import YouShop from "../assets/projects/YouShop.png"
import Movie from "../assets/projects/Movie.png"
import Edusys from "../assets/projects/Edusys.png"
import Portfolio from "../assets/projects/Portfolio.png"
import ibnzohr from "../assets/projects/ibnzohr.png"
import Ofppt from "../assets/projects/Ofppt.png"
import Lmajd from "../assets/projects/Lmajd.png"

export const HERO_CONTENT = `Salut! 👋 Je suis un développeur Full Stack engagé, avec une expertise dans la création d'applications performantes et évolutives. Mon ambition est d'accompagner les entreprises vers le succès 💼 en développant des solutions sur-mesure et centrées sur l'utilisateur. Créatif, adaptable et déterminé, je suis prêt à transformer vos projets en réalité! 🚀`;

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
    liveLink: "https://you-shop-ecom.netlify.app/", // Correct link
    githubLink: "https://github.com/mohamedibaroui/you-shop-pro" // Correct GitHub link
  },
  {
    title: "Movie Website",
    image: Movie,
    description:
      "A movie browsing website with features like search, filtering, and movie details using public APIs.",
    technologies: ["React", "TailwindCSS", "Redux"],
    liveLink: "https://66868b1fe2afbdddb55d0ea2--cerulean-smakager-fa174d.netlify.app/", // Add a valid live link
    githubLink: "https:github.com/Mohami7/Cimaclub" // Add a valid GitHub link
  },
  {
    title: "Edusys",
    image: Edusys,
    description:
      "An educational system platform for managing student information and educational content.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
    liveLink: false,
    githubLink: "https://github.com/mohamedibaroui/projetschools" // Add a valid GitHub link
  },
  {
    title: "Portfolio",
    image: Portfolio,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "MySQL"],
    liveLink: "https://my-portfolio.netlify.app/", // Add a valid live link
    githubLink: "https://github.com/yourgithubusername/portfolio-website" // Add a valid GitHub link
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
