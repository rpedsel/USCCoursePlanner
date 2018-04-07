import React from 'react';
//import { Link } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/fontawesome-free-solid'

import classes from './SearchBar.css';

const searchBar = (props) => (
        <div className={classes.searchBar}>
        <form action="/action_page">
          <input type="text" placeholder="Program Name" name="search" />
          <button type="submit"> <FontAwesomeIcon icon={faSearch} /></button>
        </form>
      </div>
);

export default searchBar;