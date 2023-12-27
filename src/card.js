import React from "react";
import './card.css';

const Card = ({ id, username, name, mail }) => {
    return (
        <>
        <div className="Container">
            <img alt={id} src={`https://robohash.org/${username}?set=set4`} />
            <div className="Wrapper">
                <h2>{name}</h2>
                <h3>{mail}</h3>
            </div>
        </div>
        </>
    );
}

export default Card;