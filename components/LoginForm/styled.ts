import styled from "styled-components";

export const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  height: 20rem;
  width: 20rem;
`
export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
`

export const Button = styled.button`
  border-radius: 4px;
  height: 2rem;
  width: 8rem;

  font-weight: 900;
  text-transform: uppercase;
  background-color: ${props => props.theme.colors.green};
  color: ${props => props.theme.colors["gray-400"]};

  &:enabled {
    &:hover {
      box-shadow: ${props => props.theme.colors.green} 0px 0px 5px 0px;
      transition: 100ms box-shadow ease;
    }
  }

  &:disabled {
    cursor: auto;
    background-color: ${props => props.theme.colors.gray};
  }
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  input {
    height: 2rem;
    border: none;
    border-radius: 4px;
    padding: 1rem ;

    &:focus {
      outline: 1px solid ${props => props.theme.colors.white};
      box-shadow: ${props => props.theme.colors.green} 0px 2px 5px -1px, ${props => props.theme.colors.green} 0px 1px 3px -1px;
      transition: 180ms outline ease-in-out;
    }
  }
`

export const ErrorWrapper = styled.div`
  height: 2rem;
`