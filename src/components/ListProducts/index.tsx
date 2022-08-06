import { useState, useEffect } from 'react';
import api from '../../services/api';
import { ProductCard } from '../ProductCard';
import { Container } from './styles'

interface IPokemonsData {
  results: Array<Pokemon>;
}

type Pokemon = {
  name: string;
}

export function ListProducts() {
  const [listPokemons, setListPokemons] = useState<Pokemon[]>();

  useEffect(() => {
    const loadPokemons = async () => {
      const response = await api.get<IPokemonsData>('/pokemon', {
        params: {
          limit: 6,
          offset: 0
        }
      })

      setListPokemons(response.data.results);
    };

    loadPokemons();
  }, [])

  return (
    <Container>
      <h1>Lista de Pokemóns</h1>
      <main>
        {listPokemons?.map((pokemon, index) => (
          <ProductCard key={index} pokemonName={pokemon.name} />
        ))}
      </main>
    </Container>
  )
}