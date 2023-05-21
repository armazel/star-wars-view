import { JSONSchema7 } from "json-schema";

import { 
    GET_STAR_SHIPS_FETCH_REQUEST,
    GET_STAR_SHIPS_FETCH_SUCCESS,
    GET_STAR_SHIPS_FETCH_ERROR,
    GET_STAR_SHIP_ITEM_BY_ID_FETCH_SUCCESS,
    GET_STAR_SHIP_ITEM_BY_ID_FETCH_REQUEST,
    GET_STAR_SHIP_SCHEMA_FETCH_SUCCESS,
} from "../actions";
import { Action, StarShipsData } from "../types";

type StateType = {
    data: StarShipsData[],
    count: number,
    detailItem: StarShipsData,
    searchText: string,
    schema?: JSONSchema7,
};

const initialState: StateType = {
    data: [],
    count: 0,
    detailItem: {} as StarShipsData,
    searchText: "",
    schema: {},
};

export const starShipsReducer = (state: StateType = initialState, action: Action): StateType => {
    switch (action.type) {
        case GET_STAR_SHIPS_FETCH_REQUEST: 
            return initialState;
        case GET_STAR_SHIPS_FETCH_SUCCESS: 
            return {
                ...state,
                ...action.payload,
            };
        case GET_STAR_SHIPS_FETCH_ERROR: 
            return state;
        case GET_STAR_SHIP_ITEM_BY_ID_FETCH_REQUEST: 
            return initialState;
        case GET_STAR_SHIP_ITEM_BY_ID_FETCH_SUCCESS:
            return {
                ...state,
                ...action.payload,
            };
        case GET_STAR_SHIP_SCHEMA_FETCH_SUCCESS:
            return {
                ...state,
                ...action.payload,
            };
        default:
        return state;
    }
};

