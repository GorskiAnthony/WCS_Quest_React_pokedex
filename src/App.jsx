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
			 * J'ai modifier mon composant Navbar, je vais donc modifier mon appel aussi.
			 */}
			<Navbar
				pokemonList={pokemonList}
				setPokemonIndex={setPokemonIndex}
			/>
		</div>
	);
}

export default App;
