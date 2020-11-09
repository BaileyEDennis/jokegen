import React from 'react';
import './App.scss';
import JokeApp from '../components/JokeApp/index';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <img
        src={
          'https://user-images.githubusercontent.com/29741570/98047811-372e3b80-1df2-11eb-9bb6-3e8845e92d9e.png'
        }
        alt='jokeimage'
        className='logo'
        ></img>
        <JokeApp />
      </div>
    );
  }
}

export default App;
