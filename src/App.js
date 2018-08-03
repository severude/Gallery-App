import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Loading from './components/Loading';
import NotFound from './components/NotFound';
import apiKey from './config.js';
import SearchForm from './components/SearchForm';

class App extends Component {

  constructor() {
    super();
    this.state = {
      photos: [],
      loading: true,
      searchTag: ""
    };
  } 

  componentDidMount() {
    this.performSearch();
  }
  
  performSearch = (query = 'trending') => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=12&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          photos: response.data.photos.photo,
          loading: false,
          searchTag: query
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
          <Header onSearch={this.performSearch}/>
          <Switch>
            <Route exact path="/" render={() => <Loading loading={this.state.loading} data={this.state.photos} tag={this.state.searchTag} />} />
            <Route path="/:topic" render={() => <Loading loading={this.state.loading} data={this.state.photos} tag={this.state.searchTag} />} />
            <Route exact path="/search" component={SearchForm} />
            <Route path="/search/:topic" component={SearchForm} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
