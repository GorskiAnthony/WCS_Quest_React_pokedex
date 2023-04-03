const Navbar = ({ pokemonIndex, pokemonLength, setPokemonIndex }) => {
	/**
	 * J'importe toutes les props (en descruturing) puis je les utilises
	 */
	const handleNext = () => {
		setPokemonIndex(pokemonIndex + 1);
	};

	const handlePrev = () => {
		setPokemonIndex(pokemonIndex - 1);
	};
	return (
		<div>
			{pokemonIndex > 0 ? (
				<button onClick={handlePrev}>Précédent</button>
			) : (
				""
			)}
			{pokemonIndex < pokemonLength ? (
				<button onClick={handleNext}>Suivant</button>
			) : (
				""
			)}
		</div>
	);
};

export default Navbar;
