import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;

  > div {
    display: flex;
    width: 100%;
  }

  @media screen and (max-width: 960px) {
    > div {
      flex-direction: column-reverse;
      align-items: center;
      justify-content: center;
    }
  }
`