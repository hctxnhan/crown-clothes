import Button from '../../components/button/Button';
import { BUTTON_TYPES } from '../../components/button/Button';
import './CartDropdown.scss';
function CartDropdown() {
  return (
    <div className='cart-dropdown'>
      <div className='cart-dropdown__items'>
        <span className='cart-dropdown__empty-message'>Your cart is empty</span>
      </div>
      <Button buttonType={BUTTON_TYPES.INVERTED}>Go to Checkout</Button>
    </div>
  );
}

export default CartDropdown;
