import { LoadCardParams } from "../store/types";
import { addQuery } from "../utils/helpers";

const rootUrl: string = "https://swapi.py4e.com/api";

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
    getPeopleItemById: (id: number) => `${rootUrl}/people/${id}/`,
    getPlanetItemById: (id: number) => `${rootUrl}/planets/${id}/`,
    getStarShipItemById: (id: number) => `${rootUrl}/starships/${id}/`,
};
