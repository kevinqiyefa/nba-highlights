import React, { Component } from 'react';

export default class Subscriptions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      error: false,
      success: false
    };
  }

  onChangeInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  clearMessages = () => {
    setTimeout(() => this.setState({ error: false, success: false }), 3000);
  };

  handleSumbit = event => {
    event.preventDefault();
    let email = this.state.email;

    if (this.validateEmail(email)) {
      this.saveSubscription(email);
    } else {
      this.setState({ error: true });
    }
    this.clearMessages();
  };

  validateEmail = email => {
    const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return reg.test(email);
  };

  saveSubscription = email => {
    const URL_EMAIL = 'http://localhost:3004/subcriptions';

    fetch(URL_EMAIL, {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email })
    })
      .then(res => res.json())
      .then(() => {
        this.setState({
          email: '',
          success: true
        });
      });
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
          <div className={this.state.error ? 'error show' : 'error'}>
            Check your mail
          </div>
          <div className={this.state.success ? 'success show' : 'success'}>
            Thank you
          </div>
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
