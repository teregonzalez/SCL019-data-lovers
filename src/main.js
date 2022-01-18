import {charactersFilter, movieCharacters, charactersNameAZ, charactersNameZA } from './data.js';

import data from './data/ghibli/ghibli.js';


//Accediendo a la información de películas.
const films = data.films
const personajes = Object.entries(films.map(films => films.people))
console.log(personajes)

//HTML Dinámico de las distintas páginas
const moviesPage = document.getElementById("moviesPage")
const moviesContainer = document.getElementById("moviesContainer")
const btnMovies = document.getElementById("buttonMovies")

const movies = (title, poster) => {
    return `
    <div class="contenedor-select-peliculas">
    <select name="ByDirector" id="movieByDirector" class="select-peliculas">
      <option selected value="Every-movie">Every movie</option>
      <option value="Hayao Miyazaki">Hayao Miyazaki</option>
      <option value="Isao Takahata">Isao Takahata</option>
      <option value="Yoshifumi Kondō">Yoshifumi Kondō</option>
      <option value="Hiroyuki Morita">Hiroyuki Morita</option>
      <option value="Gorō Miyazaki">Gorō Miyazaki</option>
      <option value="Hiromasa Yonebayashi">Hiromasa Yonebayashi</option>
    </select>
    </div>
    <br>
    <div>
    <h5>${title}</h5>
    <img src="${poster}"> 
    </div>
   
    `;
};

const displayMovies = (films) => {
    moviesContainer.innerHTML = ""
    for (let i = 0; i < films.length; i++) {
        moviesContainer.innerHTML += movies(films[i].title, films[i].poster);
        }
    };

    btnMovies.addEventListener('click', () => {
        displayMovies(films)
    });

//Contenedor que muestra imagenes de personajes.
const characterContainer = document.getElementById("characterContainer");

const characterImage = (characterImg, name, gender) => {
    return `
    <div class="contenedor-imagen-personaje">
    <h5 class="nombre-personaje">${name}</h5>
    <h4>${gender}<h4>
    <img class="img-personaje" src="${characterImg}">
    </div>`;
};

//Función de display que vacía el contenedor y luego lo llena con imagen y nombre de personajes.
const displayCharacters = (films) => {
    characterContainer.innerHTML = ""
    for (let i = 0; i < films.length; i++) {
        let characters = films[i].people;
        for (let j = 0; j < characters.length; j++) {
            characterContainer.innerHTML += characterImage(characters[j].img, characters[j].name, characters[j].gender);
        }
    }
};

const filtroGenero = (personajes) => {
    for (let i = 0; i < personajes.lenght; i++) {
        let generoPersonaje = personajes[i].gender; 
    }         
};

//Declarando variable para selects de personajes.
const charByFilm = document.getElementById("charactersByFilm")
const charactersByGender = document.getElementById("charactersByGender")
const charactersByName = document.getElementById("charactersAtoZ")

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
});


    //Función de filtrado de personajes por género.

    charactersByGender.addEventListener ('change', () => {
        switch (charactersByGender.value) {
            case 'All-genders':
                displayCharacters(filtroGenero(personajes));
                break;
            case 'Female':
                displayCharacters(charactersFilter(personajes, "Female"));
            break;
            case 'Male':
                break;
            case 'Unknown':
                personajesXgenero(personajesXpelícula, "Unknown");
                break;
            default:
                break;
        }
    });

 
    //Función de orden alfabético por nombre
    charactersByName.addEventListener ('change', (event) => {
      const alphabeticalOrder = event.target.value;
       if (alphabeticalOrder === 'A-Z') {
         charactersNameAZ(displayCharacters(films));
       }
    })



/*const personajesXgenero = (data, propiedad) => {
   const genero = data.filter (element => element.gender == propiedad)
   return genero;
}

const people = () => {for (let people in films) {
    let personajes = Object.entries(films[people]);
}};
*/

