import { JSONSchema7 } from "json-schema";

import { 
    GET_PEOPLE_FETCH_REQUEST,
    GET_PEOPLE_FETCH_SUCCESS,
    GET_PEOPLE_FETCH_ERROR,
    GET_PEOPLE_ITEM_BY_ID_FETCH_SUCCESS,
    GET_PEOPLE_ITEM_BY_ID_FETCH_REQUEST,
    GET_PEOPLE_SCHEMA_FETCH_SUCCESS,
} from "../actions";
import { PeopleData, Action } from "../types";

type StateType = {
    data: PeopleData[],
    count: number,
    detailItem: PeopleData,
    searchText: string,
    schema?: JSONSchema7,
};

const initialState: StateType = {
    data: [],
    count: 0,
    detailItem: {} as PeopleData,
    searchText: "",
    schema: {},
};

export const peopleReducer = (state: StateType = initialState, action: Action): StateType => {
    switch (action.type) {
        case GET_PEOPLE_FETCH_REQUEST: 
            return initialState;
        case GET_PEOPLE_FETCH_SUCCESS: 
            return {
                ...state,
                ...action.payload,
            };
        case GET_PEOPLE_FETCH_ERROR: 
            return state;
        case GET_PEOPLE_ITEM_BY_ID_FETCH_REQUEST:
            return initialState;
        case GET_PEOPLE_ITEM_BY_ID_FETCH_SUCCESS:
            return {
                ...state,
                ...action.payload,
            };
        case GET_PEOPLE_SCHEMA_FETCH_SUCCESS:
            return {
                ...state,
                ...action.payload,
            };
        default:
        return state;
    }
};
