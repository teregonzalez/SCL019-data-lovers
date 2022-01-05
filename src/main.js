import { example } from './data.js';

import data from './data/ghibli/ghibli.js';


// Accediendo a la información de películas, personajes y directores
let films = data.films;

//let directors = films[i].director;
//let characterImg = characters[i].img


// Que se muestren las imagenes de personajes
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

console.log(example, data);
