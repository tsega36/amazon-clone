import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { productUrl } from '../../api/endpoints';
import Layout from '../../components/Layout/Layout';
import Loader from '../../components/Loader/Loader';
import ProductCard from '../../components/Product/ProductCard';
import styles from './Result.module.css';

function Result() {
  const { categoryName } = useParams();
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Map user-friendly URL to exact API category
  const categoryMap = {
    'mens-clothing': "men's clothing",
    'womens-clothing': "women's clothing",
    electronics: 'electronics',
    jewelery: 'jewelery',
  };

  const apiCategory = categoryMap[categoryName] || categoryName;

  useEffect(() => {
    if (!apiCategory) return;

    setIsLoading(true);

    axios
      .get(`${productUrl}/products/category/${encodeURIComponent(apiCategory)}`)
      .then((res) => {
        setResults(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setResults([]);
        setIsLoading(false);
      });
  }, [apiCategory]);

  return (
    <Layout>
      <div className={styles.resultPage}>
        <h1>Results</h1>
        <p>Category / {apiCategory}</p>
        <hr />

        {isLoading ? (
          <Loader />
        ) : results.length > 0 ? (
          <div className={styles.productsContainer}>
            {results.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                renderAdd={true}
                renderDesc={false}
              />
            ))}
          </div>
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </Layout>
  );
}

export default Result;
