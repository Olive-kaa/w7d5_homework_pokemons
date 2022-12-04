const PokemonOption = ({pokemon, index}) => {
    return <option value={index}>{pokemon.name}</option>
}
export default PokemonOption;