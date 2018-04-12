import React, { Component } from 'react';
import TeamQueue from './TeamQueue.jsx';

class GameBoard extends Component {
    constructor(props) {
        super();

        this.state = {
            redLineup: [
                {
                    "name": "Bulbasaur",
                    "number": 1,
                    "level": 10,
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
                    "level": 10,
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
                    "level": 10,
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
                    "level": 10,
                    "queuePosition": 4,
                    "type": [
                        "Fire"
                    ],
                    "pokemonUrl": "https://img.pokemondb.net/artwork/charmander.jpg"
                },
                {
                    "name": "Charmeleon",
                    "number": 1,
                    "level": 10,
                    "queuePosition": 5,
                    "type": [
                        "Fire"
                    ],
                    "pokemonUrl": "https://img.pokemondb.net/artwork/charmeleon.jpg"
                },
                {
                    "name": "Charizard",
                    "number": 1,
                    "level": 10,
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
                    "level": 10,
                    "queuePosition": 7,
                    "type": [
                        "Water"
                    ],
                    "pokemonUrl": "https://img.pokemondb.net/artwork/squirtle.jpg"
                },
                {
                    "name": "Wartortle",
                    "number": 1,
                    "level": 10,
                    "queuePosition": 8,
                    "type": [
                        "Water"
                    ],
                    "pokemonUrl": "https://img.pokemondb.net/artwork/wartortle.jpg"
                },
                {
                    "name": "Blastoise",
                    "number": 1,
                    "level": 10,
                    "queuePosition": 9,
                    "type": [
                        "Water"
                    ],
                    "pokemonUrl": "https://img.pokemondb.net/artwork/blastoise.jpg"
                },
                {
                    "name": "Caterpie",
                    "number": 1,
                    "level": 10,
                    "queuePosition": 10,
                    "type": [
                        "Bug"
                    ],
                    "pokemonUrl": "https://img.pokemondb.net/artwork/caterpie.jpg"
                },
                {
                    "name": "Metapod",
                    "number": 1,
                    "level": 10,
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
        }
    }

    

    render() {

        return (
            <div id="game-board">
                <TeamQueue className='red' team={'red'} lineup={this.state.redLineup} />
                <TeamQueue className='blue' team={'blue'} lineup={this.state.blueLineup} />
            </div>
        )
    }
}

export default GameBoard;