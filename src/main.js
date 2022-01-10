import {characterFilterMovie} from './data.js';

import data from './data/ghibli/ghibli.js';


// Accediendo a la información de películas.
const films = data.films

// Que se muestren las imagenes de personajes.
const charContainer = document.getElementById("charContainer");

const characterImage = (characterImg, name) => {
    return `
    <div>
    <h5>${name}</h5>
    <img class="charimg" src="${characterImg}">
    </div>`;
};


const displayCharacters = () => {
    for (let i = 0; i < films.length; i++) {
        let characters = films[i].people;
        for (let j = 0; j < characters.length; j++) {
            charContainer.innerHTML += characterImage(characters[j].img, characters[j].name);
        }
    }
};

// Declarando variables para select de personajes.
const charByFilm = document.getElementById("charactersByFilm")

// Que la función de filtrado se active al interactuar con el select.
charByFilm.addEventListener('change', () => {
    switch (charByFilm.value) {
        case 'Every-movie': displayCharacters(films)
            console.log("Caso 0");
            break;
        case 'Castle-in-the-Sky':
            console.log("Caso 1");
            displayCharacters(characterFilterMovie(films, "Castle in the Sky"))
            break;
        case 'From-Up-on-Poppy-Hill':
            console.log("Caso 2");
                let characters = films[1].people;
                for (let j = 0; j < characters.length; j++) {
                    console.log(characters[j])
                    charContainer.innerHTML += characterImage(characters[j].img, characters[j].name);
                }
            break;
        case 'Grave-of-the-Fireflies':
            console.log("Caso 3");
            break;
        case 'Howls-Moving-Castle':
            console.log("Caso 4");
            break;
        case '"Kikis-Delivery-Service"':
            console.log("Caso 5");
            break;
        case 'My-Neighbor-Totoro':
            break;
        case 'My-Neighbors-the-Yamadas"':
            break;
        case 'Only-Yesterday':
            break;
        case 'Pom-Poko':
            break;
        case 'Ponyo-on-the-Cliff-by-the-Sea':
            break;
        case 'Porco-Rosso':
            break;
        case 'Princess-Mononoke':
            break;
        case 'Spirited-Away':
            break;
        case 'Tales-from-Earthsea':
            break;
        case 'The-Cat-Returns':
            break;
        case 'The-Secret-World-of-Arrietty':
            break;
        case 'The-Tale-of-the-Princess-Kaguya':
            break;
        case 'The-Wind-Rises':
            break;
        case 'When-Marnie-Was-There':
            break;
        case 'Whisper-of-the-Heart':
            break;

        default: displayCharacters(films)
            break;
    }

});


console.log(films, data);


// let directors = films[i].director;
// let characterImg = characters[i].img
