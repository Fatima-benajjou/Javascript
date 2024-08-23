class Vehicule {
    constructor (marque,modele,kilometrage,annee) {
        this.marque=marque;
        this.modele=modele;
        this.kilometrage=kilometrage;
        this.annee=annee;

    }

    display () {
        console.log(+this.marque+", "+this.modele+", "+this.kilometrage+", "+this.annee )
    }
}