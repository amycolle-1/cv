let body_Amy = document.querySelector(".body_Amy");
let dark = document.getElementById("icone_mode");

dark.addEventListener("click", () => {
    body_Amy .classList.toggle("mode");

    if (body_Amy .classList.contains("mode")) {
        dark.src = "icon/light.svg";  // icône clair
        dark.alt = "mode clair";
    } else {
        dark.src = "icon/dark.svg";   // icône sombre
        dark.alt = "mode sombre";
    }
});


const Amy = {
Prenom:"Amy colle seck",
profession:"Etudiante",
adresse: "Keur Massar",
contact:"77.293.77.64", 
}

const Amy_experience_professionelle = [
    {
        titre: "2021-2024 : Multi service",
        detail: [
            "Chargée d'imprimer et photocopier des documents",
            "Transfert d'argent via Wave, Orange Money et Free",
        ]
    },
    {
        titre: "2023 : Infographie",
        detail: [
            "Projet UX design avec Figma : créer un site de vente",
            "Réaliser des projets logo, flyers, cartes de visite etc."
        ]
    }
];

// cibler le conteneur HTML
const experienceDiv = document.querySelector("#experience");

// générer le contenu
Amy_experience_professionelle.forEach(exp => {
    // créer un titre
    const h3 = document.createElement("h3");
    h3.textContent = exp.titre;
    experienceDiv.appendChild(h3);

    // créer une liste
    const ul = document.createElement("ul");
    exp.detail.forEach(tache => {
        const li = document.createElement("li");
        li.textContent = tache;
        ul.appendChild(li);
    });

    // ajouter la liste dans le conteneur
    experienceDiv.appendChild(ul);
});

    const Amy_competence_technique = [
    {
        titre: "Compétences",
        detail: [
            "HTML, CSS",
            "Photoshop",
            "Illustrator",
        ]
    }
];

const Amy_competence_linguistique = [
    {
        liste: [
            "Français : Parlé",
            "Anglais : Moyen",
            "Espagnol : Moyen",
        ]
    }
];

// Injection compétences techniques
const techniqueUl = document.querySelector("#competence-technique");
Amy_competence_technique.forEach(comp => {
    comp.detail.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        techniqueUl.appendChild(li);
    });
});

// Injection compétences linguistiques
const linguistiqueUl = document.querySelector("#competence-linguistique");
Amy_competence_linguistique.forEach(comp => {
    comp.liste.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        linguistiqueUl.appendChild(li);
    });
});

document.querySelector("#Amy_prenom").textContent = Amy.Prenom;
document.querySelector("#Amy_adresse").textContent = Amy.adresse;
document.querySelector("#Amy_contact").textContent = Amy.contact;
document.querySelector("#Amy_profession").textContent = Amy.profession;

document.getElementById("ousmane").textContent= Amy.Prenom;