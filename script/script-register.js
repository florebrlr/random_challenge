//alert("kakou kakou register ok");
//appel la fonction init une fois la page chargée
window.onload = init;

let visible = false;
let conformitepassword = 0;
let pointMinuscule = 0;
let pointMajuscule = 0;
let pointChiffre = 0;
let pointNbCaracteres = 0;

/**
 * fonction d'initialisation
 * Abonnements des events
 */
function init() {
    document.getElementById("btn-visibilite-password").addEventListener("click", () => {
        visibilite();
    });
    document.getElementById("passeword").addEventListener('input', () => {
        controleMotDePasse();
    })
}


/**
 * Fonction gérant la visibilité du mot de passe
 */
function visibilite() {
    let oeil = document.getElementById("open-eye");
	//visible est une variable booléenne
	//si ce n'est pas visible alors au clic je viens modifier l'image
    if (!visible) {
        visible = true;
        oeil.setAttribute('src', "images/eye-open.png"); //changer pour icone oeil ouvert
        oeil.setAttribute('alt', "Icône oeil ouvert");
		//je modifie également le type de l'input pour afficher le mot de passe en clair
        document.getElementById("password").setAttribute('type', 'text');
    } else {
        visible = false;
        oeil.setAttribute('src', "images/eye-close.png"); //changer pour icone oeil fermé
        oeil.setAttribute('alt', "Icône oeil fermé");
        document.getElementById("passeword").setAttribute('type', 'password');
    }
}


/**
 * Fonction centrale du contrôle du mot de passe
 */
function controleMotDePasse() {
    let password = document.getElementById("password").value;

	//appel des méthodes sucessives pour vérifier le mot de passe
    let presenceMinuscule = verifMinuscule(password);

    let presenceMajuscule =verifMajuscule(password);

    let presenceChiffre =verifChiffre(password);

    let nbCaract =verifNbCaracteres(password);

    if (presenceMajuscule && presenceMinuscule && presenceChiffre && nbCaract) {
        document.getElementById("register").disabled = false;
    } else {
        document.getElementById("register").disabled = true;
    }
}


function verifMinuscule(password) {
    let presenceMinuscule = false;

    if (password.match(/.*[a-z].*/))
        presenceMinuscule = true;
	
	//si on trouve une minuscule on passe la consigne minuscule en vert
    if (presenceMinuscule) {
        colorTextGreen('minuscule');
    } else {
        colorTextRed('minuscule');
    }

    return presenceMinuscule;
}

//même principe que pour la verifMinuscule
function verifMajuscule(password) {
    let presenceMajuscule = false;

    if (password.match(/.*[A-Z].*/)) {
        presenceMajuscule = true;
    } 

    if (presenceMajuscule) {
        colorTextGreen('majuscule');
    } else {
        colorTextRed('majuscule');
    }
    return presenceMajuscule;
}

function verifChiffre(password) {
    let presenceChiffre = false;

    if (password.match(/.*\d.*/)) {
        presenceChiffre = true;
    } 

    if (presenceChiffre) {
        colorTextGreen('chiffre');
    } else {
        colorTextRed('chiffre');
    }
    return presenceChiffre;
}

function verifNbCaracteres(password) {
    let nbCaract = false;

	//si le mot de passe est vidé je remets les consignes en rouge
    if (password.length == 0) {
        colorTextRed('minuscule');
        colorTextRed('majuscule');
        colorTextRed('chiffre');
        colorTextRed('nbCaracteres');
    }

	//si le mot de passe fait + de 8 lettres je valide la consigne de longueur
    if (password.length >= 8) {
        colorTextGreen('nbCaracteres');
        nbCaract = true;
    } else {
        colorTextRed('nbCaracteres');
        nbCaract = false;
    }

    if (nbCaract) {
        pointNbCaracteres = 1;
    } else {
        pointNbCaracteres = 0;
    }

    return nbCaract;
}
