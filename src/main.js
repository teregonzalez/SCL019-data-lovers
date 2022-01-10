import {charFilterMovie} from './data.js';

import data from './data/ghibli/ghibli.js';


// Accediendo a la información de películas.
const films = data.films
const charName = films[0].people[0].name

// Que se muestren las imagenes de personajes.
const charContainer = document.getElementById("charContainer");

const charImage = (films) => {
    return `
    <div>
    <h5>${charName}</h5>
    <img class="charimg" src="${films}">
    </div>`;
};


for (let i = 0; i < films.length; i++) {
    let characters = films[i].people;
    for (let j = 0; j < characters.length; j++) {
        charContainer.innerHTML += charImage(characters[j].img);
    }
}

// Declarando variables para select de personajes.
const charByFilm = document.getElementById("charactersByFilm")

//Que la función de filtrado se active al interactuar con el select.
charByFilm.addEventListener('change', () => {
    switch (charByFilm.value) {
        case '0':
            console.log("Caso 0");
            break;
        case '1':
            console.log("Caso 1");
            break;
        case '2':
            console.log("Caso 2");
            break;
        case '3':
            console.log("Caso 3");
            break;
        case '4':
            console.log("Caso 4");
            break;
        case '5':
            console.log("Caso 5");
            break;
        case '6':
            break;
        case '7':
            break;
        case '8':
            break;
        case '9':
            break;
        case '10':
            break;
        case '11':
            break;
        case '12':
            break;
        case '13':
            break;
        case '14':
            break;
        case '15':
            break;
        case '16':
            break;
        case '17':
            break;
        case '18':
            break;
        case '19':
            break;
        case '20':
            break;

        default:
            break;
    }

});


console.log(films, data);


// let directors = films[i].director;
// let characterImg = characters[i].img
