import React, { Component } from "react";
import { connect } from 'react-redux';
import { addSubCategory } from "../store/actions/es6";
import { toggle } from "../store/actions/toggle";
import "./categories.css";


class Categories extends Component {
    state = {
        input: ""
    }
    handleInput = (e) => {
        this.setState({ input: e.target.value });
    }

    addSubCategory = () => {
        alert(this.props.category);
        this.props.addSub(this.state.input, this.props.category);
        this.setState({ input: "" });
    }



    render() {
        return (
            <div className="Categories">
            <h3>{this.props.category}</h3>
            <input onChange={this.handleInput} value={this.state.input} type="text" placeholder="links to add.."/>
            <button onClick={this.addSubCategory}>Add Link</button>
            <button onClick={this.props.showLinks}>Show Links</button>
        
        </div>
        );
    }
}

/*const mapStateToProps = state => {
    return {
        showModal: state.showModal
    };
}*/

const mapDispatchToProps = dispatch => {
    return {
        addSub: (link, category) => dispatch(addSubCategory(link, category)),
        showLinks: () => dispatch(toggle())
    };
};

export default connect(null, mapDispatchToProps)(Categories);

//<button onClick={props.clicked}>+</button>
