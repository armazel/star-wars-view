import { createAction } from "redux-actions";

import { LoadCardParams } from "../types";

export const GET_STAR_SHIPS_FETCH_REQUEST
    = "star_ships/load/FETCH_REQUEST";
export const GET_STAR_SHIPS_FETCH_SUCCESS
    = "star_ships/load/FETCH_SUCCESS";
export const GET_STAR_SHIPS_FETCH_ERROR
    = "star_ships/load/FETCH_ERROR";

export const loadStarShipsData = createAction(
    GET_STAR_SHIPS_FETCH_REQUEST,
    (params: LoadCardParams) => (params)
);
export const loadStarShipsDataSuccess = createAction(GET_STAR_SHIPS_FETCH_SUCCESS);
export const loadStarShipsDataError = createAction(GET_STAR_SHIPS_FETCH_ERROR);
