// # Exercice 21
// - Demander à l’utilisateur le nombre de chiffre que comportera un tableau
// - Le programme générera aléatoirement des nombres entre 1 et 50 pour remplir les cellules de ce tableau.
// - Enfin votre programme vérifiera s’ils sont pair ou impair puis les affichera sous cette forme :
// ```
// Le nombre 30 est   pair.
// Le nombre 31 est impair.
// Le nombre  5 est impair.
// Le nombre 12 est   pair.
// ```

let nbChiffre = parseInt(prompt("combien de chiffre voulez vous que le tableau comporte ?"));

let tab = []


for (let i = 0; i < nbChiffre; i++) {
    let valeurTableau = Math.round(Math.random() * 50)
    tab.push(valeurTableau);
}
console.table(tab)


for (let i = 0; i < tab.length; i++) {
    let nombre = tab[i];
    if (nombre % 2 ===0) {
        console.log(+nombre+ " est pair");
    } else {
        console.log(+nombre+" est impair");
    }
}
