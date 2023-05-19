import React from 'react'
import {Card, PokemonImg, PokemonName, PokemonType, EvolveButton} from './styles'

const PokemonCard = (props) => {
    const { name, type, weight, color, image, changePokemon } = props.pokemon;
    
  return (
    <Card color={color}>
        <PokemonImg src={image} alt={`Pokemon`}/>
        <PokemonName>{name}</PokemonName>
        <PokemonType>{type}</PokemonType>
        <p>{weight}kg</p>

        <EvolveButton onClick={changePokemon}>Evoluir!</EvolveButton>
    </Card>
  )
}

export default PokemonCard