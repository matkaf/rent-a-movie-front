import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;

  height: 10vh;
  width: 100vw;
  background-color: ${props => props.theme.colors.header};
`

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  height: 100%;
  margin: auto;
`

export const NavWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 80%;

  nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 70%;
    height: 2rem;
  }
`
export const A = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    height: 100%;
    width: 10rem;
    transition: background-color 1s;

    p {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(52, 178, 123, 0.1);
      border-radius: 0.3rem;
      width: 20%;
      height: 80%;
      text-align: center;
      margin-left: 1rem;
    }

  &:hover {
    background-color: ${props => props.theme.colors["gray-200"]};
  }
`

export const LogoutBtn = styled.button`
  width: 5rem;
  height: 2rem;
  border-radius: 4px;
  background-color: ${props => props.theme.colors.green};
  color: ${props => props.theme.colors["gray-200"]};

`

export const Title = styled.h1`
  font-size: 2rem;
`