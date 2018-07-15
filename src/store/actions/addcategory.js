import * as actionTypes from "./actionTypes";

export const addCategory = (name, topic) => {
    return {
        type: actionTypes.ADD_CATEGORY,
        name: name,
        topic: topic
    };
};
