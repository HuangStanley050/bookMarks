import React from "react";
import { connect } from 'react-redux';
import { toggle } from "../../store/actions/toggle";
import "./modal.css";

const Modal = (props) => {
    return (
        <div className="Modal">
         <button onClick={props.toggle}>Close Modal</button>
           <div className="Content">
             <h1>{props.currentCategory}</h1>
           </div>
        
            </div>
    );
}

const mapStateToProps = state => {
    return {
        currentCategory: state.currentCategory
    };
};

const mapDispatchToProps = dispatch => {
    return {
        toggle: () => dispatch(toggle(null))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
