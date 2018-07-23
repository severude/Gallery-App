import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Container from './components/Container';
import NotFound from './components/NotFound';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Container} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
