import React, { Component } from 'react';
import Draggable from 'react-draggable';
import PropTypes from 'prop-types';

import PokemonCard from './PokemonCard.jsx';
import Result from './Result.jsx';

class TeamQueue extends Component {
  constructor(props) {
    super(props);
    this.typeMap = {
      grass: 'https://cdn.bulbagarden.net/upload/thumb/2/2e/Grass-attack.png/20px-Grass-attack.png',
      fire: 'https://cdn.bulbagarden.net/upload/thumb/a/ad/Fire-attack.png/20px-Fire-attack.png',
      water: 'https://cdn.bulbagarden.net/upload/thumb/1/11/Water-attack.png/20px-Water-attack.png',
      lightning: 'https://cdn.bulbagarden.net/upload/thumb/0/04/Lightning-attack.png/20px-Lightning-attack.png',
      fighting: 'https://cdn.bulbagarden.net/upload/thumb/4/48/Fighting-attack.png/20px-Fighting-attack.png',
      psychic: 'https://cdn.bulbagarden.net/upload/thumb/e/ef/Psychic-attack.png/20px-Psychic-attack.png',
      colorless: 'https://cdn.bulbagarden.net/upload/thumb/1/1d/Colorless-attack.png/20px-Colorless-attack.png',
      darkness: 'https://cdn.bulbagarden.net/upload/thumb/a/ab/Darkness-attack.png/20px-Darkness-attack.png',
      metal: 'https://cdn.bulbagarden.net/upload/thumb/6/64/Metal-attack.png/20px-Metal-attack.png',
      dragon: 'https://cdn.bulbagarden.net/upload/thumb/8/8a/Dragon-attack.png/20px-Dragon-attack.png',
      fairy: 'https://cdn.bulbagarden.net/upload/thumb/4/40/Fairy-attack.png/20px-Fairy-attack.png'
    }
    this.state = {
      activeDrags: 0,
      deltaPosition: {
        x: 0, y: 0
      },
      types: null,
      dragX: 0,
      dragY: 250,
    }
    this.handleDrag = this.handleDrag.bind(this);
    this.onStop = this.onStop.bind(this);
  }

  getTypes (type) {
    const result = [];
    for (let i = 0; i < type.length; i++) {
      switch (type[i].toLowerCase()) {
        case 'grass':
        case 'bug':
          result.push(['grass', this.typeMap.grass]);
          break;
        case 'fire':
          result.push(['fire', this.typeMap.fire]);
          break;
        case 'water':
        case 'ice':
          result.push(['water', this.typeMap.water]);
          break;
        case 'electric':
          result.push(['lightning', this.typeMap.lightning]);
          break;
        case 'fighting':
        case 'rock':
        case 'ground':
          result.push(['fightning', this.typeMap.fighting]);
          break;
        case 'psychic':
        case 'ghost':
          result.push(['psychic', this.typeMap.psychic]);
          break;
        case 'normal':
        case 'flying':
          result.push(['colorless', this.typeMap.colorless]);
          break;
        case 'dark':
          result.push(['darkness', this.typeMap.darkness]);
          break;
        case 'steel':
          result.push(['metal', this.typeMap.metal]);
          break;
        case 'fairy':
          result.push(['fairy', this.typeMap.fairy]);
          break;
        case 'dragon':
          result.push(['colorless', this.typeMap.colorless]);
          result.push(['dragon', this.typeMap.dragon]);
          break;
        case 'poison':
          result.push(['grass', this.typeMap.grass]);
          result.push(['psychic', this.typeMap.psychic]);
          break;
      }
    }
    return result;
  }

  handleDrag(e, ui) {
    const {x, y} = this.state.deltaPosition;
    this.setState({
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY,
      }
    });
  }
  
  onStop() {
      this.setState({activeDrags: --this.state.activeDrags});
  }

  
  
  // orderCards() {
  //     const cardQueue = [];
  //     const dragHandlers = {
  //         onDrag: this.handleDrag, 
  //         onStop: this.onStop,
  //         axis: 'y',
  //         handle: ".handle",
  //         position: {x: number, y: number},
  //         grid: [0, 312]
  //     };

  //     for (let i = 0; i < this.props.lineup.length; i++) {
  //         const types = this.getTypes(this.props.lineup[i].type)
  //         cardQueue.push(
  //             <Draggable key={i+this.props.team} id={i} {...dragHandlers}>
  //             <div className="handle">
  //                 <PokemonCard key={'pokemonCard'+i} pokemon={this.props.lineup[i]} types={types} />
  //             </div>
  //             </Draggable>
  //         );
  //     }

  //     this.setState({
  //         cardQueue
  //     })
  // }

  // componentDidMount() {
  //     this.orderCards();
  // }   
  

  render() {
    const dragHandlers = {
      onDrag: this.handleDrag, 
      onStop: this.onStop,
      axis: 'y',
      handle: ".handle",
      position: {x: this.state.dragX, y: this.state.dragY},
      grid: [0, 312]
    };
    
    const types = this.getTypes(this.props.lineup[0].type)

    return (
      <div>
        <Result winState={this.props.winState} />
        <div className="team-queue" id={this.props.team}>  
          <Draggable {...dragHandlers}>
          <div className="handle">
            <PokemonCard pokemon={this.props.lineup[0]} types={types} />
          </div>
          </Draggable>
        </div>
      </div>
    )
  }
}

TeamQueue.propTypes = {
	// links: PropTypes.array.isRequired,
	// current: PropTypes.string.isRequired,
	// updateCurrent: PropTypes.func.isRequired
}

export default TeamQueue;