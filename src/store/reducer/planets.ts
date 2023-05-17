import { 
    GET_PLANETS_FETCH_REQUEST,
    GET_PLANETS_FETCH_SUCCESS,
    GET_PLANETS_FETCH_ERROR,
} from "../actions";
import { Action } from "../types";

export type StateType = {
    name: string,
    rotation_period: string,
    orbital_period: string,
    diameter: string,
    climate: string,
    gravity: string,
    terrain: string,
    surface_water: string,
    population: string,
    residents: string [],
    films: string [],
};

const initialState: StateType = {
    name: "",
    rotation_period: "",
    orbital_period: "",
    diameter: "",
    climate: "",
    gravity: "",
    terrain: "",
    surface_water: "",
    population: "",
    residents: [],
    films: [],
};

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
