import React, { Component } from 'react';
import ReactKB from "./containers/react/react";
import NodeJS from "./containers/node/node";
import ES6 from "./containers/es6/es6";
import Style from "./containers/style/style";
import Modal from "./components/modal/modal";
import { connect } from "react-redux";
import { Route, NavLink } from "react-router-dom";

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      {this.props.showModal?<Modal/>:null}
      <div className="AppContainer">
        <nav className="React"><NavLink style={{ textDecoration: 'none' }} to="/react">React</NavLink></nav>
        <nav className="CSS"><NavLink style={{ textDecoration: 'none' }} to="/style">HTML/CSS</NavLink></nav>
        <nav className="Node"><NavLink style={{ textDecoration: 'none' }} to="/node">Node</NavLink></nav>
        <nav className="ES6"><NavLink style={{ textDecoration: 'none' }} to="/es6">ES6</NavLink></nav>
      </div>
      
      <div className="presentation">
        <Route path="/react" component={ReactKB}/>
        <Route path="/node" component={NodeJS}/>
        <Route path="/es6" component={ES6}/>
        <Route path="/style" component={Style}/>
      </div>
      
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    showModal: state.showModal
  };
};

export default connect(mapStateToProps)(App);
