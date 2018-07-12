import * as actionTypes from "./actionTypes";

export const toggle = (category) => {
    return {
        type: actionTypes.TOGGLE_MODAL,
        payload: category
    };
};
