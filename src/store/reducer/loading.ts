import { 
    GET_PEOPLE_FETCH_SUCCESS,
    GET_PEOPLE_FETCH_REQUEST,
    GET_PLANETS_FETCH_REQUEST,
    GET_PLANETS_FETCH_SUCCESS,
    GET_STAR_SHIPS_FETCH_REQUEST,
    GET_STAR_SHIPS_FETCH_SUCCESS,
} from "../actions";
import { Action } from "../types";

type StateType = {
    isLoading: boolean,
};

const initialState: StateType = {
    isLoading: false,
};

export const loadingReducer = (state: StateType = initialState, action: Action): StateType => {
    switch (action.type) {
        case GET_STAR_SHIPS_FETCH_REQUEST:
        case GET_PLANETS_FETCH_REQUEST:
        case GET_PEOPLE_FETCH_REQUEST: 
            return {
                ...state,
                isLoading: true,
            };
        case GET_PEOPLE_FETCH_SUCCESS:
        case GET_PLANETS_FETCH_SUCCESS:
        case GET_STAR_SHIPS_FETCH_SUCCESS:
            return {
                ...state,
                isLoading: false,
            };
        default:
        return state;
    }
};
