import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  margin: 2rem 3rem 0;
  padding-bottom: 2rem;

  > h1 {
    font-size: 2rem;
    font-weight: bold;
    color: #FFF;
    margin-bottom: 2rem;
  }

  > main {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    width: 100%;
  }

  @media screen and (max-width: 1500px) {
    > main {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (max-width: 1100px) {
    > main {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    margin: 0;
    padding: 0 2rem;

    > h1 {
      margin-top: 2rem;
    }
    
    > main {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (max-width: 680px) {
    > main {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;