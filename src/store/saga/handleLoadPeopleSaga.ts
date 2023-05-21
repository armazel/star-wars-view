import { takeEvery, call, put } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import axios from "axios";

import { 
  GET_PEOPLE_FETCH_REQUEST,
  GET_PEOPLE_ITEM_BY_ID_FETCH_REQUEST,
  loadPeopleDataError,
  loadPeopleDataSuccess,
  loadPeopleItemByIdError,
  loadPeopleItemByIdSuccess,
} from "../actions";

import { API_URL } from "../../const/apiConstants";
import { HandleLoadSagaParams, LoadCardParams, PeopleData, PeopleResponse } from "../types";
import { updateData, updateItemData } from "../../utils/helpers";

function* handleLoadPeopleSaga({ payload }: HandleLoadSagaParams): SagaIterator {

  try {
    const response: PeopleResponse = yield call(axios.get, API_URL.getPeopleData(payload));

    yield put(loadPeopleDataSuccess({
      data: updateData(response.data.results),
      count: response.data.count,
    }));
  } catch (error) {
    yield put(loadPeopleDataError(error));
  }
}

function* handleLoadPeopleItemByIdSaga({ payload }: { id: string }): SagaIterator {

  try {
    const response: PeopleResponse = yield call(axios.get, API_URL.getPeopleItemById(payload.id));

    yield put(loadPeopleItemByIdSuccess({
      detailItem: updateItemData(response.data as PeopleData),
    }));
  } catch (error) {
    yield put(loadPeopleItemByIdError(error));
  }
}

export function* watchLoadPeopleData() {
  yield takeEvery(GET_PEOPLE_FETCH_REQUEST, handleLoadPeopleSaga);
  yield takeEvery(GET_PEOPLE_ITEM_BY_ID_FETCH_REQUEST, handleLoadPeopleItemByIdSaga);
}
