import React, { Component } from "react";
//import axios from "../../axios-add_category";
import { connect } from 'react-redux';
//import { addCategory } from "../../store/actions/addcategory";
import * as actions from "../../store/actions/index";
import * as actionTypes from "../../store/actions/actionTypes";
//import { savecategory } from "../../store/actions/savecategory";
import Categories from "../../components/categories";
import Spinner from "../../components/spinner/spinner";
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
        if (this.props.auth) { //check if login, if yes then fetch the data
            if (!this.props.hasFetched) {
                this.props.fetchbookmarks(this.props.auth, "es6");
                this.props.fetched(actionTypes.ES6);
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
             <h1>ES6 Section</h1>
             <input onChange={this.handleInput} value={this.state.input} type="text" placeholder="category to add.."/>
             <button className="waves-effect waves-light btn" onClick={()=>this.addCategory()}>Add Category</button>
            <div className="ES6_Container">
             
             {this.props.categories.map(key=>{
                 return <Categories topic="es6" key={key.name} category={key.name}/>;
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
        categories: state.book.es6_category,
        loading: state.book.loading,
        auth: state.auth.token,
        loadError: state.book.loadingError,
        hasFetched: state.fetch.es6Fetched
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addCategory: (name, topic) => dispatch(actions.addCategory(name, topic)),
        fetchbookmarks: (token, subject) => dispatch(actions.fetchbookmarks(token, subject)),
        fetched: (topic) => dispatch(actions.fetched(topic))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ES6);
