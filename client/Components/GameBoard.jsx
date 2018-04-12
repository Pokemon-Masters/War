import React, { Component } from 'react';
import TeamQueue from './TeamQueue.jsx';
import ScoreBoard from './ScoreBoard.jsx';
import fetch from 'isomorphic-fetch';

class GameBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redLineup: [
        {
          "name": "Bulbasaur",
          "number": 1,
          "level": 1,
          "queuePosition": 1,
          "type": [
              "Grass",
              "Poison"
          ],
          "pokemonUrl": "https://img.pokemondb.net/artwork/bulbasaur.jpg"
        },
        {
          "name": "Ivysaur",
          "number": 1,
          "level": 5,
          "queuePosition": 2,
          "type": [
              "Grass",
              "Poison"
          ],
          "pokemonUrl": "https://img.pokemondb.net/artwork/ivysaur.jpg"
        },
        {
          "name": "Venusaur",
          "number": 1,
          "level": 8,
          "queuePosition": 3,
          "type": [
              "Grass",
              "Poison"
          ],
          "pokemonUrl": "https://img.pokemondb.net/artwork/venusaur.jpg"
        },
        {
          "name": "Charmander",
          "number": 1,
          "level": 22,
          "queuePosition": 4,
          "type": [
              "Fire"
          ],
          "pokemonUrl": "https://img.pokemondb.net/artwork/charmander.jpg"
        },
        {
          "name": "Charmeleon",
          "number": 1,
          "level": 18,
          "queuePosition": 5,
          "type": [
              "Fire"
          ],
          "pokemonUrl": "https://img.pokemondb.net/artwork/charmeleon.jpg"
        },
        {
          "name": "Charizard",
          "number": 1,
          "level": 15,
          "queuePosition": 6,
          "type": [
              "Fire",
              "Flying"
          ],
          "pokemonUrl": "https://img.pokemondb.net/artwork/charizard.jpg"
        },
        {
          "name": "Squirtle",
          "number": 1,
          "level": 8,
          "queuePosition": 7,
          "type": [
              "Water"
          ],
          "pokemonUrl": "https://img.pokemondb.net/artwork/squirtle.jpg"
        },
        {
          "name": "Wartortle",
          "number": 1,
          "level": 6,
          "queuePosition": 8,
          "type": [
              "Water"
          ],
          "pokemonUrl": "https://img.pokemondb.net/artwork/wartortle.jpg"
        },
        {
          "name": "Blastoise",
          "number": 1,
          "level": 20,
          "queuePosition": 9,
          "type": [
              "Water"
          ],
          "pokemonUrl": "https://img.pokemondb.net/artwork/blastoise.jpg"
        },
        {
          "name": "Caterpie",
          "number": 1,
          "level": 1,
          "queuePosition": 10,
          "type": [
              "Bug"
          ],
          "pokemonUrl": "https://img.pokemondb.net/artwork/caterpie.jpg"
        },
        {
          "name": "Metapod",
          "number": 1,
          "level": 4,
          "queuePosition": 11,
          "type": [
              "Bug"
          ],
          "pokemonUrl": "https://img.pokemondb.net/artwork/metapod.jpg"
        },
        {
          "name": "Butterfree",
          "number": 1,
          "level": 10,
          "queuePosition": 12,
          "type": [
              "Bug",
              "Flying"
          ],
          "pokemonUrl": "https://img.pokemondb.net/artwork/butterfree.jpg"
        },
      ],
      blueLineup: [
        {
          "name": "Weedle",
          "number": 1,
          "level": 10,
          "queuePosition": 1,
          "type": [
              "Bug",
              "Poison"
          ],
          "pokemonUrl": "https://img.pokemondb.net/artwork/weedle.jpg"
        },
        {
          "name": "Kakuna",
          "number": 1,
          "level": 10,
          "queuePosition": 2,
          "type": [
              "Bug",
              "Poison"
          ],
          "pokemonUrl": "https://img.pokemondb.net/artwork/kakuna.jpg"
        },
        {
          "name": "Beedrill",
          "number": 1,
          "level": 10,
          "queuePosition": 3,
          "type": [
              "Bug",
              "Poison"
          ],
          "pokemonUrl": "https://img.pokemondb.net/artwork/beedrill.jpg"
        },
        {
          "name": "Pidgey",
          "number": 1,
          "level": 10,
          "queuePosition": 4,
          "type": [
              "Normal",
              "Flying"
          ],
          "pokemonUrl": "https://img.pokemondb.net/artwork/pidgey.jpg"
        },
        {
          "name": "Pidgeotto",
          "number": 1,
          "level": 10,
          "queuePosition": 5,
          "type": [
              "Normal",
              "Flying"
          ],
          "pokemonUrl": "https://img.pokemondb.net/artwork/pidgeotto.jpg"
        },
        {
          "name": "Pidgeot",
          "number": 1,
          "level": 10,
          "queuePosition": 6,
          "type": [
              "Normal",
              "Flying"
          ],
          "pokemonUrl": "https://img.pokemondb.net/artwork/pidgeot.jpg"
        },
        {
          "name": "Rattata",
          "number": 1,
          "level": 10,
          "queuePosition": 7,
          "type": [
              "Normal"
          ],
          "pokemonUrl": "https://img.pokemondb.net/artwork/rattata.jpg"
        },
        {
          "name": "Raticate",
          "number": 1,
          "level": 10,
          "queuePosition": 8,
          "type": [
              "Normal"
          ],
          "pokemonUrl": "https://img.pokemondb.net/artwork/raticate.jpg"
        },
        {
          "name": "Spearow",
          "number": 1,
          "level": 10,
          "queuePosition": 9,
          "type": [
              "Normal",
              "Flying"
          ],
          "pokemonUrl": "https://img.pokemondb.net/artwork/spearow.jpg"
        },
        {
          "name": "Fearow",
          "number": 1,
          "level": 10,
          "queuePosition": 10,
          "type": [
              "Normal",
              "Flying"
          ],
          "pokemonUrl": "https://img.pokemondb.net/artwork/fearow.jpg"
        },
        {
          "name": "Ekans",
          "number": 1,
          "level": 10,
          "queuePosition": 11,
          "type": [
              "Poison"
          ],
          "pokemonUrl": "https://img.pokemondb.net/artwork/ekans.jpg"
        },
        {
          "name": "Arbok",
          "number": 1,
          "level": 10,
          "queuePosition": 12,
          "type": [
              "Poison"
          ],
          "pokemonUrl": "https://img.pokemondb.net/artwork/arbok.jpg"
        },
      ],
      currentRed: null,
      currentBlue: null,
      redScore: 0,
      blueScore: 0,
      winStateRed: null,
      winStateBlue: null,
      winner: null,
    }
    this.checkForWinner = this.checkForWinner.bind(this)
    this.resetBoard = this.resetBoard.bind(this)
  }

  componentDidMount() {
    //1. get request to get 20 cards each
    //2. set state so each player has a deck of 20 cards
    // fetch('/get-data')
    //   .then(res => res.json())
    //   .then(data => {
    //     console.log(data)
    //     // let firstRed = this.state.redLineup[0];
    //     // let firstBlue = this.state.blueLineup[0]
    //     const redLineupNew = [];
    //     const blueLineupNew = [];
    //     for (let i = 0; i < 20; i++) {
    //       redLineupNew.push(data[i])
    //     }
    //     for (let i = 20; i < 40; i++) {
    //       blueLineupNew.push(data[i])
    //     }
    //     console.log('red lineup: ' + redLineupNew[0])
    //     console.log('blue lineup: ' + blueLineupNew[0])
        // this.setState({
        //   redLineup: redLineup,
        //   blueLineup: blueLineup,
        //   currentRed: redLineup[0],
        //   currentBlue: blueLineup[0]
        // })
        this.setState({
          currentRed: this.state.redLineup[0],
          currentBlue: this.state.blueLineup[0]
        })
    //   })
  }

  checkForWinner() {
    // console.log(this.state.currentRed.level)
    // console.log(this.state.currentBlue.level)
    // console.log(this.state.currentRed.level > this.state.currentBlue.level)
    if (this.state.currentRed.level > this.state.currentBlue.level) {
      console.log('red')
      this.setState((prevState) => {
        return ({
          winStateRed: true,
          winStateBlue: false,
          redScore: prevState.redScore + 1,
        })
      });
    } else if (this.state.currentRed.level < this.state.currentBlue.level)  {
      console.log('blue')
      this.setState((prevState) => {
        return ({
          winStateRed: false,
          winStateBlue: true,
          blueScore: prevState.blueScore + 1
        })
      });
    } else {
      console.log('tie')
      this.setState({
        winStateRed: false,
        winStateBlue: false,
      })
    }
  }

  resetBoard() {
    this.setState((prevState) => {
      let newRedLineup = prevState.redLineup
      let newBlueLineup = prevState.blueLineup
      newRedLineup.shift()
      newBlueLineup.shift()
      // if (!newRedLineup.length) {
      //   if (this.state.redScore > this.state.blueScore) {
      //     return({
      //       winner: "Red Wins!"
      //     })
      //   } else if (this.state.blueScore > this.state.redScore) {
      //     return({
      //       winner: "Blue Wins!"
      //     })
      //   } else {
      //     return({
      //       winner: "It's a Tie!"
      //     })
      //   }
      // } else {
        return ({
          redLineup: newRedLineup,
          blueLineup: newBlueLineup,
          currentRed: newRedLineup[0],
          currentBlue: newBlueLineup[0],
          winStateRed: null,
          winStateBlue: null
        })
      // }
    })
  }


  render() {
    return (
      <div>
        <div id="game-board">
          <div id="scoreboard-wrapper">
            <ScoreBoard redScore={this.state.redScore} blueScore={this.state.blueScore} />
          </div>
          <div id="queue-wrapper">
            <TeamQueue 
                className='red' 
                team={'red'} 
                lineup={this.state.redLineup} 
                currentLevel={this.state.redLineup[0].level}
                winState={this.state.winStateRed}
            />
            <TeamQueue 
                className='blue'
                team={'blue'} 
                lineup={this.state.blueLineup} 
                currentLevel={this.state.blueLineup[0].level}
                winState={this.state.winStateBlue}
            />
          </div>
          <div id="play">
            <button id="play-button" onClick={this.checkForWinner}>Play!</button>
            <button id="next-button" onClick={this.resetBoard}>Next</button>
          </div>
        </div>
      </div>
    )
  }
}

export default GameBoard;


