import { createAction } from "redux-actions";

import { LoadCardParams } from "../types";

export const GET_PLANETS_FETCH_REQUEST
    = "planets/load/FETCH_REQUEST";
export const GET_PLANETS_FETCH_SUCCESS
    = "planets/load/FETCH_SUCCESS";
export const GET_PLANETS_FETCH_ERROR
    = "planets/load/FETCH_ERROR";

export const GET_PLANETS_ITEM_BY_ID_FETCH_REQUEST
    = "planetsItem/load/FETCH_REQUEST";
export const GET_PLANETS_ITEM_BY_ID_FETCH_SUCCESS
    = "planetsItem/load/FETCH_SUCCESS";
export const GET_PLANETS_ITEM_BY_ID_FETCH_ERROR
    = "planetsItem/load/FETCH_ERROR";

export const GET_PLANET_SCHEMA_FETCH_REQUEST
    = "planetSchema/load/FETCH_REQUEST";
export const GET_PLANET_SCHEMA_FETCH_SUCCESS
    = "planetSchema/load/FETCH_SUCCESS";
export const GET_PLANET_SCHEMA_FETCH_ERROR
    = "planetSchema/load/FETCH_ERROR";
export const PLANETS_UPDATE
    = "planet/update";

export const loadPlanetsData = createAction(
    GET_PLANETS_FETCH_REQUEST,
    (params: LoadCardParams) => (params)
);
export const loadPlanetsDataSuccess = createAction(GET_PLANETS_FETCH_SUCCESS);
export const loadPlanetsDataError = createAction(GET_PLANETS_FETCH_ERROR);

export const loadPlanetItemById = createAction(
    GET_PLANETS_ITEM_BY_ID_FETCH_REQUEST,
    (id: string) => ({ id })
);
export const loadPlanetItemByIdSuccess = createAction(GET_PLANETS_ITEM_BY_ID_FETCH_SUCCESS);
export const loadPlanetItemByIdError = createAction(GET_PLANETS_ITEM_BY_ID_FETCH_ERROR);

export const loadPlanetSchema = createAction(GET_PLANET_SCHEMA_FETCH_REQUEST);
export const loadPlanetSchemaSuccess = createAction(GET_PLANET_SCHEMA_FETCH_SUCCESS);
export const loadPlanetSchemaError = createAction(GET_PLANET_SCHEMA_FETCH_ERROR);

export const planetDataUpdate = createAction(PLANETS_UPDATE);
