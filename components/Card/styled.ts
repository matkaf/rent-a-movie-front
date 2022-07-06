import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 1rem;

  background-color: ${props => props.theme.colors["gray-400"]};
  border-radius: 8px;
  transition: background-color 1s;

  width: 15rem;
  min-width: 12rem;
  height: 15rem;
  padding: 1rem 1rem;

  h3 {
    font-size: 1.12rem;
    height: 3rem;
  }

  &:hover {
    background-color: ${props => props.theme.colors["gray-200"]};
  }
`

export const RentalBtn = styled.button`
  width: 5rem;
  height: 2rem;
  border-radius: 4px;
  background-color: ${props => props.theme.colors.green};

`