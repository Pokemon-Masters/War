import React, { Component } from 'react';
import GameBoard from './GameBoard.jsx';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <GameBoard />
      </div>
    )
  }
}

export default App;