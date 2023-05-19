import { LoadCardParams } from "../store/types";
import { addQuery } from "../utils/helpers";

const rootUrl: string = "https://swapi.py4e.com/api";

export const API_URL = {
    getPeopleData: (
        params: LoadCardParams
    ) => `${rootUrl}/people/${addQuery(params)}`,
    getPlanets: (
        params: LoadCardParams
    ) => `${rootUrl}/planets/${addQuery(params)}`,
    getStarShips: (
        params: LoadCardParams
    ) => `${rootUrl}/starships/${addQuery(params)}`,
};
