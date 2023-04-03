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
		name: "mew",
	},
];
function App() {
	const pokemonChoice = pokemonList[0];

	return (
		<div className="App">
			<PokemonCard pokemon={pokemonChoice} />
		</div>
	);
}

export default App;
