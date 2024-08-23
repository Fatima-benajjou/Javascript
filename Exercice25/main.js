
let nbNotes = Number(prompt("Combien de notes voulez vous saisir "))
let maxNote =0 ;
let minNote =20;
let moyNote = 0;
let affichage =`<p>La série contient ${nbNotes}</p>
                <ul>`

for (let i =1; i<= nbNotes;i++){
    let noteTemp = Number(prompt("saisie la note n°" +i+" : "))
    affichage += `<li> En note ${i}, vous avez saisi ${noteTemp}/20 </li>`
    if(noteTemp > maxNote) {
        maxNote = noteTemp;
    }
    if(noteTemp < minNote) {
        minNote = noteTemp;
    }
    moyNote += noteTemp;
}

moyNote = moyNote / nbNotes
 affichage += `</ul></br>`

 //ajout des resultats min max moyenne
 affichage += `<p>Sur l'ensemble des ${nbNotes} notes</p>
                 <ul>
                    <li class= "green"> La meilleur note : ${maxNote}</li>
                    <li class= "red"> La pire note : ${minNote}</li>
                    <li class= "grey"> La moyenne des note : ${moyNote}</li>
                 </ul>   
`

// recup l'element avec la classe result

const result = document.querySelector(".result")

result.innerHTML=affichage;