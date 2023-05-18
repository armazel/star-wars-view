import { takeEvery, call, put } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import axios from "axios";

import { 
  GET_PEOPLE_FETCH_REQUEST,
  loadPeopleDataError,
  loadPeopleDataSuccess,
} from "../actions";

import { API_URL } from "../../const/apiConstants";
import { PeopleResponse } from "../types";
import { updateData } from "../../utils/helpers";

type handleLoadPeopleSagaParams = {
  payload: {
    currentPage: string,
  },
  type: string,
};

function* handleLoadPeopleSaga({
  payload: {
    currentPage,
  }
}: handleLoadPeopleSagaParams): SagaIterator {

  try {
    const response: PeopleResponse = yield call(axios.get, API_URL.getPeopleData(currentPage));

    yield put(loadPeopleDataSuccess({
      data: updateData(response.data.results),
      count: response.data.count,
    }));
  } catch (error) {
    yield put(loadPeopleDataError(error));
  }
}

export function* watchLoadPeopleData() {
  yield takeEvery(GET_PEOPLE_FETCH_REQUEST, handleLoadPeopleSaga);
}