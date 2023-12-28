import React from "react";

const mystyle = {
    border: "1px none red",
    borderRadius: "6px",
    padding: "0.7em",
    paddingLeft: "2em",
    paddingRight: "2em",
    backgroundColor: "#e6ffff",
    color: "purple",
    fontSize: "1.2em",
    margin: "1.5em 3em 0.5em 1em",
}

const Search = ({ onSearch }) => {
    return(
        <input style={mystyle} type="search" placeholder="search here" onChange={onSearch}/>
    );
}

export default Search;