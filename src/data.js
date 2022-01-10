
export const characterFilterMovie = (data, nameFilm) => {
  const movieCharacters = data.filter (characters => characters.films == nameFilm);
  return movieCharacters;
};

export const anotherExample = () => {
  return 'OMG';
};
