import { 
    GET_STAR_SHIPS_FETCH_REQUEST,
    GET_STAR_SHIPS_FETCH_SUCCESS,
    GET_STAR_SHIPS_FETCH_ERROR,
} from "../actions";
import { Action } from "../types";

type StateType = {
    name: string,
    model: string,
    manufacturer: string,
    cost_in_credits: string,
    length: string,
    max_atmosphering_speed: string,
    crew: string,
    passengers: string,
    cargo_capacity: string,
    hyperdrive_rating: string,
    starship_class: string,
};

const initialState: StateType = {
    name: "",
    model: "",
    manufacturer: "",
    cost_in_credits: "",
    length: "",
    max_atmosphering_speed: "",
    crew: "",
    passengers: "",
    cargo_capacity: "",
    hyperdrive_rating: "",
    starship_class: "",
};

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
