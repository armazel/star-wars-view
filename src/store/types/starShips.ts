import { GeneralPageData } from "./common";

export interface StarShipsData extends GeneralPageData{
    birth_year: string,
    height: string,
    mass: string,
}

export interface StarShipsResponse {
    data: {
        count: string,
        next: string,
        previous: string,
        results: StarShipsData[],
    }
}

export interface StarShipItemResponse {
    data: StarShipsData,
}
