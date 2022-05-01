import Button from '../../components/button/Button';
import { BUTTON_TYPES } from '../../components/button/Button';
import {
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessage,
} from './CartDropdown.Style.jsx';
import CartItem from '../../components/cart-item/CartItem';

import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

import { useNavigate } from 'react-router-dom';

function CartDropdown() {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const handleCheckoutClick = () => {
    navigate('/checkout');
  };

  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItemsContainer>
      <Button onClick={handleCheckoutClick} buttonType={BUTTON_TYPES.INVERTED}>
        Go to Checkout
      </Button>
    </CartDropdownContainer>
  );
}

export default CartDropdown;
