import PropTypes from "prop-types";

function PokemonCard({ pokemon, index }) {
	// ici, je ne desctructure pas encore.
	// console.log(props, props.pokemon);

	/**
	 * console.log(props) output ⬇️
	 * {pokemon : {...}}
	 *
	 * console.log(props.pokemon) output ⬇️
	 * {
	 *  imgSrc: ...
	 *  name: ...
	 * }
	 */

	return (
		<figure>
			<img
				src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
					index + 1
				}.png`}
				alt={pokemon.name}
			/>
			<figcaption>{pokemon.name}</figcaption>
		</figure>
	);
}

PokemonCard.propTypes = {
	pokemon: PropTypes.shape({
		name: PropTypes.string.isRequired,
		imgSrc: PropTypes.string,
	}).isRequired,
};

export default PokemonCard;
