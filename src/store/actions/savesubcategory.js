import * as actionTypes from "./actionTypes";
import axios from "../../axios-add_category";


export const savesubcategory = (link, category, topic, token) => {
    return dispatch => {
        console.log(token);
        axios.post(`/${topic}/${category}/link.json?auth=${token}`, { link: link })
            .then(response => console.log(response.data))
            .catch(error => console.log(error));
    };
};
