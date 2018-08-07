import React from 'react';
import Photo from './Photo';
import NoPhotos from './NoPhotos';
import Loading from './Loading';

// Gallery component to display all photos
const Gallery = props => {

  // Logic to build each photo component with url, alt, and key
  const photoList = props.photos;
  let photos;
  if(photoList.length) {
    photos = photoList.map(photo => 
    <Photo 
      url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
      alt={photo.title} 
      key={photo.id}
    />
    );
  } else {
    photos = <NoPhotos />;
  }

  // Renders the gallery component to either the photo components or the loading component
  return(
    <div className="photo-container">
      <h2>{props.tag}</h2>
      {
        (props.loading) ? <Loading/> : <ul> { photos } </ul>
      }
    </div>
  );
}

export default Gallery;