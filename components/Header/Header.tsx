import Link from 'next/link'
import React, { useContext, useEffect } from 'react'
import AppContext from '../../context/AppContext'
import { StyledHeader, Title, LogoWrapper, NavWrapper, LogoutBtn, A } from './styled'

const Header = () => {
  const { cartQuantity } = useContext(AppContext)

  return (
    <StyledHeader>
      <LogoWrapper>
        <Link href='/dashboard'>
          <Title>Rent a Movie</Title>
        </Link>
      </LogoWrapper>
      <NavWrapper>
        <nav>
          <A href='#'>Meus alugueis</A>
          <A href='/cart'>
            Meu carrinho
            <p>{cartQuantity}</p>
          </A>
          <LogoutBtn>Sair</LogoutBtn>
        </nav>
      </NavWrapper>
    </StyledHeader>
  )
}

export default Header