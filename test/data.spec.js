import { moviesByDirector } from '../src/data.js';

const data = [
  "films", [
    {
      "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
      "title": "Castle in the Sky",
      "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
      "director": "Hayao Miyazaki",
      "producer": "Isao Takahata",
      "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c1/Castle_in_the_Sky.jpg",
      "release_date": "1986",
      "rt_score": "95",
      "people": [
        {
          "id": "fe93adf2-2f3a-4ec4-9f68-5422f1b87c01",
          "name": "Pazu",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/8/8b/Pazu.jpg",
          "gender": "Male",
          "age": "13",
          "eye_color": "Black",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "598f7048-74ff-41e0-92ef-87dc1ad980a9",
          "name": "Lusheeta Toel Ul Laputa",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c3/Sheeta.jpg",
          "gender": "Female",
          "age": "13",
          "eye_color": "Black",
          "hair_color": "Black",
          "specie": "Human"
        }
      ]
    },
    {
      "id": "2de9426b-914a-4a06-a3a0-5e6d9d3886f6",
      "title": "The Secret World of Arrietty",
      "description": "14-year-old Arrietty and the rest of the Clock family live in peaceful anonymity as they make their own home from items 'borrowed' from the house's human inhabitants. However, life changes for the Clocks when a human boy discovers Arrietty.",
      "director": "Hiromasa Yonebayashi",
      "producer": "Toshio Suzuki",
      "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/4/46/The_Borrower_Arrietty.jpg",
      "release_date": "2010",
      "rt_score": "95",
      "people": [
        {
          "id": "89026b3a-abc4-4053-ab1a-c6d2eea68faa",
          "name": "Karigurashi/Arrietty",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/0/04/Arrietty.jpg",
          "gender": "Female",
          "age": "14",
          "eye_color": "Black",
          "hair_color": "Auburn",
          "specie": "Borrower"
        },
        {
          "id": "496031cc-f6af-4f48-b9d1-27f34cb18e10",
          "name": "Sho (Shawn)",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/0/04/Sho.jpg",
          "gender": "Male",
          "age": "12-14",
          "eye_color": "Brown",
          "hair_color": "Navy blue/black",
          "specie": "Human"
        },
        {
          "id": "ef5ee7c5-ae68-418d-a319-f3e79262cd87",
          "name": "Homily Clock",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/2/28/Homily_Clock.jpg",
          "gender": "Female",
          "age": "52",
          "eye_color": "Brown",
          "hair_color": "Navy black",
          "specie": "Borrower"
        },
        {
          "id": "3a83aa65-d134-4e58-85b2-e9f6523b047d",
          "name": "Sadako Maki/Jessica",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/1b/Jessica.jpg",
          "gender": "Female",
          "age": "Elder",
          "eye_color": "Black",
          "hair_color": "Grey",
          "specie": "Human"
        }
      ]
    }
  ]
]


describe("moviesByDirector", () => {
  test("is a filter function", () => {
    expect(typeof moviesByDirector).toBe("function");
  });
});

describe("moviesByDirector", () => {
  test("returns movies filtered by Director", () => {
    const input = [
      { director: "Hayao Miyazaki"}
    ];
    const output = [
      { title: "Castle in the Sky" }
    ];
    expect(moviesByDirector(input, data)).toEqual(output);

  });
});
