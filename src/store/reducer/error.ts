import { 
    GET_PEOPLE_FETCH_ERROR,
    GET_PEOPLE_ITEM_BY_ID_FETCH_ERROR,
    GET_PEOPLE_SCHEMA_FETCH_ERROR,
    GET_PLANETS_FETCH_ERROR,
    GET_PLANETS_ITEM_BY_ID_FETCH_ERROR,
    GET_PLANET_SCHEMA_FETCH_ERROR,
    GET_STAR_SHIPS_FETCH_ERROR,
    GET_STAR_SHIP_ITEM_BY_ID_FETCH_ERROR,
    GET_STAR_SHIP_SCHEMA_FETCH_ERROR,
    RESSET_ERROR,
} from "../actions";
import {Action } from "../types";

type StateType = {
    isError: boolean,
};

const initialState: StateType = {
    isError: false,
};

export const errorReducer = (state: StateType = initialState, action: Action): StateType => {
    switch (action.type) {
        case GET_PEOPLE_FETCH_ERROR:
        case GET_PEOPLE_ITEM_BY_ID_FETCH_ERROR:
        case GET_PEOPLE_SCHEMA_FETCH_ERROR:
        case GET_PLANETS_FETCH_ERROR:
        case GET_PLANETS_ITEM_BY_ID_FETCH_ERROR:
        case GET_PLANET_SCHEMA_FETCH_ERROR:
        case GET_STAR_SHIPS_FETCH_ERROR:
        case GET_STAR_SHIP_ITEM_BY_ID_FETCH_ERROR:
        case GET_STAR_SHIP_SCHEMA_FETCH_ERROR:
            return {
                ...state,
                isError: true,
            };
        case RESSET_ERROR: {
            return initialState;
        }
        default:
        return state;
    }
};
