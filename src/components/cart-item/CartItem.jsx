import './CartItem.scss';

function CartItem({ item: { imageUrl, price, name, quantity } }) {
  return (
    <div className='cart-item'>
      <img src={imageUrl} alt='' className='cart-item__img' />
      <div className='cart-item__info'>
        <div className='cart-item__name'>{name}</div>
        <div className='cart-item__total'>
          {quantity} x {`$${price}`}
        </div>
      </div>
    </div>
  );
}

export default CartItem;
