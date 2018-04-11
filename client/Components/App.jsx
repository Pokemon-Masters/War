import React, { Component } from 'react';
import GameBoard from './GameBoard.jsx';

class App extends Component {
    constructor() {
        super();

    }

    render() {
        return (
            <div>
                <p>Hello World</p>
                <GameBoard />
            </div>
        )
    }
}

export default App;