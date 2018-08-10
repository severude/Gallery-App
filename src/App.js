import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Gallery from './components/Gallery';
import NotFound from './components/NotFound';

class App extends Component {

  // Renders the app component (single page application) based on routing
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Switch>
            <Route exact path="/" component={Gallery} />
            <Route path="/nav/:topic" render={(props) => <Gallery {...props} key={props.match.params.topic} />} />
            <Route path="/search/:topic" render={(props) => <Gallery {...props} key={props.match.params.topic} />} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
