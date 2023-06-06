//  icons
import {
  FiYoutube,
  FiInstagram,
  FiGithub,
  FiDribbble,
  FiLayout,
  FiFacebook,
  FiLinkedin,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
} from "react-icons/fi";

import { FaEnvelope, FaGithub } from "react-icons/fa";

import { TfiFacebook, TfiLinkedin } from "react-icons/tfi";

// companies icons
import FreelancerBrandIcon from "./assets/img/brands/freelancer.png";
import UpworkBrandIcon from "./assets/img/brands/upwork.png";
import FiverBrandIcon from "./assets/img/brands/fiverr.png";
import BehanceBrandIcon from "./assets/img/brands/behance.png";
import DribbbleBrandIcon from "./assets/img/brands/dribbble.png";

// projects images
import Project1 from "./assets/img/projects/p1.png";
import Project2 from "./assets/img/projects/p2.png";
import Project3 from "./assets/img/projects/p3.png";
import Project4 from "./assets/img/projects/p4.png";
import Project5 from "./assets/img/projects/p5.png";
import Project6 from "./assets/img/projects/p6.png";

// skills images
import SkillImg1 from "./assets/img/skills/html5.png";
import SkillImg2 from "./assets/img/skills/css3.png";
import SkillImg3 from "./assets/img/skills/js.png";
import SkillImg4 from "./assets/img/skills/reactjs.png";
import SkillImg5 from "./assets/img/skills/nextjs.png";
import SkillImg6 from "./assets/img/skills/nodejs.png";
import SkillImg7 from "./assets/img/skills/wordpress.png";
import SkillImg8 from "./assets/img/skills/figma.png";

// testimonial images
import TestiImage1 from "./assets/img/testimonials/testimonial-1.webp";
import TestiImage2 from "./assets/img/testimonials/testimonial-2.webp";
import TestiImage3 from "./assets/img/testimonials/testimonial-3.webp";

// navigation
export const navigation = [
  {
    name: "Accueil",
    href: "home",
  },
  {
    name: "Prestations",
    href: "services",
  },
  {
    name: "portfolio",
    href: "portfolio",
  },
  {
    name: "A propos",
    href: "about",
  },
  {
    name: "contact",
    href: "contact",
  },
];

// social
export const social = [
  {
    icon: <TfiFacebook />,
    href: "https://facebook.com",
  },
  {
    icon: <FaGithub />,
    href: "https://github.com/facenordgraphisme",
  },
  {
    icon: <TfiLinkedin />,
    href: "https://www.linkedin.com/in/francois-xavier-pin-77abb5272/",
  },
  {
    icon: <FaEnvelope />,
    href: "mailto:facenordgraphisme@gmail.com",
  },
];

// projects
export const projectsData = [
  {
    id: "1",
    image: Project1,
    name: "Gaudineto",
    category: "Infographies",
    link: "http://www.gaudineto.fr",
  },
  {
    id: "2",
    image: Project2,
    name: "Patiss & Cuisine",
    category: "Web Design",
    link: "http://www.patissetcuisine.fr",
  },
  {
    id: "3",
    image: Project3,
    name: "Zmoon Tech",
    category: "Identité Visuelle",
    link: "http://www.patissetcuisine.fr",
  },
  {
    id: "4",
    image: Project4,
    name: "Little Noo's",
    category: "Identité Visuelle",
    link: "http://www.patissetcuisine.fr",
  },
  {
    id: "5",
    image: Project5,
    name: "Gaudineto",
    category: "Web Design",
    link: "http://www.gaudineto.fr",
  },
  {
    id: "6",
    image: Project6,
    name: "Let's Do It",
    category: "Web Design",
    link: "http://www.patissetcuisine.fr",
  },
];

// projects
export const projectsNav = [
  {
    name: "tout",
  },
  {
    name: "Web Design",
  },
  {
    name: "Identité Visuelle",
  },
  {
    name: "Infographies",
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: "Création de site web",
    description:
      "Gagnez en visibilité et attirez de nouveaux clients grâce à- un site vitrine. Créez votre boutique en ligne et offrez vous un espace de vente illimité et une présence dans le monde entier.",
  },
  {
    icon: <FiSettings />,
    name: "Identité visuelle",
    description:
      "De l'esquisse au logo final, de l'idée à la naissance de votre projet, je vous accompagne dans la création de vos visuels et de votre charte graphique afin de donner une identité à votre marque",
  },
  {
    icon: <FiPenTool />,
    name: "Infographies",
    description:
      "Faites appel à moi pour la réalisation d'un flyer, d'une carte de visite, de visuels pour les réseaux sociaux, d'un menu de restaurant et tout autre print. ",
  },
  {
    icon: <FiTag />,
    name: "Maintenance",
    description:
      "Je vous accompagne dans la mise à jour et le raffraichissement de votre site web. Qu'il s'agisse de la mise à jour de vos plug-ins, de la sécurité ou de l'amélioration des performance, je suis disponible pour vous.",
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: "Vous avez une question?",
    subtitle: "Discutons de votre projet.",
    description: "facenordgraphisme@gmail.com",
  },
  {
    icon: <FiMapPin />,
    title: "Embrun",
    subtitle: "Hautes-Alpes, France",
    description: "06 23 51 86 14",
  },
];
