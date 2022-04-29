import CategoryPreview from '../category-preview/CategoryPreview';
import { useContext } from 'react';
import { CategoryContext } from '../../contexts/CategoryContext';
import './CategoriesPreview.scss';
function CategoriesPreview() {
  const { categories } = useContext(CategoryContext);
  return (
    <div className='categories-preview'>
      {Object.keys(categories).map((key) => {
        const product = categories[key];
        return <CategoryPreview key={key} title={key} items={product} />;
      })}
    </div>
  );
}

export default CategoriesPreview;
