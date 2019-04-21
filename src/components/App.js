import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './Home';
import Header from './Header';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Route path="/" render={() => <Home />} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
