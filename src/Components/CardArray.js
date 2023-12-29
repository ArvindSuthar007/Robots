import React from 'react';
import Card from '../Add-on/card';

const CardArray = ({ robots }) => {
    return(
        <>
            {   !robots.length ?
                <h1 style={{
                    fontFamily: "customFont",
                    fontWeight: "lighter",
                }}>No matching results!!...</h1>

                :robots.map((user, i) => {
                        return(
                            <Card 
                                key={robots[i].id} 
                                username={robots[i].username} 
                                name={robots[i].name} 
                                mail={robots[i].email}
                            />
                        );
                    }
                )
            }
        </>
    );
}

export default CardArray;