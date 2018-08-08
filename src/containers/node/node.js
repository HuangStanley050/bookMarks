import React, { Component } from "react";
import { connect } from 'react-redux';
//import { addCategory } from "../../store/actions/addcategory";
import * as actions from "../../store/actions/index";
import Categories from "../../components/categories";
import Spinner from "../../components/spinner/spinner";
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

    componentDidMount() {
        if (this.props.auth) { //check if login, if yes then fetch the data
            this.props.fetchbookmarks(this.props.auth, "node");
        }
    }

    render() {
        let content = <h1>Please login</h1>;
        let error = <h2>{this.props.loadError}</h2>;
        if (this.props.auth) {
            content = (
                <div>
            {this.props.loading?<Spinner/>:null}
            {this.props.loadError?error:null}
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
        return content;


    }
}

const mapStateToProps = state => {
    return {
        categories: state.book.node_category,
        auth: state.auth.token,
        loading: state.book.loading,
        loadError: state.book.loadingError
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addCategory: (name, topic) => dispatch(actions.addCategory(name, topic)),
        fetchbookmarks: (token, subject) => dispatch(actions.fetchbookmarks(token, subject))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(NodeJS);
