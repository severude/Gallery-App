import React from 'react';
import Header from './Header';
import Gallery from './Gallery';

const Container = props => (
  <div className="container">
    <Header />
    { 
      (props.loading) ? <p>Loading...</p> : <Gallery data={props.data} />
    }     
  </div>
);

export default Container;