import React, { useContext, useEffect } from 'react'
import AppContext from '../../context/AppContext'
import { IItem } from '../../interfaces'

import { RentalBtn, StyledCard } from './styled'

const Card = (props: { item: IItem, type: string }) => {
  const { title, genre, release } = props.item
  const item = { type: props.type, ...props.item }

  const { setCartQuantity } = useContext(AppContext)

  const addToCart = () => {
    const prevCart = localStorage.getItem('cart')

    if (!prevCart) {
      const cart = JSON.stringify([item])

      setCartQuantity(1)
      localStorage.setItem('cart', cart)
    } else {
      const parsedCart = JSON.parse(prevCart)
      console.log(parsedCart);

      parsedCart.push(item)
      setCartQuantity((prev: number) => prev + 1)
      localStorage.setItem('cart', JSON.stringify(parsedCart))
    }
  }

  return (
      <StyledCard>
        <h3>{title}</h3>
        <div>
          <p>{genre}</p>
          <span>{release}</span>
        </div>
        <RentalBtn
          onClick={ addToCart }
        >
          Alugar
        </RentalBtn>
      </StyledCard>
  )
}

export default Card