import './CategoryItem.scss';
import { useNavigate } from 'react-router-dom';
function CategoryItem({ id, size, imageUrl, title }) {
  const style = { backgroundImage: `url(${imageUrl})` };
  const navigate = useNavigate();
  const handleClick = (category) => {
    navigate(`/shop/${category.toLowerCase()}`);
  };
  return (
    <div
      onClick={() => handleClick(title)}
      className={`category-item category-item--${id} category-item--${size}`}
    >
      <div className='category-item__background' style={style}></div>
      <div className='category-item__content'>
        <div className='category-item__title'>{title}</div>
        <div className='category-item__subtitle'>Shop now</div>
      </div>
    </div>
  );
}

export default CategoryItem;
