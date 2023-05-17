import { createAction } from "redux-actions";

import { LoadCardParams } from "../types";

export const GET_PEOPLE_FETCH_REQUEST
    = "people/load/FETCH_REQUEST";
export const GET_PEOPLE_FETCH_SUCCESS
    = "people/load/FETCH_SUCCESS";
export const GET_PEOPLE_FETCH_ERROR
    = "people/load/FETCH_ERROR";

export const GET_PEOPLE_ITEM_BY_ID_FETCH_REQUEST
    = "peopleItem/load/FETCH_REQUEST";
export const GET_PEOPLE_ITEM_BY_ID_FETCH_SUCCESS
    = "peopleItem/load/FETCH_SUCCESS";
export const GET_PEOPLE_ITEM_BY_ID_FETCH_ERROR
    = "peopleItem/load/FETCH_ERROR";
export const PEOPLE_UPDATE
    = "peopleItem/update";

export const GET_PEOPLE_SCHEMA_FETCH_REQUEST
    = "peopleSchema/load/FETCH_REQUEST";
export const GET_PEOPLE_SCHEMA_FETCH_SUCCESS
    = "peopleSchema/load/FETCH_SUCCESS";
export const GET_PEOPLE_SCHEMA_FETCH_ERROR
    = "peopleSchema/load/FETCH_ERROR";

export const loadPeopleData = createAction(
    GET_PEOPLE_FETCH_REQUEST,
    (params: LoadCardParams) => (params)
);
export const loadPeopleDataSuccess = createAction(GET_PEOPLE_FETCH_SUCCESS);
export const loadPeopleDataError = createAction(GET_PEOPLE_FETCH_ERROR);

export const loadPeopleItemById = createAction(
    GET_PEOPLE_ITEM_BY_ID_FETCH_REQUEST,
    (id: string) => ({ id })
);
export const loadPeopleItemByIdSuccess = createAction(GET_PEOPLE_ITEM_BY_ID_FETCH_SUCCESS);
export const loadPeopleItemByIdError = createAction(GET_PEOPLE_ITEM_BY_ID_FETCH_ERROR);

export const loadPeopleSchema = createAction(GET_PEOPLE_SCHEMA_FETCH_REQUEST);
export const loadPeopleSchemaSuccess = createAction(GET_PEOPLE_SCHEMA_FETCH_SUCCESS);
export const loadPeopleSchemaError = createAction(GET_PEOPLE_SCHEMA_FETCH_ERROR);

export const peopleDataUpdate = createAction(PEOPLE_UPDATE);
