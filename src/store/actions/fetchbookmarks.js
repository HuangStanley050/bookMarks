import * as actionTypes from "./actionTypes";
import axios from "../../axios-add_category";

export const fetchSuccess = (data) => {
    return {
        type: actionTypes.FETCH_SUCCESS,
        data: data
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

export const fetchbookmarks = (token) => {
    return dispatch => {
        dispatch(fetchStart());
        axios.get("https://bookmarks-25986.firebaseio.com/es6.json?auth=" + token)
            .then(
                response => {
                    console.log(response);
                    dispatch(fetchSuccess(response.data));
                }
            )
            .catch(error => {
                dispatch(fetchFail());
            });
    };
};
