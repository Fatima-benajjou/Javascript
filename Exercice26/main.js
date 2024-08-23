// document.addEventListener('DOMContentLoaded', function() {
//     const addDogButton = document.getElementById('add-dog');
//     const dogSelect = document.getElementById('dog-select');
//     const dogDisplay = document.getElementById('dog-display');

//     let dogs = []; // Liste pour stocker les chiens ajoutés

//     addDogButton.addEventListener('click', function() {
//         // Récupération des valeurs des champs
//         const name = document.getElementById('name').value;
//         const age = document.getElementById('age').value;
//         const race = document.getElementById('race').value;

//         // Création d'un objet chien et ajout à la liste
//         const dog = { name, age, race };
//         dogs.push(dog);

//         // Ajout de l'option dans le select
//         const option = document.createElement('option');
//         option.value = dogs.length - 1; // L'index du chien dans la liste
//         option.textContent = name; // Le nom du chien comme texte de l'option
//         dogSelect.appendChild(option);

//         // Réinitialisation des champs du formulaire
//         document.getElementById('name').value = '';
//         document.getElementById('age').value = '';
//         document.getElementById('race').value = '';
//     });

//     // Événement pour afficher les détails du chien sélectionné
//     dogSelect.addEventListener('change', function() {
//         const selectedDogIndex = dogSelect.value;
//         const selectedDog = dogs[selectedDogIndex];

//         if (selectedDog) {
//             dogDisplay.textContent = `Nom: ${selectedDog.name}, Âge: ${selectedDog.age}, Race: ${selectedDog.race}`;
//         } else {
//             dogDisplay.textContent = 'Sélectionnez un chien pour voir les détails.';
//         }
//     });
// });


let dogs = [];


const monBouton = document.getElementById('btn-submit');
const dogSelect = document.getElementById('dog-select');
const dogDisplay = document.getElementById('selectOutput')

 monBouton.addEventListener("click", () => {
 const nom = document.getElementById("dog-name").value;
 const age = document.getElementById("dog-age").value;
 const race = document.getElementById("dog-breed").value;
 const dog = { nom, age, race };
 dogs.push(dog); 


 document.getElementById("dog-name").value = '';
 document.getElementById("dog-age").value = '';
 document.getElementById("dog-breed").value = '';
 selectUpdate();
})


 console.table(dogs)

 const selectUpdate = () => {
    console.log(dogs);
    // dogSelect.innerHTML="<option value=\"0\">Sélectionnez un chien</option>"
    for (let i =1; i <= dogs.length; i++) {
    const option = document.createElement('option');
           option.value = i; console.log(option)
           option.textContent = dogs[i-1].nom; 
           dogSelect.appendChild(option);}}

          



 dogSelect.addEventListener("change", () => {
    const selectedDogList = dogSelect.value
    const selectedDog = dogs[selectedDogList]

    if (selectedDog) {
                    dogDisplay.textContent = `Nom: ${selectedDog.nom}, Âge: ${selectedDog.age}, Race: ${selectedDog.race}`;
                } else {
                    dogDisplay.textContent = 'Sélectionnez un chien pour voir les détails.';
                }
            });

            