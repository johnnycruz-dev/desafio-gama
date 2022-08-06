import { Container, MyAccountContainer, SearchContainer } from "./styles";
import { Search, User } from 'react-feather';

import logoImg from '../../assets/logo.svg';

export function Header() {
  return (
    <Container>
      <img src={logoImg} alt="PokeBuM!" />
      <SearchContainer>
        <input
          type="text"
          placeholder="Busque aqui"
        />
        <Search color="#FFF" width={24} />
      </SearchContainer>
      <MyAccountContainer>
        <p>Minha Conta</p>
        <User color="#FFF" width={24} />
      </MyAccountContainer>
    </Container>
  )
}