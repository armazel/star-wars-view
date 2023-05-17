import { 
    GET_PEOPLE_FETCH_REQUEST,
    GET_PEOPLE_FETCH_SUCCESS,
    GET_PEOPLE_FETCH_ERROR,
} from "../actions";
import { Action } from "../types";

type StateType = {
    name: string,
    height: string,
    mass: string,
    hair_color: string,
    skin_color: string,
    eye_color: string,
    birth_year: string,
    gender: string,
};

const initialState: StateType = {
    name: "",
    height: "",
    mass: "",
    hair_color: "",
    skin_color: "",
    eye_color: "",
    birth_year: "",
    gender: "",
};

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
