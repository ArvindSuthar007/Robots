import React from "react";
import './Scroll.css';

const Scroll = (props) => {
    return(
        <div className="diver">
            { props.children }
        </div>
    );
}

export default Scroll;