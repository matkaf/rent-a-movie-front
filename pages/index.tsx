import type { NextPage } from 'next'
import Head from 'next/head'
import styled from 'styled-components'

import LoginForm from '../components/LoginForm/LoginForm'

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.colors.background};
`

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Rent a Movie</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <LoginForm />
      </Main>
    </>
  )
}

export default Home
