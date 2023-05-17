import { takeEvery, call, put } from "redux-saga/effects";
import axios from "axios";
import { SagaIterator } from "redux-saga";

import {
    GET_PLANETS_FETCH_REQUEST,
    GET_PLANETS_ITEM_BY_ID_FETCH_REQUEST,
    GET_PLANET_SCHEMA_FETCH_REQUEST,
    loadPlanetItemByIdError,
    loadPlanetItemByIdSuccess,
    loadPlanetSchemaError,
    loadPlanetSchemaSuccess,
    loadPlanetsDataError,
    loadPlanetsDataSuccess,
} from "../actions";

import { API_URL } from "../../const/apiConstants";
import { mergeDataWithLocal, mergeItemWithLocal, updateData, updateItemData, updateSchema } from "../../utils/helpers";
import { HandleLoadSagaParams, PlanetsData, PlanetsItemResponse, PlanetsResponse } from "../types";
import { requiredPlanetsFields } from "../../pages/Planets/PlanetDetails/requiredPlanetsFields";
import { cardTypes } from "../../const/cardType";

function* handleLoadPlanetsSaga({
    payload
}: HandleLoadSagaParams): SagaIterator {
    try {
        const response: PlanetsResponse = yield call(axios.get, API_URL.getPlanets(payload));

        yield put(loadPlanetsDataSuccess({
            data: mergeDataWithLocal(updateData(response.data.results), cardTypes.PLANETS),
            count: response.data.count,
            searchText: payload?.search,
        }));
    } catch (error) {
        yield put(loadPlanetsDataError(error));
    }
}

function* handleLoadPlanetItemByIdSaga({ payload }: HandleLoadSagaParams): SagaIterator {

    try {
        const response: PlanetsItemResponse = yield call(axios.get, API_URL.getPlanetItemById(payload.id as string));

        yield put(loadPlanetItemByIdSuccess({
            detailItem: mergeItemWithLocal(updateItemData(response.data as PlanetsData), cardTypes.PLANETS),
        }));
    } catch (error) {
        yield put(loadPlanetItemByIdError(error));
    }
}

function* handleLoadPlanetSchemaaga(): SagaIterator {
    try {
        const response: any = yield call(axios.get, API_URL.getPlanetsSchema);

        yield put(loadPlanetSchemaSuccess({
            schema: updateSchema(response.data, requiredPlanetsFields),
        }));
    } catch (error) {
        yield put(loadPlanetSchemaError(error));
    }
}

export function* watchLoadPlanetsData() {
    yield takeEvery(GET_PLANETS_FETCH_REQUEST, handleLoadPlanetsSaga);
    yield takeEvery(GET_PLANETS_ITEM_BY_ID_FETCH_REQUEST, handleLoadPlanetItemByIdSaga);
    yield takeEvery(GET_PLANET_SCHEMA_FETCH_REQUEST, handleLoadPlanetSchemaaga);
}
