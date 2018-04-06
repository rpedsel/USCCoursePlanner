import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link='/' exact>Home</NavigationItem>
        <NavigationItem link='/orders'>About</NavigationItem>
    </ul>
);

export default navigationItems;