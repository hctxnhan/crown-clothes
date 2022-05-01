import CategoryPreview from '../category-preview/CategoryPreview';
import { useContext } from 'react';
import { CategoryContext } from '../../contexts/CategoryContext';
import { CategoriesPreviewContainer } from './CategoriesPreview.Style';
function CategoriesPreview() {
  const { categories } = useContext(CategoryContext);
  return (
    <CategoriesPreviewContainer>
      {Object.keys(categories).map((key) => {
        const product = categories[key];
        return <CategoryPreview key={key} title={key} items={product} />;
      })}
    </CategoriesPreviewContainer>
  );
}

export default CategoriesPreview;
