import React, { Component } from "react";

import { connect } from 'react-redux';
import { addCategory } from "../../store/actions/addcategory";
import Categories from "../../components/categories";
import "./es6.css";


class ES6 extends Component {
    state = {
        input: ""

    }

    addCategory = () => {
        this.props.addCategory(this.state.input, "es6");
        this.setState({ input: "" });
    }

    handleInput = (event) => {
        this.setState({ input: event.target.value });
    }




    render() {
        return (
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
        );
    }
}
const mapStateToProps = state => {
    return {
        categories: state.es6_category
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addCategory: (name, topic) => dispatch(addCategory(name, topic))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ES6);
