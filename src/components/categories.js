import React, { Component } from "react";
import { connect } from 'react-redux';
import { addSubCategory } from "../store/actions/addsubcategory";
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
        //alert(this.props.category);           //needs to find out which action creator to use depends on topic
        /*if (this.props.topic === 'react') {
            alert("react!!");
        }*/
        this.props.addSub(this.state.input, this.props.category, this.props.topic);
        this.setState({ input: "" });
    }



    render() {
        return (
            <div className="Categories">
            <h3>{this.props.category}</h3>
            <input onChange={this.handleInput} value={this.state.input} type="text" placeholder="links to add.."/>
            <button onClick={this.addSubCategory}>Add Link</button>
            <button onClick={()=>this.props.showLinks(this.props.category,this.props.topic)}>Show Links</button>
        
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
        addSub: (link, category, topic) => dispatch(addSubCategory(link, category, topic)),
        showLinks: (category, topic) => dispatch(toggle(category, topic))
    };
};

export default connect(null, mapDispatchToProps)(Categories);

//<button onClick={props.clicked}>+</button>
