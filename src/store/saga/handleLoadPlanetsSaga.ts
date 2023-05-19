import { takeEvery, call, put } from "redux-saga/effects";
import axios from "axios";
import { SagaIterator } from "redux-saga";

import { 
    GET_PLANETS_FETCH_REQUEST,
    loadPlanetsDataError,
    loadPlanetsDataSuccess,
} from "../actions";

import { API_URL } from "../../const/apiConstants";
import { updateData } from "../../utils/helpers";
import { HandleLoadSagaParams } from "../types";

function* handleLoadPlanetsSaga({
    payload
}: HandleLoadSagaParams): SagaIterator {
    try {
        const response = yield call(axios.get, API_URL.getPlanets(payload));

        yield put(loadPlanetsDataSuccess({
            data: updateData(response.data.results),
            count: response.data.count,
        }));
    } catch (error) {
        yield put(loadPlanetsDataError(error));
    }
}

export function* watchLoadPlanetsData() {
    yield takeEvery(GET_PLANETS_FETCH_REQUEST, handleLoadPlanetsSaga);
}
