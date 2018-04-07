import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';


const navigationItems = () => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link='/' exact>Home</NavigationItem>
            <NavigationItem link='/about'>About</NavigationItem>
        </ul>
    );
};

export default navigationItems;