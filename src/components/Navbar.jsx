const Navbar = ({ pokemonList, setPokemonIndex }) => {
	// Je récupère l'id, et je met à jour mon state pokemonIndex avec l'id
	const handleClick = (id) => {
		setPokemonIndex(id);
	};

	return (
		<div>
			{
				/**
				 * Dans un .map, nous pouvons ajouter un 2nd argument qui permet d'afficher l'index.
				 * L'index de l'élément qui est traité par la fonction.
				 * cf: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/map
				 */
				pokemonList.map((pokemon, index) => {
					// J'utilse ma fonction handleClick et je passe en argument l'index (0, 1, 2, 3, ...)
					// Pour ne pas executer la fonction, j'utilise une fonction fléchée qui permet de pallier à l'éxécution de celui ci.
					return (
						<button key={index} onClick={() => handleClick(index)}>
							{pokemon.name}
						</button>
					);
				})
			}
		</div>
	);
};

export default Navbar;
