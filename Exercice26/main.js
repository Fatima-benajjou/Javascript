


let dogs = [];

const monBouton = document.getElementById("btn-submit");
const dogSelect = document.getElementById("dog-select");
const dogDisplay = document.getElementById("selectOutput")

 monBouton.addEventListener('click', () => {
 const nom = document.getElementById('dog-name').value;
 const age = document.getElementById('dog-age').value;
 const race = document.getElementById('dog-breed').value;
 const dog = { nom, age, race };
 dogs.push(dog); 


 document.getElementById('dog-name').value = '';
 document.getElementById('dog-age').value = '';
 document.getElementById('dog-breed').value = '';})

 console.table(dogs)



 dogs.forEach(function(dog, index) {
    const option = document.createElement('option');
    option.value = index; 
    option.textContent = dog.nom;
    dogSelect.appendChild(option);
});

 dogSelect.addEventListener('click', () => {
    const selectedDogList = dogSelect.value
    const selectedDog = dogs[selectedDogList]

    if (selectedDog) {
                    dogDisplay.textContent = `Nom: ${selectedDog.nom}, Âge: ${selectedDog.age}, Race: ${selectedDog.race}`;
                } else {
                    dogDisplay.textContent = 'Sélectionnez un chien pour voir les détails.';
                }
            });