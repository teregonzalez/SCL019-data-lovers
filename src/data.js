//Función que filtra los personajes por película.
export const movieCharacters = (films, filmTitle) => {
  const movieCharacters = films.filter (film => film.title == filmTitle);
  return movieCharacters;
};

export const charactersGender = (films, gender) => {
  const peopleGender = films.filter (film => film.gender == gender);
  return peopleGender;
};

export const anotherExample = () => {
  return 'OMG';
};
