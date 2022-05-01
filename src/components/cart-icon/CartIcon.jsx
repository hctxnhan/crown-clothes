import CartDropdown from '../cart-dropdown/CartDropdown';
import { CartContext } from '../../contexts/CartContext';
import { useContext } from 'react';
import { CartIconContainer, ItemCount, ShoppingIcon } from './CartIcon.Style';
function CartIcon() {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const handleCartIconClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      <CartIconContainer onClick={handleCartIconClick}>
        <ShoppingIcon />
        <ItemCount>{cartCount}</ItemCount>
        {isCartOpen && <CartDropdown />}
      </CartIconContainer>
    </>
  );
}

export default CartIcon;
