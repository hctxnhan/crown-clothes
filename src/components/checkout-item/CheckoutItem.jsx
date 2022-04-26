import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

import './CheckoutItem.scss';

function CheckoutItem({ item }) {
  const { imageUrl, price, name, quantity } = item;
  const { removeItemFromCart, removeItemCompletelyFromCart, addItemToCart } =
    useContext(CartContext);
  return (
    <div className='checkout-item'>
      <div className='checkout-item__image'>
        <img src={imageUrl} alt='item' />
      </div>
      <div className='checkout-item__name'>{name}</div>
      <div className='checkout-item__quantity'>
        <div className='arrow' onClick={() => removeItemFromCart(item)}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addItemToCart(item)}>
          &#10095;
        </div>
      </div>
      <div className='checkout-item__price'>{`$${price}`}</div>
      <div
        className='checkout-item__remove'
        onClick={() => removeItemCompletelyFromCart(item)}
      >
        <span>&#10005;</span>
      </div>
    </div>
  );
}

export default CheckoutItem;
