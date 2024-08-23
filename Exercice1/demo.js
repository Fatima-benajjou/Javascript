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

//Fonction

function sayHello() {
    alert("Hello World")
}

sayHello(); // Appel la fonction
console.log(sayHello) //affiche les propriété de la fonction sayhello
console.log(sayHello()) //appel la fonction et affiche son retour

// Parametre et arguments

function sayHelloToSomeone (name) {
    alert("Bonjour " +name)
}

sayHelloToSomeone("Fatima");
let myName="tata";
sayHelloToSomeone(myName);

//Parametre par défaut

function sayMessage(from, message="aucun texte") { // le parametre message devient facultatif il a une valeur par defaut
    alert(`${from}: ${message}`)
}
sayMessage("Tata","bonjour !!")
sayMessage("tataaaa") //tataaaa : aucun texte

//retourne un resultat

function premiereLettre(mot){
    return mot.charAt(0) //CharAt vient cherche la ènieme lettre du mot, ici la 1er lettre à l'index 0

}

console.log(premiereLettre("Bonjour"));


function sum(a,b) {
    return a+b;
}
console.log(sum(1,2));
console.log(sum("du ","texte")) ;// il va venir concatener

// fonction anonyme, fléchées (ou lamba, delegates)

let Hello = function () {
    alert ("hello !!!")
}

Hello();

// fonction fléchée

let sayHi= () =>alert("hello from sayHi!!!");

sayHi();

const sayHi2 =(name) => {
    let message = "Bonjour" +name;
    return message;
}

console.log(sayHi2("Fatima"))

//CallBack

 function salutations(name) {
    alert("Bonjour " +name)
 }

 function processeUserInput(callBack) {
    let name = prompt("Entrez votre nom ");
    callBack(name) ;
 }

 processeUserInput(salutations);
 processeUserInput(alert);
 processeUserInput(console.log);

 // kes tableaux

 //let tab = [];
 //let tab = Array();

 let tab = ["Pomme","Banane",true,1,0.5,false]
 console.log(tab)
 console.table(tab)

 tab.pop() // retire le dernier élément du tabkeau
 console.table(tab)

 tab.shift() //retire le 1er élément
 console.table(tab)

 //remplacer l'élement à l'indice 2
 tab[2]=false //remplace l'élement à lindice 2 par la valeur false
 console.table(tab)

 //ajouter un element à un indice non existant
 tab[15] ="Fraise"
 console.table(tab)

 console.table("l'element à l'indice 10 est" +tab[10]) //va nous afficher la valeur undefinied

 console.table(tab.indexOf("Banane")) //premier trouvé qui correspond à banane
 console.table(tab.lastIndexOf("Banane")) // si il a plusieurs fois la valeur banane, il prendra la derniere du tableau


 //découper un tableau

console.table(tab.splice(2,5)) //affiche ce qui va être supprimer à partir de l'élement 2 jusqu'au 5 suivant
console.table(tab) //affiche le resultat une fois les élément supprimer par le slice

//supprimer une valeur 
delete tab[1]
console.table(tab)

// re-indexer le tableau, filtrer
console.table(tab.filter(val => val)) // ne va garder que les lignes du tableau qui contienne une valeur

let tab1 =["Pomme", "Banane",42, true, false,0.5,"Banane"]
//copier un tableau
let tab2 = [...tab1] //2 tableaux distincts

let tab3 = tab1; // attention içi c'est le même tableau dans 2 variables différente

tab1.push("toto")

console.log("tab1 : ")
console.table(tab1)
console.log("tab2 : ")
console.table(tab2)
console.log("tab3 : ")
console.table(tab3)

tab1 = ["pomme", "orange","banane","ananas"]

//forEach
tab1.forEach((item,index) => console.log(+item+ " " +index))

//map
let newTab = tab1.map(val => val.toUpperCase());
console.table(newTab)


// création d'objets

const monObjet ={
    firstName: "John",
    lastName: "Doe"
};

//Parcourir un objet

for (const key in monObjet) {
    console.log(+key+ " : " +monObjet[key])
}

const maCle = prompt("Quelle clé ?")
console.log(monObjet.maCle) // Attention içi c'est non dynamique, la clé doit etre explicitement codée
console.log(monObjet[maCle]) // içi c'est dynamique, il recuperera le nom de la clé saisie par l'utilisateur dans le prompt

let otherObj ={
    a:1,
    b:2,
    c:3,
}

console.log(otherObj)
