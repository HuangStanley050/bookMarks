import * as actionTypes from "../actions/actionTypes";

const initialState = {
    es6_category: [],
    node_category: [],
    style_category: [],
    react_category: [],
    showModal: false,
    currentCategory: ""
};

const reducer = (state = initialState, action) => {

    if (action.type === actionTypes.ADD_CATEGORY_ES6) {
        const es6 = {
            name: "",
            hyperlinks: []
        };

        es6.name = action.name;
        return {
            ...state,
            es6_category: [...state.es6_category, es6]
        };
    }
    else if (action.type === actionTypes.ADD_CATEGORY_REACT) {
        const react = {
            name: "",
            hyperlinks: []
        };
        react.name = action.name;
        return {
            ...state,
            react_category: [...state.react_category, react]
        };
    }

    else if (action.type === actionTypes.ADD_SUBCATEGORY) {

        let newState = [];

        newState = state.es6_category.map(key => {
            if (key.name !== action.category) {
                return key;
            }
            else {
                return {
                    ...key,
                    hyperlinks: [...key.hyperlinks, action.link]
                };
            }
        });


        return {
            ...state,
            es6_category: newState
        }
    }
    else if (action.type === actionTypes.TOGGLE_MODAL) {
        return {
            ...state,
            showModal: !state.showModal,
            currentCategory: action.payload
        }
    }
    return state;
};



export default reducer;

/*
{
    category:"",
    hyperlinks:[]
}
*/
