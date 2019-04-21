import React, { Component } from 'react';

export default class Subscriptions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: ''
    };
  }

  onChangeInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSumbit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="subscribe_panel">
        <h3>Subscribe to us</h3>
        <div>
          <form onSubmit={this.handleSumbit}>
            <input
              type="text"
              placeholder="youremail@email.com"
              value={this.state.email}
              onChange={this.onChangeInput}
              name="email"
            />
          </form>
        </div>
        <small>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
          iure? Asperiores atque voluptates totam eius magni ipsam animi libero
          ut, cupiditate, quasi praesentium fugiat corrupti, dolore dicta vitae
          ex dolor.
        </small>
      </div>
    );
  }
}
