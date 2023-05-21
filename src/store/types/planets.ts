import { GeneralPageData } from "./common";

export interface PlanetsData extends GeneralPageData{
    rotation_period: string,
    orbital_period: string,
    diameter: string,
    climate: string,
    gravity: string,
    terrain: string,
    surface_water: string,
    population: string,
}

export interface PlanetsResponse {
    data: {
        count: string,
        next: string,
        previous: string,
        results: PlanetsData[],
    }
}
export interface PlanetsItemResponse {
    data: PlanetsData,
}

