import { setCartItems, toggleCartHidden } from './CartActions';
import { AnyAction } from 'redux';
import { CartItem } from './CartTypes';
export type CartState = {
  readonly cartItems: CartItem[];
  readonly cartCount: number;
  readonly cartTotal: number;
  readonly isCartOpen: boolean;
};

const INITIAL_STATE: CartState = {
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
  isCartOpen: false,
};

const cartReducer = (state = INITIAL_STATE, action: AnyAction): CartState => {
  const { payload } = action;

  if (setCartItems.match(action)) {
    return {
      ...state,
      cartItems: payload,
    };
  } else if (toggleCartHidden.match(action)) {
    return {
      ...state,
      isCartOpen: !state.isCartOpen,
    };
  }

  return state;
};

export default cartReducer;
