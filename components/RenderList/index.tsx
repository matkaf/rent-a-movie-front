import React from 'react'

import { IItem } from '../../interfaces'
import Card from '../Card/Card'

import { Div, Items, StyledContainer, StyledSection } from './styled'

const RenderList = (props: { movies: IItem[], games: IItem[] }) => {
  const { movies, games } = props
  
  return (
    <StyledContainer>
      <StyledSection>
        <Div>
          <h1>Filmes</h1>
          <Items>
            { movies.map((movie) => <Card type="movie" key={movie.id} item={movie}/>) }
          </Items>
        </Div>

        <Div>
          <h1>Games</h1>
          <Items>
            { games.map((game) => <Card type="game" key={game.id} item={game} />) }
          </Items>
        </Div>
      </StyledSection>
    </StyledContainer>
  )
}

export default RenderList