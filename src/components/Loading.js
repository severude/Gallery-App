import React from 'react';
import Gallery from './Gallery';

const Loading = props => (
    <div>
        {
          (props.loading) ? <p>Loading...</p> : <Gallery data={props.data} tag={props.tag}/>
        }
    </div>
);

export default Loading;