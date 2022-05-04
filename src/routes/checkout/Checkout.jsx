import { useSelector } from 'react-redux';
import {
  selectCartItems,
  selectCartTotal,
} from '../../store/cart/CartSelectors';
import CheckoutItem from '../../components/checkout-item/CheckoutItem';

import {
  CheckoutContainer,
  Header,
  HeaderBlock,
  Total,
} from './Checkout.Style';

function Checkout() {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  return (
    <CheckoutContainer>
      <Header>
        <HeaderBlock>Product</HeaderBlock>
        <HeaderBlock>Description</HeaderBlock>
        <HeaderBlock>Quantity</HeaderBlock>
        <HeaderBlock>Price</HeaderBlock>
        <HeaderBlock>Remove</HeaderBlock>
      </Header>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} item={cartItem} />
      ))}
      <Total>{`TOTAL: $${cartTotal}`}</Total>
    </CheckoutContainer>
  );
}

export default Checkout;
