import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

import {
  Arrow,
  CheckoutItemContainer,
  Image,
  Name,
  Price,
  Quantity,
  Remove,
} from './CheckoutItem.Style';

function CheckoutItem({ item }) {
  const { imageUrl, price, name, quantity } = item;
  const { removeItemFromCart, removeItemCompletelyFromCart, addItemToCart } =
    useContext(CartContext);
  return (
    <CheckoutItemContainer>
      <Image>
        <img src={imageUrl} alt='item' />
      </Image>
      <Name>{name}</Name>
      <Quantity>
        <Arrow onClick={() => removeItemFromCart(item)}>&#10094;</Arrow>
        <span>{quantity}</span>
        <Arrow onClick={() => addItemToCart(item)}>&#10095;</Arrow>
      </Quantity>
      <Price>{`$${price}`}</Price>
      <Remove onClick={() => removeItemCompletelyFromCart(item)}>
        <span>&#10005;</span>
      </Remove>
    </CheckoutItemContainer>
  );
}

export default CheckoutItem;
