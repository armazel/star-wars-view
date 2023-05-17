import { GeneralPageData } from "./common";

export interface PeopleData extends GeneralPageData {
    birth_year: string,
    height: string,
    mass: string,
}

export interface PeopleResponse {
    data: {
        count: string,
        next: string,
        previous: string,
        results: PeopleData[],
    }
}

export interface PeopleItemResponse {
    data: PeopleData,
}
