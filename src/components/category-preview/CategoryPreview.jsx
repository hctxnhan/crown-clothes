import ProductCard from '../product-card/ProductCard';
import './CategoryPreview.scss';
import { useNavigate } from 'react-router-dom';
export default function CategoryPreview({ title, items }) {
  const navigate = useNavigate();
  const handleClick = (category) => {
    navigate(`./${category.toLowerCase()}`);
  };
  return (
    <div className='category-preview'>
      <div
        className='category-preview__title'
        onClick={() => handleClick(title)}
      >
        {title}
      </div>
      <div className='category-preview__list'>
        {items
          .filter((item, index) => index < 4)
          .map((item) => {
            return <ProductCard key={item.id} item={item} />;
          })}
      </div>
    </div>
  );
}
