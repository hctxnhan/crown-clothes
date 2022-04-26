import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import CheckoutItem from '../../components/checkout-item/CheckoutItem';

import './Checkout.scss';

function Checkout(props) {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className='checkout'>
      <div className='checkout-header'>
        <div className='checkout-header__block'>Product</div>
        <div className='checkout-header__block'>Description</div>
        <div className='checkout-header__block'>Quantity</div>
        <div className='checkout-header__block'>Price</div>
        <div className='checkout-header__block'>Remove</div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} item={cartItem} />
      ))}

      <div className='checkout-total'>{`TOTAL: $${cartTotal}`}</div>
    </div>
  );
}

export default Checkout;
