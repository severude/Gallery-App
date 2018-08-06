import React from 'react';
import Photo from './Photo';
import NoPhotos from './NoPhotos';
import Loading from './Loading';

const Gallery = props => {
  const photoList = props.photos;
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
      <h2>{props.tag}</h2>
      {
        (props.loading) ? <Loading/> : <ul> { photos } </ul>
      }
    </div>
  );
}

export default Gallery;