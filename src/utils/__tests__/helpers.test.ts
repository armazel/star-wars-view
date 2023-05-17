import {
    updateData,
    getItemImage,
    getIdFromUrl,
    getCardTypeFromUrl,
    updateSchema,
    updateCardDetailsData,
    addQuery,
} from "../helpers";

describe("updateData", () => {
    const mockData = [
        {
            name: "Biggs Darklighter",
            height: "183",
            mass: "84",
            hair_color: "black",
            skin_color: "light",
            eye_color: "brown",
            birth_year: "24BBY",
            url: "https://swapi.py4e.com/api/people/9/",
        },
    ];

    it("should update id and cardType for each item in the data array", () => {
        const updatedData = updateData(mockData);

        updatedData.forEach((item, index) => {
            expect(item.id).toBe("9");
            expect(item.cardType).toBe("people");
        });
    });

    it("should not modify the original data array", () => {
        const originalData = [...mockData];
        updateData(mockData);

        expect(mockData).toEqual(originalData);
    });

    it("should handle empty data array", () => {
        const emptyData = [];
        const updatedData = updateData(emptyData);

        expect(updatedData).toEqual(emptyData);
    });
});

describe("getItemImage", () => {
    it("should return the correct image URL for PEOPLE item", () => {
        const item = "characters";
        const number = "123";
        const expectedURL = "https://starwars-visualguide.com/assets/img/characters/123.jpg";

        const imageURL = getItemImage(item, number);

        expect(imageURL).toBe(expectedURL);
    });

    it("should return the correct image URL for STAR_SHIPS item", () => {
        const item = "starships";
        const number = "456";
        const expectedURL = "https://starwars-visualguide.com/assets/img/starships/456.jpg";

        const imageURL = getItemImage(item, number);

        expect(imageURL).toBe(expectedURL);
    });

    it("should return the correct image URL for PLANETS item", () => {
        const item = "planets";
        const number = "789";
        const expectedURL = "https://starwars-visualguide.com/assets/img/planets/789.jpg";

        const imageURL = getItemImage(item, number);

        expect(imageURL).toBe(expectedURL);
    });
});

describe("getIdFromUrl", () => {
    it("should return the correct ID from the URL", () => {
        const url = "https://swapi.py4e.com/api/people/9/";
        const expectedId = "9";

        const id = getIdFromUrl(url);

        expect(id).toBe(expectedId);
    });

    it("should return \"1\" for invalid URLs", () => {
        const url = "invalid-url";
        const expectedId = "1";

        const id = getIdFromUrl(url);

        expect(id).toBe(expectedId);
    });
});

describe("getCardTypeFromUrl", () => {
    it("should return the correct card type from the URL", () => {
        const url = "https://swapi.py4e.com/api/people/9/";
        const expectedCardType = "people";

        const cardType = getCardTypeFromUrl(url);

        expect(cardType).toBe(expectedCardType);
    });

    it("should return the correct card type for different URLs", () => {
        const url1 = "https://swapi.py4e.com/api/starships/42/";
        const expectedCardType1 = "starships";

        const cardType1 = getCardTypeFromUrl(url1);

        expect(cardType1).toBe(expectedCardType1);

        const url2 = "https://swapi.py4e.com/api/planets/5/";
        const expectedCardType2 = "planets";

        const cardType2 = getCardTypeFromUrl(url2);

        expect(cardType2).toBe(expectedCardType2);
    });

    it("should return \"people\" for invalid URLs", () => {
        const url = "invalid-url";
        const expectedCardType = "people";

        const cardType = getCardTypeFromUrl(url);

        expect(cardType).toBe(expectedCardType);
    });
});

describe("updateSchema", () => {
    it("should return the updated schema with the specified required fields", () => {
        const schema = {
            description: "A person within the Star Wars universe",
            title: "People",
            required: [
                "height",
                "mass",
                "hair_color",
                "skin_color",
                "eye_color",
                "birth_year",
                "gender",
                "homeworld",
                "films",
                "species",
                "vehicles",
                "starships",
                "url",
                "created",
                "edited",
            ],
            $schema: "http://json-schema.org/draft-04/schema",
            type: "object",
            properties: {
                starships: {
                    type: "array",
                    description: "An array of starship resources that this person has piloted",
                },
                edited: {
                    type: "string",
                    description: "the ISO 8601 date format of the time that this resource was edited.",
                    format: "date-time",
                },
                created: {
                    type: "string",
                    description: "The ISO 8601 date format of the time that this resource was created.",
                    format: "date-time",
                },
                url: {
                    type: "string",
                    description: "The url of this resource",
                    format: "uri",
                },
                gender: {
                    type: "string",
                    description: "The gender of this person (if known).",
                },
                vehicles: {
                    type: "array",
                    description: "An array of vehicle resources that this person has piloted",
                },
                skin_color: {
                    type: "string",
                    description: "The skin color of this person.",
                },
                hair_color: {
                    type: "string",
                    description: "The hair color of this person.",
                },
                height: {
                    type: "string",
                    description: "The height of this person in meters.",
                },
                eye_color: {
                    type: "string",
                    description: "The eye color of this person.",
                },
                mass: {
                    type: "string",
                    description: "The mass of this person in kilograms.",
                },
                films: {
                    type: "array",
                    description: "An array of urls of film resources that this person has been in.",
                },
                species: {
                    type: "array",
                    description: "The url of the species resource that this person is.",
                },
                homeworld: {
                    type: "string",
                    description: "The url of the planet resource that this person was born on.",
                },
                birth_year: {
                    type: "string",
                    description: "The birth year of this person. BBY (Before the Battle of Yavin) or ABY (After the Battle of Yavin).",
                },
            },
        };

        const requiredFields = [
            "birth_year",
            "mass",
            "hair_color",
            "height",
            "gender",
            "skin_color",
        ];

        const updatedSchema = updateSchema(schema, requiredFields);

        const expectedProperties = requiredFields.reduce((properties, item) => {
            return {
                ...properties,
                [item]: schema.properties?.[item],
            };
        }, {});
        expect(updatedSchema.properties).toEqual(expectedProperties);
        expect(updatedSchema.required).toEqual(requiredFields);
        expect(updatedSchema.title).toBe("");
        expect(updatedSchema.description).toBe("");
    });
});

describe("updateCardDetailsData", () => {
    it("should return the updated card details data with the specified fields", () => {
        const data = {
            name: "Biggs Darklighter",
            height: "183",
            mass: "84",
            hair_color: "black",
            skin_color: "light",
            eye_color: "brown",
            birth_year: "24BBY",
            id: "9",
            cardType: "people",
        };

        const config = [
            "birth_year",
            "name",
            "mass",
            "hair_color",
            "height",
            "gender",
            "skin_color",
        ];

        const updatedData = updateCardDetailsData(data, config);

        const expectedData = {
            name: "Biggs Darklighter",
            height: "183",
            mass: "84",
            hair_color: "black",
            skin_color: "light",
            birth_year: "24BBY",
        };

        expect(updatedData).toEqual(expectedData);
    });

    it("should return the same data if it is empty", () => {
        const data = null;
        const config = [
            "birth_year",
            "name",
            "mass",
            "hair_color",
            "height",
            "gender",
            "skin_color",
        ];

        const updatedData = updateCardDetailsData(data, config);

        expect(updatedData).toBeNull();
    });
});

describe("addQuery", () => {
    it("should return the query string with a single query parameter", () => {
        const queries = { page: "1" };

        const queryString = addQuery(queries);

        expect(queryString).toBe("?page=1");
    });

    it("should return the query string with multiple query parameters", () => {
        const queries = { page: "1", limit: "10", sort: "asc" };

        const queryString = addQuery(queries);

        expect(queryString).toBe("?page=1&limit=10&sort=asc");
    });

    it("should return an empty string if queries object is empty", () => {
        const queries = {};

        const queryString = addQuery(queries);

        expect(queryString).toBe("");
    });

    it("should return an empty string if queries object is null", () => {
        const queries = null;

        const queryString = addQuery(queries);

        expect(queryString).toBe("");
    });
});