import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemon, search }) {
  
  const shownPokemon = search !== "" ? pokemon.filter(onePokemon => onePokemon.name.includes(search)) : pokemon

  const pokemonList = shownPokemon.map(onePokemon => (
    <PokemonCard key={onePokemon.id} pokemon={onePokemon} />
  ))


  return (
    <Card.Group itemsPerRow={6}>
      {pokemonList}
    </Card.Group>
  );
}

export default PokemonCollection;
