import { CardsData } from "../store/types";

export const getItemImage = (item: string, number: string) => `https://starwars-visualguide.com/assets/img/${item}/${number}.jpg`;
export const getIdFromUrl = (url: string) => url.split("/")[url.split("/").length - 2] || "1";
export const getIdFromCardType = (url: string) => url.split("/")[url.split("/").length - 3] || "people";

export const updateData = (data: CardsData) => data.map((item) => ({
    ...item,
    id: getIdFromUrl(item.url),
    cardType: getIdFromCardType(item.url),
}));
