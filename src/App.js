import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Gallery from './components/Gallery';
import NotFound from './components/NotFound';
import apiKey from './config.js';

class App extends Component {

  constructor() {
    super();
    this.state = {
      photos: [],
      loading: false,
      searchTag: ""
    };
  } 
  
  setLoading = (query) => {
    this.setState({
      loading: true,
      searchTag: query
    });
  };

  componentDidMount() {
    this.performSearch();
  }
  
  performSearch = (query = 'trending') => {
    this.setLoading(query);
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=12&format=json&nojsoncallback=1`)
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

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header onSearch={this.performSearch} />
          <Switch>
            <Route exact path="/" render={() => <Gallery loading={this.state.loading} photos={this.state.photos} tag={this.state.searchTag} />} />
            <Route path="/silly" render={() => <Gallery loading={this.state.loading} photos={this.state.photos} tag={this.state.searchTag} />} />
            <Route path="/surprise" render={() => <Gallery loading={this.state.loading} photos={this.state.photos} tag={this.state.searchTag} />} />
            <Route path="/sunset" render={() => <Gallery loading={this.state.loading} photos={this.state.photos} tag={this.state.searchTag} />} />
            <Route exact path="/search" render={() => <Gallery loading={this.state.loading} photos={this.state.photos} tag={this.state.searchTag} />} />
            <Route path="/search/:topic" render={() => <Gallery loading={this.state.loading} photos={this.state.photos} tag={this.state.searchTag} />} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
