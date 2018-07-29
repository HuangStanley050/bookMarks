import * as actionTypes from "./actionTypes";

export const auth_success = (authData) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        authData: authData
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
    return dispatch => {
        dispatch(auth_start());
    };
};
