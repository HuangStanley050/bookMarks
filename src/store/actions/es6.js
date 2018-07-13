import * as actionTypes from "./actionTypes";

export const addCategory = (name) => {
    return {
        type: actionTypes.ADD_CATEGORY_ES6,
        name: name
    };
};

export const addSubCategory = (link, category, topic) => {
    return {
        type: actionTypes.ADD_SUBCATEGORY,
        link: link,
        category: category,
        topic: topic
    };
};
