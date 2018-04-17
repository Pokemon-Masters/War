import React, { Component } from 'react';
import PropTypes from 'prop-types';

const PokemonCard = (props) => {
    
  // style={{top: props.pos}}
  return (
    <div className="pokemon-card" >
      <strong>{props.pokemon.name}</strong>
      <br></br>
      <em>{'#'+props.pokemon.pokedex_no}</em>
      <br></br>
      <em>{'lvl '+props.pokemon.level}</em>
      <br />
      
      {props.types.map((x, i) => {
          return <img key={x+i} className="type-logo" src={x[1]} />
      })
      }
      <img className="pokemon-img" src={props.pokemon.photo} />
    </div>
  )
}

PokemonCard.propTypes = {
    
}

export default PokemonCard;