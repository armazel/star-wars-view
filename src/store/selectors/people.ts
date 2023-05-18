import { RootState } from "../store";
import { PeopleData } from "../types";

export const getPeople = (state: RootState): PeopleData[] => state.people?.data;
