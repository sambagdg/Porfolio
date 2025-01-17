import React from "react";
import { CgWebsite } from "react-icons/cg";
import { RiComputerFill } from "react-icons/ri";
import { BsWordpress } from "react-icons/bs";
import { FaUserGraduate } from "react-icons/fa";
import fischbeinImg from "@/public/fischbein.png";
import gactiVvaImg from "@/public/gacti.png";
import locationImg from "@/public/location.png";
import gsbjavaImg from "@/public/gsbjava.png";
import gsbphpImg from "@/public/gsbphp.png";
import mirandaImg from "@/public/miranda.png";
// import nextappImg from "@/public/nextapp.png";
import musicSiteImg from "@/public/musicSite.png";
import weatherApp from "@/public/weatherApp.png";
import chatToPdf from "@/public/chatpdf.png";
import filmPlateforme from "@/public/filmPlateforme.png";

export const links = [
  {
    name: "Accueil",
    hash: "#home",
  },
  {
    name: "A propos",
    hash: "#about",
  },
  {
    name: "Projets",
    hash: "#projects",
  },
  {
    name: "Compétences",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
];

export const experiencesData = [
  {
    title: "TP CDA: Concepteur Développeur d'Applications",
    location: "Greta des Hauts-de-seine: Colombes, France",
    description:
      "La formation TP CDA (Titre Professionnel de Concepteur Développeur d’Applications) est une formation professionnelle reconnue par l’État, qui prépare les apprenants à concevoir, développer et maintenir des applications informatiques en réponse à des besoins spécifiques des entreprises. Ce titre est classé au niveau 6 du RNCP (équivalent à Bac+3/Bac+4).",
    icon: React.createElement(FaUserGraduate),
    date: "2024 - 2025",
  },
  {
    title: "BTS SIO (SLAM): Admis",
    location: "Lycée de Vilgènis: Massy, France",
    description:
      "Le BTS SIO option SLAM est une formation axée sur le développement de logiciels et d'applications métiers pour les entreprises.",
    icon: React.createElement(FaUserGraduate),
    date: "2022 - 2023",
  },
  {
    title: "Stage développeur WordPress",
    location: "Fischbein: Montreuil, France",
    description:
      "Travaux d'intégration sous Wordpress. Création d'un site web et intégration des contenus selon le cahier des charges établi. Conception technique d'interfaces web.",
    icon: React.createElement(BsWordpress),
    date: "Février 2023 - Mars 2023",
  },
  {
    title: "Stage Developpeur Front-End",
    location: "Miranda Service: Epinay-Sur-Seine, France",
    description:
      "Création d'un site vitrine avec (HTML/CSS et PHP), mise en place d'une interface présentant les services et produits de l'entreprise. Formulaire de contact, permettant aux clients de contacter l'entreprise.",
    icon: React.createElement(CgWebsite),
    date: "Novembre 2021 - Janvier 2022",
  },
  {
    title: " Stage technicien support informatique",
    location: "Social Technet: Conflans-Saint-Honorine, France",
    description:
      "Bureatique, installation de poste de travail. Dépannage informatique à domicile.",
    icon: React.createElement(RiComputerFill),
    date: "Novembre 2019 - Janvier 2020",
  },
  {
    title: "Bac pro Systémes Numériques : Mention bien",
    location: "Lycée Denis Papin: Lacourneuve, France",
    description:
      "Le Bac Pro Systèmes Numériques est une formation axée sur les compétences en électronique et en informatique pour préparer les étudiants à travailler dans le domaine des systèmes numériques et de l'automatisation.",
    icon: React.createElement(FaUserGraduate),
    date: "2017 - 2020",
  },
] as const;

export const projectsData = [
  {
    title: "Discutez-Avec-Pdf-App",
    description:
      "Cet applcation permet de télécharger des fichier pdf et de poser des questions dont une IA, résumera le contenu et répondra à toutes vos questions. Idéal pour tous, Discutez avec Votre PDF",
    tags: ["React", "NextJs", "TypeScript", "Tailwind", "Clerk", "Shadcn"],
    imageUrl: chatToPdf,
    link: "https://discutez-avec-pdf.vercel.app/",
    target: "_blank",
  },
  {
    title: "Film-Plateforme-Design",
    description:
      "Ce site est une plateforme de films sur laquelle nous affichons les films récemment sortis en utilisant une API de films.",
    tags: ["React", "NextJs", "TypeScript", "SASS"],
    imageUrl: filmPlateforme,
    link: "https://film-plateforme.vercel.app/",
    target: "_blank",
  },

  {
    title: "Meteo-App",
    description:
      "Cette application permet de rechercher la météo d'une ville en utilisant une API de météo.",
    tags: ["Html", "Css", "JavaScript"],
    imageUrl: weatherApp,
    link: "https://meteo-app-five.vercel.app/",
    target: "_blank",
  },

  {
    title: "Music Website",
    description: "Design d'une plateforme de musique 100% responsive",
    tags: ["Html", "Css", "JavaScript"],
    imageUrl: musicSiteImg,
    link: "https://plateforme-music-design.vercel.app/",
    target: "_blank",
  },
  // {
  //   title: "Next.js App",
  //   description:
  //     "Application de gestion de tâches, affichage d'une liste de boissons en utilisant une api.",
  //   tags: [
  //     "NextJS",
  //     "Prisma",
  //     "Tailwind CSS",
  //     "DaisyUi",
  //     "JavaScript",
  //     "NodeJS",
  //   ],
  //   imageUrl: nextappImg,
  //   link: "https://sambanextjsapp.vercel.app/",
  //   target: "_blank",
  // },

  {
    title: "Site web Fischbein",
    description:
      "Refaire le site à partir du site existant avec un nouveau design. Traduction du site en français et gerer le côté responsive pour les différents appareils (ordinateur, tablette, téléphone....).",
    tags: ["Wordpress", "Elementor", "Mysql", "Depicter", "Contact form 7"],
    imageUrl: fischbeinImg,
    link: "/",
    target: "",
  },
  {
    title: "GACTI VVA App",
    description:
      "L'application VVA permet aux utilisateurs de parcourir les activités proposeés par VVA et s'inscrire aux activités. L'application permet à un encadrant de créer, modifier et annuler une activité, de lister les inscris à une actvité. Le vacancier peut se désinscrire d'une actvité.",
    tags: ["Php", "Mysql", "Htlm", "Css", "Bootstrap", "MAMP", "PHPSTORM"],
    imageUrl: gactiVvaImg,
    link: "/",
    target: "",
  },
  {
    title: "Location voiture App",
    description:
      "L'application comporte deux espaces, opérateur et administrateur. L'application permettra donc à l'opérateur d'enregistrer les informations des clients, réserver des véhicules pour eux, tandis que l'administrateur pourra gérer les véhicules, valider les réservations et avoir une vue d'ensemble des opérations.",
    tags: ["Java", "Mysql", "Swing", "MAMP", "INTELLIJ"],
    imageUrl: locationImg,
    link: "/",
    target: "",
  },
  {
    title: "site web Miranda Service",
    description:
      "La création d'un site vitrine avec HTML/CSS et PHP pour informer les internautes sur l'activité de l'entreprise, présentation des services et produits, ainsi qu'un un formulaire de contact permettant aux clients de contacter l'entreprise.",
    tags: ["HTML", "CSS", "PHP", "VScode"],
    imageUrl: mirandaImg,
    link: "/",
    target: "",
  },
  {
    title: "GSB PHP",
    description:
      "Enregistrer tous les frais engagés, qu'ils soient liés à l'activité principale ou à des activités annexes.L'application est destinée aux visiteurs, délégués et responsables de secteur L'applicaton Exiger une authentification préalable pour accéder à son contenu.",
    tags: ["HTML", "CSS", "PHP", "MYSQL"],
    imageUrl: gsbphpImg,
    link: "/",
    target: "",
  },
  {
    title: "GSB JAVA",
    description:
      "L'objectif de l'application est de centraliser les comptes-rendus de visite et de fournir des informations sur les medicaments et les praticiens du laboratoire. Création d'une structure pour l'application avec une page d'accueil et des pages pour la description des produits et les informations sur les praticiens.",
    tags: ["Java", "Mysql", "Swing", "MAMP", "INTELLIJ"],
    imageUrl: gsbjavaImg,
    link: "/",
    target: "",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "PHP",
  "Java",
  "Spring",
  "Spring Boot",
  "Docker",
  "Vagrant",
  "Angular",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Vue.js",
  "WordPress",
  "Elementor",
  "Git",
  "Tailwind",
  "Bootstrap",
  "Mysql",
  "MongoDB",
  "Python",
  "C#",
  "Sql",
  "Framer Motion",
] as const;
