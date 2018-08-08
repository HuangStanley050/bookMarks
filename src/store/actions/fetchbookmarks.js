import * as actionTypes from "./actionTypes";
//import axios from "../../axios-add_category";
import axios from "axios";

export const fetchSuccess = (data, subject) => {
    return {
        type: actionTypes.FETCH_SUCCESS,
        data: data,
        subject: subject
    };
};

export const fetchFail = () => {
    return {
        type: actionTypes.FETCH_FAIL
    };
};

export const fetchStart = () => {
    return {
        type: actionTypes.FETCH_START
    };
}

export const fetchbookmarks = (token, subject) => {
    return dispatch => {
        dispatch(fetchStart());
        axios.get(`https://bookmarks-25986.firebaseio.com/${subject}.json?auth=${token}`)
            .then(
                response => {
                    console.log(response);
                    dispatch(fetchSuccess(response.data, subject));
                }
            )
            .catch(error => {
                console.log(error);
                dispatch(fetchFail());
            });
    };
};
