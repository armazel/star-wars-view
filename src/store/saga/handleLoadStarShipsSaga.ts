import { takeEvery, call, put } from "redux-saga/effects";
import axios from "axios";

import { 
    GET_PLANETS_FETCH_REQUEST,
    loadStarShipsDataError,
    loadStarShipsDataSuccess,
} from "../actions";

import { API_URL } from "../../const/apiConstants";

function* handleLoadStarShipsSaga(): any {
    try {
        const response = yield call(axios.get, API_URL.loadPeopleData);
        yield put(loadStarShipsDataSuccess(response.data));
    } catch (error) {
        yield put(loadStarShipsDataError(error));
    }
}

export function* watchLoadStarShipsData() {
    yield takeEvery(GET_PLANETS_FETCH_REQUEST, handleLoadStarShipsSaga);
}
