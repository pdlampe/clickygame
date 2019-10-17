import React, { Component } from "react";
import ImageNames from "./ImageNames";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import ImageInventory from "./components/ImageInventory";
import Footer from "./components/Footer";


class App extends Component {
  state = {
    imageNames: ImageNames,
    clickedImages: [],
    score: 0,
    topScore: 0,
    feedback: "Click an image to begin!",
    gameStatus: 0
  };

  componentDidMount() {
    this.setState({
      imageNames: this.shuffle(this.state.imageNames)
    }, () => {
      console.log("Shuffled the images when the game starts");
    });
  }

  handleClick = event => {

    const clickedImageName = event.target.alt;

    const wasImageClickedBefore = this.imageClickedBefore(clickedImageName);
    if (wasImageClickedBefore) {
      this.setState({
        imageNames: this.shuffle(this.state.imageNames),

        clickedImages: [],
        score: 0,
        feedback: "You guessed the same image twice. Game over!",
        gameStatus: 2
      }, () => {

      });
    } else {
      let newScore = this.state.score + 1;
      if (newScore === this.state.imageNames.length) {
        this.setState({
          imageNames: this.shuffle(this.state.imageNames),

          clickedImages: [],
          score: 0,
          topScore: newScore,
          feedback: "You guessed all of the images correctly!",
          gameStatus: 1
        });
      } else {
        const clickedImagesCopy = this.state.clickedImages.slice();
        clickedImagesCopy.push(clickedImageName);
        const newTopScore = (newScore > this.state.topScore) ? newScore : this.state.topScore;
        this.setState({
          imageNames: this.shuffle(this.state.imageNames),

          clickedImages: clickedImagesCopy,
          score: newScore,
          topScore: newTopScore,
          feedback: "You guessed the image correctly! Keep going!",
          gameStatus: 0
        }, () => {

        });
      }
    }
  };

  imageClickedBefore = (clickedImageName) => {
    for (let index = 0; index < this.state.clickedImages.length; index++) {
      if (this.state.clickedImages[index] === clickedImageName) {
        return true;
      }
    }
    return false;
  };


  shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };

  render() {
    return (
      <div>
        <Navbar score={this.state.score} topScore={this.state.topScore} feedback={this.state.feedback} gameStatus={this.state.gameStatus} />
        <Banner />
        <ImageInventory imageNames={this.state.imageNames} clickHandler={this.handleClick} gameStatus={this.state.gameStatus} />
        <Footer />
      </div>
    );
  }
}

export default App;