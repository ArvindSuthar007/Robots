import React from "react";

const Search = ({ onSearch }) => {
    return(
        <>
            <input type="search" placeholder="search here" onChange={onSearch}/>
        </>
    );
}

export default Search;