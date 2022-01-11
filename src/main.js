import {movieCharacters} from './data.js';

import data from './data/ghibli/ghibli.js';


//Accediendo a la información de películas.
const films = data.films

//Contenedor que muestra imagenes de personajes.
const charContainer = document.getElementById("charContainer");

const characterImage = (characterImg, name) => {
    return `
    <div>
    <h5>${name}</h5>
    <img class="charimg" src="${characterImg}">
    </div>`;
};

//Función de display que vacía el contenedor y luego lo llena con imagen y nombre de personajes.
const displayCharacters = (films) => {
    charContainer.innerHTML = ""
    for (let i = 0; i < films.length; i++) {
        let characters = films[i].people;
        for (let j = 0; j < characters.length; j++) {
            charContainer.innerHTML += characterImage(characters[j].img, characters[j].name);
        }
    }
};

//Declarando variable para select de personajes.
const charByFilm = document.getElementById("charactersByFilm")

//Que todos los personajes se muestren al cargan la página.
window.addEventListener('load', () => displayCharacters(films) )

// Que la función de filtrado se active al hacer un cambio en el select.
charByFilm.addEventListener('change', () => {
    switch (charByFilm.value) {
        case 'Every-movie':
            displayCharacters(films);
            break;
        case 'Castle-in-the-Sky':
            break;
        case 'My-Neighbor-Totoro':
            break;
        case 'Kikis-Delivery-Service':
            break;
        case 'Grave-of-the-Fireflies':
            displayCharacters(movieCharacters(films, "Grave of the Fireflies"));
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

