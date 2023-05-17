import { takeEvery, call, put } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import axios from "axios";

import { 
  GET_PEOPLE_FETCH_REQUEST,
  GET_PEOPLE_ITEM_BY_ID_FETCH_REQUEST,
  GET_PEOPLE_SCHEMA_FETCH_REQUEST,
  loadPeopleDataError,
  loadPeopleDataSuccess,
  loadPeopleItemByIdError,
  loadPeopleItemByIdSuccess,
  loadPeopleSchemaError,
  loadPeopleSchemaSuccess,
} from "../actions";

import { API_URL } from "../../const/apiConstants";
import { HandleLoadSagaParams, PeopleData, PeopleItemResponse, PeopleResponse } from "../types";
import { mergeDataWithLocal, mergeItemWithLocal, updateData, updateItemData, updateSchema } from "../../utils/helpers";
import { requredPeopleFields } from "../../pages/People/PeopleDetails/requiredPeopleFields";
import { cardTypes } from "../../const/cardType";

function* handleLoadPeopleSaga({ payload }: HandleLoadSagaParams): SagaIterator {

  try {
    const response: PeopleResponse = yield call(axios.get, API_URL.getPeopleData(payload));

    yield put(loadPeopleDataSuccess({
      data: mergeDataWithLocal(updateData(response.data.results), cardTypes.PEOPLE),
      count: response.data.count,
      searchText: payload?.search,
    }));
  } catch (error) {
    yield put(loadPeopleDataError(error));
  }
}

function* handleLoadPeopleItemByIdSaga({ payload }: HandleLoadSagaParams): SagaIterator {

  try {
    const response: PeopleItemResponse = yield call(axios.get, API_URL.getPeopleItemById(payload.id as string));

    yield put(loadPeopleItemByIdSuccess({
      detailItem: mergeItemWithLocal(updateItemData(response.data as PeopleData), cardTypes.PEOPLE),
    }));
  } catch (error) {
    yield put(loadPeopleItemByIdError(error));
  }
}

function* handleLoadPeopleSchemaaga(): SagaIterator {

  try {
    const response: any = yield call(axios.get, API_URL.getPeopleSchema);

    yield put(loadPeopleSchemaSuccess({
      schema: updateSchema(response.data, requredPeopleFields),
    }));
  } catch (error) {
    yield put(loadPeopleSchemaError(error));
  }
}

export function* watchLoadPeopleData() {
  yield takeEvery(GET_PEOPLE_FETCH_REQUEST, handleLoadPeopleSaga);
  yield takeEvery(GET_PEOPLE_ITEM_BY_ID_FETCH_REQUEST, handleLoadPeopleItemByIdSaga);
  yield takeEvery(GET_PEOPLE_SCHEMA_FETCH_REQUEST, handleLoadPeopleSchemaaga);
}
