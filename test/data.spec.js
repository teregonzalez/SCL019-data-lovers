import { describe, it } from 'eslint/lib/rule-tester/rule-tester';
import { moviesByDirector, moviesTitlesAZ, moviesDate, charactersFilters } from '../src/data.js';

const data = [
    {
      "title": "Castle in the Sky",
      "director": "Hayao Miyazaki",
      "release_date": "1986",
      "people": [
        {
          "name": "Pazu",
          "gender": "Male",
        },
        {
          "name": "Lusheeta Toel Ul Laputa",
          "gender": "Female",
        }
      ]
    },
    {
      "title": "The Secret World of Arrietty",
      "director": "Hiromasa Yonebayashi",
      "release_date": "2010",
      "people": [
        {
          "name": "Karigurashi/Arrietty",
          "gender": "Female",
        },
        {
          "name": "Sho (Shawn)",
          "gender": "Male",
        },
        {
          "name": "Homily Clock",
          "gender": "Female",
        },
        {
          "name": "Sadako Maki/Jessica",
          "gender": "Female",
        }
      ]
    },
    {
      "title": "Grave of the Fireflies",
      "director": "Isao Takahata",
      "release_date": "1988",
      "people": [
        {
          "name": "Seita Yokokawa",
          "gender": "Male",
        },
        {
          "name": "Setsuko Yokokawa",
          "gender": "Female",
        },
        {
          "name": "Mrs. Yokokawa",
          "gender": "Female",
        },
      ]
}]


describe("moviesByDirector", () => {
  it("is a filter function", () => {
    expect(typeof moviesByDirector).toBe("function");
  });
  
  it("returns movies filtered by Director", () => {
    let director = moviesByDirector(data, ["Hayao Miyazaki"])
    expect(director[0].title).toEqual("Castle in the Sky");
  });

});

describe("moviesTitlesAZ", () => {
  it("is a function", () => {
    expect(typeof moviesTitlesAZ).toBe("function")
  });

  it("should order movies by title, A to Z", () => {
    let moviesAZ = moviesTitlesAZ(data, "TitleAZ")
    expect(moviesAZ[0].title).toEqual("Castle in the Sky")
    expect(moviesAZ[1].title).toEqual("Grave of the Fireflies")
    expect(moviesAZ[2].title).toEqual("The Secret World of Arrietty")
  });

  it("should order movies by title, A to Z", () => {
    let moviesZA = moviesTitlesAZ(data, "TitleZA")
    expect(moviesZA[0].title).toEqual("The Secret World of Arrietty")
    expect(moviesZA[1].title).toEqual("Grave of the Fireflies")
    expect(moviesZA[2].title).toEqual("Castle in the Sky")
  });
});

  describe("moviesDate", () => {
    it("is a function", () => {
      expect(typeof moviesDate).toBe("function")
    });

    it("should order movies from oldest to newest", () => {
      let release = moviesDate(data, "Oldest first")
      expect(release[0].release_date).toEqual("1986")
      expect(release[1].release_date).toEqual("1988")
      expect(release[2].release_date).toEqual("2010")
    });

    it("should order movies from newest to oldest", () => {
      let release = moviesDate(data, "Newest first")
      expect(release[0].release_date).toEqual("2010")
      expect(release[1].release_date).toEqual("1988")
      expect(release[2].release_date).toEqual("1986")
    });
  });

describe("charactersFilters", () => {
  it("is a function", () => {
    expect(typeof charactersFilters).toBe("function")
  });

  it("should return the characters of the movie Castle in the Sky", () => {
    let characters = charactersFilters(data, "Castle in the Sky", "All-genders", "All-names")
    expect(characters[0][0].name).toEqual("Pazu")
    expect(characters[0][1].name).toEqual("Lusheeta Toel Ul Laputa")
  });

  it("should return only the female characters of the movie The Secret World of Arrietty, from A to Z", () => {
    let characters = charactersFilters(data, "The Secret World of Arrietty", "Female", "A-Z")
    expect(characters[0][0].name).toEqual("Homily Clock")
    expect(characters[0][1].name).toEqual("Karigurashi/Arrietty")
    expect(characters[0][2].name).toEqual("Sadako Maki/Jessica")
  });

  it("should return only the male characters of all the movies, from Z to A", () => {
    let characters = charactersFilters(data, "Everymovie", "Male", "Z-A")
    expect(characters[0][0].name).toEqual("Sho (Shawn)")
    expect(characters[1][0].name).toEqual("Seita Yokokawa")
    expect(characters[2][0].name).toEqual("Pazu")
  });
});

