import React, { Component } from 'react';

class Punchline extends Component {
  render() {
    return (
      <div className="joke-view">
        <div className="joke-punchline">{this.props.punchline}</div>
      </div>
    );
  }
}

export default Punchline;
