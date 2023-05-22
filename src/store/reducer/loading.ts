import { 
    GET_PEOPLE_FETCH_SUCCESS,
    GET_PEOPLE_FETCH_REQUEST,
    GET_PEOPLE_FETCH_ERROR,

    GET_PLANETS_FETCH_REQUEST,
    GET_PLANETS_FETCH_SUCCESS,
    GET_PLANETS_FETCH_ERROR,

    GET_STAR_SHIPS_FETCH_SUCCESS,
    GET_STAR_SHIPS_FETCH_ERROR,
    GET_STAR_SHIPS_FETCH_REQUEST,

    GET_PLANETS_ITEM_BY_ID_FETCH_REQUEST,
    GET_PLANETS_ITEM_BY_ID_FETCH_ERROR,
    GET_PLANETS_ITEM_BY_ID_FETCH_SUCCESS,

    GET_STAR_SHIP_ITEM_BY_ID_FETCH_REQUEST,
    GET_STAR_SHIP_ITEM_BY_ID_FETCH_ERROR,
    GET_STAR_SHIP_ITEM_BY_ID_FETCH_SUCCESS,

    GET_PEOPLE_ITEM_BY_ID_FETCH_REQUEST,
    GET_PEOPLE_ITEM_BY_ID_FETCH_SUCCESS,
    GET_PEOPLE_ITEM_BY_ID_FETCH_ERROR,

    GET_PEOPLE_SCHEMA_FETCH_REQUEST,
    GET_PLANET_SCHEMA_FETCH_REQUEST,
    GET_STAR_SHIP_SCHEMA_FETCH_REQUEST,

    GET_PEOPLE_SCHEMA_FETCH_SUCCESS,
    GET_PLANET_SCHEMA_FETCH_SUCCESS,
    GET_STAR_SHIP_SCHEMA_FETCH_SUCCESS,

    GET_PEOPLE_SCHEMA_FETCH_ERROR,
    GET_PLANET_SCHEMA_FETCH_ERROR,
    GET_STAR_SHIP_SCHEMA_FETCH_ERROR,
    
} from "../actions";
import { Action } from "../types";

type StateType = {
    isLoading: boolean,
    isLoaded: boolean;
};

const initialState: StateType = {
    isLoading: false,
    isLoaded: false,
};

export const loadingReducer = (state: StateType = initialState, action: Action): StateType => {
    switch (action.type) {
        case GET_STAR_SHIPS_FETCH_REQUEST:
        case GET_PLANETS_FETCH_REQUEST:
        case GET_PEOPLE_FETCH_REQUEST:
        case GET_PLANETS_ITEM_BY_ID_FETCH_REQUEST:
        case GET_STAR_SHIP_ITEM_BY_ID_FETCH_REQUEST:
        case GET_PEOPLE_ITEM_BY_ID_FETCH_REQUEST:
        case GET_PEOPLE_SCHEMA_FETCH_REQUEST:
        case GET_PLANET_SCHEMA_FETCH_REQUEST:
        case GET_STAR_SHIP_SCHEMA_FETCH_REQUEST:
            return {
                ...state,
                isLoading: true,
                isLoaded: true,
            };
        case GET_PEOPLE_FETCH_SUCCESS:
        case GET_PLANETS_FETCH_SUCCESS:
        case GET_STAR_SHIPS_FETCH_SUCCESS:
        case GET_PEOPLE_ITEM_BY_ID_FETCH_SUCCESS:
        case GET_PLANETS_ITEM_BY_ID_FETCH_SUCCESS:
        case GET_STAR_SHIP_ITEM_BY_ID_FETCH_SUCCESS:
        case GET_PEOPLE_FETCH_ERROR:
        case GET_PLANETS_FETCH_ERROR:
        case GET_STAR_SHIPS_FETCH_ERROR:
        case GET_PLANETS_ITEM_BY_ID_FETCH_ERROR:
        case GET_PEOPLE_ITEM_BY_ID_FETCH_ERROR:
        case GET_STAR_SHIP_ITEM_BY_ID_FETCH_ERROR:
        case GET_PEOPLE_SCHEMA_FETCH_SUCCESS:
        case GET_PLANET_SCHEMA_FETCH_SUCCESS:
        case GET_STAR_SHIP_SCHEMA_FETCH_SUCCESS:
        case GET_PEOPLE_SCHEMA_FETCH_ERROR:
        case GET_PLANET_SCHEMA_FETCH_ERROR:
        case GET_STAR_SHIP_SCHEMA_FETCH_ERROR:
            return {
                ...state,
                isLoading: false,
            };
        default:
        return state;
    }
};
