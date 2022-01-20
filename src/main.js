import {moviesByDirector, moviesTitlesAZ, moviesTitlesZA, moviesDateNewest, moviesDateOldest, charactersFilter, movieCharacters, charactersNameAZ, charactersNameZA } from './data.js';

import data from './data/ghibli/ghibli.js';


//Accediendo a la información de la data.
const films = data.films
const personajes = films.map(films => films.people)
console.log(personajes)
let currentFilms = films

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

const characterImage = (characterImg, name, gender) => {
    return `
    <div class="contenedor-imagen-personaje">
    <h5 class="nombre-personaje">${name}</h5>
    <img class="img-personaje" src="${characterImg}">
    </div>`;
};



//Función de display que vacía el contenedor y luego lo llena con imagen y nombre de personajes.
const displayCharacters = (films) => {
    currentFilms = films
    characterContainer.innerHTML = ""
    for (let i = 0; i < currentFilms.length; i++) {
        let characters = currentFilms[i].people;
        for (let j = 0; j < characters.length; j++) {
            characterContainer.innerHTML += characterImage(characters[j].img, characters[j].name);
        }
    }
};


//Declarando variable para selects de personajes.
const charByFilm = document.getElementById("charactersByFilm")
const charactersByGender = document.getElementById("charactersByGender")
const charactersByName = document.getElementById("charactersAtoZ")

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
                displayCharacters(charactersFilter(currentFilms, "Female" && "Male"));
                break;
            case 'Female':
                displayCharacters(charactersFilter(currentFilms, "Female"));
            break;
            case 'Male':
                displayCharacters(charactersFilter(currentFilms, "Male"));
                break;
            case 'Unknown':
                displayCharacters(charactersFilter(currentFilms, "Unknown (Possible Male)"));
                break;
            default:
                break;
        }
    });

 
    //Función de orden alfabético por nombre de personaje
    charactersByName.addEventListener 

    charactersByName.addEventListener('change', () => {
        switch (charactersByName.value) {
            case "All-names":
                displayCharacters(films)
                break;
             case "A-Z":
                displayCharacters(charactersNameAZ(personajes));
                break;
            case "Z-A":
                displayCharacters(charactersNameZA(films));
                break;
        
            default:
                break;
        }
    });
    

    
