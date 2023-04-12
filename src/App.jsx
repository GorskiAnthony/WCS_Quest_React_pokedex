import { useState } from "react";
import PokemonCard from "./components/PokemonCard";
import Navbar from "./components/Navbar";
import axios from "axios";
import "./App.css";

/**
 * Data en dur dans le component
 */
const pokemonListInit = [
	{
		coucou: "jaimelespommes",
	},
];
function App() {
	// Je créer une variable qui contient l'adresse de mon API
	const API = "https://pokeapi.co/api/v2/pokemon?limit=151";

	// Je créer un state `pokemonList`car je vais mettre à jour
	// pokemonList avec les infos de l'api https://pokeapi.co/
	const [pokemonList, setPokemonList] = useState(pokemonListInit);

	// fetch, l'api du navigateur pour aller récupérer des données
	// fetch(API)
	// 	.then((res) => res.json())
	// 	.then((data) => setPokemonList(data.results));

	// utilisation du package npm `axios`
	axios
		.get(API)
		.then((res) => setPokemonList(res.data.results))
		.catch((err) => console.error(err));

	const [pokemonIndex, setPokemonIndex] = useState(0);
	const pokemonChoice = pokemonList[pokemonIndex];

	return (
		<div className="App">
			{/**
			 * Ajout de l'index dans notre PokemonCard pour avoir son image
			 * */}
			<PokemonCard pokemon={pokemonChoice} index={pokemonIndex} />
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
