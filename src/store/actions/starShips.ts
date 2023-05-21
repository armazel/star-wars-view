import { createAction } from "redux-actions";

import { LoadCardParams } from "../types";

export const GET_STAR_SHIPS_FETCH_REQUEST
    = "star_ships/load/FETCH_REQUEST";
export const GET_STAR_SHIPS_FETCH_SUCCESS
    = "star_ships/load/FETCH_SUCCESS";
export const GET_STAR_SHIPS_FETCH_ERROR
    = "star_ships/load/FETCH_ERROR";

export const GET_STAR_SHIP_ITEM_BY_ID_FETCH_REQUEST
    = "star_ship_item/load/FETCH_REQUEST";
export const GET_STAR_SHIP_ITEM_BY_ID_FETCH_SUCCESS
    = "star_ship_item/load/FETCH_SUCCESS";
export const GET_STAR_SHIP_ITEM_BY_ID_FETCH_ERROR
    = "star_ship_item/load/FETCH_ERROR";

export const loadStarShipsData = createAction(
    GET_STAR_SHIPS_FETCH_REQUEST,
    (params: LoadCardParams) => (params)
);
export const loadStarShipsDataSuccess = createAction(GET_STAR_SHIPS_FETCH_SUCCESS);
export const loadStarShipsDataError = createAction(GET_STAR_SHIPS_FETCH_ERROR);

export const loadStarShipItemById = createAction(
    GET_STAR_SHIP_ITEM_BY_ID_FETCH_REQUEST,
    (id: string) => ({ id })
);
export const loadStarShipItemByIdSuccess = createAction(GET_STAR_SHIP_ITEM_BY_ID_FETCH_SUCCESS);
export const loadStarShipItemByIdError = createAction(GET_STAR_SHIP_ITEM_BY_ID_FETCH_ERROR);
