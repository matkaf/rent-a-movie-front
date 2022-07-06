import React from 'react'

import { IItem } from '../../interfaces'
import { Div, ItemContainer, Price, TitleDiv } from './styled'

const ItemDetails = (props: { item: IItem }) => {
  const { title, genre, release } = props.item
  const RELEASE_PRICE = 8
  const NORMAL_PRICE = 6

  const setRentalPrice = (releaseYear: number) => {
    const currYear = new Date().getFullYear()

    const price = currYear === releaseYear ? RELEASE_PRICE : NORMAL_PRICE

    return price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
  }

  return (
    <ItemContainer>
      <TitleDiv>
        <h3>{title}</h3>
      </TitleDiv>
      <Div>
        <h5>{genre}</h5>
      </Div>
      <Div>
        <h5>{release}</h5>
      </Div>
      <Div>
        <Price>{ setRentalPrice(release) }</Price>
      </Div>
    </ItemContainer>
  )
}

export default ItemDetails