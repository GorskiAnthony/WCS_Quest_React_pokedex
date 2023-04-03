import { useState } from "react";
import PokemonCard from "./components/PokemonCard";
import "./App.css";

/**
 * Data en dur dans le component
 */
const pokemonList = [
	{
		name: "bulbasaur",
		imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
	},
	{
		name: "charmander",
		imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
	},
	{
		name: "squirtle",
		imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
	},
	{
		name: "pikachu",
		imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
	},
	{
		name: "mew",
	},
];
function App() {
	const [pokemonIndex, setPokemonIndex] = useState(0);

	// J'utilise mon state pour récupérer l'index de mon pokemon
	// dans le tableau de pokemon (pokemonList)
	const pokemonChoice = pokemonList[pokemonIndex];

	// S'il clique sur suivant, j'incremente pokemonIndex
	const handleNext = () => {
		setPokemonIndex(pokemonIndex + 1);
	};

	// S'il clique sur precedent, je decremente pokemonIndex
	const handlePrev = () => {
		setPokemonIndex(pokemonIndex - 1);
	};

	return (
		<div className="App">
			{/** Je passe ensuite mon pokemon (pokemonChoise) à mon composant */}
			<PokemonCard pokemon={pokemonChoice} />
			<div>
				<button onClick={handlePrev}>Précédent</button>
				<button onClick={handleNext}>Suivant</button>
			</div>
		</div>
	);
}

export default App;
