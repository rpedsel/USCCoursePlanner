import React from 'react';

import classes from './SearchResult.css';

const searchResult = (props) => {
    // const ingredients = [];

    // for (let ingredientsName in props.ingredients) {
    //     ingredients.push(
    //         {
    //             name: ingredientsName, 
    //             amount: props.ingredients[ingredientsName]
    //         }
    //     );
    // }

    // const ingredientOutput = ingredients.map(ig => {
    //     return <span 
    //     style={{
    //         textTransform:'capitalize',
    //         display: 'inline-block',
    //         margin: '0 8px',
    //         border: '1px solid #ccc',
    //         padding: '5px'}}
    //     key={ig.name}>{ig.name} ({ig.amount})</span>;
    // });

    return (
        <div className={classes.SearchResult}>
            <p><strong>{props.name}</strong></p>
            <p>{props.ptype}</p>
            {/* more info */}
        </div>
    );


};

export default searchResult;