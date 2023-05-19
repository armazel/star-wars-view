import { createAction } from "redux-actions";

import { ApiParams } from "../../const/apiConstants";

export const GET_PEOPLE_FETCH_REQUEST
    = "people/load/FETCH_REQUEST";
export const GET_PEOPLE_FETCH_SUCCESS
    = "people/load/FETCH_SUCCESS";
export const GET_PEOPLE_FETCH_ERROR
    = "people/load/FETCH_ERROR";

export const loadPeopleData = createAction(
    GET_PEOPLE_FETCH_REQUEST,
    (params: ApiParams) => (params)
);

export const loadPeopleDataSuccess = createAction(GET_PEOPLE_FETCH_SUCCESS);
export const loadPeopleDataError = createAction(GET_PEOPLE_FETCH_ERROR);
