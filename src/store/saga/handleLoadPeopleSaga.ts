import { takeEvery, call, put } from "redux-saga/effects";
import axios from "axios";

import { 
  GET_PEOPLE_FETCH_REQUEST,
  loadPeopleDataError,
  loadPeopleDataSuccess,
} from "../actions";

import { API_URL } from "../../const/apiConstants";

function* handleLoadPeopleSaga(): any {
  try {
    const response = yield call(axios.get, API_URL.loadPeopleData);
    yield put(loadPeopleDataSuccess(response.data));
  } catch (error) {
    yield put(loadPeopleDataError(error));
  }
}

export function* watchLoadPeopleData() {
  yield takeEvery(GET_PEOPLE_FETCH_REQUEST, handleLoadPeopleSaga);
}