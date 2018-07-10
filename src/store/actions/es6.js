import * as actionTypes from "./actionTypes";

export const addCategory = (name) => {
    return {
        type: actionTypes.ADD_CATEGORY,
        name: name
    };
};

export const addSubCategory = (link, category) => {
    return {
        type: actionTypes.ADD_SUBCATEGORY,
        link: link,
        category: category
    };
};
