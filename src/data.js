//Función de filtro de películas por director
export const moviesByDirector = (data, directorName) => {
  const movieDirector = data.filter (element => element.director == directorName);
  return movieDirector;
};

//Función de orden alfabético de películas
export const moviesTitlesAZ = (data) => {
  [...data].sort((a, b) => {
  return a.title > b.title ? 1: -1;}
  )};

export const moviesTitlesZA = (data) => {
  [...data].sort((a, b) => {
  return a.title < b.title ? 1: -1;}
)};

//Función que filtra los personajes por película.
export const movieCharacters = (films, filmTitle) => {
  const movieCharacters = films.filter (film => film.title == filmTitle);
  return movieCharacters;
};

//Función de filtrado general
export const charactersFilter = (data, condition) => {
  console.log(data)
  data[0].people = data[0].people.filter (personaje => personaje.gender == condition)
  return data;
}; 

/*export const charactersFilter = (data, condition) => {
  const peopleProperty = data.filter (element => element.includes(condition) == condition);
  return peopleProperty;
}; */

//Función de orden alfabético ascendente y descendente
export const charactersNameAZ = (data) => {
  data.sort((a, b) => {
  return a.name > b.name ? 1: -1;}
  )};

export const charactersNameZA = (data) => {
  data.sort((a, b) => {
  return a.name < b.name ? 1: -1;}
)};




