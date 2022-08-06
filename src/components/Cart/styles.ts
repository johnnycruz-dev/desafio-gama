import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 90%;

  aside {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-left: 2rem;
    background-color: #FFF;
    border: 1px solid #FF6500;
    max-height: 600px;
    margin-top: 6rem;
    margin-right: 3rem;

    > h2 {
      font-size: 2rem;
      font-weight: bold;
      color: #000;
      margin: 0.5rem 0;
      padding-bottom: 0.5rem;
      text-align: center;
      border-bottom: 2px solid #FF6500;
    }
  }

  @media screen and (max-width: 960px) {
    width: 100%;

    aside {
      margin: 1rem 2rem 0;
      min-height: 450px;
    }
  }
`

export const ProductItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid #FF6500;

  img {
    width: 100%;
    max-width: 50px;
    height: auto;
    object-fit: cover;
  }

  h3 {
    font-size: 1.5rem;
    color: #000;
    margin-left: 1rem;
  }
  
  p {
    font-size: 1rem;
    color: #FF6500;
    margin-left: auto;
  }

  svg {
    margin-left: 0.5rem;
    cursor: pointer;
  }
`

export const FooterCart = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: auto;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    border-top: 2px solid #FF6500;

    h3 {
      font-size: 2rem;
      color: #000;
      font-weight: bold;
    }
    
    p {
      font-size: 1.5rem;
      color: #FF6500;
      margin-left: auto;
    }
  }

  button {
    background-color: #FF6500;
    padding: 1rem;
    color: #fff;
    border: none;
    width: 100%;
    font-size: 1.5rem;
    font-weight: bold;
  }
`
 