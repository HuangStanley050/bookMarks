const initialState = {
    category: []

};

const reducer = (state = initialState, action) => {
    if (action.type === "ADD_CATEGORY") {
        const temp_array = [];
        temp_array.push(action.name);
        return {
            ...state,
            category: state.category.concat(temp_array)
        };

    }
    return state;
};

export default reducer;
