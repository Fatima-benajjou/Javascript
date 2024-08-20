let nb1, nb2, resultat;
nb1=prompt ("Entrez un nombre");
nb2=prompt ("Entrez un 2eme nombre");
resultat= parseInt(nb1)+parseInt(nb2);

console.log(+resultat);


let rayon, volume, hauteur;

const PI = Math.PI;
rayon=prompt("saisissez le rayon");
hauteur=prompt("saississez la hauteur");
volume = (PI*rayon*rayon*hauteur)/3;
console.log("le volume de ce cone est de "+volume.toFixed(2));



let age=prompt("Saisissez votre age");
console.log(age >= 18);


