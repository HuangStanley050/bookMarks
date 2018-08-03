import React, { Component } from "react";
import { connect } from "react-redux";
import "./auth.css";
import Spinner from "../../components/spinner/spinner";
import * as actions from "../../store/actions/index";

class Auth extends Component {
    state = {
        email: "",
        password: ""
    }
    inputHandle = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    formHandle = (e) => {
        e.preventDefault();
        //alert(this.state.email, this.state.password);
        this.props.onAuth(this.state.email, this.state.password);
    }
    render() {
        let errorMessage = null;
        if (this.props.error) {
            errorMessage = (
                <p style={{color:"red"}}>{this.props.error}</p>
            );
        }
        return (


            <div className="Auth_Container">
                 {this.props.loading?<Spinner/>:null}
                 {errorMessage}
                 <form className="login" onSubmit={this.formHandle}>
                    <h1 className="login-title">Login/Logout</h1>
                    <input name="email" onChange={this.inputHandle} value={this.state.email} type="text" className="login-input" placeholder="Email Adress" />
                    <input name="password" onChange={this.inputHandle} value={this.state.password} type="password" className="login-input" placeholder="Password"/>
                    <input type="submit" value="Lets Go" className="login-button"/>
                    
                </form>

            </div>

        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password) => dispatch(actions.auth(email, password))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
