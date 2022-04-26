import Button from '../../components/button/Button';
import { BUTTON_TYPES } from '../../components/button/Button';
import './CartDropdown.scss';
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
    <div className='cart-dropdown'>
      <div className='cart-dropdown__items'>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className='cart-dropdown__empty-message'>
            Your cart is empty
          </span>
        )}
      </div>
      <Button onClick={handleCheckoutClick} buttonType={BUTTON_TYPES.INVERTED}>
        Go to Checkout
      </Button>
    </div>
  );
}

export default CartDropdown;
