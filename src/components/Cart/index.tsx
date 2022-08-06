import { Trash } from "react-feather";
import { useCart } from "../../hooks/useCart";
import { formatPrice } from "../../utils/formatPrice";
import { IPokemon } from "../ProductCard";
import { Container, FooterCart, ProductItem } from "./styles";

export function Cart() {
  const { cart, removeProduct } = useCart();

  const handleRemoveButton = (product: IPokemon) => {
    removeProduct(product);
  }

  const total =
    formatPrice(
      cart.reduce((sumTotal, product) => {
        return sumTotal + product.price;
      }, 0)
  )

  return (
    <Container>
      <aside>
        <h2>Carrinho</h2>
        {cart.map((cartItem, index) => (
          <ProductItem key={index}>
            <img src={cartItem.imageURL} alt={cartItem.name} />
            <h3>{cartItem.name}</h3>
            <p>{formatPrice(cartItem?.price || 0)}</p>
            <Trash width={16} height={16} color="#FF6500" onClick={() => handleRemoveButton(cartItem)} />
          </ProductItem>
        ))}
        <FooterCart>
          <div>
            <h3>Total</h3>
            <p>{total}</p>
          </div>
          <button type="button">
            Finalizar Compra
          </button>
        </FooterCart>
      </aside>
    </Container>
  )
}