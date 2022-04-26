import './ProductCard.scss';
import Button from '../button/Button';
import { BUTTON_TYPES } from '../button/Button';
function ProductCard({ item: { name, price, imageUrl } }) {
  const style = { backgroundImage: `url(${imageUrl})` };
  return (
    <div className='product-card'>
      <div className='product-card__img' style={style}>
        <Button buttonType={BUTTON_TYPES.INVERTED}>Add to cart</Button>
      </div>
      <div className='product-card__info'>
        <div className='product-card__name'>{name}</div>
        <div className='product-card__price'>{`$${price}`}</div>
      </div>
    </div>
  );
}

export default ProductCard;
