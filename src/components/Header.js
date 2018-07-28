import React from 'react';
import SearchForm from './SearchForm';
import Navigation from './Navigation';

const Header = props => (
    <div>
        <SearchForm onSearch={props.onSearch}/>
        <Navigation onSearch={props.onSearch}/>
    </div>
);

export default Header;