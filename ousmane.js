
  let icon = document.getElementById("modeIcon");
let toggleBtn = document.getElementById("toggleBtn");
  let bodyOusmane = document.querySelector(".body_ousmane");
  

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

/*   // 🔹 Expériences professionnelles
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
  }); */

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

