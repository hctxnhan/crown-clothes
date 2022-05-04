import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {
  removeItemFromCart,
  clearItemFromCart,
  addItemToCart,
} from '../../store/cart/CartActions';
import { selectCartItems } from '../../store/cart/CartSelectors';

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
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);

  const handleRemoveItem = () => {
    dispatch(removeItemFromCart(cartItems, item));
  };

  const handleClearItem = () => {
    dispatch(clearItemFromCart(cartItems, item));
  };

  const handleAddItem = () => {
    dispatch(addItemToCart(cartItems, item));
  };

  return (
    <CheckoutItemContainer>
      <Image>
        <img src={imageUrl} alt='item' />
      </Image>
      <Name>{name}</Name>
      <Quantity>
        <Arrow onClick={handleRemoveItem}>&#10094;</Arrow>
        <span>{quantity}</span>
        <Arrow onClick={handleAddItem}>&#10095;</Arrow>
      </Quantity>
      <Price>{`$${price}`}</Price>
      <Remove onClick={handleClearItem}>
        <span>&#10005;</span>
      </Remove>
    </CheckoutItemContainer>
  );
}

export default CheckoutItem;
