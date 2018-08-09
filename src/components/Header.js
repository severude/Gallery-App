import React from 'react';
import SearchForm from './SearchForm';
import Navigation from './Navigation';

// Header component which contains the search form and navigation links
const Header = props => (
    <div>
        <SearchForm onSearch={props.onSearch}/>
        <Navigation onSearch={props.onSearch}/>
    </div>
);

export default Header;