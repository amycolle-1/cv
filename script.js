


//===================Ousmane==================================================



  const toggleBtn = document.getElementById("toggleBtn");
  const bodyOusmane = document.querySelector(".body_ousmane");
    const icon = document.getElementById("modeIcon");

// Au clic → changer de mode
toggleBtn.addEventListener("click", () => {
  bodyOusmane.classList.toggle("dark");

  if (bodyOusmane.classList.contains("dark")) {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
    toggleBtn.setAttribute("title", "Mode sombre activé");
  } else {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
    toggleBtn.setAttribute("title", "Mode clair activé");
  }
});
  



const cvData = {
  informationsPersonnelles: {
    nom: "Ousmane FAYE",
    poste: "Développeur Full Stack",
    email: "ousmane.faye@gmail.com",
    telephone: "77-349-03-86",
    adresse: "Dakar, Yoff apecsy 1",
    linkedin: "https://www.linkedin.com/in/ousmane-faye-17a321251",
    photo: "image/profile.jpg"
  },

  experiencesProfessionnelles: [
    {
      periode: "07-2024 / 12-2024",
      poste: "Stagiaire Développeur Full Stack",
      entreprise: "Chambre de Commerce de Kaolack"
    },
    {
      periode: "09-2022 / 12-2022",
      poste: "Stagiaire Développeur Web",
      entreprise: "Sonatel",
      projets: [
        "Plateforme de gestion des demandes et signalisations (Gsecu)",
        "Plateforme de reversements pour les partenaires (OMS)"
      ]
    }
  ],

  experiencesTechniques: [
    "Certificat en Data Scientist - 54 Bridges (2024)",
    "Master 1 en Systèmes d'Information (2023-2024)",
    "Baccalauréat Série G - Lycée technique de Kaolack (2017-2018)"
  ],

  competences: [
    "Laravel", "Angular", "NodeJs", "SQL", "Merise", "PHP", "HTML/CSS", "JavaScript",
    "XML", "Bootstrap", "GitHub", "Linux", "Virtualisation", "Analyse de données",
    "Machine Learning", "Python", "Power BI"
  ],

  formations: [
    "Certificat en Data Scientist - 54 Bridges (2024)",
    "Master 1 en Systèmes d'Information (2023-2024)",
    "Licence en Développement et Administration d'Applications (2019-2023)",
    "Baccalauréat Série G - Lycée technique de Kaolack (2017-2018)"
  ],

  certificats: [
    "Certificat en Data Scientist - 54 Bridges (2024)",
    "Certificat en Marketing Digital"
  ],

  langues: ["Français", "Anglais", "Wolof"]
};


// 2️⃣ Fonction pour injecter les données dans le HTML
function afficherCV() {
  // 🔹 Informations personnelles
  const info = cvData.informationsPersonnelles;
  document.getElementById("profilePhoto").src = info.photo;
  document.getElementById("personalInfo").innerHTML = `
    <div>${info.nom}</div>
    <div>${info.poste}</div>
    <div><i class="fas fa-envelope"></i> ${info.email}</div>
    <div><i class="fas fa-phone"></i> ${info.telephone}</div>
    <div><i class="fas fa-map-marker-alt"></i> ${info.adresse}</div>
    <div><i class="fab fa-linkedin"></i> <a href="${info.linkedin}" target="_blank">${info.linkedin}</a></div>
  `;

  // 🔹 Expériences professionnelles
  const expPro = document.getElementById("experiencesPro");
  expPro.innerHTML = `<h2><i class="fas fa-briefcase"></i> Expériences Professionnelles</h2><ul></ul>`;
  const ulPro = expPro.querySelector("ul");
  cvData.experiencesProfessionnelles.forEach(exp => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${exp.periode}</strong> : ${exp.poste} chez ${exp.entreprise}`;
    ulPro.appendChild(li);
    if (exp.projets) {
      exp.projets.forEach(proj => {
        const subLi = document.createElement("li");
        subLi.textContent = `→ ${proj}`;
        ulPro.appendChild(subLi);
      });
    }
  });

  // 🔹 Expériences techniques
  const tech = document.getElementById("experiencesTech");
  tech.innerHTML = `<h2><i class="fas fa-cogs"></i> Expériences Techniques</h2><ul></ul>`;
  cvData.experiencesTechniques.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    tech.querySelector("ul").appendChild(li);
  });

  // 🔹 Compétences
  const comp = document.getElementById("competences");
  comp.innerHTML = `<h2><i class="fas fa-lightbulb"></i> Compétences</h2><ul></ul>`;
  cvData.competences.forEach(skill => {
    const li = document.createElement("li");
    li.textContent = skill;
    comp.querySelector("ul").appendChild(li);
  });

  // 🔹 Formations
  const form = document.getElementById("formations");
  form.innerHTML = `<h2><i class="fas fa-graduation-cap"></i> Formations</h2><ul></ul>`;
  cvData.formations.forEach(f => {
    const li = document.createElement("li");
    li.textContent = f;
    form.querySelector("ul").appendChild(li);
  });

  // 🔹 Certificats
  const cert = document.getElementById("certificats");
  cert.innerHTML = `<h2><i class="fas fa-certificate"></i> Certificats</h2><ul></ul>`;
  cvData.certificats.forEach(c => {
    const li = document.createElement("li");
    li.textContent = c;
    cert.querySelector("ul").appendChild(li);
  });

  // 🔹 Langues
  const lang = document.getElementById("langues");
  lang.innerHTML = `<h2><i class="fas fa-language"></i> Langues</h2><ul></ul>`;
  cvData.langues.forEach(l => {
    const li = document.createElement("li");
    li.textContent = l;
    lang.querySelector("ul").appendChild(li);
  });

  // 🔹 Footer
  document.getElementById("footerInfo").innerHTML = `
    <div>📧 ${info.email}</div>
    <div>📞 ${info.telephone}</div>
  `;
}

// Appel de la fonction
afficherCV();

//=========================================================
let body = document.querySelector(".Sadia");
let image_mode = document.getElementById("image_mode");
let les_informations = document.querySelector(".les_informations");

image_mode.addEventListener("click", () => {
    body.classList.toggle("dark_mode");

    les_informations.classList.toggle("dark_mode");

    if(body.classList.contains("dark_mode")) {
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

