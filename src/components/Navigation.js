import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = (props) => (
    <div className="main-nav">
        <ul>
            <li><NavLink to='/silly' onClick={() => props.onSearch("silly")}>Silly</NavLink></li>
            <li><NavLink to='/surprise' onClick={() => props.onSearch("surprise")}>Surprise</NavLink></li>
            <li><NavLink to='/sunset' onClick={() => props.onSearch("sunset")}>Sunset</NavLink></li>
            <li><NavLink to='/search'onClick={() => props.onSearch("search")}>Search</NavLink></li>
        </ul>
    </div>
);

export default Navigation;