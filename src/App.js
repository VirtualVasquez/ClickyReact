import React, { Component } from "react";
import Header from './components/Header/Header.js';
import Banner from './components/Banner/Banner.js';
import Footer from './components/Footer/Footer.js';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <Footer />
      </div>
    );
  }
}

export default App;
