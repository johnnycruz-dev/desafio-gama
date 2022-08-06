import styled from 'styled-components';

export const Container = styled.div`
  background-color: #0060B1;
  padding: 1rem 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 500px;
  margin: 0 1rem;

  input {
    width: 100%;
    padding: 0.5rem 1rem;
    margin-right: 0.5rem;
  }

  @media screen and (max-width: 960px) {
    margin: 1rem;
  }
`

export const MyAccountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: 1rem;
    margin-right: 0.5rem;
  }
`
