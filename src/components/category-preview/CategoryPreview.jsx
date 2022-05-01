import ProductCard from '../product-card/ProductCard';
import {
  CategoryPreviewContainer,
  List,
  Title,
} from './CategoryPreview.Style.jsx';
import { useNavigate } from 'react-router-dom';
export default function CategoryPreview({ title, items }) {
  const navigate = useNavigate();
  const handleClick = (category) => {
    navigate(`./${category.toLowerCase()}`);
  };
  return (
    <CategoryPreviewContainer>
      <Title onClick={() => handleClick(title)}>{title}</Title>
      <List>
        {items
          .filter((item, index) => index < 4)
          .map((item) => {
            return <ProductCard key={item.id} item={item} />;
          })}
      </List>
    </CategoryPreviewContainer>
  );
}
