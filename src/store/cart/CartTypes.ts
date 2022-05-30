import { CategoryItem } from '../categories/CategoriesTypes';

export type CartItem = CategoryItem & {
  quantity: number;
};

export enum CART_ACTION_TYPES {
  SET_CART_ITEMS = 'cart/SET_CART_ITEMS',
  TOGGLE_CART_HIDDEN = 'cart/TOGGLE_CART_HIDDEN',
}
