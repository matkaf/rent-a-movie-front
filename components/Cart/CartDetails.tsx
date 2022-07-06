import React from 'react'
import { ItemType } from '../../interfaces'

import { saveGameRental, saveMovieRental } from '../../api/moviesAndGames'

import { DetailsContainer, Main, OrderButton } from './styled'

import ItemDetails from './ItemDetails'

const CartDetails = (props: { cart: ItemType[], userId: number }) => {
  const { cart, userId } = props

  const saveRentals = async (cart: ItemType[]) => {
    const order = cart.map((item) => {
      if (item.type === 'game') {
        return { gameId: item.id, userId }
      } return { movieId: item.id, userId }
    });

    const games = order.filter((item) =>  item.gameId)

    const movies = order.filter((item) => item.movieId)

    // TODO: verificar o por quê da tipagem não funcionar. As interfaces parecem corretas. A solução seria alterar o DB?

    if (movies && games){
      await saveGameRental(games)
      await saveMovieRental(movies)
    } else if (movies && !games) {
      await saveMovieRental(movies)
    } else if (!movies && games) {
      await saveGameRental(games)
    }
  }

  return (
    <Main>
      <div>
        <h1>Resumo do Carrinho</h1>
      </div>

      <OrderButton
        onClick={ async () => saveRentals(cart) }
      >
        Fazer pedido
      </OrderButton>

      <DetailsContainer>
        Detalhes
        {  cart.map((item, id) => <ItemDetails key={id} item={item}/> ) }
      </DetailsContainer>
    </Main>
  )
}

export default CartDetails