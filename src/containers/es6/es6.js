import React, { Component } from "react";
import { connect } from 'react-redux';
import { addCategory } from "../../store/actions/es6";
import "./es6.css";

class ES6 extends Component {
    state = {
        input: ""
    }

    addCategory = () => {
        this.props.addCategory(this.state.input);
    }

    handleInput = (event) => {
        this.setState({ input: event.target.value });
    }


    render() {
        return (
            <div>
             <h1>ES6 Section</h1>
             <input onChange={this.handleInput} type="text" placeholder="category to add.."/>
             <button onClick={()=>this.addCategory()}>Add Category</button>
            <div className="ES6_Container">
             
             {this.props.categories.map(key=>{
                 return <h3>{key}</h3>;
             })}
             
            </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        categories: state.category
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addCategory: (name) => dispatch(addCategory(name))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ES6);
