import * as actionTypes from "../actions/actionTypes";

const initialState = {
    es6_category: [],
    node_category: [],
    style_category: [],
    react_category: [],
    showModal: false,
    topic: "",
    currentCategory: "",
    loading: false,
    loadingError: null


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
    else if (action.type === actionTypes.ADD_CATEGORY && action.topic === "node") {
        const node = {
            name: "",
            hyperlinks: []
        };
        node.name = action.name;
        return {
            ...state,
            node_category: [...state.node_category, node]
        };
    }
    else if (action.type === actionTypes.ADD_CATEGORY && action.topic === "style") {
        const style = {
            name: "",
            hyperlinks: []
        };
        style.name = action.name;
        return {
            ...state,
            style_category: [...state.style_category, style]
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
        else if (action.topic === "node") { //if topic is node then go to the node_category in the reducer
            newState = state.node_category.map(key => {
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
                node_category: newState
            };
        }
        else if (action.topic === "style") { //if topic is node then go to the node_category in the reducer
            newState = state.style_category.map(key => {
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
                style_category: newState
            };
        }
    }
    else if (action.type === actionTypes.TOGGLE_MODAL) {
        return {
            ...state,
            showModal: !state.showModal,
            currentCategory: action.payload,
            topic: action.topic
        };
    }
    else if (action.type === actionTypes.FETCH_START) {
        return {
            ...state,
            loading: true
        };
    }
    else if (action.type === actionTypes.FETCH_SUCCESS) {
        let temp = action.data;
        let subject = action.subject;
        let bookmark = null;
        let subCat_array = [];



        //double loop in drill deeper into the data returned by firebase
        for (let index in temp) {

            let test_obj = {
                name: index,
                hyperlinks: []
            };
            console.log(test_obj);
            for (let index2 in temp[index].link) {
                //console.log(index);
                //console.log(temp[index].link[index2].link);
                test_obj = {
                    ...test_obj,
                    hyperlinks: [...test_obj.hyperlinks, temp[index].link[index2].link]
                };
                console.log(test_obj);
            }
            subCat_array.push(test_obj);


        }
        //let the reducer know which bookmark array to fill the data into
        /*if (subject === "node") {
            bookmark = "node_category";
        }

        if (subject === "es6") {
            bookmark = "es6_category";
        }
        //else if broke the redux hence, I was not able to render from react_category but why?
        if (subject === "react") {
            bookmark = "react_category";
        }*/

        switch (subject) {
            case "node":
                bookmark = "node_category";
                break;
            case "es6":
                bookmark = "es6_category";
                break;
            case "react":
                bookmark = "react_category";
                break;
            case "style":
                bookmark = "style_category";
                break;
            default:
                break;
        }



        return {
            ...state,
            [bookmark]: subCat_array,
            loading: false
        };
    }
    else if (action.type === actionTypes.FETCH_FAIL) {
        return {
            ...state,
            loading: false,
            loadingError: "Please try refresh again"
        };
    }
    return state;
};



export default reducer;
