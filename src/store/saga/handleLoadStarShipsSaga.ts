import { takeEvery, call, put } from "redux-saga/effects";
import axios from "axios";

import {
    GET_STAR_SHIPS_FETCH_REQUEST,
    GET_STAR_SHIP_ITEM_BY_ID_FETCH_REQUEST,
    GET_STAR_SHIP_SCHEMA_FETCH_REQUEST,
    loadStarShipItemByIdError,
    loadStarShipItemByIdSuccess,
    loadStarShipSchemaError,
    loadStarShipSchemaSuccess,
    loadStarShipsDataError,
    loadStarShipsDataSuccess,
} from "../actions";

import { API_URL } from "../../const/apiConstants";
import { SagaIterator } from "redux-saga";
import { mergeDataWithLocal, mergeItemWithLocal, updateData, updateItemData, updateSchema } from "../../utils/helpers";
import { HandleLoadSagaParams, LoadCardParams, StarShipItemResponse, StarShipsData } from "../types";
import { requiredStarShipsFields } from "../../pages/StarShips/StarShipsDetails/requiredStarShipsFields";
import { cardTypes } from "../../const/cardType";


function* handleLoadStarShipsSaga({
    payload
}: HandleLoadSagaParams): SagaIterator {
    try {
        const response = yield call(axios.get, API_URL.getStarShips(payload));
        yield put(loadStarShipsDataSuccess({
            data: mergeDataWithLocal(updateData(response.data.results), cardTypes.STAR_SHIPS),
            count: response.data.count,
            searchText: payload?.search,
        }));
    } catch (error) {
        yield put(loadStarShipsDataError(error));
    }
}

function* handleLoadStarShipItemByIdSaga({ payload }: HandleLoadSagaParams): SagaIterator {

    try {
        const response: StarShipItemResponse = yield call(axios.get, API_URL.getStarShipItemById(payload.id as string));

        yield put(loadStarShipItemByIdSuccess({
            detailItem: mergeItemWithLocal(updateItemData(response.data as StarShipsData), cardTypes.STAR_SHIPS),
        }));
    } catch (error) {
        yield put(loadStarShipItemByIdError(error));
    }
}

function* handleLoadStarShipSchemaSaga(): SagaIterator {

    try {
        const response: any = yield call(axios.get, API_URL.getStarShipsSchema);

        yield put(loadStarShipSchemaSuccess({
            schema: updateSchema(response.data, requiredStarShipsFields),
        }));
    } catch (error) {
        yield put(loadStarShipSchemaError(error));
    }
}

export function* watchLoadStarShipsData() {
    yield takeEvery(GET_STAR_SHIPS_FETCH_REQUEST, handleLoadStarShipsSaga);
    yield takeEvery(GET_STAR_SHIP_ITEM_BY_ID_FETCH_REQUEST, handleLoadStarShipItemByIdSaga);
    yield takeEvery(GET_STAR_SHIP_SCHEMA_FETCH_REQUEST, handleLoadStarShipSchemaSaga);
}
