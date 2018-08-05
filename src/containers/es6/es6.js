import React, { Component } from "react";
//import axios from "../../axios-add_category";
import { connect } from 'react-redux';
//import { addCategory } from "../../store/actions/addcategory";
import * as actions from "../../store/actions/index";
//import { savecategory } from "../../store/actions/savecategory";
import Categories from "../../components/categories";
import "./es6.css";


class ES6 extends Component {
    state = {
        input: ""

    }

    addCategory = () => {
        /*axios.post(`/es6/${this.state.input}/hyperlink.json`, { link: "www.boom.com" })
            .then(response => console.log(response.data))
            .catch(error => console.log(error));
            */
        //this.props.save(this.state.input, "es6");
        this.props.addCategory(this.state.input, "es6");
        this.setState({ input: "" });
    }

    handleInput = (event) => {
        this.setState({ input: event.target.value });
    }

    componentDidMount() {
        this.props.fetchbookmarks();
    }


    render() {
        let content = <h1>Please login</h1>;
        if (this.props.auth) {
            content = (
                <div>
             
             <h1>ES6 Section</h1>
             <input onChange={this.handleInput} value={this.state.input} type="text" placeholder="category to add.."/>
             <button onClick={()=>this.addCategory()}>Add Category</button>
            <div className="ES6_Container">
             
             {this.props.categories.map(key=>{
                 return <Categories topic="es6" key={key.name} category={key.name}/>;
             })}
             
            </div>
            </div>
            )
        }
        return content;


    }
}
const mapStateToProps = state => {
    return {
        categories: state.book.es6_category,
        auth: state.auth.token
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addCategory: (name, topic) => dispatch(actions.addCategory(name, topic)),
        fetchbookmarks: () => dispatch(actions.fetchbookmarks())
        //save: (name, topic) => dispatch(savecategory(name, topic)) //async function to save to firebase
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ES6);
