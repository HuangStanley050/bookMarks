import * as actionTypes from "../actions/actionTypes";

const initialState = {
    es6_category: []

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
            es6_category: state.es6_category.concat(es6)
        };

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
