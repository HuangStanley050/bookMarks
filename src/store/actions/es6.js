import * as actionTypes from "./actionTypes";

export const addCategory = (name) => {
    return {
        type: actionTypes.ADD_CATEGORY_ES6,
        name: name
    };
};

