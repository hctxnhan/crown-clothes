import { CartItemContainer, Name, Total } from './CartItem.Style';
import { FC } from 'react';
import { CartItem as TCartItem } from '../../store/cart/CartTypes';

type CartItemProps = {
  item: TCartItem;
};

const CartItem: FC<CartItemProps> = ({
  item: { imageUrl, price, name, quantity },
}) => {
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
};

export default CartItem;
