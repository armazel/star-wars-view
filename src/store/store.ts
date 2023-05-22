import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";

import {
  peopleReducer,
  planetsReducer,
  starShipsReducer,
  loadingReducer,
} from "./reducer";
import rootSaga from "./saga";

const rootReducer = combineReducers({
  planets: planetsReducer,
  people: peopleReducer,
  starShips: starShipsReducer,
  loading: loadingReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
