// # Exercice 22

//   - Via l'utilisation d'une variable de type <b>tableau</b>, vous devrez réaliser un logiciel permettant à l'utilisateur d'entrer une <b>série de notes</b>, dont le nombre possible à entrer sera soit (au choix de l'utilisateur) :
//     - saisie avant la saisie de notes
//     - permissif et pourra aller jusqu'à entrer une note négative qui stoppera la saisie des notes.
//   - Une fois la <b>saisie des notes terminée</b>, l'utilisateur aura à sa disposition un <b>affichage</b> lui permettant d'avoir la <b>note max</b>, la <b>note min</b> ainsi que la <b>moyenne</b> (possible de faire un menu pour choisir)
//   - Pour les menus à choix, l'utilisation d'un switch est conseillée

// Exemples :

// ```
// Choisir un mode de saisie:
// 1 : Saisie fixe
// 2 : Saisie jusqu'à note négative 

let note =[]
let choix = Number(prompt("Faites un choix:  1 : saisie fixe ou 2 : saisie nagative possible"))

switch (choix) {
    case "1":
        alert("Vous avez choisi la saisie fixe")
        saisieFixe()
        break;

    case "2" :
        alert("Vous avez choisi la saisie negative possible")    
        break;
}


// Votre choix : 1

// Combien de notes ? 5

function saisieFixe () {
    let tab = []
    let nbNotes = Number(prompt("Combien de notes voulez-vous saisir ?"))

if(nbNotes >0) {
    for (let i=0; i < nbNotes; i++) {
        let saisie= Number(prompt("Veuillez saisir une note"))
        tab.push(saisie)
    }
}else prompt("Saisie incorrecte, combien de notes voulez vous saisir")
}




// Début de Saisie !
// Veuillez entrer une note entre 0 et 20 compris : 12
// Veuillez entrer une note entre 0 et 20 compris : 0
// Veuillez entrer une note entre 0 et 20 compris : 20
// Veuillez entrer une note entre 0 et 20 compris : 300
// ERREUR, veuillez réessayer : 10
// Veuillez entrer une note entre 0 et 20 compris : 13
// Fin de Saisie !

// La note maximale est de 20.00 / 20
// La note minimale est de 0.00 / 20
// La moyenne est de 11.0 / 20
// ```


// ```
// Choisir un mode de saisie:
// 1 : Saisie fixe
// 2 : Saisie jusqu'à note négative 

// Votre choix : 2

// Veuillez entrer une note entre 0 et 20 compris : 12
// Veuillez entrer une note entre 0 et 20 compris : 0
// Veuillez entrer une note entre 0 et 20 compris : 20
// Veuillez entrer une note entre 0 et 20 compris : 300
// ERREUR, veuillez réessayer : 10
// Veuillez entrer une note entre 0 et 20 compris : 13
// Veuillez entrer une note entre 0 et 20 compris : -1
// Fin de Saisie !

// La note maximale est de 20.00 / 20
// La note minimale est de 0.00 / 20
// La moyenne est de 11.0 / 20
// ```
