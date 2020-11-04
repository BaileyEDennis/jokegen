import React, { Component } from 'react';

export default class Joke extends Component {
  render() {
    const { joke } = this.props;
    console.warn(joke);
    return (
      <div className="Goat col-3" id={joke.id}>
       <h3>{joke}</h3>
      </div>
    );
  }
}
