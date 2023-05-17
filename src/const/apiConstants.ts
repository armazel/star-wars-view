const rootUrl: string = "https://swapi.py4e.com/api";

export const API_URL: { 
    loadPeopleData: string,
    loadPlanets: string,
    loadStarShips: string 
} = {
    loadPeopleData: `${rootUrl}/people/?size=2`,
    loadPlanets: `${rootUrl}/planets/`,
    loadStarShips: `${rootUrl}/starships/`,
};
