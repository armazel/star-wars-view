import { LoadCardParams } from "../store/types";
import { addQuery } from "../utils/helpers";

const rootUrl: string = "https://swapi.py4e.com/api";

export const defaultPage: number = 1;

export const API_URL = {
    getPeopleData: (
        params: LoadCardParams
    ) => `${rootUrl}/people/${addQuery(params as {[ key: string]: string })}`,
    getPlanets: (
        params: LoadCardParams
    ) => `${rootUrl}/planets/${addQuery(params as {[ key: string]: string })}`,
    getStarShips: (
        params: LoadCardParams
    ) => `${rootUrl}/starships/${addQuery(params as {[ key: string]: string })}`,
    getPeopleItemById: (id: string) => `${rootUrl}/people/${id}/`,
    getPlanetItemById: (id: string) => `${rootUrl}/planets/${id}/`,
    getStarShipItemById: (id: string) => `${rootUrl}/starships/${id}/`,
    getPeopleSchema: `${rootUrl}/people/schema`,
    getPlanetsSchema: `${rootUrl}/planets/schema`,
    getStarShipsSchema: `${rootUrl}/starships/schema`,
};
