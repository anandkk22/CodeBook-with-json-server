import { CartEmpty } from '../Cart/components/CartEmpty'
import { CartList } from '../Cart/components/CartList'
import { useCart } from '../../context'
import { useTitle } from '../../hooks/useTitle'

export const CartPage = () => {
  const { cartList } = useCart();
  useTitle(`Carts (${cartList.length})`)

  return (
    <main>          
      {cartList.length ? <CartList /> : < CartEmpty/> }
    </main>
  )
}