// <!-- # Exercice 12

//   - Réaliser un programme permettant à l'utilisateur d'entrer comme données :
//     - Une population initiale.
//     - Un taux d'accroissement
//     - Une population visée.
//   - Ce programme permettra à l'utilisateur de savoir en combien de temps la population visée sera atteinte.

// Exemple : 
// ```
// Saisir la population : 40000
// Saisir le taux (%) : 2
// Saisir la population visée : 80000
// La population dépasse la population visée à l'année 36 (81595 habitants)
// ``` -->



let populationInitiale = parseInt(prompt("Entrez la population initiale :"));
let tauxAccroissement = parseInt(prompt("Entrez le taux d'accroissement (%) :")) / 100;
let populationVisee = parseInt(prompt("Entrez la population visée :"));

let nbr_annee = 0;


while (populationInitiale < populationVisee) {

    populationInitiale += populationInitiale * tauxAccroissement;
  
    nbr_annee++;
}

console.log("La population visée sera atteinte en " + nbr_annee + " années.");
alert("La population visée sera atteinte en " + nbr_annee + " années.");
