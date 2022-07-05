import React, { useState } from 'react'
import { useRouter } from 'next/router'

import { Button, ErrorWrapper, InputWrapper, StyledContainer, Title } from './styled'

import { requestLogin } from '../../api'

const LoginForm = () => {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [failedLogin, setFailedLogin] = useState(false)

  const handleLogin = async () => {
    try {
      const user = await requestLogin(email, password);
      if (user.id) {
        localStorage.setItem('user', JSON.stringify(user));
      }
      router.push('/dashboard')
    } catch (error) {
      setFailedLogin(true);
    }
  };

  return (
    <StyledContainer>

      <Title>Rent a Movie</Title>

      <InputWrapper>
        <input
          type='email'
          placeholder='Digite seu e-mail'
          onChange={ (e) => setEmail(e.target.value)}
        />
      </InputWrapper>

      <InputWrapper>
        <input
          type='password'
          placeholder='Digite sua senha'
          onChange={ (e) => setPassword(e.target.value)}
        />
      </InputWrapper>

      <Button
        onClick={ handleLogin }
        disabled={ !password || !email }
      >
        Entrar
      </Button>
      <ErrorWrapper>
        <p
          hidden={!failedLogin}
        >
          Email ou senha incorretos!
        </p>
      </ErrorWrapper>
    </StyledContainer>
  )
}

export default LoginForm