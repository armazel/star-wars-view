export interface Action {
    type: string;
    payload?: any;
}

export type CardType = "people" | "starships" | "planets";
export type LoadCardParams = {
    page?: number,
    search?: string,
};

export type CardData = {
    id: string,
    cardType: string,
    name: string,
    url: string,
};
export type CardsData = CardData[];

export interface GeneralPageData {
    id: string,
    cardType: CardType,
    name: string,
    url: string,
}

export interface HandleLoadSagaParams {
    payload: LoadCardParams,
    type: string,
}
