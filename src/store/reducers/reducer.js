import * as actionTypes from "../actions/actionTypes";

const initialState = {
    es6_category: [],
    showModal: false
};

const reducer = (state = initialState, action) => {

    if (action.type === actionTypes.ADD_CATEGORY) {
        const es6 = {
            name: "",
            hyperlinks: []
        };

        es6.name = action.name;
        //const temp_array = [];
        //temp_array.push(action.name);

        return {
            ...state,
            es6_category: [...state.es6_category, es6]
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
            showModal: !state.showModal
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
