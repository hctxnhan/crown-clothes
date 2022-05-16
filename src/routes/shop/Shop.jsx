import './Shop.Style';
import { Routes, Route } from 'react-router-dom';
import CategoriesPreview from '../../components/categories-preview/CategoriesPreview';
import Category from '../category/Category';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCategoriesStart } from '../../store/categories/CategoriesActions';

export default function Shop() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategoriesStart());
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
