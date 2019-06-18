// Imports
import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Container from "./Container";
import Row from "./Row";
import Column from "./Column";
import friends from "./friends.json";
import "./App.css";

// Card mix-em-up Function
function shuffleCards(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i +1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

// Extend the Component and sets the state
class App extends Component {
  state = {
    friends,
    currentScore: 0,
    topScore: 0,
    correctIncorrect: "",
    clicked: []
  };

  // Handle the clicks
  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };

  // Handle the increment
  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      correctIncorrect: ""
    });
    if (newScore >=this.state.topScore) {
      this.setState({ topScore: newScore });
    } else if (newScore === 12) {
      this.setState({ correctIncorrect: "Woo Hoo! You won!" });
    }
    this.handleShuffle();
  };

  // Handle the game reset
  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      correctIncorrect: "D'oh!",
      clicked: []
    });
    this.handleShuffle();
  };

  // Handle the shuffling
  handleShuffle = () => {
    let shuffledCards = shuffleCards(friends);
    this.setState({ friends: shuffledCards });
  }

  // Make it all display
  render() {
    return (
      <Wrapper>
        <Nav title="'Who Shot Mr. Burns' Suspects Edition"
             score={this.state.currentScore} 
             topScore={this.state.topScore} 
             correctIncorrect={this.state.correctIncorrect}
        />

        <Title>
          Test your memory and click each character without repeating and you'll be so S-M-R-T!
        </Title>

        <Container>
          <Row>
            {this.state.friends.map(friend => (
              <Column size="md-3 sm-6">
                <FriendCard
                  key={friend.id}
                  handleClick={this.handleClick}
                  handleIncrement={this.handleIncrement}
                  handleReset={this.handleReset}
                  handleShuffle={this.handleShuffle}
                  id={friend.id}
                  image={friend.image}
                />
              </Column>
            ))}
          </Row>
        </Container>
      </Wrapper>
    );
  }
}

export default App;