import * as actionTypes from "./actionTypes";
import axios from "../../axios-add_category";


export const savesubcategory = (link, category, topic) => {
    return dispatch => {
        axios.post(`/${topic}/${category}/link.json`, { link: link })
            .then(response => console.log(response.data))
            .catch(error => console.log(error));
    };
};
