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
        case 'Every-movie':
            displayCharacters(films);
            break;
        case 'Castle-in-the-Sky':
            let characters0 = films[0].people;
                for (let j = 0; j < characters0.length; j++) {
                    charContainer.innerHTML += characterImage(characters0[j].img, characters0[j].name);
                } 
            break;
        case 'My-Neighbor-Totoro':
            displayCharacters(characterFilterMovie(films, "My Neighbor Totoro"));
            break;
        case 'Kikis-Delivery-Service':
            break;
        case 'Grave-of-the-Fireflies':
            break;
        case 'Only-Yesterday':
            break;
        case 'Porco-Rosso':
            break;
        case 'Pom-Poko':
            break;
        case 'Whisper-of-the-Heart':
            break;
        case 'Princess-Mononoke':
            break;
        case 'My-Neighbors-the-Yamadas"':
            break;
        case 'Spirited-Away':
            break;
        case 'The-Cat-Returns':
            break;
        case 'Howls-Moving-Castle':
            break; 
        case 'Tales-from-Earthsea':
            break;
        case 'Ponyo-on-the-Cliff-by-the-Sea':
            break;
        case 'The-Secret-World-of-Arrietty':
            break;
        case 'From-Up-on-Poppy-Hill':
            let characters = films[16].people;
                for (let j = 0; j < characters.length; j++) {
                    charContainer.innerHTML += characterImage(characters[j].img, characters[j].name);
                } 
            break;
        case 'The-Wind-Rises':
            break;     
        case 'The-Tale-of-the-Princess-Kaguya':
            break;
        case 'When-Marnie-Was-There':
            break;

        default:
            break;
    }

});


console.log(films, data);


// let directors = films[i].director;
// let characterImg = characters[i].img
