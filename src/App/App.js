import React from 'react';
import './App.scss';
import Getjoke from '../getJokes';
import Joke from '../Joke';

class App extends React.Component {
  state = {
    jokes: [],
  };

  componentDidMount() {
    Getjoke.getJokes().then((resp) => {
      this.setState({
        jokes: resp,
      });
    });
  }

  render() {
    const { jokes } = this.state;
    const renderJokeToDom = () => (
      jokes.map((joke) => <Joke key={joke.id} joke={joke}/>)
    );
    return (
      <div>
        <h1>Joke Corral</h1>
        {renderJokeToDom()}
      </div>
    );
  }
}

export default App;
