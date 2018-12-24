import React, { Component } from "react";
import characters from './characters.json';
import Header from './components/Header/Header.js';
import Banner from './components/Banner/Banner.js';
import Footer from './components/Footer/Footer.js';
import Game from './components/Game/Game.js';
import ClickItem from './components/ClickItem/ClickItem.js';


class App extends Component {

  state = {
    message: "Click an image to begin!",
    topScore: 0,
    curScore: 0,
    characters: characters,
    unselectedCharacters: characters
  }

  shuffleArray = array => {
    for (let i = array.length - 1; i > 0 ; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; 
    }
  }

  //upon clicking a character
  selectCharacter = reploid => {
    const findCharacter = this.state.unselectedCharacters.find(item => item.reploid === reploid)
    
    if(findCharacter === undefined) {
      //failure to select a new reploid, resetting for new round
      this.setState({
        message: "You guessed incorrectly!",
        topScore: (this.state.curScore > this.state.topScore) ? this.state.curScore : this.state.topScore,
        curScore: 0,
        characters: characters,
        unselectedCharacters: characters
      });
    }
    else {
      //successfullly picked a new character
      const newReploids = this.state.unselectedCharacters.filter(item => item.reploid !== reploid);

      this.setState({
        message: "You guessed correctly!", 
        curScore: this.state.curScore + 1,
        characters: characters,
        unselectedCharacters: newReploids
      });
    }
    this.shuffleArray(characters);
  }



  render() {
    return (
      <Game>
        <Header
          message={this.state.message}
          curScore={this.state.curScore}
          topScore={this.state.topScore}
        />
        <Banner />
        <div id="clickHolder">
        {
          this.state.characters.map(character => (
            <ClickItem
              key={character.reploid}
              reploid={character.reploid}
              image={character.image}
              selectCharacter={this.selectCharacter}
              curScore={this.state.curScore}
            />
          ))
        }
        </div>
        <Footer />
      </Game>
    );
  }
}

export default App;
