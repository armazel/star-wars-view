import axios from "axios";

import { loadPeopleData } from "../store/actions";
import { AppDispatch } from "../store/store";

export const fetchPeopleData = () => async (dispatch: AppDispatch) => {
    try {
        const response = await axios.get("/people");
        dispatch(loadPeopleDataSuccess(response.data));
    } catch (error) {
        dispatch(loadPeopleDataError(response.data));
    }
};