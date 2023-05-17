import { createAction } from "redux-actions";

export const RESSET_ERROR
    = "error/reset";

export const resetError = createAction(RESSET_ERROR);
