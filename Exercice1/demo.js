// un commentaire sur une ligne

/*
Commentaire
sur plusieurs
lignes
*/

// Interaction :

//alert("Bonjour M2I")

console.log("Coucou !!!!")
console.error("Une erreur !!!")
console.info("Attention !!!")
console.warn("Un warning !!")

// Variables

// var : (ES5)

var maVariable = "Salut le groupe !!!";

console.log(typeof maVariable)

maVariable = 42;

console.log(maVariable)

console.log(typeof maVariable)

// const (ES6)

const PI = 3.14;

console.log(PI)

//PI = 3.141;

// let (ES6)

let maVariableLet; // declaration

console.log(maVariableLet) // undefined non défini

console.log("type de ma variable maVariableLet : "+ typeof maVariableLet) 

maVariableLet = "Salut" // Assignation

console.log("type de ma variable maVariableLet : "+ typeof maVariableLet) 

let boolean = true // boolean
boolean = false
console.log("type de ma variable boolean : "+ typeof boolean) 

let maVariableNull = null
console.log("type de ma variable maVariableNull : "+ typeof maVariableNull) 

// Interaction
// prompt

let maVar;

maVar = prompt("Taper une valeur :")

console.clear() // nettoyage de la console
console.log(maVar)
console.log("type de ma variable maVar: "+ typeof maVar) 


// Les operateurs arithmetiques


let nb1 = 10,nb2 = 65,resultat;

// L'addition

resultat = nb1 + nb2
console.log(nb1+" + "+nb2+" = "+resultat)
console.log(`${nb1} + ${nb2} = ${resultat}`)


// Soustraction

resultat = nb1 - nb2
console.log(nb1+" - "+nb2+" = "+resultat)
console.log(`${nb1} - ${nb2} = ${resultat}`)

// Multiplacation

resultat = nb1 * nb2
console.log(nb1+" x "+nb2+" = "+resultat)
console.log(`${nb1} x ${nb2} = ${resultat}`)


// Division

resultat = nb1 / nb2
console.log(nb1+" / "+nb2+" = "+resultat)
console.log(`${nb1} / ${nb2} = ${resultat}`)

// Modulo

resultat = nb1 % nb2
console.log(nb1+" % "+nb2+" = "+resultat)
console.log(`${nb1} % ${nb2} = ${resultat}`)

// Puissance 

resultat = nb1 ** nb2
console.log(nb1+" puissance "+nb2+" = "+resultat)
console.log(`${nb1} pussance ${nb2} = ${resultat}`)

// Les operateurs d'incrementation et combinés


// Incrementation
nb1 = nb1 + 2 // incrementation classique
// operateur combiné
nb1 += 2;
// operateur d'incrementation
console.log(nb1++) // 14
console.log("nb1 vaut : "+nb1) // 15


// Decrementation
nb1 = nb1 - 2 // Decrementation classique
// operateur combiné
nb1 -= 2;
// operateur d'incrementation
console.log(nb1--) 
console.log("nb1 vaut : "+nb1) 


// Operateurs booléens

// operateur de comparaison 

// Egalité

console.log("Egalite 3 == 3 ", 3 == 3); // true
console.log("Egalite '3' == 3 ", "3" == 3); // true
console.log("Egalite 3 == 4 ", 3 == 4); // false

// Inegalité
console.log("Egalite 3 != 3 ", 3 != 3); // false
console.log("Egalite 3 != 4 ", 3 != 4); // true

// Egalité stricte
console.log("Egalite 3 === 3 ", 3 === 3); // true
console.log("Egalite '3' === 3 ", "3" === 3); // false


// operateurs logique

// ET
console.log("Vrai ET Vrai ",true && true) // true
console.log("Vrai ET Faux ",true && false) // false
console.log("Faux ET Faux ",false && false) // false

// OU
console.log("Vrai OU Vrai ",true || true) // true
console.log("Vrai OU Faux ",true || false) // true
console.log("Faux OU Faux ",false || false) // false

// NON
console.log("NON Vrai",!true) //false
console.log("NON False",!false) // true