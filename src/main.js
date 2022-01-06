import { charFilterMovie } from './data.js';

import data from './data/ghibli/ghibli.js';


// Accediendo a la información de películas.
const films = data.films;

// Declarando variables para select de personajes.
const charByFilm = document.getElementById("charactersByFilm")

// Que se muestren las imagenes de personajes.
const charContainer = document.getElementById("charContainer");

const charImage = (characters) => {
    return `
    <div>
    <img src="${characters}">
    </div>`;
}; 

for (let i = 0; i < films.length; i++) {
    let characters = films[i].people;
    for (let j = 0; j < characters.length; j++) {
        charContainer.innerHTML += charImage(characters[j].img);
    } 
}

// Declarando variables para select de personajes.
const charByFilm = document.getElementById("charactersByFilm");
let charByFilmValues = charByFilm.value;

//Que la función de filtrado se active al interactuar con el select.
charByFilm.addEventListener('select', () => {
    switch (charByFilm) {
        case '0':
            console.log("Todas las películas");
            break;
        case '1':
            alert("Opción 2")
    
        default:
            break;
    }

} );


//console.log(example, data);


//let directors = films[i].director;
//let characterImg = characters[i].img
