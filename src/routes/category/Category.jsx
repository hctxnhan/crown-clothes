import { useParams } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { CategoryContext } from '../../contexts/CategoryContext';
import './Category.scss';
import ProductCard from '../../components/product-card/ProductCard';

function Category() {
  const { category } = useParams();
  const { categories } = useContext(CategoryContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(categories[category.toLowerCase()]);
  }, [category, categories]);

  return (
    <div className='category'>
      <div className='category__title'>{category.toUpperCase()}</div>
      <div className='category__list'>
        {products &&
          products.map((product) => {
            return <ProductCard key={product.id} item={product} />;
          })}
      </div>
    </div>
  );
}

export default Category;
