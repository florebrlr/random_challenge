/**********************************************************************************************************************************************/
/* CREATION DE MES DONNES */
/**********************************************************************************************************************************************/

/* création du style de construction = tableau */
let allStyles = [
  "victorien",
  "campagne",
  "New Empire",
  "cottage",
  "mid century",
  "moderne",
  "maison de sorcière",
  "maison de loup garou",
  "maison de vampire",
  "appartement",
  "terrain communautaire",
  "boulangerie",
  "café",
  "restaurant",
  "musée",
  "karaoké",
  "magasin",
  "cinéma",
];
/* création des couleurs = tableau */
let allColors = ["rouge", "orange", "rose", "jaune", "vert", "bleu", "violet", "gris", "noir", "blanc", "marron clair", "marron foncé"];
/* création du lot = tableau */
let allLots = ["20x15", "20x20", "30x20", "30x30", "30x40", "40x40", "50x50", "64x64", "40x20", "50x40", "64x64"];

/* création des packs = tableau */
    //les packs sont cochés par défaut et ajouter au tableau packsPossedes
let packsPossedes = [];
let checkedpacks = document.querySelectorAll("input[type=checkbox]");
//console.log(checkedpacks);
    // boucle for
for (let box of checkedpacks) {
    // si la boite est cochée
    if (box.checked) {
        // Ajouter l'élément au tableau avec son attribut name
        packsPossedes.push(box.name);
    }
}

/**********************************************************************************************************************************************/
/* AFFICHAGE DU RANDOM CHALLENGE */
/**********************************************************************************************************************************************/

/* Création du boutton generer */
let buttonGenerer = document.querySelector("#btn-generer");
let generersection = document.querySelector("#generer-section");
let packspossedessection = document.querySelector("#packspossedes-section");

/* cacher section "generer-section" avant de cliquer sur le btn */
    //fonction : je prends toutes les sections et je boucle sur toutes celles
    //qui ne sont pas celle de affichagechallegne-section
function hideAllSections() {
    document.querySelectorAll("section").forEach((section) => {
    if (section.id != "affichage-challenge-section")
      section.style.display = "none";
  });
}
    //fonction pour afficher la section du random challenge
function displaySection() {
    document.getElementById("generer-section").style.display = "block";
    document.getElementById("btn-return").style.display = "inline-block";
}
    //j'ajoute un addEventListener
buttonGenerer.addEventListener("click", () => {
    //je cache la section packspossedessection
    hideAllSections(packspossedessection);
    // j'affiche tout le reste
    displaySection();
    //je change le texte du btn pour un NOUVEAU challenge
    buttonGenerer.textContent = "Générer un nouveau challenge";

/* affichage de la div resultats */

    //je récupère touts les ID pour créer la div resultalt
    let resultatStyle = document.getElementById("resultat-style");
    let resultatLot = document.getElementById("resultat-lot");
    let resultatPack1 = document.getElementById("resultat-pack1");
    let resultatPack2 = document.getElementById("resultat-pack2");
    let resultatPack3 = document.getElementById("resultat-pack3");
    let resultatColor = document.getElementById("resultat-color");
    let resultatColor1 = document.getElementById("resultat-color1");
    let resultatPiece = document.getElementById("resultat-piece");
    let resultatPersonne = document.getElementById("resultat-personne");
    let resultatBudget = document.getElementById("resultat-budget");

    /* récupération du nb de packs pour le challenge (1/2/3) */
    let select = document.getElementById("nb-pack").value;
    //console.log(select);

    /* récupération check si options supplémentaires */
    let moreOption = document.getElementById("input[type=checkbox]");
    /* Création du style de construction*/
    let indexStyle = Math.floor(Math.random() * allStyles.length);
    let randomStyle = allStyles[indexStyle];
    // console.log("Style de maison: ", randomStyle);

    /* Création du lot*/
    let indexLot = Math.floor(Math.random() * allLots.length);
    let randomLot = allLots[indexLot];
    // console.log("Sur un lot de: ", randomLot);

    /* Création des couleurs à utiliser*/
    let indexColor = Math.floor(Math.random() * allColors.length);
    let indexColor1 = Math.floor(Math.random() * allColors.length);
    let randomColor = allColors[indexColor];
    let randomColor1 = allColors[indexColor1];
    // console.log("Couleurs: ", randomColor, randomColor1);

    /* Création du nb pièce : entre 2 et 15*/
    let randomPiece = Math.floor(2 + 13 * Math.random());
    // console.log("Nb pièces: ", randomPiece);

    /* Création  du nb personnes : entre 1 et 8*/
    let randomPersonne = Math.floor(1 + 7 * Math.random());
    // console.log("Nb personne(s): ", randomPersonne);

    /* Création du budget entre: entre 1000 et 10 000 000*/
    let randomBudget = Math.floor(1000 + (10000000 - 1000) * Math.random());
    // console.log("Budget: ", randomBudget);

    /* affichage des résultats (hors randompack)*/
    resultatStyle.textContent = `${randomStyle}`;
    resultatLot.textContent = `${randomLot}`;
    resultatColor.textContent = `${randomColor}`;
    resultatColor1.textContent = `${randomColor1}`;
    resultatPiece.textContent = `${randomPiece}`;
    resultatPersonne.textContent = `${randomPersonne}`;
    resultatBudget.textContent = `${randomBudget}`;
    // console.log(packsPossedes);
    affichagedupack(select);
});
/* affichage des résultats randompack*/


    //fonction pour afficher le(s) résultat(s) randompack
function affichagedupack(option) {
    //si on sélectionne qu'1 pack :
    // if (option == "1") {
    //     resultatPack1.textContent = `${packsPossedes[Math.floor(Math.random() * (packsPossedes.length))]}`;
    // //si on sélectionne 2 packs :
    // } else if (option == "2") {
    //     resultatPack1.textContent = `${packsPossedes[Math.floor(Math.random() * (packsPossedes.length))]}`;
    //     // resultatPack2.textContent = ` ${packsPossedes[Math.floor(Math.random() * (packsPossedes.length -1))]}`;
    //     resultatPack2.innerHTML = `, <span class="simsfont"> ${packsPossedes[Math.floor(Math.random() * (packsPossedes.length))]}</span>`;
    //     //si on sélectionne 3 packs :
    // } else {
    //     resultatPack1.textContent = `${packsPossedes[Math.floor(Math.random() * (packsPossedes.length))]}`;
    //     resultatPack2.innerHTML = `, <span class="simsfont"> ${packsPossedes[Math.floor(Math.random() * (packsPossedes.length))]}</span>`;
    //     resultatPack3.innerHTML = `, <span class="simsfont"> ${packsPossedes[Math.floor(Math.random() * (packsPossedes.length))]}</span>`;
    // }

    //création resultaPack2
    let spanOption2 = document.createElement("span");
    spanOption2.className = "simsfont";

    let randomise = packsPossedes[Math.floor(Math.random() * packsPossedes.length)];

    switch (option) {
        case "3":
            //ajout resultatPack1
            resultatPack1.textContent = `${randomise}`;
    
            //ajout resultatPack2
            spanOption2.textContent = ` ${randomise}`;
            resultatPack2.textContent = ", "; // Texte fixe
            resultatPack2.appendChild(spanOption2);
    
            // Création et ajout resultatPack3
            let spanOption3 = document.createElement("span");
            spanOption3.className = "simsfont";
            spanOption3.textContent = ` ${randomise}`;
            resultatPack3.textContent = ", "; // Texte fixe
            resultatPack3.appendChild(spanOption3);
            break;
    
        case "2":
            //ajout resultatPack1
            resultatPack1.textContent = `${randomise}`;
            // Création et ajout resultatPack2
            spanOption2.textContent = ` ${randomise}`;
            resultatPack2.textContent = ", "; // Texte fixe
            resultatPack2.appendChild(spanOption2);
            break;
    
        default:
            resultatPack1.textContent = `${randomise}`;
            break;
    }
}


/*
    - créer un utilisateur te connecter et ensuite lorsque je me connecte sur une page il me rappel le dernier challenge que j'ai généré.  
    - créer les éléments à cocher de manière automatique à partir d'un tableau ou mieux d'un fichier e configuration
    - rendre tes page responsive, tu peux essayer bootstrap par exemple
    
    */
   
   
   /* 
       question "pour plus tard":
       j'ai fait une BDD avec la map du jeu => il y a le nom du lot et le monde dans le quel il se trouve.
   
       -Est ce que c'est possible de transformer la bdd en un json et use un fecth dessus?
       -ou est ce que c'est possible de relier la BDD directement et faire un fecth?
   
   */