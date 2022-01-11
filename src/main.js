import {charactersGender, movieCharacters} from './data.js';

import data from './data/ghibli/ghibli.js';


//Accediendo a la información de películas.
const films = data.films

//Contenedor que muestra imagenes de personajes.
const characterContainer = document.getElementById("characterContainer");

const characterImage = (characterImg, name) => {
    return `
    <div class="contenedor-imagen-personaje">
    <h5 class="nombre-personaje">${name}</h5>
    <img class="img-personaje" src="${characterImg}">
    </div>`;
};

//Función de display que vacía el contenedor y luego lo llena con imagen y nombre de personajes.
const displayCharacters = (films) => {
    characterContainer.innerHTML = ""
    for (let i = 0; i < films.length; i++) {
        let characters = films[i].people;
        for (let j = 0; j < characters.length; j++) {
            characterContainer.innerHTML += characterImage(characters[j].img, characters[j].name);
        }
    }
};

//Declarando variable para selects de personajes.
const charByFilm = document.getElementById("charactersByFilm")
const charactersByGender = document.getElementById("charactersByGender")

//Que todos los personajes se muestren al cargan la página.
window.addEventListener('load', () => displayCharacters(films) )

//Que la función de filtrado se active al hacer un cambio en el select.
charByFilm.addEventListener('change', () => {
    switch (charByFilm.value) {
        case 'Every-movie': displayCharacters(films);
            break;
        case 'Castle-in-the-Sky':
            displayCharacters(movieCharacters(films, "Castle in the Sky"));
            break;
        case 'My-Neighbor-Totoro':
            displayCharacters(movieCharacters(films, "My Neighbor Totoro"));
            break;
        case 'Kikis-Delivery-Service':
            displayCharacters(movieCharacters(films, "Kiki's Delivery Service"));
            break;
        case 'Grave-of-the-Fireflies':
            displayCharacters(movieCharacters(films, "Grave of the Fireflies"));
            break;
        case 'Only-Yesterday':
            displayCharacters(movieCharacters(films, "Only Yesterday"));
            break;
        case 'Porco-Rosso':
            displayCharacters(movieCharacters(films, "Porco Rosso"));
            break;
        case 'Pom-Poko':
            displayCharacters(movieCharacters(films, "Pom Poko"));
            break;
        case 'Whisper-of-the-Heart':
            displayCharacters(movieCharacters(films, "Whisper of the Heart"));
            break;
        case 'Princess-Mononoke':
            displayCharacters(movieCharacters(films, "Princess Mononoke"));
            break;
        case 'My-Neighbors-the-Yamadas':
            displayCharacters(movieCharacters(films, "My Neighbors the Yamadas"));
            break;
        case 'Spirited-Away':
            displayCharacters(movieCharacters(films, "Spirited Away"));
            break;
        case 'The-Cat-Returns':
            displayCharacters(movieCharacters(films, "The Cat Returns"));
            break;
        case 'Howls-Moving-Castle':
            displayCharacters(movieCharacters(films, "Howl's Moving Castle"));
            break;
        case 'Tales-from-Earthsea':
            displayCharacters(movieCharacters(films, "Tales from Earthsea"));
            break;
        case 'Ponyo-on-the-Cliff-by-the-Sea':
            displayCharacters(movieCharacters(films, "Ponyo on the Cliff by the Sea"));
            break;
        case 'The-Secret-World-of-Arrietty':
            displayCharacters(movieCharacters(films, "The Secret World of Arrietty"));
            break;
        case 'From-Up-on-Poppy-Hill':
            displayCharacters(movieCharacters(films, "From Up on Poppy Hill"));
            break;
        case 'The-Wind-Rises':
            displayCharacters(movieCharacters(films, "The Wind Rises"));
            break;
        case 'The-Tale-of-the-Princess-Kaguya':
            displayCharacters(movieCharacters(films, "The Tale of the Princess Kaguya"));
            break;
        case 'When-Marnie-Was-There':
            displayCharacters(movieCharacters(films, "When Marnie Was There"));
            break;
        default:
            break;
    }

    //Función de filtrado de personajes por género.
    charactersByGender.addEventListener ('change', () => {
        switch (charactersByGender.value) {
            case 'All-genders':
                displayCharacters(films);
                break;
            case 'Female':
                displayCharacters(charactersGender(films, "Female"));
            break;
            case 'Male':
                displayCharacters(charactersGender(films, "Male"));
                break;
            case 'Unknown':
                displayCharacters(charactersGender(films, "Unknown", "NA"));
                break;
            default:
                break;
        }
    }
    )

});


console.log(films, data);

