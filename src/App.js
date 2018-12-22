import React, { Component } from "react";
import Header from './components/Header/Header.js';
import Banner from './components/Banner/Banner.js';
import Footer from './components/Footer/Footer.js';
import Game from './components/Game/Game.js';
import ClickItem from './components/ClickItem/ClickItem.js';


class App extends Component {
  render() {
    return (
      <Game>
        <Header />
        <Banner />
        <div id="clickHolder">
        <ClickItem />
        <ClickItem />
        <ClickItem />
        <ClickItem />
        <ClickItem />
        <ClickItem />
        <ClickItem />
        <ClickItem />
        <ClickItem />
        <ClickItem />
        <ClickItem />
        <ClickItem />
        </div>
        <Footer />
      </Game>
    );
  }
}

export default App;
