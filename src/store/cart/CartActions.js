import CART_ACTION_TYPES from './CartTypes';
import { createAction } from '../../utils/reducer/ReducerUtils';
export const setCartItems = (items) =>
  createAction(CART_ACTION_TYPES.SET_CART_ITEMS, items);

export const toggleCartHidden = () =>
  createAction(CART_ACTION_TYPES.TOGGLE_CART_HIDDEN);

const addItem = (cartItems, item) => {
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

export const addItemToCart = (cartItems, item) => {
  const newCartItems = addItem(cartItems, item);

  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

const removeItem = (cartItems, item) => {
  const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

  // If the item is already in the cart, decrement the quantity
  // If the quantity is 1, remove the item from the cart
  if (existingItem.quantity === 1) {
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

export const removeItemFromCart = (cartItems, item) => {
  const newCartItems = removeItem(cartItems, item);

  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

const clearCartItem = (cartItems, item) => {
  return cartItems.filter((cartItem) => cartItem.id !== item.id);
};

export const clearItemFromCart = (cartItems, item) => {
  const newCartItems = clearCartItem(cartItems, item);

  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
