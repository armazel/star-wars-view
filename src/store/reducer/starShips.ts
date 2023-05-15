import { 
    GET_STAR_SHIPS_FETCH_REQUEST,
    GET_STAR_SHIPS_FETCH_SUCCESS,
    GET_STAR_SHIPS_FETCH_ERROR,
} from "../actions";
import { Action } from "../types";

type StateType = {};

const initialState: StateType = {};

export const starShipsReducer = (state: StateType = initialState, action: Action): StateType => {
    switch (action.type) {
        case GET_STAR_SHIPS_FETCH_REQUEST: 
            return state;
        case GET_STAR_SHIPS_FETCH_SUCCESS: 
            return state;
        case GET_STAR_SHIPS_FETCH_ERROR: 
            return state;
        default:
        return state;
    }
};
