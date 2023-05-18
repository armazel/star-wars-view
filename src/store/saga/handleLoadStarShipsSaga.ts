import { takeEvery, call, put } from "redux-saga/effects";
import axios from "axios";

import { 
    GET_STAR_SHIPS_FETCH_REQUEST,
    loadStarShipsDataError,
    loadStarShipsDataSuccess,
} from "../actions";

import { API_URL } from "../../const/apiConstants";
import { SagaIterator } from "redux-saga";
import { updateData } from "../../utils/helpers";

type handleLoadStarShipsSagaParams = {
    payload: {
        currentPage: string,
    },
    type: string,
};

function* handleLoadStarShipsSaga({
    payload: {
        currentPage,
    }
}: handleLoadStarShipsSagaParams): SagaIterator {
    try {
        const response = yield call(axios.get, API_URL.getStarShips(currentPage));
        yield put(loadStarShipsDataSuccess({
            data: updateData(response.data.results),
            count: response.data.count,
        }));
    } catch (error) {
        yield put(loadStarShipsDataError(error));
    }
}

export function* watchLoadStarShipsData() {
    yield takeEvery(GET_STAR_SHIPS_FETCH_REQUEST, handleLoadStarShipsSaga);
}
