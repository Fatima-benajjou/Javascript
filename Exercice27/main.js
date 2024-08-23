
class Voiture {
    constructor(marque, modele, vitesse) {
        this.marque = marque;
        this.modele = modele;
        this.vitesse = vitesse;
    }

    accelerer() {
        this.vitesse += 10;
    }
    tourner() {
        this.vitesse -= 5; 
    }
}

const voiture1 = new Voiture('Bmw', 'Serie 1', 80);
const voiture2 = new Voiture('Mercedes', 'GLB', 100);


for (i=1; i<=3; i++) {
voiture1.accelerer();
console.log(`La voiture 1 de marque : (${voiture1.marque} ${voiture1.modele}) a pour vitesse  ${voiture1.vitesse} km/h`);
}


for (i=1; i<=2; i++) {
    voiture2.accelerer();
    console.log(`La voiture 2 de marque : (${voiture2.marque} ${voiture2.modele}) a pour vitesse  ${voiture2.vitesse} km/h`);
    }
    
for (i=1; i<=2; i++) {
    voiture2.tourner();
    console.log(`La voiture 2 de marque : (${voiture2.marque} ${voiture2.modele}) a pour vitesse  ${voiture2.vitesse} km/h`);
    }
