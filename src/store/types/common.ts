import { ApiParams } from "../../const/apiConstants";
import { PeopleData } from "./people";
import { PlanetsData } from "./planets";
import { StarShipsData } from "./starShips";

export interface Action {
    type: string;
    payload?: any;
}

export type CardType = "people" | "starships" | "planets";

export type CardData = PeopleData | PlanetsData | StarShipsData;
export type CardsData = PeopleData[] | PlanetsData[] | StarShipsData[];

export interface GeneralPageData {
    id: string,
    cardType: CardType,
    name: string,
    url: string,
}

export interface HandleLoadSagaParams {
    payload: ApiParams,
    type: string,
}
