
function afficherSection(id) {

    let sections = document.querySelectorAll("section");

    for (let section of sections) {
        section.style.display = "none";
    }

    document.getElementById(id).style.display = "block";

    let liens = document.querySelectorAll("nav a");

    for (let lien of liens) {
        lien.classList.remove("active");
    }

    document.querySelector('nav a[href="#' + id + '"]').classList.add("active");
}


// TRADUCTIONS ANGLAISES

const traductions = {

    // Menu de navigation

    "Accueil": "Home",
    "À propos de moi": "About me",
    "Mes compétences": "My skills",
    "Mes centres d'intérêt": "My interests",
    "Mes projets": "My projects",
    "Contact": "Contact",

    // Accueil

    "Bonjour, je suis Léa !":
        "Hello, I'm Léa!",

    "Étudiante en Mathématiques & Informatique":
        "Mathematics & Computer Science Student",

    "Passionnée par l'intelligence artificielle, la programmation et les nouvelles technologies.":
        "Passionate about artificial intelligence, programming and new technologies.",

    "À la recherche d'un stage à partir de juin 2027":
        "Seeking an internship starting in June 2027",

    "Découvrir mes projets":
        "Explore my projects",

    "Télécharger mon CV":
        "Download my CV",

    // À propos de moi

    "Mon parcours académique":
        "My academic background",

    "Actuellement étudiante en première année de double licence Mathématiques-Informatique à l'Université Paris Cité, je développe mes connaissances en programmation, en algorithmique et en mathématiques.":
        "Currently a first-year student pursuing a double bachelor's degree in Mathematics and Computer Science at Université Paris Cité, I am developing my knowledge of programming, algorithms and mathematics.",

    "Mes motivations":
        "My motivations",

    "Passionnée par les nouvelles technologies et l'intelligence artificielle, j'aime comprendre le fonctionnement des systèmes informatiques et mettre en pratique mes connaissances à travers des projets personnels. Je développe notamment un jeu vidéo avec Unity ainsi que mon propre portfolio.":
        "Passionate about new technologies and artificial intelligence, I enjoy understanding how computer systems work and applying my knowledge through personal projects. I am currently developing a video game using Unity as well as my own portfolio.",

    "Mes ambitions professionnelles":
        "My career goals",

    "Je souhaite approfondir mes compétences en informatique et en intelligence artificielle, découvrir le monde professionnel et participer à des projets innovants. Je suis actuellement à la recherche d'un stage à partir de juin 2027 afin de mettre en pratique mes connaissances et d'acquérir de nouvelles compétences.":
        "I aim to strengthen my skills in computer science and artificial intelligence, gain professional experience and contribute to innovative projects. I am currently seeking an internship starting in June 2027 to apply my knowledge and develop new skills.",

    // Compétences

    "Programmation": "Programming",
    "Langage C": "C",
    "Développement web": "Web development",
    "Systèmes": "Computer systems",
    "Mathématiques": "Mathematics",
    "Algèbre": "Algebra",
    "Analyse": "Mathematical analysis",
    "Logique": "Logic",

    // Centres d'intérêt

    "Intelligence artificielle":
        "Artificial intelligence",

    "Découvrir les innovations et les applications de l'IA.":
        "Exploring innovations and applications of AI.",

    "Création de sites web":
        "Web development",

    "Concevoir des sites web modernes et interactifs.":
        "Designing modern and interactive websites.",

    "Création de jeux vidéo":
        "Video game development",

    "Associer programmation et créativité à travers Unity.":
        "Combining programming and creativity through Unity.",

    "Langues": "Languages",
    "Français : Langue maternelle": "French:  Native",
    "Anglais : IELTS 6.5/9": "English: IELTS 6.5/9",
    "Arabe : Langue maternelle": "Arabic: Native",
    "Espagnol : B2 (niveau estimé)": "Spanish: B2 (estimated level)",

    "Danse": "Dance",

    "Développer ma créativité et mon expression artistique.":
        "Developing my creativity and artistic expression.",

    "Explorer la musique à travers la pratique du piano.":
        "Exploring music through playing the piano.",

    "Guitare": "Guitar",

    "Développer ma créativité musicale.":
        "Developing my musical creativity.",

    "Voyages et cultures":
        "Travel and cultures",

    "Découvrir de nouveaux pays, leurs cultures et leurs traditions.":
        "Discovering new countries, cultures and traditions.",

    // Projets

    "En cours de développement":
        "In development",

    "Développement d'un jeu vidéo de type Endless Runner avec Unity et le langage C#. Ce projet me permet d'approfondir mes compétences en programmation et en création de jeux vidéo.":
        "Developing an endless runner video game using Unity and C#. This project allows me to improve my programming and video game development skills.",

    "Portfolio personnel":
        "Personal portfolio",

    "Terminé":
        "Completed",

    "Création de mon premier site web personnel pour présenter mon parcours académique, mes compétences et mes projets.":
        "Creation of my first personal website to showcase my academic background, skills and projects.",

    // Contact

    "Vous souhaitez échanger avec moi, me proposer un stage ou discuter d'un projet ? N'hésitez pas à me contacter !":
        "Would you like to connect, offer me an internship or discuss a project? Feel free to contact me!",

    "Téléphone": "Phone",

    "Découvrir mon profil professionnel":
        "View my professional profile",

    "Découvrir mes projets informatiques":
        "Explore my coding projects",

    "Localisation": "Location",

    // Pied de page

    "© 2027 - Mon Portfolio":
        "© 2027 - My Portfolio"
};


// SAUVEGARDE DES TEXTES FRANÇAIS

const textesOriginaux = new Map();

const parcourirTextes = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT
);

let noeud;

while (noeud = parcourirTextes.nextNode()) {

    if (noeud.parentElement.closest("script, style")) {
        continue;
    }

    const texte = noeud.textContent.trim().replace(/\s+/g, " ");

    if (Object.prototype.hasOwnProperty.call(traductions, texte)) {
        textesOriginaux.set(noeud, noeud.textContent);
    }
}


// CHANGEMENT DE LANGUE

function changerLangue(langue) {

    document.documentElement.lang = langue;

    textesOriginaux.forEach((original, noeud) => {

        const texte = original.trim().replace(/\s+/g, " ");

        if (langue === "en") {
            noeud.textContent = " " + traductions[texte] + " ";
        } else {
            noeud.textContent = original;
        }

    });

    document.title = langue === "fr"
        ? "Mon Portfolio"
        : "My Portfolio";

    document.querySelector(".photo-profil").alt =
        langue === "fr" ? "Photo de profil" : "Profile picture";

    document.querySelector(".reseaux-sociaux a[href^='mailto:']")
        .setAttribute("aria-label",
            langue === "fr" ? "Me contacter par email" : "Contact me by email"
        );

    document.getElementById("btn-fr")
        .classList.toggle("active", langue === "fr");

    document.getElementById("btn-en")
        .classList.toggle("active", langue === "en");

    localStorage.setItem("langue", langue);
}


// DÉTECTION AUTOMATIQUE DE LA LANGUE

const langueInitiale = localStorage.getItem("langue") ||
    (navigator.language.startsWith("fr") ? "fr" : "en");

changerLangue(langueInitiale);
