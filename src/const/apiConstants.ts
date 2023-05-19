import { addQuery } from "../utils/helpers";

const rootUrl: string = "https://swapi.py4e.com/api";

export interface ApiParams {
    [key: string]: string
}

export const API_URL = {
    getPeopleData: (
        params: ApiParams
    ) => `${rootUrl}/people/${addQuery(params)}`,
    getPlanets: (
        params: ApiParams
    ) => `${rootUrl}/planets/${addQuery(params)}`,
    getStarShips: (
        params: ApiParams
    ) => `${rootUrl}/starships/${addQuery(params)}`,
};
