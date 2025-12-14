import axios from 'axios';
import { useEffect, useState } from 'react';
import Loader from '../Loader/Loader';
import ProductCard from './ProductCard';
import styles from './ProductCard.module.css';

function Product() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((res) => {
        setProducts(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <div className={styles.list}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} renderAdd={true} />
      ))}
    </div>
  );
}

export default Product;
