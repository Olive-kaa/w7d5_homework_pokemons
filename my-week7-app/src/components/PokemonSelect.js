import PokemonOption from "./PokemonOption";

const PokemonSelect = (pokemons, onPokemonSelected) => {

    const handleChange = function(event) {
        const chosenPokemon = pokemons[event.target.value];
        onPokemonSelected(chosenPokemon);
    }

    const allPokemons = pokemons.map((pokemon, index) => {
        return <PokemonOption index={index} pokemon={pokemon} key={index} />
    })

    return (
        <select defaultValue="" onChange={handleChange}>
            <option value="" selected>Tell me more about this pokemon</option>
            {allPokemons}
        </select>
    )
}

export default PokemonSelect;