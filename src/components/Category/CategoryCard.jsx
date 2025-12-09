import { Link } from 'react-router-dom';
import './category.css';
function CategoryCard({ data }) {
  return (
    <div className="category-container">
      <Link to={`/category/${data.name}`}>
        <h2>{data.title}</h2>
        <img src={data.image} alt={data.title} />
        <p>Shop Now</p>
      </Link>
    </div>
  );
}

export default CategoryCard;
