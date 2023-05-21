import { createSelector } from "reselect";

import { RootState } from "../store";
import { PeopleData } from "../types";

export const getPeople = (state: RootState): PeopleData[] => state.people?.data;

export const getPeopleTotalItems = (state: RootState): number => state.people.count;

export const getPeopleItemId = (state: RootState, props: {id: string | null | undefined}) => props.id;

export const getPeopleDetailsItem = (state: RootState): PeopleData => state.people?.detailItem;

export const getPeopleSearchData = (state: RootState): string => state.people?.searchText;

export const getPeopleSchema = (state: RootState) => state.people?.schema;

export const getPeopleItemById = createSelector(
    getPeople,
    getPeopleDetailsItem,
    getPeopleItemId,
    (data, detailsItem, id) => data.length
        ? data.find(dataItem => dataItem.id === id)
        : detailsItem,
);
