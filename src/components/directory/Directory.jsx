import './Directory.scss';
import CategoryItem from '../category-items/CategoryItem';
function Directory({ categories }) {
  return (
    <div className='category-container'>
      {categories.map(({ title, imageUrl, id }) => (
        <CategoryItem title={title} imageUrl={imageUrl} key={id} id={id} />
      ))}
    </div>
  );
}

export default Directory;
