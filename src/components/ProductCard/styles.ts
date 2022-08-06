import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #FFF;
  padding: 1rem;

  > img {
    width: 100%;
    height: auto;
    object-fit: cover;
    margin-bottom: 0.5rem;
  }

  > h2 {
    font-size: 2rem;
    font-weight: bold;
    color: #000;
    margin-bottom: 0.5rem;
  }

  > p {
    font-size: 1.5rem;
    font-weight: bold;
    color: #FF6500;
    margin-bottom: 0.5rem;
  }

  > button {
    background-color: #FF6500;
    padding: 0.5rem 1rem;
    color: #fff;
    border: none;
    width: 100%;
  }
`;
 
export const ProductInfos = styled.div`
  margin-bottom: 1rem;
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(3, 1fr);

  > section {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    p {
      font-size: 1.5rem;
      font-weight: bold;
      color: #333;
    }

    span {
      font-size: 1rem;
      font-weight: normal;
      color: #000;
    }
  }

`