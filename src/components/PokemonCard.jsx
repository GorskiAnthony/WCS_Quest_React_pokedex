import PropTypes from "prop-types";

function PokemonCard({ pokemon }) {
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
			{
				/**
				 * Du coup, je fais une ternaire pour vérifier si image il y a 😁
				 */
				pokemon.imgSrc ? (
					<img src={pokemon.imgSrc} alt={pokemon.name} />
				) : (
					<p>???</p>
				)
			}
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
