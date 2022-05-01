import { CategoryContainer } from './Directory.Style.jsx';
import CategoryItem from '../category-items/CategoryItem';
function Directory({ categories }) {
  return (
    <CategoryContainer>
      {categories.map(({ title, imageUrl, id }) => (
        <CategoryItem title={title} imageUrl={imageUrl} key={id} id={id} />
      ))}
    </CategoryContainer>
  );
}

export default Directory;
