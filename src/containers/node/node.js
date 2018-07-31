import React, { Component } from "react";
import { connect } from 'react-redux';
//import { addCategory } from "../../store/actions/addcategory";
import * as actions from "../../store/actions/index";
import Categories from "../../components/categories";
import "./node.css";

class NodeJS extends Component {
    state = {
        input: ""
    }

    handleInput = (event) => {
        this.setState({ input: event.target.value });
    }

    addCategory = () => {
        this.props.addCategory(this.state.input, "node");
        this.setState({ input: "" });
    }

    render() {
        return (
            <div>
            <h1>NodeJS</h1>
            <input onChange={this.handleInput} value={this.state.input} type="text" placeholder="category to add.."/>
            <button onClick={()=>this.addCategory()}>Add Category</button>
            <div className="Node_Container">
            {this.props.categories.map(key=>{
                 return <Categories topic="node" key={key.name} category={key.name}/>;
             })}
            </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        categories: state.node_category
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addCategory: (name, topic) => dispatch(actions.addCategory(name, topic))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(NodeJS);
