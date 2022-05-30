import { createSelector } from 'reselect';
import { CartState } from './CartReducer';
import { RootState } from '../Store';
const selectCart = (state: RootState): CartState => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((acc, item) => acc + item.quantity, 0)
);

export const selectCartOpen = createSelector(
  [selectCart],
  (cart) => cart.isCartOpen
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
);
