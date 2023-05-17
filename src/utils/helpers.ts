import { JSONSchema7 } from "json-schema";
import { isEmpty } from "lodash";

import { CardData, CardsData } from "../store/types";
import LocalStorageService from "./localStorageHepler";

interface CustomJSONSchema extends JSONSchema7 {
    name?: string;
}

interface IndexedCardData {
    [key: string]: any;
}

export const getItemImage = (item: string, number: string) => `https://starwars-visualguide.com/assets/img/${item}/${number}.jpg`;
export const getIdFromUrl = (url: string) => url.split("/")[url.split("/").length - 2] || "1";
export const getCardTypeFromUrl = (url: string) => url.split("/")[url.split("/").length - 3] || "people";

export const updateData = (data: CardsData) => data.map((item) => ({
    ...item,
    id: getIdFromUrl(item.url),
    cardType: getCardTypeFromUrl(item.url),
}));

export const updateItemData = (data: CardData) => ({
    ...data,
    id: getIdFromUrl(data.url),
    cardType: getCardTypeFromUrl(data.url),
});

export const mergeItemWithLocal = (data: CardData, entityKey: string) => {
    const localStorageService = new LocalStorageService();
    const localData = localStorageService.getItem<IndexedCardData>(entityKey) as IndexedCardData;

    if(isEmpty(localData)) return data;

    return  isEmpty(localData[data.id]) ? data : localData[data.id];
};

export const mergeDataWithLocal = (data: CardData[], entityKey: string) => {
    const localStorageService = new LocalStorageService();
    const localData = localStorageService.getItem<IndexedCardData>(entityKey) as IndexedCardData;

    if(isEmpty(localData)) return data;

    return data.map(item => {
        if (localData[item.id]) {
            return localData[item.id];
        }
        return item;
    });
};

export const addQuery = (queries: { [key: string]: string }) => {
    if (!queries) return "";

    const queriesList: string[] = Object.keys(queries);

    let queriesLine = "";

    queriesList.map((item: string, id: number) => 
        queriesLine += id === 0 
            ? `?${item}=${queries[item]}`
            : `&${item}=${queries[item]}`
        );
    
    return queriesLine;
};

export const updateCardDetailsData = (data: CardData, config: string[]) => {
    if (!data) return data;

    let response = {};

    const dataKeysByFilterConfig = Object.keys(data).filter((item: string) => config.includes(item));

    dataKeysByFilterConfig.forEach((item) => {
        response = {...response, [item]: data[item as keyof CardData]};
    });

    return response;
};

export const updateSchema = (schema: JSONSchema7, requredleFields: string[]) => {
    let properties = {} as CustomJSONSchema;

    requredleFields.forEach((item: string) => {
        properties = {
            ...properties,
            [item]: schema.properties?.[item],
        };
    });

    const { name, ...updateProperties } = properties; // removed name field for stable edit service and stable search

    return {
        ...schema,
        properties: updateProperties,
        required: requredleFields,
        title: "",
        description: "",
    };
};
