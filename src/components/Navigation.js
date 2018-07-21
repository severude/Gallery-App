import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
    <div className="main-nav">
        <ul>
            <li><NavLink to='/cats'>Cats</NavLink></li>
            <li><NavLink to='/dogs'>Dogs</NavLink></li>
            <li><NavLink to='/computers'>Computers</NavLink></li>
        </ul>
    </div>
);

export default Navigation;