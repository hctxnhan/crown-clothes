import {
  CategoryItemContainer,
  Background,
  Content,
  Subtitle,
  Title,
} from './CategoryItem.Style.jsx';
import { useNavigate } from 'react-router-dom';
function CategoryItem({ imageUrl, title, route }) {
  const navigate = useNavigate();
  const handleClick = (category) => {
    navigate(route);
  };
  return (
    <CategoryItemContainer onClick={() => handleClick(title)}>
      <Background imageUrl={imageUrl}></Background>
      <Content>
        <Title>{title}</Title>
        <Subtitle>Shop now</Subtitle>
      </Content>
    </CategoryItemContainer>
  );
}

export default CategoryItem;
