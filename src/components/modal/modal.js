import React from "react";
import { connect } from 'react-redux';
import { toggle } from "../../store/actions/toggle";
import "./modal.css";

const Modal = (props) => {
    return (
        <div className="Modal">
         <button onClick={props.toggle}>Close Modal</button>
        
            </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        toggle: () => dispatch(toggle())
    };
};

export default connect(null, mapDispatchToProps)(Modal);
