//=========================================================
let body_sadia = document.querySelector(".Sadia");
let image_mode = document.getElementById("image_mode");
let les_informations = document.querySelector(".les_informations");

image_mode.addEventListener("click", () => {
    body_sadia.classList.toggle("dark_mode");

    les_informations.classList.toggle("dark_mode");

    if(body_sadia.classList.contains("dark_mode")) {
        image_mode.src = "assets/icon/light.svg";
    } 
    else {
        image_mode.src = "assets/icon/dark.svg";
    }
});


const Alioune={
    nom: "Badji",
    prenom: "Alioune Badara Sadia",
    dateNaissance: "29/02/2000 à Dakar",
    adresse: "HLM Grand-Yoff Villa n°891",
    profession: "Développeur Fullstack",
    email: "sadiabadji9@gmail.com",
    telephone: "77 826 99 44"
};

const Alioune_experiences_professionnelle={
    titre: "Développeur Web & Mobile",
    description_experience: `Projet Scolaire,
                        Université Gaston Berger de Saint-Louis
                        Depuis
                        février 2023
                        J'ai travaillé sur
                        Santé Connect
                        , une plateforme de prise de rendez-vous en lignedéveloppée avec
                        HTML, CSS, JavaScript (front-end)
                        et
                        PHP (back-end)
                        . Il aégalement réalisé une
                        application mobile Flutter
                        pour la gestion du pointage via
                        QR Codes
                        , ce qui lui a permis d'explorer les défi s des technologies web et mobiles.Aussi j'ai eu à réaliser un E-commerce en utilisant Python pour le
                        back-end.`,
};

const Alioune_competences_fonctionnelles = [
  {
    titre: "Gestion de projets et organisation",
    details: [
      "Capacité à structurer et organiser des tâches sur des projets web et mobile.",
      "Planification des étapes de développement et suivi du travail en équipe."
    ]
  },
  {
    titre: "Communication et travail en équipe",
    details: [
      "Collaboration efficace avec des collègues et partenaires (ex. projets avec Xarala et club informatique).",
      "Capacité à expliquer et présenter des concepts techniques à des non-techniciens."
    ]
  },
  {
    titre: "Analyse et résolution de problèmes",
    details: [
      "Identification rapide des problèmes techniques ou fonctionnels.",
      "Proposition de solutions adaptées pour améliorer les applications ou la gestion des projets."
    ]
  },
  {
    titre: "Utilisation d’outils numériques",
    details: [
      "Maîtrise de logiciels et plateformes de gestion de projets (ex. Git, Trello, Jira).",
      "Utilisation d’outils bureautiques et en ligne pour le suivi et la communication."
    ]
  },
  {
    titre: "Sens de l’innovation et créativité",
    details: [
      "Proposition d’idées pour des projets interactifs (ex. webinaire, application e-commerce, chatbot médical).",
      "Adaptation des solutions aux besoins des utilisateurs et du public cible."
    ]
  },
  {
    titre: "Gestion de contenu et présentation",
    details: [
      "Structuration et mise en forme des informations pour les plateformes web et applications.",
      "Création de présentations claires et accessibles, à la fois visuelles et fonctionnelles."
    ]
  }
];

const Alioune_competences_techniques ={
    titre:  "Compétences Techniques",
    liste_competence : ["HTML",
                        "CSS",
                        "JavaScript",
                        "Python",
                        "Django",
                        "Figma",
                        "PHP",
                        "SQL",
                        "Flutter",
                        "C",
                        "C++",
                        "Java",
                        "Angular"]
};

const Alioune_langues ={
    titre:  "Langues",
    liste_langues : ["Français",
                        "Wolof",
                        "Anglais",
                        ]
}

const Alioune_etudes = {
    titre: "Études",
    liste: [
        {
            diplome: "Licence Informatique (Système d'information)",
            etablissement: "Université Gaston Berger, Saint-Louis",
            periode: "Depuis janvier 2025"
        },
        {
            diplome: "Baccalauréat",
            etablissement: "Lycée Lamine Gueye, Dakar, DK, Senegal",
            periode: "D'octobre 2019 à août 2020"
        },
        {
            diplome: "BFEM",
            etablissement: "CEM Abbe Arsene Fridoil, Dakar, DK, Senegal",
            periode: "D'octobre 2015 à juillet 2016"
        }
    ]
};




// ==================================Experiences Techniques=========================================

document.getElementById("Alioune_nom").textContent = Alioune.nom;
document.getElementById("Alioune_prenom").textContent = Alioune.prenom;
document.getElementById("Alioune_ddn").textContent = Alioune.dateNaissance;
document.getElementById("Alioune_adresse").textContent = Alioune.adresse;
document.getElementById("Alioune_profession").textContent = Alioune.profession;


document.getElementById("Alioune_titre_EP").textContent=Alioune_experiences_professionnelle.titre;
document.getElementById("Alioune_description_experience").textContent=Alioune_experiences_professionnelle.description_experience;


// ==================================Competences Fonctionnelles=========================================
const container = document.querySelector(".Alioune_CF");
const ol = document.createElement("ol");
Alioune_competences_fonctionnelles.forEach(comp => {
  const li = document.createElement("li");
  const h3 = document.createElement("h3");
  h3.textContent = comp.titre;
  li.appendChild(h3);

  const ul = document.createElement("ul");
  comp.details.forEach(detail => {
    const liDetail = document.createElement("li");
    liDetail.textContent = detail;
    ul.appendChild(liDetail);
  });

  li.appendChild(ul);
  ol.appendChild(li);
});

container.innerHTML = ""; 
container.appendChild(ol);



// ===================Compétences techniques==================================
document.getElementById("Alioune_titre_CT").textContent = Alioune_competences_techniques.titre;
const ul_CT = document.createElement("ul"); 

Alioune_competences_techniques.liste_competence.forEach(comp => {
    const li = document.createElement("li"); 
    li.textContent = comp;                   
    ul_CT.appendChild(li);                      
});

document.getElementById("Alioune_liste_CT").appendChild(ul_CT);

// ========================Langues=============================================
document.getElementById("Alioune_titre_langue").textContent = Alioune_langues.titre;
const ul_langue = document.createElement("ul"); 

Alioune_langues.liste_langues.forEach(lang => {
    const li = document.createElement("li"); 
    li.textContent = lang;                   
    ul_langue.appendChild(li);                      
});

document.getElementById("Alioune_liste_langue").appendChild(ul_langue);


//=============================Etudes======================================
document.getElementById("Alioune_titre_etude").textContent = Alioune_etudes.titre;
const ul_etude = document.createElement("ul");
Alioune_etudes.liste.forEach(e => {
    const li = document.createElement("li");
    li.innerHTML = `
        <strong>${e.diplome}</strong><br>
        ${e.etablissement}<br>
        ${e.periode}
    `;
    ul_etude.appendChild(li);
});
document.getElementById("Alioune_liste_etude").appendChild(ul_etude);


//===================footer==================================================

document.getElementById("Alioune_email").textContent= Alioune.email;
document.getElementById("Alioune_telephone").textContent= Alioune.telephone;

