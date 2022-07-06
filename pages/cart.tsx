import Head from 'next/head'
import React, { useEffect, useState } from 'react'

import Header from '../components/Header/Header'
import CartDetails from '../components/Cart/CartDetails'

const Cart = () => {
  const [cart, setCart] = useState([])
  const [userId, setUserId] = useState(1)

  useEffect(() => {
    const localCart = localStorage.getItem('cart')

    if (localCart) {
      const parsed = JSON.parse(localCart)
      
      setCart(parsed)
    }
  }, [])

  useEffect(() => {
    const user = localStorage.getItem('user')

    if (user) {
      const parsed = JSON.parse(user)
      setUserId(parsed.id)
    }
  }, [])

  return (
    <>
      <Head>
        <title>Rent a Movie - Carrinho</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <>
        <Header />
        <CartDetails cart={cart} userId={userId}/>
      </>
    </>
  )
}

export default Cart