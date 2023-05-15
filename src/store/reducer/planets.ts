import { 
    GET_PLANETS_FETCH_REQUEST,
    GET_PLANETS_FETCH_SUCCESS,
    GET_PLANETS_FETCH_ERROR,
} from "../actions";
import { Action } from "../types";

type StateType = {};

const initialState: StateType = {};

export const planetsReducer = (state: StateType = initialState, action: Action): StateType => {
    switch (action.type) {
        case GET_PLANETS_FETCH_REQUEST: 
            return state;
        case GET_PLANETS_FETCH_SUCCESS: 
            return state;
        case GET_PLANETS_FETCH_ERROR: 
            return state;
        default:
        return state;
    }
};
