import React, { Component } from "react";
import { connect } from 'react-redux';
import { addCategory } from "../../store/actions/addcategory";
import Categories from "../../components/categories";
import "./style.css";

class Style extends Component {
    state = {
        input: ""
    }

    handleInput = (event) => {
        this.setState({ input: event.target.value });
    }

    addCategory = () => {
        this.props.addCategory(this.state.input, "style");
        this.setState({ input: "" });
    }

    render() {
        return (
            <div>
            <h1>HTML/CSS</h1>
            <input onChange={this.handleInput} value={this.state.input} type="text" placeholder="category to add.."/>
            <button onClick={()=>this.addCategory()}>Add Category</button>
            <div className="Style_Container">
            {this.props.categories.map(key=>{
                 return <Categories topic="style" key={key.name} category={key.name}/>;
             })}
            </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        categories: state.style_category
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addCategory: (name, topic) => dispatch(addCategory(name, topic))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Style);
