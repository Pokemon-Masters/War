import React, { Component } from 'react';
import TeamQueue from './TeamQueue.jsx';
import ScoreBoard from './ScoreBoard.jsx';
import fetch from 'isomorphic-fetch';

class GameBoard extends Component {
  constructor(props) {
    super();

    this.state = {
      newLineup: null,
      redLineup: null,
      blueLineup: null,
    //   redLineup: [
    //       {
    //         "name": "Bulbasaur",
    //         "pokedex_no": 1,
    //         "level": 1,
    //         "queuePosition": 1,
    //         "type": [
    //             "Grass",
    //             "Poison"
    //         ],
    //         "photo": "https://img.pokemondb.net/artwork/bulbasaur.jpg"
    //       },
    //       {
    //         "name": "Ivysaur",
    //         "pokedex_no": 1,
    //         "level": 5,
    //         "queuePosition": 2,
    //         "type": [
    //             "Grass",
    //             "Poison"
    //         ],
    //         "photo": "https://img.pokemondb.net/artwork/ivysaur.jpg"
    //       },
    //       {
    //         "name": "Venusaur",
    //         "pokedex_no": 1,
    //         "level": 8,
    //         "queuePosition": 3,
    //         "type": [
    //             "Grass",
    //             "Poison"
    //         ],
    //         "photo": "https://img.pokemondb.net/artwork/venusaur.jpg"
    //       },
    //       {
    //         "name": "Charmander",
    //         "pokedex_no": 1,
    //         "level": 22,
    //         "queuePosition": 4,
    //         "type": [
    //             "Fire"
    //         ],
    //         "photo": "https://img.pokemondb.net/artwork/charmander.jpg"
    //       },
    //       {
    //         "name": "Charmeleon",
    //         "pokedex_no": 1,
    //         "level": 18,
    //         "queuePosition": 5,
    //         "type": [
    //             "Fire"
    //         ],
    //         "photo": "https://img.pokemondb.net/artwork/charmeleon.jpg"
    //       },
    //       {
    //         "name": "Charizard",
    //         "pokedex_no": 1,
    //         "level": 15,
    //         "queuePosition": 6,
    //         "type": [
    //             "Fire",
    //             "Flying"
    //         ],
    //         "photo": "https://img.pokemondb.net/artwork/charizard.jpg"
    //       },
    //       {
    //         "name": "Squirtle",
    //         "pokedex_no": 1,
    //         "level": 8,
    //         "queuePosition": 7,
    //         "type": [
    //             "Water"
    //         ],
    //         "photo": "https://img.pokemondb.net/artwork/squirtle.jpg"
    //       },
    //       {
    //         "name": "Wartortle",
    //         "pokedex_no": 1,
    //         "level": 6,
    //         "queuePosition": 8,
    //         "type": [
    //             "Water"
    //         ],
    //         "photo": "https://img.pokemondb.net/artwork/wartortle.jpg"
    //       },
    //       {
    //         "name": "Blastoise",
    //         "pokedex_no": 1,
    //         "level": 20,
    //         "queuePosition": 9,
    //         "type": [
    //             "Water"
    //         ],
    //         "photo": "https://img.pokemondb.net/artwork/blastoise.jpg"
    //       },
    //       {
    //         "name": "Caterpie",
    //         "pokedex_no": 1,
    //         "level": 1,
    //         "queuePosition": 10,
    //         "type": [
    //             "Bug"
    //         ],
    //         "photo": "https://img.pokemondb.net/artwork/caterpie.jpg"
    //       },
    //       {
    //         "name": "Metapod",
    //         "pokedex_no": 1,
    //         "level": 4,
    //         "queuePosition": 11,
    //         "type": [
    //             "Bug"
    //         ],
    //         "photo": "https://img.pokemondb.net/artwork/metapod.jpg"
    //       },
    //       {
    //         "name": "Butterfree",
    //         "pokedex_no": 1,
    //         "level": 10,
    //         "queuePosition": 12,
    //         "type": [
    //             "Bug",
    //             "Flying"
    //         ],
    //         "photo": "https://img.pokemondb.net/artwork/butterfree.jpg"
    //       },
    //   ],
    //   blueLineup: [
    //       {
    //         "name": "Weedle",
    //         "pokedex_no": 1,
    //         "level": 10,
    //         "queuePosition": 1,
    //         "type": [
    //             "Bug",
    //             "Poison"
    //         ],
    //         "photo": "https://img.pokemondb.net/artwork/weedle.jpg"
    //       },
    //       {
    //         "name": "Kakuna",
    //         "pokedex_no": 1,
    //         "level": 10,
    //         "queuePosition": 2,
    //         "type": [
    //             "Bug",
    //             "Poison"
    //         ],
    //         "photo": "https://img.pokemondb.net/artwork/kakuna.jpg"
    //       },
    //       {
    //         "name": "Beedrill",
    //         "pokedex_no": 1,
    //         "level": 10,
    //         "queuePosition": 3,
    //         "type": [
    //             "Bug",
    //             "Poison"
    //         ],
    //         "photo": "https://img.pokemondb.net/artwork/beedrill.jpg"
    //       },
    //       {
    //         "name": "Pidgey",
    //         "pokedex_no": 1,
    //         "level": 10,
    //         "queuePosition": 4,
    //         "type": [
    //             "Normal",
    //             "Flying"
    //         ],
    //         "photo": "https://img.pokemondb.net/artwork/pidgey.jpg"
    //       },
    //       {
    //         "name": "Pidgeotto",
    //         "pokedex_no": 1,
    //         "level": 10,
    //         "queuePosition": 5,
    //         "type": [
    //             "Normal",
    //             "Flying"
    //         ],
    //         "photo": "https://img.pokemondb.net/artwork/pidgeotto.jpg"
    //       },
    //       {
    //         "name": "Pidgeot",
    //         "pokedex_no": 1,
    //         "level": 10,
    //         "queuePosition": 6,
    //         "type": [
    //             "Normal",
    //             "Flying"
    //         ],
    //         "photo": "https://img.pokemondb.net/artwork/pidgeot.jpg"
    //       },
    //       {
    //         "name": "Rattata",
    //         "pokedex_no": 1,
    //         "level": 10,
    //         "queuePosition": 7,
    //         "type": [
    //             "Normal"
    //         ],
    //         "photo": "https://img.pokemondb.net/artwork/rattata.jpg"
    //       },
    //       {
    //         "name": "Raticate",
    //         "pokedex_no": 1,
    //         "level": 10,
    //         "queuePosition": 8,
    //         "type": [
    //             "Normal"
    //         ],
    //         "photo": "https://img.pokemondb.net/artwork/raticate.jpg"
    //       },
    //       {
    //         "name": "Spearow",
    //         "pokedex_no": 1,
    //         "level": 10,
    //         "queuePosition": 9,
    //         "type": [
    //             "Normal",
    //             "Flying"
    //         ],
    //         "photo": "https://img.pokemondb.net/artwork/spearow.jpg"
    //       },
    //       {
    //         "name": "Fearow",
    //         "pokedex_no": 1,
    //         "level": 10,
    //         "queuePosition": 10,
    //         "type": [
    //             "Normal",
    //             "Flying"
    //         ],
    //         "photo": "https://img.pokemondb.net/artwork/fearow.jpg"
    //       },
    //       {
    //         "name": "Ekans",
    //         "pokedex_no": 1,
    //         "level": 10,
    //         "queuePosition": 11,
    //         "type": [
    //             "Poison"
    //         ],
    //         "photo": "https://img.pokemondb.net/artwork/ekans.jpg"
    //       },
    //       {
    //         "name": "Arbok",
    //         "pokedex_no": 1,
    //         "level": 10,
    //         "queuePosition": 12,
    //         "type": [
    //             "Poison"
    //         ],
    //         "photo": "https://img.pokemondb.net/artwork/arbok.jpg"
    //       },
    //   ],
      currentRed: null,
      currentBlue: null,
      redScore: 0,
      blueScore: 0,
      winStateRed: null,
      winStateBlue: null,
      winner: null
    }
    this.checkForWinner = this.checkForWinner.bind(this)
    // this.newLineup = this.newLineup.bind(this)
    this.resetBoard = this.resetBoard.bind(this)
  }

  componentWillMount() {
      if (this.state.redLineup === null) this.newLineup();
  }

  componentDidMount() {
    if (this.state.redLineup !== null) {
        this.setState({
          currentRed: this.state.redLineup[0],
          currentBlue: this.state.blueLineup[0]
        })
    }
  }

  newLineup() {
    let result;
    fetch('/get-data')
    .then(response => response.json())
    .then((response) => {
        console.log(response)
            this.setState({
                redLineup: response.slice(0,13),
                blueLineup: response.slice(13)
            })
    }).catch((err) => {
        console.error(err)
    })
  }

  checkForWinner() {
    console.log(this.state.currentRed.level)
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

  getWinner() {
    this.setState(() => {
        if (this.state.redScore > this.state.blueScore) {
            return({
                winner: "Red Wins!"
            })
        } else if (this.state.blueScore > this.state.redScore) {
            return({
                winner: "Blue Wins!"
            })
        } else {
            return({
                winner: "It's a Tie!"
            })
        }
    });

  }

  resetBoard() {
      console.log(this.state.redLineup.length)
      console.log(this.state.winner)
    if (this.state.redLineup.length === 1 && this.state.winner === null) {
        this.getWinner(); 
        return;
    }
    if (this.state.redLineup.length === 1) {
        this.newLineup();
    }
    this.setState((prevState) => {
    prevState.redLineup.shift()
    prevState.blueLineup.shift()
        return ({
            redLineup: prevState.redLineup,
            blueLineup: prevState.blueLineup,
            currentRed: this.state.redLineup[0],
            currentBlue: this.state.blueLineup[0],
            winStateRed: null,
            winStateBlue: null,
            winner: null
        })
    });
    // })
  }


  render() {
    const showRed = this.state.redLineup ? 
        (<TeamQueue 
            className='red' 
            team={'red'} 
            lineup={this.state.redLineup} 
            currentLevel={this.state.redLineup[0].level}
            winState={this.state.winStateRed}
        />) :
        <div></div>
    const showBlue = this.state.blueLineup ?
        (<TeamQueue 
            className='blue'
            team={'blue'} 
            lineup={this.state.blueLineup} 
            currentLevel={this.state.blueLineup[0].level}
            winState={this.state.winStateBlue}
        />) :
        <div></div>



    return (
      <div>
        <div id="game-board">
          <div id="scoreboard-wrapper">
            <ScoreBoard redScore={this.state.redScore} blueScore={this.state.blueScore} />
            <div id="winner">{this.state.winner}</div>
          </div>
          <div id="queue-wrapper">
            
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