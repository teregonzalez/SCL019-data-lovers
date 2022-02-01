//Función de filtro de películas por director
export const moviesByDirector = (data, directorName) => {
  const movieDirector = data.filter (element => directorName === 'All-directors' ? true : element.director == directorName);
  return movieDirector;
};

//Función de orden alfabético de películas
export const moviesTitlesAZ = (data, title) => {
  const orderAZ = data.sort((a, b) => title === 'All-Titles' ? true : title === 'TitleAZ' ? a.title.toUpperCase() > b.title.toUpperCase() ? 1 : -1 : a.title.toUpperCase() < b.title.toUpperCase() ? 1 : -1);
    return orderAZ
  };

//Función de orden de películas por año
export const moviesDate = (data, date) => {
  const orderNew = data.sort((a, b) => date === 'Random' ? true : date === 'Newest first' ? b.release_date - a.release_date : a.release_date - b.release_date);
    return orderNew
  };

export const charactersFilters = (films, filmTitle, gender, name) => {
  const movieCharacters = films.filter(film => filmTitle === 'Everymovie' ? true : film.title === filmTitle)
  .map(film => film.people.filter(character => gender === 'All-genders' ? true : character.gender == gender)
  .sort((a, b) => name === 'All-names' ? true : name === 'A-Z' ? a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1 : a.name.toUpperCase() < b.name.toUpperCase() ? 1 : -1));
  return movieCharacters;
};




