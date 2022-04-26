import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './CartIcon.scss';
import CartDropdown from '../cart-dropdown/CartDropdown';
import { CartContext } from '../../contexts/CartContext';
import { useContext } from 'react';
function CartIcon() {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const handleCartIconClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className='cart-icon-container'>
      <div className='cart-icon' onClick={handleCartIconClick}>
        <ShoppingIcon className='cart-icon__icon' />
        <span className='cart-icon__count'>0</span>
      </div>
      {isCartOpen && <CartDropdown />}
    </div>
  );
}

export default CartIcon;
