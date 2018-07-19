import * as actions from "./actionTypes";
import axios from "../../axios-add_category";


export const savecategory_success = () => {

};


export const savecategory = (name, topic) => {
    return dispatch => {
        axios.post(`/${topic}/${name}/link.json`, { link: 3 })
            .then(response => console.log(response.data))
            .catch(error => console.log(error));
    };
};
