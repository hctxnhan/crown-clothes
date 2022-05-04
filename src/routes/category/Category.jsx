import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { CategoryContainer, Title, List } from './Category.Style.jsx';
import ProductCard from '../../components/product-card/ProductCard';
import { selectCategoriesMap } from '../../store/categories/CategoriesSelectors.js';
function Category() {
  const { category } = useParams();
  const categories = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categories[category]);

  useEffect(() => {
    setProducts(categories[category.toLowerCase()]);
  }, [category, categories]);

  return (
    <CategoryContainer>
      <Title>{category.toUpperCase()}</Title>
      <List>
        {products &&
          products.map((product) => {
            return <ProductCard key={product.id} item={product} />;
          })}
      </List>
    </CategoryContainer>
  );
}

export default Category;
