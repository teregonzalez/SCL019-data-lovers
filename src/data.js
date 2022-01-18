//Función que filtra los personajes por película.
export const movieCharacters = (films, filmTitle) => {
  const movieCharacters = films.filter (film => film.title == filmTitle);
  return movieCharacters;
};

//Función de filtrado general
export const charactersFilter = (data, condition) => {
  const peopleProperty = data.filter (element => element.gender == condition);
  return peopleProperty;
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




