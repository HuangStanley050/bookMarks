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
    else if (props.currentTopic === "node") {
        for (let key of props.sectionNODE) {
            if (key.name === props.currentCategory) {
                //console.log(key.name);
                bookmarks = key.hyperlinks.slice();
            }
            //console.log(key);
        }
    }
    else if (props.currentTopic === "style") {
        for (let key of props.sectionSTYLE) {
            if (key.name === props.currentCategory) {
                //console.log(key.name);
                bookmarks = key.hyperlinks.slice();
            }
            //console.log(key);
        }
    }

    //console.log(bookmarks);
    bookmarks = bookmarks.map(link => {
        return <li key={link.name}><a href={link}>{link}</a></li>;
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
        currentCategory: state.book.currentCategory,
        currentTopic: state.book.topic,
        sectionES6: state.book.es6_category,
        sectionREACT: state.book.react_category,
        sectionNODE: state.book.node_category,
        sectionSTYLE: state.book.style_category
    };
};

const mapDispatchToProps = dispatch => {
    return {
        toggle: () => dispatch(toggle(null))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
