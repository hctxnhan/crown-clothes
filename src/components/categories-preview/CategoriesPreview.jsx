import CategoryPreview from '../category-preview/CategoryPreview';
import { CategoriesPreviewContainer } from './CategoriesPreview.Style';
import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from '../../store/categories/CategoriesSelectors';

import { useSelector } from 'react-redux';
import Spinner from '../spinner/Spinner';

function CategoriesPreview() {
  const categories = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);

  return (
    <CategoriesPreviewContainer>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categories).map((key) => {
          const product = categories[key];
          return <CategoryPreview key={key} title={key} items={product} />;
        })
      )}
    </CategoriesPreviewContainer>
  );
}

export default CategoriesPreview;
