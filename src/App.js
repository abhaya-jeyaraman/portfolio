import React, { Component } from 'react';
import Banner from './Components/Banner.js';
import Footer from './Components/Footer.js';
import Header from './Components/Header.js';
import Block from './Components/Block.js';
import './CSS/Block.css';


class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Banner/>
        <Block />
        <Footer/>
      </div>
    );
  }
}

export default App;
