import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import Teams from './Teams';
import Team from './Team';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/teams" render={() => <Teams />} />
          <Route
            exact
            path="/team/:name"
            render={props => <Team {...props} />}
          />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
