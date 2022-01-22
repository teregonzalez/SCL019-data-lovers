//Función de filtro de películas por director
export const moviesByDirector = (data, directorName) => {
  const movieDirector = data.filter (element => element.director == directorName);
  return movieDirector;
};

//Función de orden alfabético de películas
export const moviesTitlesAZ = (data) => {
  const orderAZ = data.sort((a, b) => ((a.title.toUpperCase() > b.title.toUpperCase()) ? 1: -1));
    return orderAZ
  };

export const moviesTitlesZA = (data) => {
  const orderZA = data.sort((a, b) => ((a.title.toUpperCase() < b.title.toUpperCase()) ? 1: -1));
    return orderZA
  };

//Función de orden de películas por año
export const moviesDateNewest = (data) => {
  const orderNew = data.sort((a, b) => (b.release_date - a.release_date));
    return orderNew
  };

export const moviesDateOldest = (data) => {
  const orderOld = data.sort((a, b) => (a.release_date - b.release_date));
    return orderOld
  };

//Función que filtra los personajes por película.
export const movieCharacters = (films, filmTitle) => {
  const movieCharacters = films.filter (film => film.title == filmTitle);
  return movieCharacters;
};

//Función de filtrado de personajes por género.
export const charactersFilter = (data, condition) => {
  console.log(data)
  data[0].people = data[0].people.filter (personaje => personaje.gender == condition);
  return data;
}; 

export const genderFilter = (data, condition) => {
  const gender = data.filter (element => element.gender == condition);
  return gender;
};

//Función de orden alfabético ascendente y descendente
export const charactersNameAZ = (data) => {
  const orderZA = data.sort((a, b) => ((a.name.toUpperCase() > b.name.toUpperCase()) ? 1: -1));
    return orderZA
  };

export const charactersNameZA = (data) => {
  const orderZA = data.sort((a, b) => ((a.name.toUpperCase() < b.name.toUpperCase()) ? 1: -1));
    return orderZA
  };



