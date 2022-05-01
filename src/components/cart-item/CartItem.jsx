import { CartItemContainer, Name, Total } from './CartItem.Style';

function CartItem({ item: { imageUrl, price, name, quantity } }) {
  return (
    <CartItemContainer>
      <img src={imageUrl} alt='' />
      <div className='cart-item__info'>
        <Name>{name}</Name>
        <Total>
          {quantity} x {`$${price}`}
        </Total>
      </div>
    </CartItemContainer>
  );
}

export default CartItem;
