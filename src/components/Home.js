import React, { Component } from 'react';
import Featured from './Featured';
import Subscriptions from './Subscriptions';
import Blocks from './Blocks';
import Poll from './Poll';

const URL_HOME = 'http://localhost:3004/home';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      home: ''
    };
  }

  async componentDidMount() {
    const response = await fetch(URL_HOME);
    const json = await response.json();
    this.setState({ home: json });
  }

  render() {
    return (
      <div>
        <Featured slides={this.state.home.slider} />
        <Subscriptions />
        <Blocks blocks={this.state.home.blocks} />
        <Poll />
      </div>
    );
  }
}

export default Home;
