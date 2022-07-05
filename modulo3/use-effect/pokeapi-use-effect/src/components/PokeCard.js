import axios from "axios";
import React, { useState, useEffect } from "react";
import * as C from './styled'

function PokeCard(props) {
  const [pokemon, setPokemon] = useState({})

  useEffect(() => {
    pegaPokemon(props.pokeName)
  }, [props.pokeName])

  const pegaPokemon = (pokeName) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then((res) => {
        setPokemon(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <C.Card>
      <strong>{pokemon.name && pokemon.name.toUpperCase()}</strong>
      <p>Peso: {pokemon.weight}</p>
      <p>Tipo: {pokemon.types && pokemon.types[0].type.name}</p>
      {pokemon.sprites && (
        <C.ImagemPok src={pokemon.sprites.front_default} alt={pokemon.name} />
      )}
    </C.Card>
  );
};

export default PokeCard;
