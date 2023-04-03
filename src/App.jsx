import { useState } from "react";
import PokemonCard from "./components/PokemonCard";
import Navbar from "./components/Navbar";
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

	const pokemonChoice = pokemonList[pokemonIndex];

	return (
		<div className="App">
			<PokemonCard pokemon={pokemonChoice} />
			{/**
			 * Ici, je passe en props après avoir réfléchi
			 * - Le state pokemonIndex car il sera manipuler dans le composant Navbar
			 * - Idem pour la taille du tableau, je fait l'operation ici pour ne pas passer une props en plus (pokemonList)
			 * - setPokemonIndex pour mettre à jour mon state pokemonIndex
			 */}
			<Navbar
				pokemonIndex={pokemonIndex}
				pokemonLength={pokemonList.length - 1}
				setPokemonIndex={setPokemonIndex}
			/>
		</div>
	);
}

export default App;
