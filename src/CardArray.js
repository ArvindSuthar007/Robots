import React from 'react';
import Card from './card';

const CardArray = ({ robots }) => {
    return(
        <>
            {
                robots.map((user, i) => {
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