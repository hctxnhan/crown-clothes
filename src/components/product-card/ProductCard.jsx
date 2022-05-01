import {
  ProductCardContainer,
  Image,
  Info,
  Name,
  Price,
} from './ProductCard.Style.jsx';
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
