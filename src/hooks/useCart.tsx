import { createContext, ReactNode, useContext, useState } from 'react';
import { IPokemon } from '../components/ProductCard';

interface CartProviderProps {
  children: ReactNode;
}


interface CartContextData {
  cart: IPokemon[];
  addProduct: (product: IPokemon) => void;
  removeProduct: (product: IPokemon) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps): JSX.Element {
  const [cart, setCart] = useState<IPokemon[]>(() => {
    const storagedCart = localStorage.getItem('@PokeBuM:cart');

    if (storagedCart) {
      return JSON.parse(storagedCart);
    }

    return [];
  });

  const addProduct = async (product: IPokemon) => {
    const updatedCart = [...cart];

    const productInCart = updatedCart.find(
      cartProduct => cartProduct.name === product.name
    );

    if (productInCart) return;
    
    updatedCart.push(product);
    setCart(updatedCart);
    localStorage.setItem(
      '@PokeBuM:cart',
      JSON.stringify(updatedCart)
    );
  };

  const removeProduct = (product: IPokemon) => {
      const updatedCart = [...cart];
      const productIndex = updatedCart.findIndex(cartProduct => cartProduct.name === product.name);
      updatedCart.splice(productIndex, 1);
      setCart(updatedCart);
      localStorage.setItem(
        '@PokeBuM:cart',
        JSON.stringify(updatedCart)
      );
  };

  return (
    <CartContext.Provider
      value={{ cart, addProduct, removeProduct }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextData {
  const context = useContext(CartContext);

  return context;
}