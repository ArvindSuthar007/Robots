import React from "react";
import './card.css';

const Card = (props) => {
    return (
        <>
        <div className="Container">
            <img alt={props.username} src={`https://robohash.org/${props.name}?set=set4`} width={200} height={200}/>
            <div className="Wrapper">
                <h2>{props.name}</h2>
                <h3>{props.mail}</h3>
            </div>
        </div>
        </>
    );
}

export default Card;