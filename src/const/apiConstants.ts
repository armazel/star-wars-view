const rootUrl: string = "https://swapi.py4e.com/api";

export const API_URL: { 
    // eslint-disable-next-line no-unused-vars
    getPeopleData: (page: string) => string,
    // eslint-disable-next-line no-unused-vars
    getPlanets: (page: string) => string,
    // eslint-disable-next-line no-unused-vars
    getStarShips: (page: string) => string,
} = {
    getPeopleData: (page = "1") => `${rootUrl}/people/?page=${page}`,
    getPlanets: (page = "1") => `${rootUrl}/planets/?page=${page}`,
    getStarShips: (page = "1") => `${rootUrl}/starships/?page=${page}`,
};
