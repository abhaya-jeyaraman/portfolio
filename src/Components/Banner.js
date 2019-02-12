import React, { Component } from 'react';
import '../CSS/Banner.css';

class Banner extends Component {
  render() {
    return (
      <div className="root">
        <div className="background">
          <h1 className="text">SMALL TEAM, BIG IMPACT</h1>
        </div>
        <div className="quote">
          <p className="quoteText">We are a digital innovation studio based in Mumbai. We are passionate about building products and services via dynamic technologies to enhance lifestyles.<br/> With values of simplicity and minimalism, we aim to transform the industries we enter!</p>
          <p className="quoteText">A good teacher can inspire hope, ignite the imagination, and instill a love of learning. <br/> - Brad Henry</p>
        </div>
      </div>
    );
  }
}

export default Banner;
