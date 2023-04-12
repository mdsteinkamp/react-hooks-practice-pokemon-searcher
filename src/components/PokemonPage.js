import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemon, setPokemon] = useState([])
  const [search, setSearch] = useState("")
  const [formData, setFormData] = useState({})

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
      .then(resp => resp.json())
      .then(serverPokemon => setPokemon(serverPokemon))
  }, [])

  function handleSearch(e) {
    setSearch(e.target.value)
  }

  function handleFormChange(e){
    const name = e.target.name
    let value = e.target.value
    setFormData({
      ...formData,
      [name]: value
    })
    console.log(formData)
  }

  function handleFormSubmit(e){
    e.preventDefault()
    const updatedFormData = {
      name: formData.name,
      hp: formData.hp,
      sprites: {
        front: formData.frontUrl,
        back: formData.backUrl,
      }
    }
    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedFormData),
    })
      .then(resp => resp.json())
      .then(newPokemon => setPokemon([...pokemon, newPokemon]))
  }


  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm handleChange={handleFormChange} formData={formData} handleSubmit={handleFormSubmit}/>
      <br />
      <Search handleSearchChange={handleSearch} search={search}/>
      <br />
      <PokemonCollection pokemon={pokemon} search={search}/>
    </Container>
  );
}

export default PokemonPage;
