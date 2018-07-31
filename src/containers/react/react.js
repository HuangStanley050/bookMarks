import React, { Component } from "react";
import { connect } from 'react-redux';
//import { addCategory } from "../../store/actions/addcategory";
import * as actions from "../../store/actions/index";
import Categories from "../../components/categories";
import "./react.css";
//import Modal from "../../components/modal/modal";


class ReactKB extends Component {
    state = {
        input: ""
    }

    handleInput = (event) => {
        this.setState({ input: event.target.value });
    }

    addCategory = () => {
        this.props.addCategory(this.state.input, "react");
        this.setState({ input: "" });
    }


    render() {
        return (
            <div>
            <h1>React Section</h1>
            <input onChange={this.handleInput} value={this.state.input} type="text" placeholder="category to add.."/>
            <button onClick={()=>this.addCategory()}>Add Category</button>
            <div className="React_Container">
            {this.props.categories.map(key=>{
                 return <Categories topic="react" key={key.name} category={key.name}/>;
             })}
            </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        categories: state.react_category
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addCategory: (name, topic) => dispatch(actions.addCategory(name, topic))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReactKB);
