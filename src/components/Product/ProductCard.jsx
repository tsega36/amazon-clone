import Rating from '@mui/material/Rating';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Type } from '../../utility/action.type';
import { DataContext } from '../DataProvider/DataProvider';
import './product.css';

function ProductCard({ product, flex, renderDesc }) {
  const { id, title, image, price, rating, description } = product;
  const { state, dispatch } = useContext(DataContext);
  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: {
        id,
        title,
        image,
        price,
        rating,
        description,
      },
    });
  };
  return (
    <div className={`product-card ${flex ? 'product_flexed' : ''}`}>
      <Link to={`/products/${id}`}>
        <img src={image} alt={title} className="product-img" />
      </Link>

      <div className="product-info">
        <h3 className="product-title">{title}</h3>
        {renderDesc && <div style={{ maxWidth: '750px' }}>{description}</div>}
        <div className="product-rating">
          <Rating value={rating?.rate || 0} precision={0.1} readOnly />
          <span className="rating-count">({rating?.count})</span>
        </div>

        <div className="product-price">
          <strong>${price}</strong>
        </div>

        <button className="button" onClick={addToCart}>
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
