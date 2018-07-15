import * as actionTypes from "./actionTypes";

export const toggle = (category, topic) => {
    return {
        type: actionTypes.TOGGLE_MODAL,
        payload: category,
        topic: topic
    };
};
