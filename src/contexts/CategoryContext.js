import { createContext, useEffect } from 'react';
import { useState } from 'react';
import { getCategoriesAndDocuments } from '../utils/firebase/FirebaseUtils';
export const CategoryContext = createContext({
  categories: {},
});

export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesMap = await getCategoriesAndDocuments();
      setCategories(categoriesMap);
    };
    getCategoriesMap();
  }, []);

  return (
    <CategoryContext.Provider value={{ categories }}>
      {children}
    </CategoryContext.Provider>
  );
};
