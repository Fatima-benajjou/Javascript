export class Voiture extends Vehicule {
    constructor (marque,modele,kilometrage,annee, clim) {
    super(marque, modele, kilometrage, annee);
    this.clim=clim

   
    }
    display () {
        return super.display()+ "Voiture"
    }
}