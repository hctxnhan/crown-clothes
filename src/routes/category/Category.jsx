import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { CategoryContainer, Title, List } from './Category.Style.jsx';
import ProductCard from '../../components/product-card/ProductCard';
import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from '../../store/categories/CategoriesSelectors';

import Spinner from '../../components/spinner/Spinner.jsx';

function Category() {
  const { category } = useParams();
  const categories = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categories[category]);

  const isLoading = useSelector(selectCategoriesIsLoading);

  useEffect(() => {
    setProducts(categories[category.toLowerCase()]);
  }, [category, categories]);

  return (
    <CategoryContainer>
      <Title>{category.toUpperCase()}</Title>
      {isLoading ? (
        <Spinner />
      ) : (
        <List>
          {products &&
            products.map((product) => {
              return <ProductCard key={product.id} item={product} />;
            })}
        </List>
      )}
    </CategoryContainer>
  );
}

export default Category;
