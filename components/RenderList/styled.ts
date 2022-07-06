import styled from "styled-components";

export const StyledContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100vw;
  height: 90vh;
`

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 80%;
  height: 80%;
`

export const Div = styled.div`
  border: 1px solid #888888;
  border-radius: 4px;
  padding: 1rem;
`

export const Items = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  overflow-x: auto;

  gap: 2rem;
  margin: 1rem 0;
`