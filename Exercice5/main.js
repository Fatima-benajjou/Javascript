// Exercice 05
// Écrire un programme qui prend en entrée une température temp et qui renvoie l'état de l'eau à cette température c'est-à-dire "SOLIDE" , "LIQUIDE" ou "GAZEUX".

// On prendra comme conditions les suivantes : - Si la température est strictement négatives alors l'eau est à l'état solide. - Si la température est entre 0 et 100 (compris) l'eau est à l'état liquide. - Si la température est strictement supérieur à 100 l'eau est à l'état gazeux.

// Il est possible de réaliser cet exercice sans if imbriqué grâce au else if

// If est aussi possible de le réaliser avec uniquement des ternaires

let temp = Number(prompt("entrez une température"))

if (temp < 0) {
    alert("l'eau est à l'état solide")
} else if (temp >0 && temp<=100) {
    alert("l'eau est à l'état liquide ")
} else if (temp>100) { 
    alert("l'eau est à l'état gazeux")
} else alert ("saisie incorrecte, entrez un chiffre")
