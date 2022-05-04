import CategoryPreview from '../category-preview/CategoryPreview';
import { CategoriesPreviewContainer } from './CategoriesPreview.Style';
import { selectCategoriesMap } from '../../store/categories/CategoriesSelectors';

import { useSelector } from 'react-redux';

function CategoriesPreview() {
  const categories = useSelector(selectCategoriesMap);

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
