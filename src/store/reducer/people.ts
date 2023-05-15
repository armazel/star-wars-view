import { 
    GET_PEOPLE_FETCH_REQUEST,
    GET_PEOPLE_FETCH_SUCCESS,
    GET_PEOPLE_FETCH_ERROR,
} from "../actions";
import { Action } from "../types";

type StateType = {};

const initialState: StateType = {};

export const peopleReducer = (state: StateType = initialState, action: Action): StateType => {
    switch (action.type) {
        case GET_PEOPLE_FETCH_REQUEST: 
            return state;
        case GET_PEOPLE_FETCH_SUCCESS: 
            return state;
        case GET_PEOPLE_FETCH_ERROR: 
            return state;
        default:
        return state;
    }
};
