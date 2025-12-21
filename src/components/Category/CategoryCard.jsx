import { Link } from 'react-router-dom';
import styles from './Category.module.css';

function CategoryCard({ data }) {
  const category = typeof data === 'string' ? data : data.name; 

  return (
    <div className={styles.categoryContainer}>
      <Link
        to={`/category/${encodeURIComponent(category)}`}
        className={styles.categoryLink}
      >
        <h2 className={styles.categoryTitle}>{category}</h2>
        {data.image && (
          <div className={styles.categoryImageWrapper}>
            <img
              src={data.image}
              alt={category}
              className={styles.categoryImage}
            />
          </div>
        )}
      </Link>
    </div>
  );
}

export default CategoryCard;
