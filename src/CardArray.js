import React from 'react';
import { robots } from './robots';
import Card from './card';

const CardArray = () => {
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