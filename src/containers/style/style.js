import React, { Component } from "react";
import { connect } from 'react-redux';
//import { addCategory } from "../../store/actions/addcategory";
import * as actions from "../../store/actions/index";
import * as actionTypes from "../../store/actions/actionTypes";
import Categories from "../../components/categories";
import Spinner from "../../components/spinner/spinner";
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

    componentDidMount() {
        if (this.props.auth) { //check if login, if yes then fetch the data
            if (!this.props.hasFetched) {
                this.props.fetchbookmarks(this.props.auth, "style");
                this.props.fetched(actionTypes.STYLE);
            }
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
            <h1>HTML/CSS</h1>
            <input onChange={this.handleInput} value={this.state.input} type="text" placeholder="category to add.."/>
            <button onClick={()=>this.addCategory()}>Add Category</button>
            <div className="Style_Container">
            {this.props.categories.map(key=>{
                 return <Categories topic="style" key={key.name} category={key.name}/>;
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
        categories: state.book.style_category,
        auth: state.auth.token,
        loading: state.book.loading,
        loadError: state.book.loadingError,
        hasFetched: state.fetch.styleFetched
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addCategory: (name, topic) => dispatch(actions.addCategory(name, topic)),
        fetchbookmarks: (token, subject) => dispatch(actions.fetchbookmarks(token, subject)),
        fetched: (topic) => dispatch(actions.fetched(topic))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Style);
