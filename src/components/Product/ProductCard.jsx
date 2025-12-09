import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';
import './product.css';

function ProductCard({ product }) {
  const { id, title, image, price, rating } = product;

  return (
    <div className="product-card">
      <Link to={`/products/${id}`}>
        <img src={image} alt={title} className="product-img" />
      </Link>

      <div className="product-info">
        <h3 className="product-title">{title}</h3>

        <div className="product-rating">
          <Rating value={rating?.rate || 0} precision={0.1} readOnly />
          <span className="rating-count">({rating?.count})</span>
        </div>

        <div className="product-price">
          <strong>${price}</strong>
        </div>

        <button className="button">Add to cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
