import { all } from "redux-saga/effects";
import { watchLoadPeopleData } from "./handleLoadPeopleSaga";
import { watchLoadPlanetsData } from "./handleLoadPlanetsSaga";
import { watchLoadStarShipsData } from "./handleLoadStarShipsSaga";

export default function* rootSaga() {
    yield all([
        watchLoadPeopleData(),
        watchLoadPlanetsData(),
        watchLoadStarShipsData(),
    ]);
}
