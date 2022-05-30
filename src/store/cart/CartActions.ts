import { CART_ACTION_TYPES } from './CartTypes';
import { createAction, withMatcher } from '../../utils/reducer/ReducerUtils';

import { CartItem } from './CartTypes';
import { CategoryItem } from '../categories/CategoriesTypes';

import { Action, ActionWithPayload } from '../../utils/reducer/ReducerUtils';

const addItem = (cartItems: CartItem[], item: CategoryItem): CartItem[] => {
  const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

  // If the item is already in the cart, increment the quantity
  if (existingItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  // Otherwise, add the item to the cart
  return [...cartItems, { ...item, quantity: 1 }];
};

const removeItem = (cartItems: CartItem[], item: CategoryItem): CartItem[] => {
  const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

  // If the item is already in the cart, decrement the quantity
  // If the quantity is 1, remove the item from the cart
  if (existingItem && existingItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== item.id);
  } else {
    // Otherwise, decrement the quantity
    return cartItems.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }
};

const clearCartItem = (
  cartItems: CartItem[],
  item: CategoryItem
): CartItem[] => {
  return cartItems.filter((cartItem) => cartItem.id !== item.id);
};

// ------------------------------------ ACTION TYPE ------------------------------------
export type ToggleCartHidden = Action<CART_ACTION_TYPES.TOGGLE_CART_HIDDEN>;

export type SetCartItems = ActionWithPayload<
  CART_ACTION_TYPES.SET_CART_ITEMS,
  CartItem[]
>;
// ------------------------------------ ACTION CREATOR ---------------------------------
export const removeItemFromCart = (
  cartItems: CartItem[],
  item: CategoryItem
): SetCartItems => {
  const newCartItems = removeItem(cartItems, item);
  return setCartItems(newCartItems);
};

export const clearItemFromCart = (
  cartItems: CartItem[],
  item: CategoryItem
): SetCartItems => {
  const newCartItems = clearCartItem(cartItems, item);
  return setCartItems(newCartItems);
};

export const addItemToCart = (
  cartItems: CartItem[],
  item: CategoryItem
): SetCartItems => {
  const newCartItems = addItem(cartItems, item);
  return setCartItems(newCartItems);
};

export const setCartItems = withMatcher(
  (items: CartItem[]): SetCartItems =>
    createAction(CART_ACTION_TYPES.SET_CART_ITEMS, items)
);

export const toggleCartHidden = withMatcher(
  (): ToggleCartHidden => createAction(CART_ACTION_TYPES.TOGGLE_CART_HIDDEN)
);
