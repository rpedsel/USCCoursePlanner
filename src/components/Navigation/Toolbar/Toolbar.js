import React from 'react';

import classes from './Toolbar.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import SearchBar from '../SearchBar/SearchBar';

const toolbar = ( props ) => (
    <header className={classes.Toolbar}>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
        <SearchBar link='/'></SearchBar>
    </header>
);

export default toolbar;