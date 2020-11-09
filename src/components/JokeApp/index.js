import React, { Component } from 'react';
import getJoke from '../../helpers/data/getJokes';
import Setup from '../Setup';
import Punchline from '../Punchline';

class JokeApp extends Component {
  state = {
    joke: [],
    showSetup: false,
    showPunchline: false,
  };

  getAJoke = () => {
    getJoke.getAJoke().then((response) => {
      this.setState({
        joke: response,
        showSetup: true,
        showPunchline: false,
      });
    });
  };

  showSetup = () => {
    this.setState({
      showSetup: !this.state.showSetup,
    });
  };

  showPunchline = () => {
    this.setState({
      showPunchline: !this.state.showPunchline,
    });
  };

  render() {
    return (
      <>
        <button href='#' className='btn btn-outline-light punchline-btn' id='punchline' onClick={this.getAJoke}>Get a New Joke!</button>
        {this.state.showSetup ? (
            <>
            <Setup setup={this.state.joke.setup} />
            <button href='#' className='btn btn-outline-light punchline-btn' id="punchline" onClick={this.showPunchline}>See the Punchline!</button>
            </>
        ) : (
            <></>
        )}

        {this.state.showPunchline ? (
            <>
            <Punchline punchline={this.state.joke.punchline} />
            </>
        ) : (
            <></>
        )}
      </>
    );
  }
}

export default JokeApp;
