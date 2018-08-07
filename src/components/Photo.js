import React from 'react';

// Single photo component
const Photo = props => (
  <li>
    <img src={props.url} alt={props.alt}/>
  </li>
);
  
export default Photo;
