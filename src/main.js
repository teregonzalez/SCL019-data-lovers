import {moviesByDirector, moviesTitlesAZ, moviesTitlesZA, moviesDateNewest, moviesDateOldest, charactersFilters} from './data.js';

import data from './data/ghibli/ghibli.js';


//Accediendo a la información de la data.
const films = data.films
const personajes = films.map(films => films.people)

//Páginas
const homePage = document.getElementById("homePage")
const moviesPage = document.getElementById("moviesPage")
const charactersPage = document.getElementById("charactersPage")
const directorsPage = document.getElementById("directorsPage")
const factsPage = document.getElementById("factsPage")

//innerHTML de la página de home.
const btnHome = document.getElementById("buttonHome")

const displayHome = () => {
    homePage.style.display = "block";
    moviesPage.style.display = "none"; 
    charactersPage.style.display = "none";
    directorsPage.style.display = "none";
    factsPage.style.display = "none";
};

btnHome.addEventListener('click', () => {
    displayHome()
})

window.addEventListener('load', () => displayHome())

//innerHTML de la página de películas.
const btnMovies = document.getElementById("buttonMovies")
const moviesContainer = document.getElementById("moviesContainer")

const movies = (title, poster) => {
    return `
    <div class="contenedor-imagen-pelicula">
    <h5 class="nombre-pelicula">${title}</h5>
    <img class="img-pelicula" src="${poster}"> 
    </div>
    `;
};

const displayMovies = (films) => {
    moviesPage.style.display = "block";
    homePage.style.display = "none";
    charactersPage.style.display = "none";
    directorsPage.style.display = "none";
    factsPage.style.display = "none";
    moviesContainer.innerHTML = ""
    for (let i = 0; i < films.length; i++) {
        moviesContainer.innerHTML += movies(films[i].title, films[i].poster);
        }
    };

    btnMovies.addEventListener('click', () => {
        displayMovies(films);
    });

//innerHTML de la página de personajes.
const btnCharacters = document.getElementById("buttonCharacters");

const displayCharactersPage = () => {
    charactersPage.style.display = "block";
    homePage.style.display = "none";
    moviesPage.style.display = "none"; 
    directorsPage.style.display = "none";
    factsPage.style.display = "none";
};

btnCharacters.addEventListener('click', () => {
    displayCharactersPage();
    displayCharacters(films);
})

//innerHTML de la página de directores.
const btnDirectors = document.getElementById("buttonDirectors");

const displayDirectors = () => {
    directorsPage.style.display = "block";
    charactersPage.style.display = "none";
    homePage.style.display = "none";
    moviesPage.style.display = "none"; 
    factsPage.style.display = "none";
};

btnDirectors.addEventListener('click', () => {
    displayDirectors()
})

//Filtrado de películas por director 
const selectDirectors = document.getElementById("movieByDirector")

selectDirectors.addEventListener('change', () => {
    switch (selectDirectors.value) {
        case "All-directors":
            displayMovies(films)
            break;
        case "Hayao Miyazaki":
            displayMovies(moviesByDirector(films, "Hayao Miyazaki"));
            break;
        case "Isao Takahata":
            displayMovies(moviesByDirector(films, "Isao Takahata"));
            break;
        case "Yoshifumi Kondō":
            displayMovies(moviesByDirector(films, "Yoshifumi Kondō"));
            break;
        case "Hiroyuki Morita":
            displayMovies(moviesByDirector(films, "Hiroyuki Morita"));
            break;
        case "Gorō Miyazaki":
            displayMovies(moviesByDirector(films, "Gorō Miyazaki"));
            break;
        case "Hiromasa Yonebayashi":
            displayMovies(moviesByDirector(films, "Hiromasa Yonebayashi"));
            break;
        default:
            break;
    }
});

//Orden de películas por título
const moviesByTitle = document.getElementById("moviesByTitle");

moviesByTitle.addEventListener('change', () => {
    switch (moviesByTitle.value) {
        case "Title":
            displayMovies(films);
            break;
         case "TitleAZ":
            displayMovies(moviesTitlesAZ(films));
            break;
        case "TitleZA":
            displayMovies(moviesTitlesZA(films));
            break;
    
        default:
            break;
    }
});

//Orden de películas por año de lanzamiento
const moviesByYear = document.getElementById("moviesByYear");

moviesByYear.addEventListener('change', () => {
    switch (moviesByYear.value) {
        case 'Random':
            displayMovies(films)
            break;
        case 'Newest first':
            displayMovies(moviesDateNewest(films));
            break;
        case 'Oldest first':
            displayMovies(moviesDateOldest(films));
            break;
    
        default:
            break;
    }
})

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

const displayFilter = (films) => {
    characterContainer.innerHTML = ""
    for (let i = 0; i < films.length; i++) {
        let characters = films[i];
        for (let j = 0; j < characters.length; j++) {
        characterContainer.innerHTML += characterImage(characters[j].img, characters[j].name);       
        }
      }
    };

//Declarando variables para selects de personajes.
const charactersByFilm = document.getElementById("charactersByFilm")
const charactersByGender = document.getElementById("charactersByGender")
const charactersByName = document.getElementById("charactersAtoZ")

//Almacenando el value de los distintos selects
const charactersSelectValues = () => [charactersByFilm.value, charactersByGender.value, charactersByName.value];


//Que la función de filtrado se active al hacer click en el select.
charactersByFilm.addEventListener('change', () => {
    let options = charactersSelectValues()
    let [title, gender, peopleName] = options
    displayFilter(charactersFilters(films, title, gender, peopleName));  
    });
 
//Función de filtrado de personajes por género.
charactersByGender.addEventListener('change', () => {
    let options = charactersSelectValues()
    let [title, gender, peopleName] = options
    displayFilter(charactersFilters(films, title, gender, peopleName)); 
    });

//Función de orden alfabético por nombre de personaje
charactersByName.addEventListener('change', () => {
    let options = charactersSelectValues()
    let [title, gender, peopleName] = options
    displayFilter(charactersFilters(films, title, gender, peopleName)); 
    });
    
    

    
