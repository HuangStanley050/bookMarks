import * as actions from "./actionTypes";
import axios from "../../axios-add_category";


export const savecategory = (name, topic) => {
    return dispatch => {
        axios.post(`/${topic}/${name}/hyperlinks/link.json`, { link: 0 })
            .then(response => console.log(response.data))
            .catch(error => console.log(error));
    };
};
