import React from 'react';
import { NavLink } from 'react-router-dom';

// Navigation links component for three fixed links and one search link
const Navigation = (props) => (
    <div className="main-nav">
        <ul>
            <li><NavLink to='/nav/silly' >Silly</NavLink></li>
            <li><NavLink to='/nav/surprise' >Surprise</NavLink></li>
            <li><NavLink to='/nav/sunset' >Sunset</NavLink></li>
        </ul>
    </div>
);

export default Navigation;