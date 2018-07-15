import * as actionTypes from "./actionTypes";

export const addSubCategory = (link, category, topic) => {
    return {
        type: actionTypes.ADD_SUBCATEGORY,
        link: link,
        category: category,
        topic: topic
    };
};
