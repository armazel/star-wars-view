export interface Action {
    type: string;
    payload?: any;
}

export type LoadCardParams = {
    page?: number,
    search?: string,
    id?: string,
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
    cardType: string,
    name: string,
    url: string,
}

export interface HandleLoadSagaParams {
    payload: LoadCardParams,
    type: string,
}

export interface CardDetailsRenderConfigType {
    requiredFields: string[],
}

export interface EntityLocalStorageData {
    [key: string]: {
        [key: string]: CardData,
    }
}
