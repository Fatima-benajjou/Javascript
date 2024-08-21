// # Exercice 20

// - Vous devez créer un tableau qui contiendra 10 valeurs.
// - Faites en sorte que l’utilisateur puisse saisir les 10 valeurs afin de les stocker dans le tableau.
// - Enfin procédez à l’itération de son contenu afin de l’afficher dans la console
// - Effectuer l’affichage des résultats dans la console comme indiqué dans l'exemple ci-dessous.
// - Pour aller plus loin créez une fonction permettant de le remplir automatiquement avec des nombres aléatoires
  
// ```
// Affichage des valeurs saisies :
// 1
//     4
//         6
//             23
//                 9
//                     12
//                         33
//                             45
//                                 8
//                                     30
// ```

let tab =[];

for (let i =0; i< 10; i++) {
    tab[i] =parseInt(prompt("veuillez saisir une valeur")); // saisie utilsiateur
    tab[i] = (Math.random() *100).toFixed(0) // aléatoire
    
}

let space=" "

for (let i = 0; i< tab.length; i++){
    console.log(space.repeat(i)+ tab[i])
}


