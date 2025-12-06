import Rating from '@mui/material/Rating';
import './product.css';
function ProductCard({ title, image, rating, ratingCount, price, link }) {
  return (
    <div className="product-card">
      <a href={link || '#'}>
        <img src={image} alt={title} className="product-img" />
      </a>

      <div className="product-info">
        <h3 className="product-title">{title}</h3>

        <div className="product-rating">
          <Rating value={rating} precision={0.1} readOnly />
          <span className="rating-count">({ratingCount})</span>
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
