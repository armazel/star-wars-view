import { JSONSchema7 } from "json-schema";
import { cardTypes } from "../../const/cardType";
import { mergeItemWithLocal } from "../../utils/helpers";

import { 
    GET_PLANETS_FETCH_REQUEST,
    GET_PLANETS_FETCH_SUCCESS,
    GET_PLANETS_FETCH_ERROR,
    GET_PLANETS_ITEM_BY_ID_FETCH_SUCCESS,
    GET_PLANETS_ITEM_BY_ID_FETCH_REQUEST,
    GET_PLANET_SCHEMA_FETCH_SUCCESS,
    PLANETS_UPDATE,
} from "../actions";
import { Action, PlanetsData } from "../types";

type StateType = {
    data: PlanetsData[],
    count: number,
    detailItem: PlanetsData,
    searchText: string,
    schema?: JSONSchema7,
};

const initialState: StateType = {
    data: [],
    count: 0,
    detailItem: {} as PlanetsData,
    searchText: "",
    schema: {},
};

export const planetsReducer = (state: StateType = initialState, action: Action): StateType => {
    switch (action.type) {
        case GET_PLANETS_FETCH_REQUEST: 
            return initialState;
        case GET_PLANETS_FETCH_SUCCESS: 
            return {
                ...state,
                ...action.payload,
            };
        case GET_PLANETS_FETCH_ERROR: 
            return state;
        case GET_PLANETS_ITEM_BY_ID_FETCH_REQUEST: 
            return initialState;
        case GET_PLANETS_ITEM_BY_ID_FETCH_SUCCESS:
            return {
                ...state,
                ...action.payload,
            };
        case GET_PLANET_SCHEMA_FETCH_SUCCESS:
            return {
                ...state,
                ...action.payload,
            };
        case PLANETS_UPDATE:
            return {
                ...state,
                detailItem: mergeItemWithLocal(state.detailItem, cardTypes.PLANETS),
            };
        default:
        return state;
    }
};
