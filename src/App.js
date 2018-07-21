import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Container from './components/Container';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Route exact path="/" component={Container} />
      </BrowserRouter>
    );
  }
}

export default App;
