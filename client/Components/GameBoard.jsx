import React, { Component } from 'react';
import TeamQueue from './TeamQueue.jsx';
import ScoreBoard from './ScoreBoard.jsx';
import fetch from 'isomorphic-fetch';

class GameBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redLineup: [ {
            "name": "Venusaur",
            "pokedexNo": 1,
            "level": 8,
            "queuePosition": 3,
            "type": [
                "Grass",
                "Poison"
            ],
            "photo": "https://img.pokemondb.net/artwork/venusaur.jpg"
          }],
      blueLineup: [ {
            "name": "Venusaur",
            "pokedexNo": 1,
            "level": 8,
            "queuePosition": 3,
            "type": [
                "Grass",
                "Poison"
            ],
            "photo": "https://img.pokemondb.net/artwork/venusaur.jpg"
          }],
      index: 0,
      redScore: 0,
      blueScore: 0,
      winStateRed: null,
      winStateBlue: null,
      // winner: null,
    }
    this.checkForWinner = this.checkForWinner.bind(this)
    this.resetBoard = this.resetBoard.bind(this)
  }

  componentDidMount() {
    fetch('/get-data')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        const redLineupNew = [];
        const blueLineupNew = [];
        for (let i = 0; i < 20; i++) {
          let randomNum = Math.floor(Math.random() * 15) + 1;
          data[i].level = randomNum;
          redLineupNew.push(data[i]);
        }
        for (let i = 20; i < 40; i++) {
          let randomNum = Math.floor(Math.random() * 15) + 1;
          data[i].level = randomNum;
          blueLineupNew.push(data[i])
        }
        let newState = Object.assign(this.state, {
          redLineup: redLineupNew,
          blueLineup: blueLineupNew,
          // index: 0,
          // redScore: 0,
          // blueScore: 0,
          // winStateRed: null,
          // winStateBlue: null,
        })
        this.setState(
          newState
        )
    })
  }

  checkForWinner() {
    if (this.state.redLineup[this.state.index].level > this.state.blueLineup[this.state.index].level) {
      let newRedScore = this.state.redScore + 1;
      this.setState({
        winStateRed: true,
        winStateBlue: false,
        redScore: newRedScore
      })
    } else if (this.state.redLineup[this.state.index].level < this.state.blueLineup[this.state.index].level)  {
      let newBlueScore = this.state.blueScore + 1;
      this.setState({
        winStateRed: false,
        winStateBlue: true,
        blueScore: newBlueScore
      })
    } else {
      this.setState({
        winStateRed: false,
        winStateBlue: false,
      })
    }
  }

  resetBoard() {
    let newIndex = this.state.index + 1
    this.setState({
      index: newIndex,
      winStateRed: null,
      winStateBlue: null
    })
  }

  render() {
    // return (this.state.redLineup.length) ?
    return (
        <div id="game-board">
          <div id="scoreboard-wrapper">
            <ScoreBoard redScore={this.state.redScore} blueScore={this.state.blueScore} />
          </div>
          <div id="queue-wrapper">
            <TeamQueue 
              className='red' 
              team={'red'} 
              lineup={this.state.redLineup}
              currentLevel={this.state.redLineup[this.state.index].level}
              winState={this.state.winStateRed}
              index={this.state.index}
            />
            <TeamQueue 
              className='blue'
              team={'blue'} 
              lineup={this.state.blueLineup} 
              currentLevel={this.state.blueLineup[this.state.index].level}
              winState={this.state.winStateBlue}
              index={this.state.index}
            />
          </div>
          <div id="play">
            <button id="play-button" onClick={this.checkForWinner}>Play!</button>
            <button id="next-button" onClick={this.resetBoard}>Next</button>
          </div>
        </div>
    )
    // :
    // (<div>
    //   <div id="game-board">
    //     <div id="scoreboard-wrapper">
    //       <ScoreBoard redScore={this.state.redScore} blueScore={this.state.blueScore} />
    //     </div>
    //     <div id="queue-wrapper">
    //       <TeamQueue 
    //           className='red' 
    //           team={'red'} 
    //           lineup={this.state.redLineup} 
    //           currentLevel={0}
    //           winState={this.state.winStateRed}
    //       />
    //       <TeamQueue 
    //           className='blue'
    //           team={'blue'} 
    //           lineup={this.state.blueLineup} 
    //           currentLevel={0}
    //           winState={this.state.winStateBlue}
    //       />
    //     </div>
    //     <div id="play">
    //       <button id="play-button" onClick={this.checkForWinner}>Play!</button>
    //       <button id="next-button" onClick={this.resetBoard}>Next</button>
    //     </div>
    //   </div>
    // </div>
    // )    
  }
}

export default GameBoard;


