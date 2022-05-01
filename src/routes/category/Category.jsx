import { useParams } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { CategoryContext } from '../../contexts/CategoryContext';
import { CategoryContainer, Title, List } from './Category.Style.jsx';
import ProductCard from '../../components/product-card/ProductCard';

function Category() {
  const { category } = useParams();
  const { categories } = useContext(CategoryContext);
  const [products, setProducts] = useState([]);

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
