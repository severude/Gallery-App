import React from 'react';
import Photo from './Photo';
import NoPhotos from './NoPhotos';

const Gallery = props => {
  const photoList = props.data;
  let photos;
  if(photoList.length) {
    photos = photoList.map(photo => 
    <Photo 
      url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
      alt={photo.title} key={photo.id}
    />
    );
  } else {
    photos = <NoPhotos />;
  }

  return(
    <div className="photo-container">
      <h2>Results</h2>
      <ul>
        { photos }
      </ul>
    </div>
  );
}

export default Gallery;