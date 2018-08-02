import * as actionTypes from "./actionTypes";
import axios from "axios";

export const auth_success = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token,
        userId: userId
    };
};

export const auth_start = () => {
    return {
        type: actionTypes.AUTH_START

    };
};

export const auth_fail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };

};

export const auth = (email, password) => {
    const key = "AIzaSyBxt6vwGXw_G7nSngDz7J1Beb2XTUAfCy4";
    const authData = {
        email: email,
        password: password,
        returnSecureToken: true
    };
    return dispatch => {
        dispatch(auth_start());
        axios.post(`https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${key}`, authData)
            .then(response => {
                console.log(response.data);
                dispatch(auth_success(response.data.idToken, response.data.localId));
            })
            .catch(err => {
                console.log(err.response.data.error.message);
                dispatch(auth_fail(err.response.data.error.message));
            });
    };
};
