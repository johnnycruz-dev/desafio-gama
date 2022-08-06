import { useEffect, useState } from "react";
import { useCart } from "../../hooks/useCart";
import api from "../../services/api";
import { formatPrice } from "../../utils/formatPrice";
import { Container, ProductInfos } from "./styles";

interface ProductCardProps {
  pokemonName: string;
}

export interface IPokemon {
  name: string;
  imageURL: string;
  weight: string;
  height: string;
  abilities: number;
  price: number;
}

export function ProductCard({ pokemonName }: ProductCardProps) {
  const [pokemon, setPokemon] = useState<IPokemon>({} as IPokemon);

  const { addProduct } = useCart();

  useEffect(() => {
    const loadPokemon = async () => {
      const { data } = await api.get(`/pokemon/${pokemonName}`);

      const newPokemon = {
        name: data.name,
        imageURL: data.sprites.other.home.front_default,
        weight: data.weight.toString(),
        height: data.height.toString(),
        abilities: data.abilities.length,
        price: data.base_experience
      }

      setPokemon(newPokemon)
    }

    loadPokemon();
  }, [setPokemon, pokemonName])

  const capitalizeFirstLetter = (text: string) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  const handleBuyButton = () => {
    addProduct(pokemon);
  }

  return (
    <Container>
      <img src={pokemon?.imageURL} alt={pokemon?.name} />
      <h2>{capitalizeFirstLetter(pokemon?.name || '')}</h2>
      <ProductInfos>
        <section>
          <p>Altura</p>
          <span>{`${pokemon?.height}0cm`}</span>
        </section>
        <section>
          <p>Peso</p>
          <span>{`${pokemon?.weight}kg`}</span>
        </section>
        <section>
          <p>Habilidades</p>
          <span>{pokemon?.abilities}</span>
        </section>
      </ProductInfos>
      <p>{formatPrice(pokemon?.price || 0)}</p>
      <button type="button" onClick={handleBuyButton}>
        Adicionar no Carrinho
      </button>
    </Container>
  )
}