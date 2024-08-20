// Exercice 06
// Écrire un programme qui permet de tester si un profil est valable pour une candidature ou non selon ces trois critères :
// L'âge minimum pour le poste est 30 ans
// Le salaire maximum possible est 40 000 euros.
// Le nombre d'années d'expérience minimum est de 5 ans.
// On affichera différents messages pour chaque condition non respectée.
// Il est possible de réaliser cet exercice avec une seule structure conditionnelle ne comportant qu'une condition par clause (pas de and/or)

let age = Number(prompt("Entrez votre age"))

let exp = Number(prompt("Entrez vos nombre d'années d'expérience"))

let salary=Number(prompt("Quel salaire souhaitez vous ?"))

if(isNaN(age) || isNaN(exp) ||isNaN(salary)) {
    alert("Votre saisie est incrorrecte, entrez des valeurs numériques")
}

if (age<30) {
    alert("Vous n'etes pas éligible pour ce poste, vous avez moins de 30ans")
}else if (exp <5){
    alert ("Vous n'avez pas assez d'années d'expérience")
}else if (salary>40000) {
    alert("Vos prétentions salariales sont trop élévés pour ce poste")
}else alert ("Votre profil est eligible pour une candidature")