function PokemonCard(props) {
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
				props.pokemon.imgSrc ? (
					<img src={props.pokemon.imgSrc} alt={props.pokemon.name} />
				) : (
					<p>???</p>
				)
			}
			<figcaption>{props.pokemon.name}</figcaption>
		</figure>
	);
}
export default PokemonCard;
