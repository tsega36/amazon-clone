import styles from './Category.module.css';
import CategoryCard from './CategoryCard';
import { categories } from './categoryData';

const Category = () => {
  return (
    <div className={styles.categoryWrapper}>
      {categories.map((item) => (
        <CategoryCard key={item.name} data={item} />
      ))}
    </div>
  );
};

export default Category;
