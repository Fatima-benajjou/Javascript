let etudiants = [ 
    { 
        prenom: "José", 
        nom: "Garcia", 
        matieres: { 
            francais: 16, 
            anglais: 7, 
            humour: 14 
        }  
    }, 
    { 
        prenom: "Antoine", 
        nom: "De Caunes", 
        matieres: { 
            francais: 15, 
            anglais: 6, 
            humour: 16, 
            informatique: 4, 
            sport: 10 
        } 
    } 
];




for (let i=0; i<= etudiants.length; i++) {
    console.log("##### Début Etudiant ####")
    console.log("Etudiant :" +etudiants[i].prenom+ " "+etudiants[i].nom)
    for (let key in etudiants[i].matieres) {
        let somme =0;
        let nbNotes =0;
        let moyenne=0;
        console.log(key+ " : " +etudiants[i].matieres[key])
        // somme += etudiants[i].matieres[key]
        // nbNotes++;
    }
    // moyenne =somme/nbNotes;
    // console.log("La moyenne est de :"+moyenne)
    console.log("##### Fin Etudiant ####")
}


