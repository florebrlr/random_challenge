//alert("kakou kakou register ok");
// let visible = false;
// let conformiteMdp = 0;
// let pointMinuscule = 0;
// let pointMajuscule = 0;
// let pointChiffre = 0;
// let pointNbCaracteres = 0;

// controleMotDePasse();

// function controleMotDePasse() {
//     //je récupère la valeur de password
//     let password = document.getElementById("pswd").value;
// 	//appel des méthodes sucessives pour vérifier le mot de passe
//     let presenceMinuscule = verifMinuscule(password);
//     let presenceMajuscule =verifMajuscule(password);
//     let presenceChiffre =verifChiffre(password);
//     let nbCaract =verifNbCaracteres(password);

//     if (presenceMajuscule && presenceMinuscule && presenceChiffre && nbCaract) {
//         document.getElementById("register").disabled = false;
//     } else {
//         document.getElementById("register").disabled = true;
//     }
// }

// function verifMinuscule(password) {
//     let presenceMinuscule = false;

//     if (password.match(/.*[a-z].*/))
//         presenceMinuscule = true;
	
// 	//si on trouve une minuscule on passe la consigne minuscule en vert
//     if (presenceMinuscule) {
//         colorTextGreen('minuscule');
//     } else {
//         colorTextRed('minuscule');
//     }

//     return presenceMinuscule;
// }

// //même principe que pour la verifMinuscule
// function verifMajuscule(password) {
//     let presenceMajuscule = false;

//     if (password.match(/.*[A-Z].*/)) {
//         presenceMajuscule = true;
//     } 

//     if (presenceMajuscule) {
//         colorTextGreen('majuscule');
//     } else {
//         colorTextRed('majuscule');
//     }
//     return presenceMajuscule;
// }

// function verifChiffre(password) {
//     let presenceChiffre = false;

//     if (password.match(/.*\d.*/)) {
//         presenceChiffre = true;
//     } 

//     if (presenceChiffre) {
//         colorTextGreen('chiffre');
//     } else {
//         colorTextRed('chiffre');
//     }
//     return presenceChiffre;
// }

// function verifNbCaracteres(password) {
//     let nbCaract = false;

// 	//si le mot de passe est vidé je remets les consignes en rouge
//     if (password.length == 0) {
//         colorTextRed('minuscule');
//         colorTextRed('majuscule');
//         colorTextRed('chiffre');
//         colorTextRed('nbCaractc');
//     }

// 	//si le mot de passe fait + de 8 lettres je valide la consigne de longueur
//     if (password.length >= 8) {
//         colorTextGreen('nbCaracts');
//         nbCaract = true;
//     } else {
//         colorTextRed('nbCaract');
//         nbCaract = false;
//     }

//     if (nbCaract) {
//         pointNbCaracteres = 1;
//     } else {
//         pointNbCaracteres = 0;
//     }

//     return nbCaract;
// }

// fonction controler que les  pswd soient identiques
document.getElementById("register-btn-register").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire

    let pswd = document.getElementById("pswd").value;
    let confirmedPswd = document.getElementById("confirmed-pswd").value;
    
    function comparepswd() {
        if (pswd === confirmedPswd) {
            alert("Les mots de passe correspondent !");
        } else {
            alert("Les mots de passe ne correspondent pas !");
        }
    }
});