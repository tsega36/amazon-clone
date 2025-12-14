import Rating from '@mui/material/Rating';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Type } from '../../utility/action.type';
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
import { DataContext } from '../DataProvider/DataProvider';
import styles from './ProductCard.module.css';

function ProductCard({ product, flex, renderDesc, renderAdd }) {
  const { id, title, image, price, rating, description } = product;
  const { dispatch } = useContext(DataContext);

  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: { id, title, image, price, rating, description },
    });
  };

  return (
    <div className={`${styles.card} ${flex ? styles.flexed : ''}`}>
      <Link to={`/products/${id}`}>
        <img
          src={image}
          alt={title}
          className={flex ? styles.flexedImg : styles.productImg}
        />
      </Link>

      <div className={styles.info}>
        <h3 className={flex ? styles.flexedTitle : styles.title}>{title}</h3>
        {renderDesc && <div style={{ maxWidth: '750px' }}>{description}</div>}

        <div className={styles.rating}>
          <Rating value={rating?.rate || 0} precision={0.1} readOnly />
          <span className={styles.ratingCount}>({rating?.count})</span>
        </div>

        <div className={styles.price}>
          <CurrencyFormat amount={price} />
        </div>

        {renderAdd && (
          <button
            className={flex ? styles.flexedButton : styles.button}
            onClick={addToCart}
          >
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
