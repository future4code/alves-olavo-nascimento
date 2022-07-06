import axios from "axios";
import PokeCard from "./components/PokeCard";
import React, { useState, useEffect } from "react";
import * as C from './styled'

function App() {

  const [pokeList, setPokeList] = useState([])
  const [pokeName, setPokeName] = useState("")

  const pegaLista = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((res) => {
        setPokeList(res.data.results)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    pegaLista()
  }, [])

  const changePokeName = (event) => {
    setPokeName(event.target.value)
  };

  const pokeOptions = pokeList.map(pokemon => {
    return (
      <option key={pokemon.name} value={pokemon.name}>
        {pokemon.name}
      </option>
    );
  });

  const pokemon = pokeName && <PokeCard pokeName={pokeName} />;

  return (
    <C.Pokemon>
      <C.TextoExibir>
        <h1>Exibir Pokémon</h1>
      </C.TextoExibir>
      <hr />
      <nav>
        <label htmlFor={"select-pokemon"}>Selecione um pokemon: </label>
        <select id={"select-pokemon"} onChange={changePokeName}>
          <option value={""}>Nenhum</option>
          {pokeOptions}
        </select>
      </nav>
      <main>
        {pokemon}
      </main>
    </C.Pokemon>
  );
}

export default App;
