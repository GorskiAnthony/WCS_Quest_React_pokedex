/**
 * Data en dur dans le component
 */
const pokemonList = [
	{
		name: "bulbasaur",
		imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
	},
	{
		name: "mew",
	},
];
function PokemonCard() {
	// Sur ce pokemon RAS ✅
	// const pokemon = pokemonList[0];

	// Oups, pas d'image sur celui ci 😱 Et oui il n'y a pas d'image
	const pokemon = pokemonList[1];
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
export default PokemonCard;
