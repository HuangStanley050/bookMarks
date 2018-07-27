import React, { Component } from "react";
import "./auth.css";

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
    render() {
        return (
            <div className="Auth_Container">
                 <form className="login">
                    <h1 className="login-title">Login/Logout</h1>
                    <input name="email" onChange={this.inputHandle} value={this.state.email} type="text" className="login-input" placeholder="Email Adress" autofocus/>
                    <input name="password" onChange={this.inputHandle} value={this.state.password} type="password" className="login-input" placeholder="Password"/>
                    <input type="submit" value="Lets Go" className="login-button"/>
                    
                </form>

            </div>
        );
    }
}

export default Auth;
