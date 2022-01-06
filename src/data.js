
export const charFilterMovie = (data, nameFilm) => {
  const charMovie = data.filter (char => char.films == nameFilm);
  return charMovie;
};

export const anotherExample = () => {
  return 'OMG';
};
