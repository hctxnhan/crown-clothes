import {
  ProductCardContainer,
  Image,
  Info,
  Name,
  Price,
} from './ProductCard.Style.jsx';
import Button from '../button/Button';
import { BUTTON_TYPES } from '../button/Button';

import { addItemToCart } from '../../store/cart/CartActions';
import { selectCartItems } from '../../store/cart/CartSelectors';
import { useSelector, useDispatch } from 'react-redux';

function ProductCard({ item }) {
  const { name, price, imageUrl } = item;
  const style = { backgroundImage: `url(${imageUrl})` };

  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const handleAddToCart = () => dispatch(addItemToCart(cartItems, item));

  return (
    <ProductCardContainer>
      <Image style={style}>
        <Button onClick={handleAddToCart} buttonType={BUTTON_TYPES.INVERTED}>
          Add to cart
        </Button>
      </Image>
      <Info>
        <Name>{name}</Name>
        <Price>{`$${price}`}</Price>
      </Info>
    </ProductCardContainer>
  );
}

export default ProductCard;
