const rootUrl: string = "https://swapi.dev/api";

export const API_URL: { 
    loadPeopleData: string,
    loadPlanets: string,
    loadStarShips: string 
} = {
    loadPeopleData: `${rootUrl}/people`,
    loadPlanets: `${rootUrl}/planets`,
    loadStarShips: `${rootUrl}/starships`,
};
