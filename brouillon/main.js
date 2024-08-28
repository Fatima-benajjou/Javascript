const apiUrl = "https://pokeapi.co/api/v2/pokemon/";
const output = document.getElementById("output");

// Fonction pour afficher les résultats dans le bloc <pre>
const displayResult = (data) => {
    output.textContent = JSON.stringify(data, null, 2);
};


// --------------------- READ ---------------------
// Récupération de tous les posts
const getPosts = async () => {
    try {
        const response = await fetch(apiUrl); // Requête GET pour récupérer tous les posts
        const data = await response.json();  // Conversion de la réponse en format JSON
        displayResult(data); // Affichage de tous les posts
        console.log(data[39])
    } catch (error) {
        displayResult({ error: "Erreur lors de la récupération des posts" }); // Gestion des erreurs
    }
};

// Fonction pour récupérer un post spécifique par ID
const getPostById = async () => {
    const id = prompt("Entrez le nom du pokémon à récupérer:", "");

    if (id) {
        try {
            const response = await fetch(`${apiUrl}/${id}`); // Requête GET avec l'ID du post à récupérer
            const data = await response.json(); // Conversion de la réponse en format JSON
            displayResult(data); // Affichage du post spécifié
           
        } catch (error) {
            displayResult({ error: `Erreur lors de la récupération du post ${id}` }); // Gestion des erreurs
        }
    }
};





// Attachement des fonctions aux boutons
document.getElementById("getAllBtn").addEventListener("click", getPosts);
document.getElementById("getByIdBtn").addEventListener("click", getPostById);

