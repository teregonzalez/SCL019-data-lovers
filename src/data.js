//Función que filtra los personajes por película.
export const movieCharacters = (films, filmTitle) => {
  const movieCharacters = films.filter (film => film.title == filmTitle);
  return movieCharacters;
};

//Función de filtrado general
export const charactersFilter = (data, condition) => {
  const peopleProperty = data.filter (element => element.condition == condition);
  return peopleProperty;
}; 

//buscar-agregar .include, for in, for of

/*export const charactersName = films.sort((a-z) => {
  return a.name - b.name});

/*export const anotherExample = () => {
  return 'OMG';
};*/
