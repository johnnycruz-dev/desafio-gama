import { Cart } from '../../components/Cart'
import { Header } from '../../components/Header'
import { ListProducts } from '../../components/ListProducts'
import { CartProvider } from '../../hooks/useCart'
import { Container } from './styles'

export function Home() {
  return (
    <CartProvider>
      <Container>
        <Header />
        <div>
          <ListProducts />
          <Cart />
        </div>
      </Container>
    </CartProvider>
  )
}