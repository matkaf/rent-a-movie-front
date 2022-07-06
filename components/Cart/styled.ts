import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  padding-top: 2rem;;
`

export const OrderButton = styled.button`
  width: 15%;
  height: 3rem;

  border: 1px solid ${props => props.theme.colors.green};
  border-radius: 4px;
  background-color: rgba(52, 178, 123, 0.5);
  transition: background-color 0.5s linear;

  color: white;
  font-size: 1rem;

  &:hover {
    background-color: rgba(52, 178, 123, 1);
  }
`

export const DetailsContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 0.8rem;
  width: 80%;
`

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;


  border-radius: 4px;
  height: 4rem;
  width: 60%;

  &:nth-child(odd) {
    background-color: ${props => props.theme.colors.header};
  }
`

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

export const TitleDiv = styled(Div)`
  justify-content: flex-start;
  width: 60%;
`

export const Price = styled.h4`
  background-color: ${props => props.theme.colors.green};
  padding: 0.2rem;
  border-radius: 4px;
`

