import React from 'react';
import { Route } from 'react-router-dom';
import SearchForm from './SearchForm';
import Navigation from './Navigation';

// Header component which contains the search form and navigation links
const Header = props => (
    <div>
        <Route path="/search" render={() => <SearchForm onSearch={props.onSearch} />} />
        <Navigation onSearch={props.onSearch}/>
    </div>
);

export default Header;