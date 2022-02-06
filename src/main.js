import {
  moviesByDirector,
  moviesTitlesAZ,
  moviesDate,
  charactersFilters,
} from "./data.js";

import data from "./data/ghibli/ghibli.js";

// Accediendo a la información de la data.
const films = data.films;
// const personajes = films.map(films => films.people)

// Páginas
const homePage = document.getElementById("homePage");
const moviesPage = document.getElementById("moviesPage");
const charactersPage = document.getElementById("charactersPage");
const directorsPage = document.getElementById("directorsPage");
const factsPage = document.getElementById("factsPage");

// innerHTML de la página de home.
const btnHome = document.getElementById("buttonHome");

const displayHome = () => {
  homePage.style.display = "block";
  moviesPage.style.display = "none";
  charactersPage.style.display = "none";
  directorsPage.style.display = "none";
  factsPage.style.display = "none";
};

btnHome.addEventListener("click", () => {
  displayHome();
});

window.addEventListener("load", () => displayHome());

//innerHTML de la página de películas.
const btnMovies = document.getElementById("buttonMovies");
const moviesContainer = document.getElementById("moviesContainer");
let modalPelicula = document.getElementById("movieModal");
let divModalMovies = document.createElement("div");

const displayMovies = () => {
  moviesPage.style.display = "block";
  homePage.style.display = "none";
  charactersPage.style.display = "none";
  directorsPage.style.display = "none";
  factsPage.style.display = "none";
  movies(films);
};

btnMovies.addEventListener("click", () => {
  displayMovies(films);
});

const moviePopUp = (array) => {
  divModalMovies.classList.add("modalMovies");
  let divMoviePoster = document.createElement("div");
  let divMovieDescription = document.createElement("div");
  let moviePoster = document.createElement("img");
  moviePoster.setAttribute("src", `${array.poster}`);
  moviePoster.setAttribute("alt", "Poster of the movie");
  moviePoster.classList.add("image-modal-movie");
  let movieTitle = document.createElement("h4");
  movieTitle.classList.add("modal-header");
  movieTitle.innerHTML = `${array.title}`;
  let movieDescription = document.createElement("p");
  movieDescription.classList.add("modal-text");
  movieDescription.innerHTML = `${array.description}`;
  let movieData = document.createElement("ul");
  movieData.classList.add("modal-list");
  movieData.innerHTML = `<li class="modal-list"><b>Director:</b> ${array.director}</li>
    <li class="modal-list"><b>Producer:</b> ${array.producer}</li>
    <li class="modal-list"><b>Release date:</b> ${array.release_date}</li>
    <li class="modal-list"><b>Rating score:</b> ${array.rt_score}</li>`;

  let btnClose = document.createElement("span");
  btnClose.classList.add("btn-modal");
  btnClose.innerHTML = "&times;";

  divMoviePoster.appendChild(moviePoster);
  divMovieDescription.appendChild(movieTitle);
  divMovieDescription.appendChild(movieDescription);
  divMovieDescription.appendChild(movieData);
  divModalMovies.appendChild(divMoviePoster);
  divModalMovies.appendChild(divMovieDescription);
  divModalMovies.appendChild(btnClose);

  btnClose.addEventListener("click", () => {
    modalPelicula.style.visibility = "hidden";
  });
};

const movies = (data) => {
  moviesContainer.innerHTML = ";";
  data.forEach((array) => {
    let movieCard = document.createElement("div");
    movieCard.setAttribute("class", "contenedor-imagen-pelicula");
    movieCard.innerHTML = `
    <h5 class="nombre-pelicula">${array.title}</h5>
    <img class="img-pelicula" id="imageMovie" src="${array.poster}"> 
    `;
    movieCard.addEventListener("click", (e) => {
      e.preventDefault;
      divModalMovies.innerHTML = "";
      modalPelicula.style.visibility = "visible";
      modalPelicula.append(divModalMovies);
      moviePopUp(array);
    });
    moviesContainer.appendChild(movieCard);
  });
};

//innerHTML de la página de personajes.
const btnCharacters = document.getElementById("buttonCharacters");

const displayCharactersPage = () => {
  charactersPage.style.display = "block";
  homePage.style.display = "none";
  moviesPage.style.display = "none";
  directorsPage.style.display = "none";
  factsPage.style.display = "none";
};

btnCharacters.addEventListener("click", () => {
  displayCharactersPage();
  displayCharacters(films);
});

// innerHTML de la página de directores.
const btnDirectors = document.getElementById("buttonDirectors");

const displayDirectors = () => {
  directorsPage.style.display = "block";
  charactersPage.style.display = "none";
  homePage.style.display = "none";
  moviesPage.style.display = "none";
  factsPage.style.display = "none";
};

btnDirectors.addEventListener("click", () => {
  displayDirectors();
});

// Filtrado de películas por director
const selectDirectors = document.getElementById("movieByDirector");

selectDirectors.addEventListener("change", () => {
  let directors = selectDirectors.value;
  movies(moviesByDirector(films, directors));
});

// Orden de películas por título
const moviesByTitle = document.getElementById("moviesByTitle");

moviesByTitle.addEventListener("change", () => {
  let title = moviesByTitle.value;
  displayMovies(moviesTitlesAZ(films, title));
});

// Orden de películas por año de lanzamiento
const moviesByYear = document.getElementById("moviesByYear");

moviesByYear.addEventListener("change", () => {
  let dates = moviesByYear.value;
  displayMovies(moviesDate(films, dates));
});

// Contenedor que muestra imagenes de personajes.
const characterContainer = document.getElementById("characterContainer");
let divModalCharacter = document.createElement("div");
let modalCharacter = document.getElementById("characterModal");

const characterPopUp = (array) => {
  divModalCharacter.classList.add("modalCharacter");
  let divCharacterImg = document.createElement("div");
  let characterImg = document.createElement("img");
  characterImg.setAttribute("src", `${array.img}`);
  characterImg.setAttribute("alt", "Image of the character");
  characterImg.classList.add("image-modal");
  let divCharacterInfo = document.createElement("div");
  divCharacterInfo.classList.add("modal-text");
  let characterName = document.createElement("h4");
  characterName.innerHTML = `${array.name}`;
  characterName.classList.add("modal-header");
  let characterData = document.createElement("ul");
  characterData.classList.add("modal-list");
  characterData.innerHTML = `<li class="modal-list"><b>Gender:</b> ${array.gender}</li>
    <li class="modal-list"><b>Age:</b> ${array.age}</li>
    <li class="modal-list"><b>Eye color:</b> ${array.eye_color}</li>
    <li class="modal-list"><b>Hair color:</b> ${array.hair_color}</li>
    <li class="modal-list"><b>Specie:</b> ${array.specie}</li>`;

  let btnClose = document.createElement("span");
  btnClose.classList.add("btn-modal");
  btnClose.innerHTML = "&times;";

  divCharacterImg.appendChild(characterImg);
  divCharacterInfo.appendChild(characterName);
  divCharacterInfo.appendChild(characterData);
  divModalCharacter.appendChild(divCharacterImg);
  divModalCharacter.appendChild(divCharacterInfo);
  divModalCharacter.appendChild(btnClose);
  modalCharacter.appendChild(divModalCharacter);

  btnClose.addEventListener("click", () => {
    modalCharacter.style.visibility = "hidden";
  });
};

const charactersDisplay = (data) => {
  data.forEach((array) => {
    let characterCard = document.createElement("div");
    characterCard.setAttribute("class", "contenedor-imagen-personaje");
    characterCard.innerHTML = `
    <h5 class="nombre-personaje">${array.name}</h5>
    <img class="img-personaje" src="${array.img}">
    `;
    characterCard.addEventListener("click", () => {
      divModalCharacter.innerHTML = "";
      modalCharacter.style.visibility = "visible";
      modalCharacter.append(divModalCharacter);
      characterPopUp(array);
    });
    characterContainer.appendChild(characterCard);
  });
};

// Función de display que vacía el contenedor y luego lo llena con imagen y nombre de personajes.
const displayCharacters = (films) => {
  characterContainer.innerHTML = "";
  for (let i = 0; i < films.length; i++) {
    let characters = films[i].people;
    charactersDisplay(characters);
  }
};

const displayFilter = (films) => {
  characterContainer.innerHTML = "";
  for (let i = 0; i < films.length; i++) {
    let characters = films[i];
    charactersDisplay(characters);
  }
};

// Declarando variables para selects de personajes.
const charactersByFilm = document.getElementById("charactersByFilm");
const charactersByGender = document.getElementById("charactersByGender");
const charactersByName = document.getElementById("charactersAtoZ");

// Almacenando el value de los distintos selects
const charactersSelectValues = () => [
  charactersByFilm.value,
  charactersByGender.value,
  charactersByName.value,
];

// Que la función de filtrado se active al hacer click en el select.
charactersByFilm.addEventListener("change", () => {
  let options = charactersSelectValues();
  let [title, gender, peopleName] = options;
  displayFilter(charactersFilters(films, title, gender, peopleName));
  console.log(charactersFilters(films, title, gender, peopleName));
});

// Función de filtrado de personajes por género.
charactersByGender.addEventListener("change", () => {
  let options = charactersSelectValues();
  let [title, gender, peopleName] = options;
  displayFilter(charactersFilters(films, title, gender, peopleName));
});

// Función de orden alfabético por nombre de personaje
charactersByName.addEventListener("change", () => {
  let options = charactersSelectValues();
  let [title, gender, peopleName] = options;
  displayFilter(charactersFilters(films, title, gender, peopleName));
});


// innerHTML de la página de fun facts.
const btnFacts = document.getElementById("buttonFacts");

const displayFacts = () => {
    factsPage.style.display = "block";
    charactersPage.style.display = "none";
    homePage.style.display = "none";
    moviesPage.style.display = "none";
    directorsPage.style.display = "none";
};

const directoresPeliculas = films.map(element => element.director);
/*const directoresCantidades = directoresPeliculas.forEach(
    (director, index) => {
        if(director[index+1] === director[index]){
            index+=1
        } 
        return [director, index]
    }
)*/
console.log(directoresPeliculas)
const plugin = {
    id: 'custom_canvas_background_color',
    beforeDraw: (chart) => {
        const ctx = chart.canvas.getContext('2d');
      ctx.save();
      ctx.globalAlpha = 1.0;
      ctx.globalCompositeOperation = 'destination-over';
      ctx.fillStyle = 'rgba(218, 247, 166, 1)';
      ctx.fillRect(0, 0, chart.width, chart.height);
      ctx.restore();
    }
  };

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["Hayao Miyazaki", "Isao Takahata", "Yoshifumi Kondō", "Hiroyuki Morita", "Gorō Miyazaki", "Hiromasa Yonebayashi"], fontColor: 'black',
        datasets: [{
            data: [9, 5, 1, 1, 2, 2],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(191, 63, 121, 0.2)',
                'rgba(63, 191, 127, 0.2)',
                'rgba(63, 121, 191, 0.2)',
                'rgba(146, 63, 191, 0.2)',
                'rgba(191, 146, 63, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(191, 63, 121, 0.2)',
                'rgba(63, 191, 127, 0.2)',
                'rgba(63, 121, 191, 0.2)',
                'rgba(146, 63, 191, 0.2)',
                'rgba(191, 146, 63, 0.2)',
            ],
            hoverOffset: 4,
            plugins: [plugin],
        }]
}
});


btnFacts.addEventListener("click", () => {
    displayFacts();
});