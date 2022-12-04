import React, { useEffect, useState } from 'react';
import PokemonDetails from '../components/PokemonDetails';
import PokemonSelect from '../components/PokemonSelect';
import PokemonList from '../components/PokemonList.js';

const PokemonsContainer = () => {
    const [pokemons, setPokemons] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState(null);
    const [nextURL, setNextURL] = useState("https://pokeapi.co/api/v2/pokemon?offset=0&limit=40");
    const [prevURL, setPrevURL] = useState("")
    const [pokemonCount, setPokemonCount] = useState(0)

    useEffect(() => {
        getPokemons();
    }, [])

    const getPokemons = function (nextURL){
        fetch(nextURL)
        .then(response => response.json())
        .then(result => setPokemons(result.results))
        .then(result => setNextURL(result.next))
        .then(result => setPrevURL(result.previous))
    }

    const nextPokemons = function() {
        getPokemons(nextURL)
    }

    const prevPokemons = function() {
        getPokemons(prevURL)
    }

    const onPokemonSelected = function(pokemon){
        setSelectedPokemon(pokemon);
    }

    // return (
    //     <div className='main-container'>
    //         <PokemonList pokemons={pokemons} onPokemonSelected={onPokemonSelected} />
    //         {selectedPokemon ? <PokemonDetails pokemon={selectedPokemon}/> : null}
    //     </div>
    // );

    return (
        <div className='main-container'>
            <PokemonSelect pokemons={pokemons} onPokemonSelected={onPokemonSelected} />
            {selectedPokemon ? <PokemonDetails pokemon={selectedPokemon}/> : null}
        </div>
    );

}

export default PokemonsContainer;