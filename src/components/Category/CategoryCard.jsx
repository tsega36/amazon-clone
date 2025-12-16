import { Link } from 'react-router-dom';
import styles from './Category.module.css';

function CategoryCard({ data }) {
  return (
    <div className={styles.categoryContainer}>
      <Link to={`/category/${data.name}`} className={styles.categoryLink}>
        <h2 className={styles.categoryTitle}>{data.title}</h2>

        {/* Image wrapper added */}
        <div className={styles.categoryImageWrapper}>
          <img
            src={data.image}
            alt={data.title}
            className={styles.categoryImage}
          />
        </div>

        <p className={styles.shopNow}>Shop Now</p>
      </Link>
    </div>
  );
}

export default CategoryCard;
