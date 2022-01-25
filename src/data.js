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

export const charactersFilters = (films, filmTitle, gender, name) => {
  const movieCharacters = films.filter(film => filmTitle === 'Everymovie' ? true : film.title === filmTitle)
  .map(film => film.people.filter(character => gender === 'All-genders' ? true : character.gender == gender)
  .sort((a, b) => name === 'All-names' ? true : name === 'A-Z' ? a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1 : a.name.toUpperCase() < b.name.toUpperCase() ? 1 : -1));
  return movieCharacters;
};




