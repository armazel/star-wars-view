import { takeEvery, call, put } from "redux-saga/effects";
import axios from "axios";
import { SagaIterator } from "redux-saga";

import {
    GET_PLANETS_FETCH_REQUEST,
    GET_PLANETS_ITEM_BY_ID_FETCH_REQUEST,
    loadPlanetItemByIdError,
    loadPlanetItemByIdSuccess,
    loadPlanetsDataError,
    loadPlanetsDataSuccess,
} from "../actions";

import { API_URL } from "../../const/apiConstants";
import { updateData, updateItemData } from "../../utils/helpers";
import { HandleLoadSagaParams, PlanetsData, PlanetsItemResponse, PlanetsResponse } from "../types";

function* handleLoadPlanetsSaga({
    payload
}: HandleLoadSagaParams): SagaIterator {
    try {
        const response: PlanetsResponse = yield call(axios.get, API_URL.getPlanets(payload));

        yield put(loadPlanetsDataSuccess({
            data: updateData(response.data.results),
            count: response.data.count,
            searchText: payload?.search,
        }));
    } catch (error) {
        yield put(loadPlanetsDataError(error));
    }
}

function* handleLoadPeopleItemByIdSaga({ payload }: { id: string }): SagaIterator {

    try {
        const response: PlanetsItemResponse = yield call(axios.get, API_URL.getPlanetItemById(payload.id));

        yield put(loadPlanetItemByIdSuccess({
            detailItem: updateItemData(response.data as PlanetsData),
        }));
    } catch (error) {
        yield put(loadPlanetItemByIdError(error));
    }
}

export function* watchLoadPlanetsData() {
    yield takeEvery(GET_PLANETS_FETCH_REQUEST, handleLoadPlanetsSaga);
    yield takeEvery(GET_PLANETS_ITEM_BY_ID_FETCH_REQUEST, handleLoadPeopleItemByIdSaga);
}
