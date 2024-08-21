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




function menu() {
    let notes = [];
    let modeSaisie = parseInt(prompt("Choisir un mode de saisie:\n1 : Saisie fixe\n2 : Saisie negative possible"));

    switch (modeSaisie) {
        case 1:
          
            let nbDeNotes = parseInt(prompt("Combien de notes voulez-vous saisir ?"));
            console.log("Entrez les notes");
            for (let i = 0; i < nbDeNote; i++) {
                let note = recupNote();
                notes.push(note);
            }
            break;
        case 2:
          
            console.log("Entrez les notes");
            while (true) {
                let note = parseFloat(prompt("Veuillez entrer une note entre 0 et 20 compris :"));
                if (note < 0) {
                    break;
                } else if (note >= 0 && note <= 20) {
                    notes.push(note);
                } else {
                    console.log("saisie incorrecte, recommencez:");
                }
            }
            break;
        default:
            console.log("Choix non valide !");
            return;
    }
}


function recupNote() {
    let note;
    do {
        note = parseFloat(prompt("Veuillez entrer une note entre 0 et 20 compris :"));
        if (note < 0 || note > 20) {
            console.log("Veuillez saisir une note compris entre 0 et 20, recommencez");
        }
    } while (note < 0 || note > 20);
    return note;
}

menu();

