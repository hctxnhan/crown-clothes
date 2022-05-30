import CartDropdown from '../cart-dropdown/CartDropdown';
import { CartIconContainer, ItemCount, ShoppingIcon } from './CartIcon.Style';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {
  selectCartCount,
  selectCartOpen,
} from '../../store/cart/CartSelectors';

import { toggleCartHidden } from '../../store/cart/CartActions';

function CartIcon() {
  const isCartOpen = useSelector(selectCartOpen);
  const cartCount = useSelector(selectCartCount);
  const dispatch = useDispatch();
  const handleCartIconClick = () => {
    dispatch(toggleCartHidden());
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
