import React from "react";
import { connect } from 'react-redux';
import { toggle } from "../../store/actions/toggle";
import "./modal.css";

const Modal = (props) => {
    let bookmarks = [];

    if (props.currentTopic === "es6") {
        for (let key of props.sectionES6) {
            if (key.name === props.currentCategory) {
                //console.log(key.name);
                bookmarks = key.hyperlinks.slice();
            }
            //console.log(key);
        }
    }
    else if (props.currentTopic === "react") {
        for (let key of props.sectionREACT) {
            if (key.name === props.currentCategory) {
                //console.log(key.name);
                bookmarks = key.hyperlinks.slice();
            }
            //console.log(key);
        }
    }

    //console.log(bookmarks);
    bookmarks = bookmarks.map(link => {
        return <li><a href={link}>{link}</a></li>;
    });
    return (
        <div className="Modal">
         <button onClick={props.toggle}>Close Modal</button>
           <div className="Content">
             <h1>{props.currentCategory}</h1>
             <ul>{bookmarks}</ul>
           </div>
        
            </div>
    );
}

const mapStateToProps = state => {
    return {
        currentCategory: state.currentCategory,
        currentTopic: state.topic,
        sectionES6: state.es6_category,
        sectionREACT: state.react_category
    };
};

const mapDispatchToProps = dispatch => {
    return {
        toggle: () => dispatch(toggle(null))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
