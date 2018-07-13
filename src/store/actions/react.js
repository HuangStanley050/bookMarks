import * as actionTypes from "./actionTypes";

export const addCategory = (name) => {
    return {
        type: actionTypes.ADD_CATEGORY_REACT,
        name: name
    };
};
