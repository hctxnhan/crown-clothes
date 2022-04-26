import './Shop.scss';
import { useContext } from 'react';
import { ProductContext } from '../../contexts/ProductContext';
import ProductCard from '../../components/product-card/ProductCard';
export default function Shop() {
  const { products } = useContext(ProductContext);
  return (
    <div className='shop'>
      {products.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  );
}
