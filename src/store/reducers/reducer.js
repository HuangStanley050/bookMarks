import * as actionTypes from "../actions/actionTypes";

const initialState = {
    es6_category: [],
    node_category: [],
    style_category: [],
    react_category: [],
    showModal: false,
    topic: "",
    currentCategory: ""
};

const reducer = (state = initialState, action) => {

    if (action.type === actionTypes.ADD_CATEGORY && action.topic === "es6") {
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
    else if (action.type === actionTypes.ADD_CATEGORY && action.topic === "react") {
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

        if (action.topic === "es6") { //if the topic is es6 then go to the es6_category in the reducer
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
            };
        }

        else if (action.topic === "react") { //if topic is react then go to the react_category in the reducer
            newState = state.react_category.map(key => {
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
                react_category: newState
            };
        }
    }

    else if (action.type === actionTypes.TOGGLE_MODAL) {
        return {
            ...state,
            showModal: !state.showModal,
            currentCategory: action.payload,
            topic: action.topic
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
