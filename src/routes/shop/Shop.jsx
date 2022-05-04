import './Shop.Style';
import { Routes, Route } from 'react-router-dom';
import CategoriesPreview from '../../components/categories-preview/CategoriesPreview';
import Category from '../category/Category';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCategoriesAndDocuments } from '../../utils/firebase/FirebaseUtils';
import { setCategories } from '../../store/categories/CategoriesActions';

export default function Shop() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments();
      dispatch(setCategories(categoriesArray));
    };
    getCategoriesMap();
  }, []);

  return (
    <div className='shop'>
      <Routes>
        <Route index element={<CategoriesPreview />} />
        <Route path=':category' element={<Category />} />
      </Routes>
    </div>
  );
}
