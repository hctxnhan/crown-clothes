import './Shop.scss';
import { Routes, Route } from 'react-router-dom';
import CategoriesPreview from '../../components/categories-preview/CategoriesPreview';
import Category from '../category/Category';
export default function Shop() {
  return (
    <div className='shop'>
      <Routes>
        <Route index element={<CategoriesPreview />} />
        <Route path=':category' element={<Category />} />
      </Routes>
    </div>
  );
}
