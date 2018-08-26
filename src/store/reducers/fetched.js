import * as actionTypes from "../actions/actionTypes";

const initialState = {
    es6Fetched: false,
    nodeFetched: false,
    styleFetched: false,
    reactFetched: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ES6:
            return {
                ...state,
                es6Fetched: true
            };
        case actionTypes.NODE:
            return {
                ...state,
                nodeFetched: true
            };
        case actionTypes.REACT:
            return {
                ...state,
                reactFetched: true
            };
        case actionTypes.STYLE:
            return {
                ...state,
                styleFetched: true
            }
        default:
            return state;
    }
};

export default reducer;
