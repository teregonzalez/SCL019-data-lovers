export const characterFilterMovie = (films, filmTitle) => {
  const movieCharacters = films.filter (characters => characters.films == filmTitle);
  return movieCharacters;
};






export const anotherExample = () => {
  return 'OMG';
};
