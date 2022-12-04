import React from 'react';

const PokemonList = ({pokemon, onPokemonClicked}) => {
  
  const handleClick = function() {
    console.log(`clicked on ${pokemon.name}`);
    onPokemonClicked(pokemon);
  }

  return <li onClick={handleClick}>{pokemon.result}</li>
}

export default PokemonList;