import { takeEvery, call, put } from "redux-saga/effects";
import axios from "axios";

import { 
    GET_PLANETS_FETCH_REQUEST,
    loadPlanetsDataError,
    loadPlanetsDataSuccess,
} from "../actions";

import { API_URL } from "../../const/apiConstants";

function* handleLoadPlanetsSaga(): any {
    try {
        const response = yield call(axios.get, API_URL.loadPeopleData);
        yield put(loadPlanetsDataSuccess(response.data));
    } catch (error) {
        yield put(loadPlanetsDataError(error));
    }
}

export function* watchLoadPlanetsData() {
    yield takeEvery(GET_PLANETS_FETCH_REQUEST, handleLoadPlanetsSaga);
}
