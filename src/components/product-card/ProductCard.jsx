import './ProductCard.scss';
import Button from '../button/Button';
import { BUTTON_TYPES } from '../button/Button';

import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

function ProductCard({ item }) {
  const { name, price, imageUrl } = item;
  const style = { backgroundImage: `url(${imageUrl})` };

  const { addItemToCart } = useContext(CartContext);

  const handleAddToCart = () => addItemToCart(item);

  return (
    <div className='product-card'>
      <div className='product-card__img' style={style}>
        <Button onClick={handleAddToCart} buttonType={BUTTON_TYPES.INVERTED}>
          Add to cart
        </Button>
      </div>
      <div className='product-card__info'>
        <div className='product-card__name'>{name}</div>
        <div className='product-card__price'>{`$${price}`}</div>
      </div>
    </div>
  );
}

export default ProductCard;
