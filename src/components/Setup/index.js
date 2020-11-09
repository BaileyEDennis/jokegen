import React, { Component } from 'react';

class Setup extends Component {
  render() {
    return (
      <div className="joke-view">
        <div className="joke-setup">{this.props.setup}</div>
      </div>
    );
  }
}

export default Setup;
