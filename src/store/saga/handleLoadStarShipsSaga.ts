import { takeEvery, call, put } from "redux-saga/effects";
import axios from "axios";

import {
    GET_STAR_SHIPS_FETCH_REQUEST,
    GET_STAR_SHIP_ITEM_BY_ID_FETCH_REQUEST,
    loadStarShipItemByIdError,
    loadStarShipItemByIdSuccess,
    loadStarShipsDataError,
    loadStarShipsDataSuccess,
} from "../actions";

import { API_URL } from "../../const/apiConstants";
import { SagaIterator } from "redux-saga";
import { updateData, updateItemData } from "../../utils/helpers";
import { HandleLoadSagaParams, StarShipItemResponse, StarShipsData } from "../types";


function* handleLoadStarShipsSaga({
    payload
}: HandleLoadSagaParams): SagaIterator {
    try {
        const response = yield call(axios.get, API_URL.getStarShips(payload));
        yield put(loadStarShipsDataSuccess({
            data: updateData(response.data.results),
            count: response.data.count,
        }));
    } catch (error) {
        yield put(loadStarShipsDataError(error));
    }
}

function* handleLoadStarShipItemByIdSaga({ payload }: { id: string }): SagaIterator {

    try {
        const response: StarShipItemResponse = yield call(axios.get, API_URL.getStarShipItemById(payload.id));

        yield put(loadStarShipItemByIdSuccess({
            detailItem: updateItemData(response.data as StarShipsData),
        }));
    } catch (error) {
        yield put(loadStarShipItemByIdError(error));
    }
}

export function* watchLoadStarShipsData() {
    yield takeEvery(GET_STAR_SHIPS_FETCH_REQUEST, handleLoadStarShipsSaga);
    yield takeEvery(GET_STAR_SHIP_ITEM_BY_ID_FETCH_REQUEST, handleLoadStarShipItemByIdSaga)
}
