import React, {Component} from 'react';
import axios from 'axios';
import apiKey from '../config.js';
import Photo from './Photo';
import NoPhotos from './NoPhotos';
import Loading from './Loading';

// Gallery component to display all photos
class Gallery extends Component {

  // This constructor sets the default state of the App
  constructor(props) {
    super(props);
    let match = props.match;
    this.state = {
      photos: [],
      loading: false,
      searchTag: match.params.topic
    };
  } 

  // Changes state of the app to loading and sets the search tag
  setLoading = (query) => {
    this.setState({
      loading: true,
      searchTag: query
    });
  };

  // Performs default search when the page loads
  componentDidMount() {
    this.performSearch(this.state.searchTag);
  }

  // Makes Flickr API call and responds with photo data
  performSearch = (query = 'mountains') => {
    this.setLoading(query);
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=20&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          photos: response.data.photos.photo,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });    
  }

  
  // Logic to build each photo component with url, alt, and key
  buildGallery() {
    const photoList = this.state.photos;
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
    return <ul> { photos } </ul>;
  }

  // Renders the gallery component to either the photo components or the loading component
  render() {
    return(
      <div className="photo-container">
        <h2>{this.state.searchTag}</h2>
        {
          (this.state.loading) ? <Loading/> : this.buildGallery()
        }
      </div>
    );
  }
}

export default Gallery;